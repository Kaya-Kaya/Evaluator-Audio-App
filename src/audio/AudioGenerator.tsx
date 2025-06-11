import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import { Midi } from '@tonejs/midi';
import Soundfont from 'soundfont-player';

type Props = {
  midiModule: number | null;
  dispatch?: Function;
};

const AudioGenerator: React.FC<Props> = ({ midiModule, dispatch }) => {
  const playWebviewRef = useRef<WebView>(null);
  const genWebviewRef = useRef<WebView>(null);
  const [midiBase64, setMidiBase64] = useState<string | null>(null);
  const [readyToGenerate, setReadyToGenerate] = useState(false);

  // HTML for playback WebView 
  const playHtml = `
    <!DOCTYPE html>
    <html><head><meta name="viewport" content="initial-scale=1.0"/></head><body>
    <script src="https://unpkg.com/soundfont-player/dist/soundfont-player.js"></script>
    <script src="https://unpkg.com/@tonejs/midi"></script>
    <script>(function(){
      const ctx = new (window.AudioContext||window.webkitAudioContext)();
      let instr;
      Soundfont.instrument(ctx,'violin').then(i=>{ instr=i; window.ReactNativeWebView.postMessage('ready'); });
      function handle(e){ try{ const msg=JSON.parse(e.data); if(msg.type==='play-midi'&&instr){ const bin=atob(msg.data); const buf=new Uint8Array(bin.length);
        for(let j=0;j<bin.length;j++) buf[j]=bin.charCodeAt(j);
        const midi=new Midi(buf.buffer);
        const tracks = midi.tracks.map(t=>({t,avg:t.notes.length? t.notes.reduce((s,n)=>s+n.midi,0)/t.notes.length:Infinity}));
        tracks.sort((a,b)=>a.avg-b.avg);
        const bottom=tracks[0].t; const now=ctx.currentTime+0.1;
        bottom.notes.forEach(n=> instr.play(n.name, now+n.time,{duration:n.duration})); }
      }catch{} }
      document.addEventListener('message',handle);
      window.addEventListener('message',handle);
    })();</script>
    </body></html>
  `;

  // HTML for offline WAV generation WebView
  const genHtml = `
    <!DOCTYPE html>
    <html><body>
    <script src="https://unpkg.com/@tonejs/midi@2.0.27/build/Midi.js"></script>
    <script src="https://unpkg.com/soundfont-player/dist/soundfont-player.js"></script>
    <script>
    (function(){
      // Notify RN when ready to generate
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'ready-to-generate' }));

      function writeString(view, offset, str){ for(let i=0;i<str.length;i++) view.setUint8(offset+i,str.charCodeAt(i)); }
      function encodeWAV(buffer){
        const numCh=1, sr=buffer.sampleRate, samples=buffer.getChannelData(0);
        const buf=new ArrayBuffer(44+samples.length*2), view=new DataView(buf);
        writeString(view,0,'RIFF'); view.setUint32(4,36+samples.length*2,true);
        writeString(view,8,'WAVE'); writeString(view,12,'fmt ');
        view.setUint32(16,16,true); view.setUint16(20,1,true); view.setUint16(22,numCh,true);
        view.setUint32(24,sr,true); view.setUint32(28,sr*numCh*2,true);
        view.setUint16(32,numCh*2,true); view.setUint16(34,16,true);
        writeString(view,36,'data'); view.setUint32(40,samples.length*2,true);
        let off=44;
        for(let i=0;i<samples.length;i++){ const s=Math.max(-1,Math.min(1,samples[i])); view.setInt16(off, s<0? s*0x8000: s*0x7FFF,true); off+=2; }
        return buf;
      }

      window.addEventListener('message', async e => {
        try{
          const msg=JSON.parse(e.data);
          if(msg.type!=='generate-wav') return;
          // Decode Base64 MIDI
          const bin=atob(msg.data), arr=new Uint8Array(bin.length);
          for(let i=0;i<bin.length;i++) arr[i]=bin.charCodeAt(i);
          const midi = new Midi(arr.buffer);
          const track = midi.tracks[0];
          const last = track.notes[track.notes.length-1];
          const dur = last.time + last.duration + 1;
          const ctx = new OfflineAudioContext(1, dur*44100,44100);
          const instr = await Soundfont.instrument(ctx,'violin');
          track.notes.forEach(n=> instr.play(n.name,n.time,{duration:n.duration}));
          const rendered = await ctx.startRendering();
          const wavBuf = encodeWAV(rendered);
          const wavArr = new Uint8Array(wavBuf);
          let binStr=''; wavArr.forEach(b=> binStr+=String.fromCharCode(b));
          window.ReactNativeWebView.postMessage(JSON.stringify({ type:'generated-wav', data:btoa(binStr) }));
        }catch(err){ console.error(err); }
      });
    })();
    </script>
    </body></html>
  `;

  // Load & encode MIDI asset
  useEffect(() => {
    if (!midiModule) return;
    (async () => {
      const asset = Asset.fromModule(midiModule);
      await asset.downloadAsync();
      const uri = asset.localUri || asset.uri;
      const b64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
      setMidiBase64(b64);
    })();
  }, [midiModule]);

  // Send generate-wav when both ready and base64 available
  useEffect(() => {
    if (readyToGenerate && midiBase64) {
      genWebviewRef.current?.postMessage(JSON.stringify({ type:'generate-wav', data:midiBase64 }));
    }
  }, [readyToGenerate, midiBase64]);

  // Handle messages from generator WebView
  const onGenMessage = (e: any) => {
    const msg = JSON.parse(e.nativeEvent.data || '{}');
    if (msg.type === 'ready-to-generate') {
      setReadyToGenerate(true);
    } else if (msg.type === 'generated-wav') {
      const fileUri = FileSystem.documentDirectory + `top_${Date.now()}.wav`;
      FileSystem.writeAsStringAsync(fileUri, msg.data, { encoding: FileSystem.EncodingType.Base64 })
        .then(() => {
          dispatch?.({ type:'change_reference_audio', referenceAudioUri:fileUri });
        })
        .catch(err => console.error('[AudioGenerator] write error:', err));
    }
  };

  // Play MIDI handler
  const handlePlay = () => {
    if (!midiBase64) return;
    playWebviewRef.current?.postMessage(JSON.stringify({ type:'play-midi', data:midiBase64 }));
  };

  if (!midiBase64) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, { backgroundColor:'#2C3E50' }]} onPress={handlePlay}>
        <Text style={styles.button_text}>Play Bottom Voice</Text>
      </TouchableOpacity>
      {/* Hidden WebViews */}
      <WebView
        ref={playWebviewRef}
        originWhitelist={['*']}
        source={{ html: playHtml }}
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        mixedContentMode="always"
        style={styles.hiddenWebview}
      />
      <WebView
        ref={genWebviewRef}
        originWhitelist={['*']}
        source={{ html: genHtml }}
        onMessage={onGenMessage}
        style={styles.hiddenWebview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop:8 },
  hiddenWebview: { width:0, height:0, opacity:0 },
  button: {
    padding:10, borderRadius:8, alignItems:'center', marginVertical:5,
    shadowColor:'#000', shadowOffset:{ width:0, height:3 }, shadowOpacity:0.17, shadowRadius:3.05, elevation:4,
  },
  button_text: { textAlign:'center', fontSize:14, color:'#FFF', fontWeight:'bold' },
});

export default AudioGenerator;

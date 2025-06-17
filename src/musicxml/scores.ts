// External file used in ScoreDisplay.tsx to display the mapped score's content visually
// key (string) = score's name
// value (string) = score's XML file 
const scoresData: Record<string, string> = {
  "schumann_melodyVLCduet.musicxml": `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
<work>
  <work-title>Melody</work-title>
</work>
  <identification>
    <encoding>
      <software>MuseScore 4.5.2</software>
      <encoding-date>2025-06-17</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.99911</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1596.77</page-height>
      <page-width>1233.87</page-width>
      <page-margins type="even">
        <left-margin>85.7252</left-margin>
        <right-margin>85.7252</right-margin>
        <top-margin>85.7252</top-margin>
        <bottom-margin>85.7252</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>85.7252</left-margin>
        <right-margin>85.7252</right-margin>
        <top-margin>85.7252</top-margin>
        <bottom-margin>85.7252</bottom-margin>
        </page-margins>
      </page-layout>
    <appearance>
      <line-width type="light barline">1.8</line-width>
      <line-width type="heavy barline">5.5</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="bracket">4.5</line-width>
      <line-width type="dashes">1</line-width>
      <line-width type="enclosure">1</line-width>
      <line-width type="ending">1.1</line-width>
      <line-width type="extend">1</line-width>
      <line-width type="leger">1.6</line-width>
      <line-width type="pedal">1.1</line-width>
      <line-width type="octave shift">1.1</line-width>
      <line-width type="slur middle">2.1</line-width>
      <line-width type="slur tip">0.5</line-width>
      <line-width type="staff">1.1</line-width>
      <line-width type="stem">1</line-width>
      <line-width type="tie middle">2.1</line-width>
      <line-width type="tie tip">0.5</line-width>
      <line-width type="tuplet bracket">1</line-width>
      <line-width type="wedge">1.2</line-width>
      <note-size type="cue">70</note-size>
      <note-size type="grace">70</note-size>
      <note-size type="grace-cue">49</note-size>
      </appearance>
    <music-font font-family="Leland"/>
    <word-font font-family="Edwin" font-size="10"/>
    <lyric-font font-family="Edwin" font-size="10"/>
    </defaults>
  <credit page="1">
    <credit-words default-x="85.725171" default-y="1511.049022" justify="left" valign="top" font-size="14">Violoncello, Violoncello</credit-words>
    </credit>
  <part-list>
    <score-part id="P1">
      <part-name>Violoncello, Violoncello</part-name>
      <part-abbreviation>Vc.</part-abbreviation>
      <score-instrument id="P1-I1">
        <instrument-name>Violoncello</instrument-name>
        <instrument-sound>strings.cello</instrument-sound>
        </score-instrument>
      <midi-device id="P1-I1" port="1"></midi-device>
      <midi-instrument id="P1-I1">
        <midi-channel>1</midi-channel>
        <midi-program>43</midi-program>
        <volume>70.8661</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    </part-list>
  <part id="P1">
    <measure number="1" width="212.92">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>50</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>170</top-system-distance>
          </system-layout>
        </print>
      <attributes>
        <divisions>2</divisions>
        <key>
          <fifths>1</fifths>
          </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        <clef>
          <sign>F</sign>
          <line>4</line>
          </clef>
        </attributes>
      <direction placement="above" system="also-top">
        <direction-type>
          <metronome parentheses="no" default-x="-37.68" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>100</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="100"/>
        </direction>
      <note default-x="98.43" default-y="5" dynamics="50">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <lyric number="1" default-x="6.5" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Schumann</text>
          </lyric>
        <lyric number="1" default-x="6.5" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>Schumann</text>
          </lyric>
        </note>
      <note default-x="126.6" default-y="0" dynamics="48.89">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="154.78" default-y="-5" dynamics="52.22">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="182.95" default-y="-10" dynamics="51.11">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="2" width="145.77">
      <note default-x="12.5" default-y="-15" dynamics="53.33">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="31.28" default-y="-5" dynamics="54.44">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="50.06" default-y="-10" dynamics="53.33">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="68.84" default-y="0" dynamics="52.22">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="87.63" default-y="-5" dynamics="50">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="115.8" default-y="-20" dynamics="47.78">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="3" width="126.99">
      <note default-x="12.5" default-y="15" dynamics="62.22">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="40.67" default-y="10" dynamics="65.56">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="68.84" default-y="5" dynamics="54.44">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="97.02" default-y="-5" dynamics="53.33">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="4" width="126.99">
      <note default-x="12.5" default-y="-10" dynamics="47.78">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="40.67" default-y="-15" dynamics="46.67">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="68.84" default-y="-20" dynamics="53.33">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="97.02" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="5" width="126.99">
      <note default-x="12.5" default-y="5" dynamics="46.67">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="40.67" default-y="0" dynamics="41.11">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="68.84" default-y="-5" dynamics="48.89">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="97.02" default-y="-10" dynamics="52.22">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="6" width="145.77">
      <note default-x="12.5" default-y="-15" dynamics="52.22">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="31.28" default-y="-5" dynamics="48.89">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="50.06" default-y="-10" dynamics="53.33">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="68.84" default-y="0" dynamics="58.89">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="87.63" default-y="-5" dynamics="51.11">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="115.8" default-y="-20" dynamics="46.67">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="7" width="126.99">
      <note default-x="12.5" default-y="15" dynamics="68.89">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="40.67" default-y="10" dynamics="65.56">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="68.84" default-y="5" dynamics="62.22">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="97.02" default-y="-5" dynamics="56.67">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="8" width="199.6">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>320</system-distance>
          </system-layout>
        </print>
      <note default-x="76.31" default-y="-10" dynamics="50">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="106.68" default-y="-15" dynamics="45.56">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="137.06" default-y="-20" dynamics="52.22">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="167.43" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="9" width="135.79">
      <note default-x="12.5" default-y="0" dynamics="97.78">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="42.87" default-y="-5" dynamics="96.67">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="73.24" default-y="-10" dynamics="87.78">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="103.62" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="10" width="135.79">
      <note default-x="12.5" default-y="10" dynamics="100">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="42.87" default-y="5" dynamics="94.44">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="73.24" default-y="0" dynamics="82.22">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="103.62" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="11" width="135.79">
      <note default-x="12.5" default-y="20" dynamics="93.33">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="42.87" default-y="15" dynamics="81.11">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="73.24" default-y="10" dynamics="85.56">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="103.62" default-y="5" dynamics="81.11">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="12" width="163.63">
      <note default-x="12.5" default-y="0" dynamics="84.44">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="32.75" default-y="10" dynamics="91.11">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="53" default-y="5" dynamics="84.44">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="73.24" default-y="15" dynamics="92.22">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="95.34" default-y="10" dynamics="84.44">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="113.33" default-y="15"/>
        <stem>down</stem>
        </note>
      <note default-x="133.84" default-y="0" dynamics="78.89">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="13" width="135.79">
      <note default-x="12.5" default-y="5" dynamics="60">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="42.87" default-y="0" dynamics="55.56">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="73.24" default-y="-5" dynamics="52.22">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="103.62" default-y="-10" dynamics="44.44">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="14" width="156.04">
      <note default-x="12.5" default-y="-15" dynamics="53.33">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="32.75" default-y="-5" dynamics="52.22">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="53" default-y="-10" dynamics="52.22">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="73.24" default-y="0" dynamics="57.78">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="93.49" default-y="-5" dynamics="47.78">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="123.86" default-y="-20" dynamics="47.78">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="15" width="199.6">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>320</system-distance>
          </system-layout>
        </print>
      <note default-x="76.31" default-y="20" dynamics="68.89">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="106.68" default-y="15" dynamics="66.67">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="137.06" default-y="10" dynamics="48.89">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="167.43" default-y="5" dynamics="42.22">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="16" width="156.04">
      <note default-x="12.5" default-y="-10" dynamics="50">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="32.75" default-y="10" dynamics="52.22">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="53" default-y="-10" dynamics="47.78">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="73.24" default-y="0" dynamics="53.33">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="93.49" default-y="-5" dynamics="53.33">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="123.86" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="17" width="135.79">
      <note default-x="12.5" default-y="0" dynamics="93.33">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="42.87" default-y="-5" dynamics="86.67">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="73.24" default-y="-10" dynamics="91.11">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="103.62" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="18" width="135.79">
      <note default-x="12.5" default-y="10" dynamics="97.78">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="42.87" default-y="5" dynamics="96.67">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="73.24" default-y="0" dynamics="84.44">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="103.62" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      </measure>
    <measure number="19" width="135.79">
      <note default-x="12.5" default-y="20" dynamics="98.89">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="42.87" default-y="15" dynamics="96.67">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="73.24" default-y="10" dynamics="81.11">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="103.62" default-y="5" dynamics="80">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="20" width="163.63">
      <note default-x="12.5" default-y="0" dynamics="88.89">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="32.75" default-y="10" dynamics="102.22">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="53" default-y="5" dynamics="84.44">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="73.24" default-y="15" dynamics="88.89">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="95.34" default-y="10" dynamics="74.44">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="113.33" default-y="15"/>
        <stem>down</stem>
        </note>
      <note default-x="133.84" default-y="0" dynamics="74.44">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="21" width="135.79">
      <note default-x="12.5" default-y="5" dynamics="54.44">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="42.87" default-y="0" dynamics="51.11">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="73.24" default-y="-5" dynamics="53.33">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="103.62" default-y="-10" dynamics="45.56">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="22" width="416.73">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>320</system-distance>
          </system-layout>
        </print>
      <note default-x="76.31" default-y="-15" dynamics="46.67">
        <pitch>
          <step>E</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="124.69" default-y="-5" dynamics="47.78">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="173.06" default-y="-10" dynamics="54.44">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="221.43" default-y="0" dynamics="55.56">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="269.81" default-y="-5" dynamics="53.33">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="342.37" default-y="-20" dynamics="47.78">
        <pitch>
          <step>D</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="23" width="304.54">
      <note default-x="12.5" default-y="20" dynamics="68.89">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="85.06" default-y="15" dynamics="68.89">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="157.62" default-y="10" dynamics="53.33">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="230.18" default-y="5" dynamics="55.56">
        <pitch>
          <step>B</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="24" width="341.14">
      <note default-x="12.5" default-y="-10" dynamics="51.11">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="39.9" default-y="10" dynamics="64.44">
        <pitch>
          <step>C</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="88.27" default-y="-10" dynamics="52.22">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="136.65" default-y="0" dynamics="53.33">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="185.02" default-y="-5" dynamics="51.11">
        <pitch>
          <step>G</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="257.58" default-y="-20">
        <rest/>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        </note>
      <direction placement="above" system="also-top">
        <direction-type>
          <metronome parentheses="no" default-y="0.6" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>97</per-minute>
            </metronome>
          </direction-type>
        <offset>-63</offset>
        <sound tempo="97"/>
        </direction>
      <direction placement="above" system="also-top">
        <direction-type>
          <metronome parentheses="no" default-y="30.6" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>94</per-minute>
            </metronome>
          </direction-type>
        <offset>-31</offset>
        <sound tempo="94"/>
        </direction>
      <direction placement="above" system="also-top">
        <direction-type>
          <metronome parentheses="no" default-y="60.6" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>91</per-minute>
            </metronome>
          </direction-type>
        <offset>-61</offset>
        <sound tempo="91"/>
        </direction>
      <direction placement="above" system="also-top">
        <direction-type>
          <metronome parentheses="no" default-y="90.6" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>88</per-minute>
            </metronome>
          </direction-type>
        <offset>-15</offset>
        <sound tempo="88"/>
        </direction>
      <direction placement="above" system="also-top">
        <direction-type>
          <metronome parentheses="no" default-y="120.6" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>84</per-minute>
            </metronome>
          </direction-type>
        <offset>-59</offset>
        <sound tempo="84"/>
        </direction>
      <direction placement="above" system="also-top">
        <direction-type>
          <metronome parentheses="no" default-y="150.6" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>81</per-minute>
            </metronome>
          </direction-type>
        <offset>-29</offset>
        <sound tempo="81"/>
        </direction>
      <direction placement="above" system="also-top">
        <direction-type>
          <metronome parentheses="no" default-y="180.6" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>78</per-minute>
            </metronome>
          </direction-type>
        <offset>-57</offset>
        <sound tempo="78"/>
        </direction>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>
`,
"sonata.musicxml" : `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
<work>
  <work-title>Sonata</work-title>
</work>
  <identification>
    <encoding>
      <software>MuseScore 4.5.2</software>
      <encoding-date>2025-06-17</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.99911</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1596.77</page-height>
      <page-width>1233.87</page-width>
      <page-margins type="even">
        <left-margin>85.7252</left-margin>
        <right-margin>85.7252</right-margin>
        <top-margin>85.7252</top-margin>
        <bottom-margin>85.7252</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>85.7252</left-margin>
        <right-margin>85.7252</right-margin>
        <top-margin>85.7252</top-margin>
        <bottom-margin>85.7252</bottom-margin>
        </page-margins>
      </page-layout>
    <appearance>
      <line-width type="light barline">1.8</line-width>
      <line-width type="heavy barline">5.5</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="bracket">4.5</line-width>
      <line-width type="dashes">1</line-width>
      <line-width type="enclosure">1</line-width>
      <line-width type="ending">1.1</line-width>
      <line-width type="extend">1</line-width>
      <line-width type="leger">1.6</line-width>
      <line-width type="pedal">1.1</line-width>
      <line-width type="octave shift">1.1</line-width>
      <line-width type="slur middle">2.1</line-width>
      <line-width type="slur tip">0.5</line-width>
      <line-width type="staff">1.1</line-width>
      <line-width type="stem">1</line-width>
      <line-width type="tie middle">2.1</line-width>
      <line-width type="tie tip">0.5</line-width>
      <line-width type="tuplet bracket">1</line-width>
      <line-width type="wedge">1.2</line-width>
      <note-size type="cue">70</note-size>
      <note-size type="grace">70</note-size>
      <note-size type="grace-cue">49</note-size>
      </appearance>
    <music-font font-family="Leland"/>
    <word-font font-family="Edwin" font-size="10"/>
    <lyric-font font-family="Edwin" font-size="10"/>
    </defaults>
  <part-list>
    <score-part id="P1">
      <part-name>Violin</part-name>
      <part-abbreviation>Vln.</part-abbreviation>
      <score-instrument id="P1-I1">
        <instrument-name>Violin</instrument-name>
        <instrument-sound>strings.violin</instrument-sound>
        </score-instrument>
      <midi-device id="P1-I1" port="1"></midi-device>
      <midi-instrument id="P1-I1">
        <midi-channel>1</midi-channel>
        <midi-program>41</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    </part-list>
  <part id="P1">
    <measure number="1" width="202.77">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>50</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        </print>
      <attributes>
        <divisions>2</divisions>
        <key>
          <fifths>3</fifths>
          </key>
        <time>
          <beats>6</beats>
          <beat-type>8</beat-type>
          </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="above" system="only-top">
        <direction-type>
          <metronome parentheses="no" default-x="-35.72" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>100</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="100"/>
        </direction>
      <note default-x="117.39" default-y="-15" dynamics="72.22">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="135.38" default-y="-15"/>
        <stem>down</stem>
        </note>
      <note default-x="153.5" default-y="-10" dynamics="86.67">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="172.49" default-y="-15" dynamics="82.22">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="2" width="97.89">
      <note default-x="12.5" default-y="-5" dynamics="90">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-5"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="48.61" default-y="-5" dynamics="90">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="67.6" default-y="-5" dynamics="85.56">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="3" width="97.89">
      <note default-x="12.5" default-y="-20" dynamics="81.11">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        </note>
      <note default-x="48.61" default-y="-15" dynamics="86.67">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="67.6" default-y="-20" dynamics="75.56">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="4" width="97.89">
      <note default-x="12.5" default-y="-10" dynamics="90">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-5"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="48.61" default-y="-10" dynamics="90">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="67.6" default-y="-10" dynamics="92.22">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="5" width="105.95">
      <note default-x="12.5" default-y="-25" dynamics="72.22">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-25"/>
        <stem>up</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="48.61" default-y="-25" dynamics="72.22">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="75.66" default-y="-25" dynamics="85.56">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="6" width="97.89">
      <note default-x="12.5" default-y="-20" dynamics="90">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="48.61" default-y="-20" dynamics="90">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="67.6" default-y="-20" dynamics="82.22">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="7" width="116.38">
      <note default-x="12.5" default-y="-15" dynamics="90">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="48.61" default-y="-15" dynamics="90">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="67.6" default-y="-5" dynamics="96.67">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="86.59" default-y="-10" dynamics="85.56">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="8" width="97.89">
      <note default-x="12.5" default-y="-15" dynamics="82.22">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="48.61" default-y="-15" dynamics="82.22">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="67.6" default-y="-20" dynamics="80">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="9" width="97.89">
      <note default-x="12.5" default-y="-15" dynamics="83.33">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        </note>
      <note default-x="48.61" default-y="-10" dynamics="88.89">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="67.6" default-y="-15" dynamics="81.11">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="10" width="183.63">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>165</system-distance>
          </system-layout>
        </print>
      <note default-x="97.26" default-y="-5" dynamics="94.44">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="115.26" default-y="-5"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="133.8" default-y="-5" dynamics="94.44">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="153.01" default-y="-5" dynamics="82.22">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="11" width="98.87">
      <note default-x="12.5" default-y="-20" dynamics="77.78">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        </note>
      <note default-x="49.03" default-y="-15" dynamics="84.44">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="68.25" default-y="-20" dynamics="77.78">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="12" width="98.87">
      <note default-x="12.5" default-y="-10" dynamics="95.56">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-5"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="49.03" default-y="-10" dynamics="95.56">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="68.25" default-y="-10" dynamics="84.44">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="13" width="106.71">
      <note default-x="12.5" default-y="-25" dynamics="73.33">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-25"/>
        <stem>up</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="49.03" default-y="-25" dynamics="73.33">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="76.08" default-y="-20" dynamics="90">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="14" width="98.87">
      <note default-x="12.5" default-y="-15" dynamics="84.44">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="49.03" default-y="-15" dynamics="84.44">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="68.25" default-y="-10" dynamics="92.22">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="15" width="98.87">
      <note default-x="12.5" default-y="-15" dynamics="81.11">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="49.03" default-y="-15" dynamics="81.11">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="68.25" default-y="-20" dynamics="78.89">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="16" width="80">
      <note default-x="12.5" default-y="-25" dynamics="83.33">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-25"/>
        <stem>up</stem>
        <notations>
          <articulations>
            <staccato default-x="6.5" default-y="-33.43"/>
            </articulations>
          </notations>
        </note>
      </measure>
    <measure number="17" width="98.87">
      <note default-x="12.5" default-y="-5" dynamics="76.67">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-5"/>
        <stem>down</stem>
        </note>
      <note default-x="49.03" default-y="0" dynamics="87.78">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="68.25" default-y="-5" dynamics="78.89">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="18" width="98.87">
      <note default-x="12.5" default-y="0" dynamics="86.67">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="5"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="49.03" default-y="0" dynamics="86.67">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="68.25" default-y="0" dynamics="90">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="19" width="98.87">
      <note default-x="12.5" default-y="10" dynamics="94.44">
        <pitch>
          <step>A</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="15"/>
        <stem>down</stem>
        </note>
      <note default-x="49.03" default-y="5" dynamics="87.78">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="68.25" default-y="0" dynamics="82.22">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="20" width="200.55">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>165</system-distance>
          </system-layout>
        </print>
      <note default-x="97.26" default-y="0" dynamics="84.44">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="127.71" default-y="-5" dynamics="81.11">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="148.01" default-y="-5" dynamics="81.11">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="168.3" default-y="-5" dynamics="80">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="21" width="115.79">
      <note default-x="12.5" default-y="-5" dynamics="83.33">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="42.95" default-y="-15" dynamics="70">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="63.24" default-y="-15" dynamics="70">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="83.54" default-y="-25" dynamics="74.44">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="22" width="115.79">
      <note default-x="12.5" default-y="-5" dynamics="98.89">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="42.95" default-y="-10" dynamics="78.89">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="63.24" default-y="-10" dynamics="78.89">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="83.54" default-y="-20" dynamics="73.33">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="23" width="112.09">
      <note default-x="12.5" default-y="-15" dynamics="87.78">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="51.1" default-y="-15" dynamics="87.78">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="79.85" default-y="-10" dynamics="93.33">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="24" width="103.64">
      <note default-x="12.5" default-y="-5" dynamics="92.22">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-5"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="51.1" default-y="-5" dynamics="92.22">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="71.39" default-y="-10" dynamics="77.78">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="25" width="103.64">
      <note default-x="12.5" default-y="-15" dynamics="84.44">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        </note>
      <note default-x="51.1" default-y="-10" dynamics="95.56">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="71.39" default-y="-15" dynamics="87.78">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="26" width="103.64">
      <note default-x="12.5" default-y="-5" dynamics="94.44">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-5"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="51.1" default-y="-5" dynamics="94.44">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="71.39" default-y="-5" dynamics="86.67">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="27" width="103.64">
      <note default-x="12.5" default-y="-20" dynamics="76.67">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        </note>
      <note default-x="51.1" default-y="-15" dynamics="94.44">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      <note default-x="71.39" default-y="-20" dynamics="88.89">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="28" width="103.64">
      <note default-x="12.5" default-y="-10" dynamics="95.56">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-5"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="51.1" default-y="-10" dynamics="95.56">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="71.39" default-y="-10" dynamics="93.33">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="29" width="212.24">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>165</system-distance>
          </system-layout>
        </print>
      <note default-x="97.26" default-y="-25" dynamics="76.67">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="115.26" default-y="-25"/>
        <stem>up</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="145.41" default-y="-25" dynamics="76.67">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="172.46" default-y="-20" dynamics="94.44">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="30" width="125.74">
      <note default-x="12.5" default-y="-15" dynamics="96.67">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="60.65" default-y="-15" dynamics="96.67">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="85.96" default-y="-10" dynamics="93.33">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="31" width="125.74">
      <note default-x="12.5" default-y="-15" dynamics="86.67">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="60.65" default-y="-15" dynamics="86.67">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="85.96" default-y="-20" dynamics="84.44">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="32" width="125.74">
      <note default-x="12.5" default-y="-20" dynamics="88.89">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="60.65" default-y="-20" dynamics="88.89">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="85.96" default-y="-15" dynamics="96.67">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="33" width="125.74">
      <note default-x="12.5" default-y="-15" dynamics="90">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="60.65" default-y="-15" dynamics="90">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="85.96" default-y="-10" dynamics="88.89">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="34" width="125.74">
      <note default-x="12.5" default-y="-5" dynamics="93.33">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-5"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="60.65" default-y="-5" dynamics="93.33">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="85.96" default-y="0" dynamics="91.11">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="35" width="125.74">
      <note default-x="12.5" default-y="-15" dynamics="82.22">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="60.65" default-y="-15" dynamics="82.22">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="85.96" default-y="-20" dynamics="61.11">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="36" width="95.72">
      <note default-x="12.5" default-y="-25" dynamics="48.89">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-25"/>
        <stem>up</stem>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>
`,
"hark.musicxml" : `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
<work>
  <work-title>Hark</work-title>
</work>
  <identification>
    <encoding>
      <software>MuseScore 4.5.2</software>
      <encoding-date>2025-06-17</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.99911</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1596.77</page-height>
      <page-width>1233.87</page-width>
      <page-margins type="even">
        <left-margin>85.7252</left-margin>
        <right-margin>85.7252</right-margin>
        <top-margin>85.7252</top-margin>
        <bottom-margin>85.7252</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>85.7252</left-margin>
        <right-margin>85.7252</right-margin>
        <top-margin>85.7252</top-margin>
        <bottom-margin>85.7252</bottom-margin>
        </page-margins>
      </page-layout>
    <appearance>
      <line-width type="light barline">1.8</line-width>
      <line-width type="heavy barline">5.5</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="bracket">4.5</line-width>
      <line-width type="dashes">1</line-width>
      <line-width type="enclosure">1</line-width>
      <line-width type="ending">1.1</line-width>
      <line-width type="extend">1</line-width>
      <line-width type="leger">1.6</line-width>
      <line-width type="pedal">1.1</line-width>
      <line-width type="octave shift">1.1</line-width>
      <line-width type="slur middle">2.1</line-width>
      <line-width type="slur tip">0.5</line-width>
      <line-width type="staff">1.1</line-width>
      <line-width type="stem">1</line-width>
      <line-width type="tie middle">2.1</line-width>
      <line-width type="tie tip">0.5</line-width>
      <line-width type="tuplet bracket">1</line-width>
      <line-width type="wedge">1.2</line-width>
      <note-size type="cue">70</note-size>
      <note-size type="grace">70</note-size>
      <note-size type="grace-cue">49</note-size>
      </appearance>
    <music-font font-family="Leland"/>
    <word-font font-family="Edwin" font-size="10"/>
    <lyric-font font-family="Edwin" font-size="10"/>
    </defaults>
  <part-list>
    <score-part id="P1">
      <part-name>Violin</part-name>
      <part-abbreviation>Vln.</part-abbreviation>
      <score-instrument id="P1-I1">
        <instrument-name>Violin</instrument-name>
        <instrument-sound>strings.violin</instrument-sound>
        </score-instrument>
      <midi-device id="P1-I1" port="1"></midi-device>
      <midi-instrument id="P1-I1">
        <midi-channel>1</midi-channel>
        <midi-program>41</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    </part-list>
  <part id="P1">
    <measure number="1" width="191.13">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>50</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        </print>
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>1</fifths>
          </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="above" system="only-top">
        <direction-type>
          <metronome parentheses="no" default-x="-37.68" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>100</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="100"/>
        </direction>
      <note default-x="97.47" default-y="-45" dynamics="86.67">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="143.4" default-y="-30" dynamics="106.67">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="2" width="103.15">
      <note default-x="12.5" default-y="-30" dynamics="95.56">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-25"/>
        <stem>up</stem>
        </note>
      <note default-x="70.73" default-y="-35" dynamics="91.11">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="3" width="106.17">
      <note default-x="12.5" default-y="-30" dynamics="97.78">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="58.43" default-y="-20" dynamics="101.11">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="4" width="106.17">
      <note default-x="12.5" default-y="-20" dynamics="94.44">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="58.43" default-y="-25" dynamics="86.67">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="5" width="106.17">
      <note default-x="12.5" default-y="-10" dynamics="106.67">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="58.43" default-y="-10" dynamics="101.11">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="6" width="103.15">
      <note default-x="12.5" default-y="-10" dynamics="93.33">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-5"/>
        <stem>down</stem>
        </note>
      <note default-x="70.73" default-y="-15" dynamics="87.78">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="7" width="106.17">
      <note default-x="12.5" default-y="-20" dynamics="87.78">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="58.43" default-y="-25" dynamics="86.67">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="8" width="84.16">
      <note default-x="12.5" default-y="-20" dynamics="92.22">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="9" width="106.17">
      <note default-x="12.5" default-y="-45" dynamics="72.22">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="58.43" default-y="-30" dynamics="105.56">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="10" width="162.6">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>160</system-distance>
          </system-layout>
        </print>
      <note default-x="75.35" default-y="-30" dynamics="95.56">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="93.34" default-y="-25"/>
        <stem>up</stem>
        </note>
      <note default-x="131.35" default-y="-35" dynamics="90">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="11" width="102.65">
      <note default-x="12.5" default-y="-30" dynamics="94.44">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="56.67" default-y="-20" dynamics="104.44">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="12" width="102.65">
      <note default-x="12.5" default-y="-20" dynamics="92.22">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="56.67" default-y="-25" dynamics="85.56">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="13" width="102.65">
      <note default-x="12.5" default-y="-10" dynamics="104.44">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="56.67" default-y="-25" dynamics="77.78">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="14" width="99.75">
      <note default-x="12.5" default-y="-25" dynamics="91.11">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-25"/>
        <stem>up</stem>
        </note>
      <note default-x="68.5" default-y="-35" dynamics="86.67">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="15" width="102.65">
      <note default-x="12.5" default-y="-35" dynamics="95.56">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="56.67" default-y="-40" dynamics="90">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="16" width="81.52">
      <note default-x="12.5" default-y="-45" dynamics="86.67">
        <pitch>
          <step>D</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="17" width="102.65">
      <note default-x="12.5" default-y="-10" dynamics="82.22">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="56.67" default-y="-10" dynamics="68.89">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="18" width="102.65">
      <note default-x="12.5" default-y="-10" dynamics="70">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="56.67" default-y="-30" dynamics="60">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="19" width="102.65">
      <note default-x="12.5" default-y="-15" dynamics="102.22">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="56.67" default-y="-20" dynamics="91.11">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="20" width="163.43">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>160</system-distance>
          </system-layout>
        </print>
      <note default-x="75.35" default-y="-20" dynamics="91.11">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="118.49" default-y="-25" dynamics="85.56">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="21" width="100.58">
      <note default-x="12.5" default-y="-10" dynamics="77.78">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="55.64" default-y="-10" dynamics="68.89">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="22" width="100.58">
      <note default-x="12.5" default-y="-10" dynamics="67.78">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="55.64" default-y="-30" dynamics="60">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="23" width="100.58">
      <note default-x="12.5" default-y="-15" dynamics="100">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="55.64" default-y="-20" dynamics="90">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="24" width="100.58">
      <note default-x="12.5" default-y="-20" dynamics="92.22">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="55.64" default-y="-25" dynamics="88.89">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="25" width="100.58">
      <note default-x="12.5" default-y="-5" dynamics="131.11">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="55.64" default-y="-5" dynamics="107.78">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="26" width="100.58">
      <note default-x="12.5" default-y="-5" dynamics="104.44">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="55.64" default-y="-10" dynamics="100">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="27" width="100.58">
      <note default-x="12.5" default-y="-15" dynamics="107.78">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="55.64" default-y="-20" dynamics="101.11">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="28" width="80">
      <note default-x="12.5" default-y="-15" dynamics="113.33">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="29" width="114.96">
      <note default-x="12.5" default-y="-25" dynamics="100">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="55.64" default-y="-20" dynamics="111.11">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="84.4" default-y="-15" dynamics="116.67">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="30" width="163.54">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>160</system-distance>
          </system-layout>
        </print>
      <note default-x="75.35" default-y="-10" dynamics="86.67">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="93.34" default-y="-5"/>
        <stem>down</stem>
        </note>
      <note default-x="131.97" default-y="-30" dynamics="64.44">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="31" width="103.62">
      <note default-x="12.5" default-y="-30" dynamics="76.67">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="57.16" default-y="-25" dynamics="87.78">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="32" width="82.25">
      <note default-x="12.5" default-y="-20" dynamics="82.22">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="33" width="100.69">
      <note default-x="12.5" default-y="-5" dynamics="125.56">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-5"/>
        <stem>down</stem>
        </note>
      <note default-x="69.12" default-y="-5" dynamics="113.33">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="34" width="103.62">
      <note default-x="12.5" default-y="-5" dynamics="114.44">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="57.16" default-y="-10" dynamics="105.56">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="35" width="103.62">
      <note default-x="12.5" default-y="-15" dynamics="98.89">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="57.16" default-y="-20" dynamics="104.44">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="36" width="82.25">
      <note default-x="12.5" default-y="-15" dynamics="115.56">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="37" width="118.51">
      <note default-x="12.5" default-y="-25" dynamics="101.11">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="57.16" default-y="-20" dynamics="112.22">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="86.93" default-y="-15" dynamics="121.11">
        <pitch>
          <step>C</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="38" width="100.69">
      <note default-x="12.5" default-y="-10" dynamics="117.78">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>3</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-5"/>
        <stem>down</stem>
        </note>
      <note default-x="69.12" default-y="-30" dynamics="85.56">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="39" width="103.62">
      <note default-x="12.5" default-y="-30" dynamics="111.11">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="57.16" default-y="-25" dynamics="116.67">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="40" width="147.08">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>160</system-distance>
          </system-layout>
        </print>
      <note default-x="74.39" default-y="-30" dynamics="106.67">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>
`,
"air_on_the_g_string.musicxml" : `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
<work>
  <work-title>Air on the G String</work-title>
</work>
  <identification>
    <encoding>
      <software>MuseScore 4.5.2</software>
      <encoding-date>2025-06-17</encoding-date>
      <supports element="accidental" type="yes"/>
      <supports element="beam" type="yes"/>
      <supports element="print" attribute="new-page" type="yes" value="yes"/>
      <supports element="print" attribute="new-system" type="yes" value="yes"/>
      <supports element="stem" type="yes"/>
      </encoding>
    </identification>
  <defaults>
    <scaling>
      <millimeters>6.99911</millimeters>
      <tenths>40</tenths>
      </scaling>
    <page-layout>
      <page-height>1596.77</page-height>
      <page-width>1233.87</page-width>
      <page-margins type="even">
        <left-margin>85.7252</left-margin>
        <right-margin>85.7252</right-margin>
        <top-margin>85.7252</top-margin>
        <bottom-margin>85.7252</bottom-margin>
        </page-margins>
      <page-margins type="odd">
        <left-margin>85.7252</left-margin>
        <right-margin>85.7252</right-margin>
        <top-margin>85.7252</top-margin>
        <bottom-margin>85.7252</bottom-margin>
        </page-margins>
      </page-layout>
    <appearance>
      <line-width type="light barline">1.8</line-width>
      <line-width type="heavy barline">5.5</line-width>
      <line-width type="beam">5</line-width>
      <line-width type="bracket">4.5</line-width>
      <line-width type="dashes">1</line-width>
      <line-width type="enclosure">1</line-width>
      <line-width type="ending">1.1</line-width>
      <line-width type="extend">1</line-width>
      <line-width type="leger">1.6</line-width>
      <line-width type="pedal">1.1</line-width>
      <line-width type="octave shift">1.1</line-width>
      <line-width type="slur middle">2.1</line-width>
      <line-width type="slur tip">0.5</line-width>
      <line-width type="staff">1.1</line-width>
      <line-width type="stem">1</line-width>
      <line-width type="tie middle">2.1</line-width>
      <line-width type="tie tip">0.5</line-width>
      <line-width type="tuplet bracket">1</line-width>
      <line-width type="wedge">1.2</line-width>
      <note-size type="cue">70</note-size>
      <note-size type="grace">70</note-size>
      <note-size type="grace-cue">49</note-size>
      </appearance>
    <music-font font-family="Leland"/>
    <word-font font-family="Edwin" font-size="10"/>
    <lyric-font font-family="Edwin" font-size="10"/>
    </defaults>
  <part-list>
    <score-part id="P1">
      <part-name>Violin, Violin</part-name>
      <part-abbreviation>Vln.</part-abbreviation>
      <score-instrument id="P1-I1">
        <instrument-name>Violin</instrument-name>
        <instrument-sound>strings.violin</instrument-sound>
        </score-instrument>
      <midi-device id="P1-I1" port="1"></midi-device>
      <midi-instrument id="P1-I1">
        <midi-channel>2</midi-channel>
        <midi-program>41</midi-program>
        <volume>90.5512</volume>
        <pan>0</pan>
        </midi-instrument>
      </score-part>
    </part-list>
  <part id="P1">
    <measure number="1" width="198.64">
      <print>
        <system-layout>
          <system-margins>
            <left-margin>50</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        </print>
      <attributes>
        <divisions>4</divisions>
        <key>
          <fifths>3</fifths>
          </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
          </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
          </clef>
        </attributes>
      <direction placement="above" system="only-top">
        <direction-type>
          <metronome parentheses="no" default-x="-37.68" relative-y="20">
            <beat-unit>quarter</beat-unit>
            <per-minute>100</per-minute>
            </metronome>
          </direction-type>
        <sound tempo="80"/>
        </direction>
      <note default-x="118.42" default-y="-15" dynamics="82.22">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>whole</type>
        <notations>
          <tied type="start"/>
          </notations>
        <lyric number="1" default-x="7.46" default-y="-40" relative-y="-30">
          <syllabic>single</syllabic>
          <text>J.S.Bach</text>
          </lyric>
        </note>
      </measure>
    <measure number="2" width="92.72">
      <note default-x="12.5" default-y="-15" dynamics="82.22">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>1</voice>
        <type>whole</type>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        </note>
      </measure>
    <measure number="3" width="191.47">
      <note default-x="12.5" default-y="-15" dynamics="82.22">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="46.93" default-y="0" dynamics="102.22">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="69.88" default-y="-10" dynamics="77.78">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="92.83" default-y="-20" dynamics="80">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="115.78" default-y="-25" dynamics="81.11">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="138.73" default-y="-30" dynamics="83.33">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="161.68" default-y="-25" dynamics="92.22">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="4" width="132.53">
      <note default-x="12.5" default-y="-30" dynamics="88.89">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="64.14" default-y="-35" dynamics="80">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="87.09" default-y="-40" dynamics="80">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="105.08" default-y="-35"/>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="5" width="92.72">
      <note default-x="12.5" default-y="-5" dynamics="112.22">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>whole</type>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      </measure>
    <measure number="6" width="211.63">
      <note default-x="12.5" default-y="-5" dynamics="112.22">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="35.45" default-y="-15" dynamics="83.33">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="61.28" default-y="-30" dynamics="74.44">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="84.23" default-y="-35" dynamics="85.56">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="107.18" default-y="-20" dynamics="97.78">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="135.93" default-y="-25" dynamics="85.56">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="158.88" default-y="-5" dynamics="103.33">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="181.83" default-y="-10" dynamics="84.44">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="7" width="92.72">
      <note default-x="12.5" default-y="-10" dynamics="90">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>whole</type>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      </measure>
    <measure number="8" width="278.26">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>98.37</system-distance>
          </system-layout>
        </print>
      <note default-x="97.26" default-y="-10" dynamics="90">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="118.86" default-y="-20" dynamics="76.67">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="140.46" default-y="-35" dynamics="72.22">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="162.06" default-y="-40" dynamics="82.22">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="183.66" default-y="-25" dynamics="97.78">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="205.26" default-y="-30" dynamics="88.89">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="226.86" default-y="-10" dynamics="103.33">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="248.47" default-y="-15" dynamics="85.56">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="9" width="125.5">
      <note default-x="12.5" default-y="-15" dynamics="90">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        </note>
      <note default-x="74.11" default-y="-10" dynamics="88.89">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="95.71" default-y="-5" dynamics="94.44">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="10" width="197.08">
      <note default-x="12.5" default-y="-25" dynamics="73.33">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="44.9" default-y="-25" dynamics="84.44">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="62.89" default-y="-20" dynamics="92.22">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="80.89" default-y="-15" dynamics="101.11">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="102.49" default-y="-15" dynamics="101.11">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="124.09" default-y="-20" dynamics="83.33">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="145.69" default-y="-20" dynamics="91.11">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="167.29" default-y="-25" dynamics="86.67">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="11" width="197.08">
      <note default-x="12.5" default-y="-30" dynamics="82.22">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="34.1" default-y="-35" dynamics="84.44">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="55.7" default-y="-35" dynamics="85.56">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="73.69" default-y="-30" dynamics="90">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="91.69" default-y="-25" dynamics="93.33">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="113.29" default-y="-25" dynamics="93.33">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="145.69" default-y="-30" dynamics="84.44">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="167.29" default-y="-35" dynamics="88.89">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="12" width="88.16">
      <note default-x="12.5" default-y="-40" dynamics="80">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="13" width="88.16">
      <note default-x="12.5" default-y="-15" dynamics="103.33">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>whole</type>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      </measure>
    <measure number="14" width="88.16">
      <note default-x="12.5" default-y="-15" dynamics="103.33">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <tie type="stop"/>
        <tie type="start"/>
        <voice>1</voice>
        <type>whole</type>
        <notations>
          <tied type="stop"/>
          <tied type="start"/>
          </notations>
        </note>
      </measure>
    <measure number="15" width="261.29">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>98.37</system-distance>
          </system-layout>
        </print>
      <note default-x="97.26" default-y="-15" dynamics="103.33">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="128.24" default-y="0" dynamics="101.11">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="148.89" default-y="-10" dynamics="85.56">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="169.54" default-y="-20" dynamics="77.78">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="190.19" default-y="-25" dynamics="84.44">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="210.85" default-y="-30" dynamics="85.56">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="231.5" default-y="-25" dynamics="96.67">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="16" width="120.69">
      <note default-x="12.5" default-y="-30" dynamics="85.56">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      <note default-x="58.97" default-y="-35" dynamics="84.44">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="79.62" default-y="-40" dynamics="83.33">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="97.61" default-y="-35"/>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="17" width="84.96">
      <note default-x="12.5" default-y="-5" dynamics="108.89">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>whole</type>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      </measure>
    <measure number="18" width="200.97">
      <note default-x="12.5" default-y="-5" dynamics="108.89">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="33.15" default-y="-15" dynamics="81.11">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="58.98" default-y="-30" dynamics="72.22">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="79.63" default-y="-35" dynamics="87.78">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="101.13" default-y="-20" dynamics="96.67">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="129.88" default-y="-25" dynamics="85.56">
        <pitch>
          <step>A</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="150.53" default-y="-5" dynamics="98.89">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="171.18" default-y="-10" dynamics="87.78">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="19" width="84.96">
      <note default-x="12.5" default-y="-10" dynamics="91.11">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>whole</type>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      </measure>
    <measure number="20" width="187.7">
      <note default-x="12.5" default-y="-10" dynamics="91.11">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="33.15" default-y="-20" dynamics="81.11">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="53.8" default-y="-35" dynamics="74.44">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="74.45" default-y="-40" dynamics="82.22">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="95.95" default-y="-25" dynamics="103.33">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="116.6" default-y="-30" dynamics="84.44">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="137.25" default-y="-10" dynamics="101.11">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="157.9" default-y="-15" dynamics="84.44">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="21" width="121.85">
      <note default-x="12.5" default-y="-15" dynamics="84.44">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        </note>
      <note default-x="71.4" default-y="-10" dynamics="98.89">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="92.06" default-y="-5" dynamics="92.22">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="22" width="287.87">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>98.37</system-distance>
          </system-layout>
        </print>
      <note default-x="97.26" default-y="-25" dynamics="73.33">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="131.31" default-y="-25" dynamics="83.33">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="149.3" default-y="-20" dynamics="96.67">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="167.29" default-y="-15" dynamics="97.78">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="189.99" default-y="-15" dynamics="97.78">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="212.69" default-y="-20" dynamics="82.22">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="235.38" default-y="-20" dynamics="83.33">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="258.08" default-y="-25" dynamics="85.56">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="23" width="203.11">
      <note default-x="12.5" default-y="-30" dynamics="87.78">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="35.2" default-y="-35" dynamics="81.11">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="57.89" default-y="-35" dynamics="92.22">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="75.89" default-y="-30" dynamics="94.44">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="93.88" default-y="-25" dynamics="95.56">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="116.58" default-y="-25" dynamics="95.56">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="150.62" default-y="-30" dynamics="85.56">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="173.32" default-y="-35" dynamics="87.78">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="24" width="91.86">
      <note default-x="12.5" default-y="-40" dynamics="83.33">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="25" width="188.03">
      <note default-x="12.5" default-y="-30" dynamics="94.44">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="63.57" default-y="-30" dynamics="94.44">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="86.26" default-y="-25" dynamics="92.22">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="104.26" default-y="-30" dynamics="86.67">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="122.25" default-y="-35" dynamics="83.33">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="140.24" default-y="-30" dynamics="93.33">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="158.24" default-y="-40" dynamics="84.44">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="26" width="113.08">
      <note default-x="12.5" default-y="-5" dynamics="110">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-5"/>
        <stem>down</stem>
        </note>
      <note default-x="77.23" default-y="-30" dynamics="71.11">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="27" width="178.47">
      <note default-x="12.5" default-y="-35" dynamics="83.33">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="46.54" default-y="0" dynamics="116.67">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="80.59" default-y="0" dynamics="116.67">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="103.28" default-y="-5" dynamics="83.33">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="125.98" default-y="-10" dynamics="80">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="148.68" default-y="-15" dynamics="77.78">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="28" width="260.89">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>98.37</system-distance>
          </system-layout>
        </print>
      <note default-x="97.26" default-y="-10" dynamics="94.44">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="140.09" default-y="-10" dynamics="94.44">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="158.08" default-y="-15" dynamics="90">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="176.07" default-y="-20" dynamics="85.56">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="194.07" default-y="-25" dynamics="83.33">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="212.06" default-y="-30" dynamics="82.22">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="231.09" default-y="-35" dynamics="78.89">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="29" width="156.25">
      <note default-x="18.76" default-y="-40" dynamics="84.44">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="37.79" default-y="-35" dynamics="94.44">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="56.82" default-y="-30" dynamics="92.22">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="85.37" default-y="-30" dynamics="92.22">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="104.4" default-y="-25" dynamics="91.11">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="125.9" default-y="-20" dynamics="98.89">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      </measure>
    <measure number="30" width="123.74">
      <note default-x="12.5" default-y="-20" dynamics="98.89">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="31.53" default-y="-15" dynamics="97.78">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="50.57" default-y="-10" dynamics="94.44">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="93.39" default-y="-15" dynamics="87.78">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="31" width="174">
      <note default-x="12.5" default-y="-20" dynamics="82.22">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="31.53" default-y="-25" dynamics="81.11">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="50.57" default-y="-30" dynamics="80">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="69.6" default-y="-35" dynamics="85.56">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="88.63" default-y="-30" dynamics="95.56">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="107.66" default-y="-25" dynamics="92.22">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="125.66" default-y="-20" dynamics="96.67">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="143.65" default-y="-25" dynamics="84.44">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="32" width="80">
      <note default-x="12.5" default-y="-35" dynamics="78.89">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="33" width="142.22">
      <note default-x="12.5" default-y="-25" dynamics="96.67">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="55.32" default-y="-25" dynamics="96.67">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="74.36" default-y="-15" dynamics="103.33">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="93.39" default-y="-20" dynamics="82.22">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="112.42" default-y="-25" dynamics="86.67">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="34" width="125.33">
      <note default-x="12.5" default-y="0" dynamics="112.22">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="5"/>
        <stem>down</stem>
        </note>
      <note default-x="66.79" default-y="-5" dynamics="85.56">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="95.54" default-y="-10" dynamics="85.56">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="35" width="282.09">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>98.37</system-distance>
          </system-layout>
        </print>
      <note default-x="97.26" default-y="-15" dynamics="83.33">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="115.26" default-y="-20" dynamics="81.11">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="133.25" default-y="-5" dynamics="98.89">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="156.21" default-y="-40" dynamics="66.67">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="190.64" default-y="-35" dynamics="96.67">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="208.64" default-y="-35"/>
        <stem>up</stem>
        </note>
      <note default-x="234.3" default-y="-30" dynamics="94.44">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="252.29" default-y="-25" dynamics="98.89">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="36" width="132.57">
      <note default-x="12.5" default-y="-30" dynamics="85.56">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-25"/>
        <stem>up</stem>
        </note>
      <note default-x="56.15" default-y="-35" dynamics="77.78">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="79.11" default-y="-40" dynamics="83.33">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="37" width="130.73">
      <note default-x="12.5" default-y="-25" dynamics="96.67">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-25"/>
        <stem>up</stem>
        </note>
      <note default-x="77.98" default-y="-15" dynamics="102.22">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="100.94" default-y="-20" dynamics="86.67">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="38" width="130.73">
      <note default-x="12.5" default-y="-20" dynamics="88.89">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        </note>
      <note default-x="77.98" default-y="-10" dynamics="96.67">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="100.94" default-y="-15" dynamics="80">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="39" width="130.73">
      <note default-x="12.5" default-y="-15" dynamics="90">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        </note>
      <note default-x="77.98" default-y="-5" dynamics="95.56">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="100.94" default-y="-10" dynamics="87.78">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="40" width="92.75">
      <note default-x="12.5" default-y="-10" dynamics="88.89">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="41" width="162.82">
      <note default-x="12.5" default-y="-40" dynamics="63.33">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="64.16" default-y="-40" dynamics="63.33">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="87.11" default-y="-30" dynamics="98.89">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="110.07" default-y="-20" dynamics="101.11">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="133.03" default-y="-10" dynamics="97.78">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="42" width="246.61">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>98.37</system-distance>
          </system-layout>
        </print>
      <note default-x="97.26" default-y="-10" dynamics="90">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="116.61" default-y="-20" dynamics="80">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="135.95" default-y="-15" dynamics="98.89">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="179.48" default-y="-15" dynamics="98.89">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="198.83" default-y="-10" dynamics="95.56">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="216.82" default-y="-5" dynamics="97.78">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="43" width="151.34">
      <note default-x="12.5" default-y="-25" dynamics="74.44">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="56.03" default-y="-25" dynamics="74.44">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="75.37" default-y="-15" dynamics="104.44">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="94.72" default-y="-5" dynamics="98.89">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="121.55" default-y="5" dynamics="96.67">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="44" width="98.5">
      <note default-x="12.5" default-y="0" dynamics="87.78">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="5"/>
        <stem>down</stem>
        </note>
      <note default-x="67.68" default-y="-25" dynamics="66.67">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="45" width="127.69">
      <note default-x="12.5" default-y="-30" dynamics="75.56">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="31.85" default-y="-20" dynamics="101.11">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="53.34" default-y="-10" dynamics="92.22">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="96.87" default-y="-35" dynamics="74.44">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="46" width="175.01">
      <note default-x="12.5" default-y="-40" dynamics="78.89">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="41.52" default-y="-20" dynamics="104.44">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="60.86" default-y="-15" dynamics="94.44">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="78.86" default-y="-10" dynamics="96.67">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="96.85" default-y="-10" dynamics="96.67">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="116.2" default-y="-15" dynamics="82.22">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="145.22" default-y="-20" dynamics="80">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="47" width="182.71">
      <note default-x="12.5" default-y="-25" dynamics="87.78">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="30.49" default-y="-30" dynamics="85.56">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="48.49" default-y="-35" dynamics="82.22">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="77.51" default-y="-30" dynamics="92.22">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="104.56" default-y="-25" dynamics="94.44">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="133.57" default-y="-30" dynamics="88.89">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="152.92" default-y="-25" dynamics="90">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="48" width="80.55">
      <note default-x="12.5" default-y="-25" dynamics="92.22">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="49" width="271.24">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>98.37</system-distance>
          </system-layout>
        </print>
      <note default-x="97.26" default-y="-30" dynamics="84.44">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="147.25" default-y="-30" dynamics="84.44">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="169.47" default-y="-25" dynamics="91.11">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="187.46" default-y="-30" dynamics="87.78">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="205.45" default-y="-35" dynamics="82.22">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="223.45" default-y="-30" dynamics="94.44">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="241.44" default-y="-40" dynamics="80">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="50" width="110.99">
      <note default-x="12.5" default-y="-5" dynamics="116.67">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-5"/>
        <stem>down</stem>
        </note>
      <note default-x="75.87" default-y="-30" dynamics="76.67">
        <pitch>
          <step>G</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <accidental>natural</accidental>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="51" width="175.6">
      <note default-x="12.5" default-y="-35" dynamics="82.22">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="45.83" default-y="0" dynamics="106.67">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="79.15" default-y="0" dynamics="106.67">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="101.37" default-y="-5" dynamics="82.22">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="123.58" default-y="-10" dynamics="80">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="145.8" default-y="-15" dynamics="83.33">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="52" width="186.47">
      <note default-x="12.5" default-y="-10" dynamics="90">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="62.49" default-y="-10" dynamics="90">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="80.48" default-y="-15" dynamics="88.89">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="98.48" default-y="-20" dynamics="83.33">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">continue</beam>
        </note>
      <note default-x="116.47" default-y="-25" dynamics="85.56">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="134.46" default-y="-30" dynamics="87.78">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="156.68" default-y="-35" dynamics="82.22">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="53" width="176.07">
      <note default-x="18.76" default-y="-40" dynamics="82.22">
        <pitch>
          <step>E</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="40.97" default-y="-35" dynamics="94.44">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="63.19" default-y="-30" dynamics="91.11">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="96.52" default-y="-30" dynamics="91.11">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="118.73" default-y="-25" dynamics="91.11">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="140.95" default-y="-20" dynamics="96.67">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      </measure>
    <measure number="54" width="142.05">
      <note default-x="12.5" default-y="-20" dynamics="96.67">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="34.72" default-y="-15" dynamics="86.67">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="56.93" default-y="-10" dynamics="94.44">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="106.92" default-y="-15" dynamics="83.33">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="55" width="268.83">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>98.37</system-distance>
          </system-layout>
        </print>
      <note default-x="97.26" default-y="-20" dynamics="81.11">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="117.84" default-y="-25" dynamics="81.11">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="138.43" default-y="-30" dynamics="87.78">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="159.01" default-y="-35" dynamics="78.89">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="179.59" default-y="-30" dynamics="94.44">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="200.17" default-y="-25" dynamics="96.67">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="218.16" default-y="-20" dynamics="93.33">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="236.16" default-y="-25" dynamics="82.22">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="56" width="84.73">
      <note default-x="12.5" default-y="-35" dynamics="85.56">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="57" width="150.35">
      <note default-x="12.5" default-y="-25" dynamics="92.22">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="58.81" default-y="-25" dynamics="92.22">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="79.39" default-y="-15" dynamics="92.22">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="99.97" default-y="-20" dynamics="83.33">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="120.55" default-y="-25" dynamics="85.56">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="58" width="129.75">
      <note default-x="12.5" default-y="0" dynamics="98.89">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="5"/>
        <stem>down</stem>
        </note>
      <note default-x="71.2" default-y="-5" dynamics="96.67">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="99.95" default-y="-10" dynamics="87.78">
        <pitch>
          <step>D</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>sharp</accidental>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="59" width="186.86">
      <note default-x="12.5" default-y="-15" dynamics="81.11">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="30.49" default-y="-20" dynamics="83.33">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="48.49" default-y="-5" dynamics="96.67">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="69.07" default-y="-40" dynamics="65.56">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="99.94" default-y="-35" dynamics="91.11">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="117.94" default-y="-35"/>
        <stem>up</stem>
        </note>
      <note default-x="139.08" default-y="-30" dynamics="94.44">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="157.07" default-y="-25" dynamics="94.44">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="60" width="120.33">
      <note default-x="12.5" default-y="-30" dynamics="84.44">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>6</duration>
        <voice>1</voice>
        <type>quarter</type>
        <dot default-x="30.49" default-y="-25"/>
        <stem>up</stem>
        </note>
      <note default-x="51.64" default-y="-35" dynamics="83.33">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="72.22" default-y="-40" dynamics="83.33">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="61" width="121.58">
      <note default-x="12.5" default-y="-25" dynamics="94.44">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-25"/>
        <stem>up</stem>
        </note>
      <note default-x="71.2" default-y="-15" dynamics="98.89">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="91.79" default-y="-20" dynamics="82.22">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="62" width="199.23">
      <print new-system="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <system-distance>98.37</system-distance>
          </system-layout>
        </print>
      <note default-x="97.26" default-y="-20" dynamics="92.22">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="115.26" default-y="-15"/>
        <stem>down</stem>
        </note>
      <note default-x="150.7" default-y="-10" dynamics="94.44">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="169.44" default-y="-15" dynamics="85.56">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="63" width="114.47">
      <note default-x="12.5" default-y="-15" dynamics="92.22">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="-15"/>
        <stem>down</stem>
        </note>
      <note default-x="65.94" default-y="-5" dynamics="100">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="84.68" default-y="-10" dynamics="86.67">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="64" width="80">
      <note default-x="12.5" default-y="-10" dynamics="87.78">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      </measure>
    <measure number="65" width="140.66">
      <note default-x="12.5" default-y="-40" dynamics="67.78">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="54.66" default-y="-40" dynamics="67.78">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="73.39" default-y="-30" dynamics="100">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="92.13" default-y="-20" dynamics="97.78">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="110.87" default-y="-10" dynamics="95.56">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="66" width="158.66">
      <note default-x="12.5" default-y="-10" dynamics="93.33">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="31.24" default-y="-20" dynamics="78.89">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="49.97" default-y="-15" dynamics="94.44">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="92.13" default-y="-15" dynamics="94.44">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="110.87" default-y="-10" dynamics="93.33">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="128.86" default-y="-5" dynamics="95.56">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      </measure>
    <measure number="67" width="148.76">
      <note default-x="12.5" default-y="-25" dynamics="75.56">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>8</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>half</type>
        <stem>up</stem>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="54.66" default-y="-25" dynamics="75.56">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="73.39" default-y="-15" dynamics="102.22">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="92.13" default-y="-5" dynamics="91.11">
        <pitch>
          <step>E</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        </note>
      <note default-x="118.96" default-y="5" dynamics="97.78">
        <pitch>
          <step>G</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <accidental>natural</accidental>
        <stem>down</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="68" width="95.85">
      <note default-x="12.5" default-y="0" dynamics="86.67">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>12</duration>
        <voice>1</voice>
        <type>half</type>
        <dot default-x="30.49" default-y="5"/>
        <stem>down</stem>
        </note>
      <note default-x="65.94" default-y="-25" dynamics="66.67">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="69" width="124.79">
      <note default-x="12.5" default-y="-30" dynamics="81.11">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="31.24" default-y="-20" dynamics="96.67">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      <note default-x="52.73" default-y="-10" dynamics="96.67">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>8</duration>
        <voice>1</voice>
        <type>half</type>
        <stem>down</stem>
        </note>
      <note default-x="94.89" default-y="-35" dynamics="76.67">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      </measure>
    <measure number="70" width="474.88">
      <print new-page="yes">
        <system-layout>
          <system-margins>
            <left-margin>0</left-margin>
            <right-margin>0</right-margin>
            </system-margins>
          <top-system-distance>70</top-system-distance>
          </system-layout>
        </print>
      <note default-x="97.26" default-y="-40" dynamics="77.78">
        <pitch>
          <step>E</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="174.13" default-y="-20" dynamics="105.56">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="225.38" default-y="-15" dynamics="102.22">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">continue</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="259.55" default-y="-10" dynamics="97.78">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>1</duration>
        <tie type="start"/>
        <voice>1</voice>
        <type>16th</type>
        <stem>down</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        <notations>
          <tied type="start"/>
          </notations>
        </note>
      <note default-x="293.71" default-y="-10" dynamics="97.78">
        <pitch>
          <step>D</step>
          <octave>5</octave>
          </pitch>
        <duration>2</duration>
        <tie type="stop"/>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        <notations>
          <tied type="stop"/>
          </notations>
        </note>
      <note default-x="344.96" default-y="-15" dynamics="83.33">
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>5</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>down</stem>
        </note>
      <note default-x="421.83" default-y="-20" dynamics="83.33">
        <pitch>
          <step>B</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>down</stem>
        </note>
      </measure>
    <measure number="71" width="390.12">
      <note default-x="12.5" default-y="-25" dynamics="81.11">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        <beam number="2">begin</beam>
        </note>
      <note default-x="46.67" default-y="-30" dynamics="85.56">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>16th</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        <beam number="2">end</beam>
        </note>
      <note default-x="80.83" default-y="-35" dynamics="80">
        <pitch>
          <step>F</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="157.7" default-y="-30" dynamics="90">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        </note>
      <note default-x="208.95" default-y="-25" dynamics="91.11">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>4</duration>
        <voice>1</voice>
        <type>quarter</type>
        <stem>up</stem>
        </note>
      <note default-x="285.82" default-y="-30" dynamics="84.44">
        <pitch>
          <step>G</step>
          <alter>1</alter>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">begin</beam>
        </note>
      <note default-x="337.07" default-y="-25" dynamics="95.56">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <beam number="1">end</beam>
        </note>
      </measure>
    <measure number="72" width="197.42">
      <note default-x="12.5" default-y="-25" dynamics="88.89">
        <pitch>
          <step>A</step>
          <octave>4</octave>
          </pitch>
        <duration>16</duration>
        <voice>1</voice>
        <type>whole</type>
        </note>
      <barline location="right">
        <bar-style>light-heavy</bar-style>
        </barline>
      </measure>
    </part>
  </score-partwise>
`
}

export default scoresData
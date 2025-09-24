package com.ni121.companionapp

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReadableArray
import be.tarsos.dsp.util.fft.FFT
import kotlin.FloatArray

class FFTModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "FFTModule"
    }

    @ReactMethod
    fun fft(fftSize: Int, signalDataIn: ReadableArray, promise: Promise) {
        try {
            val fftLib = FFT(fftSize)

            val signalData = FloatArray(signalDataIn.size())
            for (i in signalData.indices) {
                signalData[i] = signalDataIn.getDouble(i).toFloat()
            }

            fftLib.forwardTransform(signalData)
            promise.resolve(signalData)
        } catch (e: Exception) {
            promise.reject("FFT_ERROR", e)
        }
    }
}

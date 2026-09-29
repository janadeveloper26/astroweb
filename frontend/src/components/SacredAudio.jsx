import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function SacredAudio({ lang }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);
  const masterGainRef = useRef(null);

  const startChant = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.12, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Sacred Tanpura drone fundamental frequencies (C# / Pancham: ~138.59 Hz, 207.65 Hz, 277.18 Hz)
      const freqs = [138.59, 207.65, 277.18, 554.37];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Gentle pulsing LFO
        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.2 + idx * 0.05, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(0.04, ctx.currentTime);
        lfo.connect(lfoGain.gain);

        gain.gain.setValueAtTime(0.06 / (idx + 1), ctx.currentTime);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();
      });

      // Temple bell chime sound generator
      const playTempleBell = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
        const now = ctx.currentTime;
        const bellFreqs = [1046.5, 1318.51, 1567.98, 2093.0];
        const chosenFreq = bellFreqs[Math.floor(Math.random() * bellFreqs.length)];

        const bellOsc = ctx.createOscillator();
        const bellGain = ctx.createGain();
        bellOsc.type = 'sine';
        bellOsc.frequency.setValueAtTime(chosenFreq, now);

        bellGain.gain.setValueAtTime(0.08, now);
        bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

        bellOsc.connect(bellGain);
        bellGain.connect(masterGain);

        bellOsc.start(now);
        bellOsc.stop(now + 3.6);
      };

      // Play chime initially and periodically
      playTempleBell();
      intervalRef.current = setInterval(playTempleBell, 8000);

      setIsPlaying(true);
    } catch (e) {
      console.error('Audio init error:', e);
    }
  };

  const stopChant = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopChant();
    } else {
      startChant();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
    };
  }, []);

  return (
    <div className="sacred-audio-widget">
      <button
        onClick={toggleAudio}
        className={`audio-btn ${isPlaying ? 'playing' : ''}`}
        title={lang === 'ta' ? 'கோவில் நாதம் இசைக்கவும்' : 'Toggle Sacred Temple Ambience'}
        aria-label="Toggle Sacred Sound"
      >
        <span className="audio-icon-wrap">
          {isPlaying ? <Volume2 className="icon active-anim" /> : <VolumeX className="icon" />}
        </span>
        <span className="audio-label">
          {isPlaying ? (
            <>
              <Sparkles className="sparkle-icon" size={14} />
              {lang === 'ta' ? 'ஓம் நமச்சிவாய நாதம்' : 'Om Soundscape ON'}
            </>
          ) : (
            <>{lang === 'ta' ? 'நாதம் கேட்க' : 'Play Sacred Ambiance'}</>
          )}
        </span>
      </button>
    </div>
  );
}

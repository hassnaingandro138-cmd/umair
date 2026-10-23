import { useState } from 'react';
import { Volume2, VolumeX, Music, Upload, Check } from 'lucide-react';
import { soundEngine } from '../utils/audioEngine';

interface AudioControlBarProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function AudioControlBar({ isPlaying, onToggle }: AudioControlBarProps) {
  const [showSettings, setShowSettings] = useState(false);
  const [hasCustomSong, setHasCustomSong] = useState(false);

  const handleCustomAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    soundEngine.setCustomAudio(url);
    setHasCustomSong(true);
    setShowSettings(false);
  };

  return (
    <>
      {/* Floating Audio Bar at bottom right */}
      <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex items-center gap-1.5 sm:gap-2">
        <button
          onClick={onToggle}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-xl cursor-pointer ${
            isPlaying
              ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]'
              : 'bg-slate-950/80 border-slate-700 text-slate-400 hover:border-amber-500/40'
          }`}
          title={isPlaying ? "Mauseeqi Band Karein" : "Mauseeqi Shuru Karein"}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="text-xs font-serif font-bold tracking-wide whitespace-nowrap">
                {hasCustomSong ? 'Khaas Gaana Chalu 🎵' : 'Salgirah Mauseeqi 🎶'}
              </span>
              <span className="flex gap-0.5 items-end h-3">
                <span className="w-0.5 h-2 bg-amber-400 animate-pulse" />
                <span className="w-0.5 h-3 bg-amber-300 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <span className="w-0.5 h-1.5 bg-amber-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
              </span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4" />
              <span className="text-xs font-serif font-medium whitespace-nowrap">Mauseeqi On Karein</span>
            </>
          )}
        </button>

        <button
          onClick={() => setShowSettings(!showSettings)}
          className="p-2.5 rounded-full bg-slate-950/80 border border-slate-700 text-slate-400 hover:text-amber-300 hover:border-amber-500/40 backdrop-blur-xl transition-colors shadow-lg cursor-pointer"
          title="Mauseeqi Settings / Gaana Tabdeel Karein"
        >
          <Music className="w-4 h-4" />
        </button>
      </div>

      {/* Audio Customization Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="max-w-sm w-full p-6 sm:p-7 rounded-3xl glass-card border border-amber-500/40 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-2 border-b border-amber-500/20">
              <h4 className="font-serif text-base font-bold text-slate-100 flex items-center gap-2">
                <Music className="w-4 h-4 text-amber-400" />
                <span>Mauseeqi & Voice Note</span>
              </h4>
              <button
                onClick={() => setShowSettings(false)}
                className="text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-serif">
              Background mein Salgirah ki madhur mauseeqi baj rahi hai. Agar aap apna koi pasandida dosti ka gaana ya apna voice note lagana chahein to yahan se muntakhib kar sakte hain!
            </p>

            <label className="border border-dashed border-amber-500/40 hover:border-amber-400 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 cursor-pointer bg-amber-500/5 hover:bg-amber-500/10 transition-colors">
              <Upload className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-serif font-bold text-slate-200">
                {hasCustomSong ? 'Doosra Gaana / Audio Lagayein' : 'Audio File Muntakhib Karein'}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">MP3, WAV Audio</span>
              <input
                type="file"
                accept="audio/*"
                className="hidden"
                onChange={handleCustomAudioUpload}
              />
            </label>

            {hasCustomSong && (
              <div className="flex items-center gap-2 text-xs font-serif text-emerald-400">
                <Check className="w-4 h-4" />
                <span>Aapka gaana kamyabi se shuru ho gaya!</span>
              </div>
            )}

            <button
              onClick={() => setShowSettings(false)}
              className="w-full py-2.5 text-xs font-serif font-bold text-slate-950 bg-gold-gradient rounded-xl cursor-pointer"
            >
              Theek Hai (Done)
            </button>
          </div>
        </div>
      )}
    </>
  );
}

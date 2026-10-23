import { Volume2, VolumeX, Gift, Sparkles, RefreshCw } from 'lucide-react';

interface NavbarProps {
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
  onOpenGift: () => void;
  onReplaySurprise: () => void;
  hasRevealedSurprise: boolean;
}

export default function Navbar({
  isMusicPlaying,
  onToggleMusic,
  onOpenGift,
  onReplaySurprise,
  hasRevealedSurprise,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-500/20 bg-[#05060A]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-6">
        {/* Zone 1: Brand Wordmark (Responsive truncate on small phones) */}
        <a
          href="#welcome"
          className="font-serif text-xs sm:text-base md:text-lg font-bold tracking-tight text-gold-gradient whitespace-nowrap shrink flex items-center gap-1.5 sm:gap-2 group overflow-hidden"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0 group-hover:rotate-12 transition-transform" />
          <span className="truncate max-w-[150px] xs:max-w-[190px] sm:max-w-none">
            Umair Janeman · Hassnain Ali ❤️
          </span>
        </a>

        {/* Zone 2: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs font-serif font-medium text-slate-300">
          <a href="#welcome" className="hover:text-amber-300 transition-colors whitespace-nowrap">
            Surprise
          </a>
          <a href="#celebration" className="hover:text-amber-300 transition-colors whitespace-nowrap">
            Celebration Cake
          </a>
          <a href="#brotherhood" className="hover:text-amber-300 transition-colors whitespace-nowrap">
            Brotherhood
          </a>
          <a href="#duas" className="hover:text-amber-300 transition-colors whitespace-nowrap">
            Duaein
          </a>
          <a href="#memories" className="hover:text-amber-300 transition-colors whitespace-nowrap">
            Memories
          </a>
          <a href="#shayari" className="hover:text-amber-300 transition-colors whitespace-nowrap">
            Poem
          </a>
          <a href="#gift" className="hover:text-amber-300 transition-colors whitespace-nowrap">
            Virtual Gift
          </a>
        </nav>

        {/* Zone 3: Mobile & Desktop Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {hasRevealedSurprise && (
            <button
              onClick={onReplaySurprise}
              title="Surprise Dobara Dekhein"
              className="p-1.5 sm:px-3 sm:py-1.5 text-xs font-serif font-medium text-amber-300/90 hover:text-amber-200 hover:bg-amber-500/10 rounded-lg transition-colors border border-amber-500/20 whitespace-nowrap flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Replay</span>
            </button>
          )}

          <button
            onClick={onToggleMusic}
            title={isMusicPlaying ? "Mute Music" : "Play Music"}
            className={`p-1.5 sm:px-3 sm:py-1.5 text-xs font-serif font-medium rounded-lg transition-all flex items-center gap-1.5 border cursor-pointer ${
              isMusicPlaying
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-amber-500/40'
            }`}
          >
            {isMusicPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span className="hidden sm:inline whitespace-nowrap">Music On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline whitespace-nowrap">Music</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenGift}
            className="px-2.5 sm:px-3.5 py-1.5 text-xs font-serif font-bold text-slate-950 bg-gold-gradient rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(212,175,55,0.35)] whitespace-nowrap flex items-center gap-1 sm:gap-1.5 cursor-pointer"
          >
            <Gift className="w-3.5 h-3.5 text-slate-950" />
            <span className="hidden xs:inline">Tohfa</span>
            <span>🎁</span>
          </button>
        </div>
      </div>
    </header>
  );
}

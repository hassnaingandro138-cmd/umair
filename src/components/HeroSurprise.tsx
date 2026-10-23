import { useState, useEffect } from 'react';
import { Sparkles, Heart, ChevronDown, PartyPopper, Flame } from 'lucide-react';
import { triggerGoldenFireworks, triggerMegaCelebration } from '../utils/confetti';
import { soundEngine } from '../utils/audioEngine';

interface HeroSurpriseProps {
  isRevealed: boolean;
  onReveal: () => void;
  onReplay: () => void;
  onStartMusic: () => void;
}

export default function HeroSurprise({
  isRevealed,
  onReveal,
  onStartMusic,
}: HeroSurpriseProps) {
  const fullTypedMessage =
    "Umair, tu sirf mera dost nahi, mere sage bhai jaisa hai jiske saath mujhe qalbi sukoon milta hai. I love you so much, mere bhai! Chahe aaj hum ek doosre se door hain, lekin hamara yeh pakiza rishta kabhi kamzor nahi hogi aur na hi kabhi tootega. Allah Ta'ala tujhe hamesha shad-o-aabaad rakhe, bhabhi ke sath hamesha hasti muskurati ba-barkat zindagi ata farmaye aur jald mangni ki khushiyan naseeb kare! Insha'Allah hum bohat jald milenge! — Tera Mukhlis Bhai, Hassnain Ali 🫂❤️";

  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [celebrateCount, setCelebrateCount] = useState(0);

  useEffect(() => {
    if (!isRevealed) {
      setTypedText('');
      setIsTypingComplete(false);
      return;
    }

    let i = 0;
    setTypedText('');
    setIsTypingComplete(false);

    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < fullTypedMessage.length) {
          setTypedText(fullTypedMessage.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setIsTypingComplete(true);
        }
      }, 24);

      return () => clearInterval(interval);
    }, 450);

    return () => clearTimeout(startDelay);
  }, [isRevealed]);

  const handleMegaCelebrateClick = () => {
    soundEngine.playSparkleSound();
    triggerMegaCelebration();
    setCelebrateCount((prev) => prev + 1);
  };

  return (
    <section id="welcome" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center px-3 sm:px-6 py-8 sm:py-14 overflow-hidden">
      {/* Decorative ambient radial lighting and animated floating elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[320px] sm:h-[700px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating party elements */}
      <div className="absolute top-6 left-4 text-2xl sm:text-4xl animate-float opacity-75 select-none pointer-events-none">
        🎈
      </div>
      <div className="absolute top-10 right-4 text-2xl sm:text-4xl animate-float opacity-75 select-none pointer-events-none" style={{ animationDelay: '1.2s' }}>
        🎂
      </div>
      <div className="absolute bottom-12 left-4 text-xl sm:text-3xl animate-float opacity-70 select-none pointer-events-none" style={{ animationDelay: '2.3s' }}>
        ✨
      </div>
      <div className="absolute bottom-14 right-4 text-2xl sm:text-4xl animate-float opacity-75 select-none pointer-events-none" style={{ animationDelay: '1.8s' }}>
        🎉
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center space-y-6 sm:space-y-8">
        {/* Top Badge */}
        <div className="space-y-3 px-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-semibold tracking-wider uppercase shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>Dedicated Birthday Celebration · Hassnain Ali</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gold-gradient leading-tight filter drop-shadow-[0_4px_25px_rgba(212,175,55,0.5)]">
            HAPPY BIRTHDAY UMAIR JANEMAN FROM YOUR BROTHER HASSNAIN ALI ❤️🎂
          </h1>

          <div className="flex items-center justify-center gap-2 text-rose-400 font-serif text-sm sm:text-xl font-bold">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-500 text-rose-500 animate-pulse" />
            <span>I Love You So Much, Mere Bhai!</span>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-500 text-rose-500 animate-pulse" />
          </div>

          <h2 className="font-serif text-sm sm:text-lg md:text-xl text-amber-200/90 font-medium tracking-wide">
            "Happy Birthday To My Brother, My Best Friend, Mere Yaar! 🫂❤️"
          </h2>
        </div>

        {/* Revealed Letter Container */}
        <div className="space-y-6 sm:space-y-8 transition-all duration-700 animate-fade-in">
          <div className="max-w-2xl mx-auto p-5 sm:p-9 rounded-3xl glass-card border border-amber-500/40 relative shadow-2xl bg-gradient-to-b from-[#13100a] via-[#0d0e17] to-[#07080d]">
            <div className="flex items-center justify-center gap-2 mb-3 text-amber-400">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-serif font-bold text-amber-300">
                From Hassnain's Heart · Dil Se Paigham
              </span>
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 animate-pulse" />
            </div>

            <p className="text-sm sm:text-lg text-slate-100 leading-relaxed font-serif min-h-[5.5rem] italic text-left sm:text-center">
              "{typedText}
              {!isTypingComplete && (
                <span className="inline-block w-2 h-5 bg-amber-400 ml-1 animate-pulse" />
              )}
              "
            </p>

            <div className="mt-5 pt-4 border-t border-amber-500/25 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-amber-300/90 font-medium gap-2">
              <span>Hassnain & Umair · Brotherhood Forever 🤝</span>
              <span className="text-rose-400">I Love You, Mere Bhai ❤️</span>
            </div>
          </div>

          {/* Action Celebration Row — Works Everywhere across the full screen! */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
            <button
              onClick={handleMegaCelebrateClick}
              className="px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:shadow-[0_0_50px_rgba(212,175,55,1)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer w-full sm:w-auto justify-center"
            >
              <PartyPopper className="w-5 h-5 text-slate-950 animate-bounce" />
              <span>Full Screen Celebrate! 🎉</span>
            </button>

            <a
              href="#celebration"
              className="px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 rounded-2xl border border-amber-500/40 hover:border-amber-400 transition-all flex items-center gap-2 justify-center"
            >
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Birthday Cake 🎂</span>
            </a>

            <button
              onClick={() => {
                soundEngine.playSparkleSound();
                triggerGoldenFireworks();
              }}
              className="px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 rounded-2xl border border-slate-700 hover:border-amber-500/40 transition-all flex items-center gap-2 justify-center cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Fireworks 🎆</span>
            </button>
          </div>

          {celebrateCount > 0 && (
            <p className="text-xs sm:text-sm text-amber-300 font-serif font-semibold animate-pulse">
              🎉 Full Screen Fireworks Blast: {celebrateCount} Baar! ✨
            </p>
          )}

          {/* Scroll Down Affordance */}
          <div className="pt-4 sm:pt-6">
            <a
              href="#celebration"
              className="inline-flex flex-col items-center gap-1 text-slate-400 hover:text-amber-300 transition-colors text-xs font-serif"
            >
              <span>Scroll to Explore More</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect } from 'react';
import { X, Sparkles, Heart, Crown, Share2 } from 'lucide-react';
import { triggerBirthdayBlast, triggerGoldenFireworks, triggerHeartShower, triggerMegaCelebration } from '../utils/confetti';
import { soundEngine } from '../utils/audioEngine';

interface FinalSurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FinalSurpriseModal({
  isOpen,
  onClose,
}: FinalSurpriseModalProps) {
  useEffect(() => {
    if (isOpen) {
      triggerMegaCelebration();
      const t1 = setTimeout(() => triggerGoldenFireworks(), 700);
      const t2 = setTimeout(() => triggerHeartShower(), 1500);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Happy Birthday Umair Janeman from your brother Hassnain Ali ❤️",
        text: "Salgirah Mubarak Mere Bhai Umair Ali! Hassnain Ali ki taraf se dil se tehfa ✨",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      soundEngine.playSparkleSound();
      alert("Surprise website ka link copy ho gaya hai! Umair ke sath share karein ❤️");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-fade-in overflow-y-auto">
      {/* Floating background decorative hearts and sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 text-3xl animate-float opacity-50">💛</div>
        <div className="absolute top-1/3 right-12 text-4xl animate-float opacity-40" style={{ animationDelay: '1.5s' }}>🤍</div>
        <div className="absolute bottom-1/4 left-1/4 text-2xl animate-float opacity-40" style={{ animationDelay: '2s' }}>✨</div>
        <div className="absolute bottom-1/3 right-1/4 text-4xl animate-float opacity-50" style={{ animationDelay: '2.8s' }}>❤️</div>
        <div className="absolute top-1/2 left-6 text-3xl animate-float opacity-40" style={{ animationDelay: '3.2s' }}>🎈</div>
        <div className="absolute top-1/2 right-6 text-3xl animate-float opacity-40" style={{ animationDelay: '3.6s' }}>🎉</div>
      </div>

      {/* Main Grand Card */}
      <div className="relative max-w-3xl w-full p-8 sm:p-14 rounded-3xl glass-card border-2 border-amber-400 shadow-[0_0_90px_rgba(212,175,55,0.5)] text-center space-y-8 my-auto bg-gradient-to-b from-[#13100a] via-[#0d0e17] to-[#07080d]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          title="Band Karein"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Crown Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs sm:text-sm font-serif font-bold tracking-wider">
          <Crown className="w-4 h-4 text-amber-400" />
          <span>HASSNAIN & UMAIR · BHAI CHARA FOREVER</span>
          <Crown className="w-4 h-4 text-amber-400" />
        </div>

        {/* Cinematic Grand Message */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-gold-gradient leading-tight filter drop-shadow-[0_4px_30px_rgba(212,175,55,0.6)]">
            ONCE AGAIN, HAPPY BIRTHDAY UMAIR JANEMAN! 🎂❤️
          </h2>

          <h3 className="font-serif text-lg sm:text-2xl text-amber-200 font-bold tracking-wider pt-2">
            FROM YOUR BROTHER HASSNAIN ALI ✨
          </h3>

          <p className="font-serif text-base sm:text-2xl text-slate-100 font-medium italic pt-2 max-w-xl mx-auto leading-relaxed">
            "Stay Blessed. Stay Happy. Stay Legendary, Mere Bhai! 🤍"
          </p>

          <div className="flex items-center justify-center gap-2 text-rose-400 font-serif text-sm sm:text-xl font-bold pt-1">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-500 text-rose-500 animate-pulse" />
            <span>I Love You Always, Mere Bhai!</span>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-rose-500 text-rose-500 animate-pulse" />
          </div>
        </div>

        {/* Golden Heart Divider */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 text-amber-400">
          <div className="w-12 sm:w-16 h-[1px] bg-amber-500/40" />
          <Heart className="w-5 h-5 fill-amber-400 animate-pulse" />
          <div className="w-12 sm:w-16 h-[1px] bg-amber-500/40" />
        </div>

        <div className="space-y-3 max-w-xl mx-auto text-center font-serif px-2">
          <p className="text-xs sm:text-base text-amber-200/95 leading-relaxed italic">
            "Bhai, Allah Ta'ala aapko hamesha shad-o-aabaad rakhe. Chahe hum ek doosre se kitne bhi door hon, hamari dosti aur bhai-chara kabhi kamzor nahi hoga aur na hi kabhi tootegi. Tu mera woh azeez bhai hai jiske saath mujhe dili sukoon milta hai. Bhabhi ke sath hamesha hasti muskurati zindagi guzaro aur rab kare bohat jald shandaar mangni ho jaye! Insha'Allah hum bohat jald milenge!"
          </p>
          <p className="text-xs sm:text-sm text-slate-300 pt-1">
            I love you so much mere yaar — <strong className="text-amber-400 text-sm sm:text-base">Tera Sacha Bhai, Hassnain Ali 🫂❤️</strong>
          </p>
        </div>

        {/* Interactive Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-serif">
          <button
            onClick={() => {
              soundEngine.playSparkleSound();
              triggerMegaCelebration();
            }}
            className="px-7 py-3 text-sm font-bold text-slate-950 bg-gold-gradient rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Mazeed Aatishbazi Aur Jashn! 🎆</span>
          </button>

          <button
            onClick={handleShare}
            className="px-6 py-3 text-sm font-bold text-slate-200 bg-slate-900 border border-amber-500/40 hover:border-amber-400 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-amber-400" />
            <span>Surprise Link Share Karein 🔗</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-3 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Website Dekhein
          </button>
        </div>
      </div>
    </div>
  );
}

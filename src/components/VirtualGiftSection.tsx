import { useState, useEffect } from 'react';
import { Gift, Heart, Sparkles, Send, RotateCcw } from 'lucide-react';
import { triggerGiftOpeningExplosion, triggerGoldenFireworks, triggerHeartShower, triggerMegaCelebration } from '../utils/confetti';
import { soundEngine } from '../utils/audioEngine';

interface VirtualGiftSectionProps {
  onTriggerFinalSurprise: () => void;
}

export default function VirtualGiftSection({
  onTriggerFinalSurprise,
}: VirtualGiftSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRibbonUntying, setIsRibbonUntying] = useState(false);
  const [typedLetter, setTypedLetter] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  const letterLines = [
    "Mere Pyare Bhai Umair Ali ❤️,",
    "",
    "Yeh chhota sa tehfa mere us azeez bhai ke liye hai jo meri zindagi mein nihayat qadar-o-manzilat rakhta hai. Shayad main har baar lafzon mein apni dosti aur ehteraam bayan na kar sakun, lekin tu mere liye sirf aik dost nahi, mere sage bhaiyon se barh kar hai.",
    "",
    "Bhai, Allah Ta'ala aapko hamesha shad-o-aabaad aur hansi khushi rakhe! Aaj chahe hum aik doosre se door hain aur darmiyan meelon ke faaslay hain, lekin yaad rakhna hamari dosti kabhi kamzor nahi hogi aur na hi kabhi tootegi. Tu mera woh azeez bhai hai jiske saath baat karke aur dil ka haal bayan karke mujhe be-panah sukoon milta hai.",
    "",
    "Aur haan mere bhai, hamesha khush rehna bhabi ke sath! 😉❤️ Meri rab ke huzoor dil ki aakhri gehraiyon se dua hai ke Allah Ta'ala tujhe teri sachi mohabbat ata farmaye, teri uske saath bohat jald ba-barkat mangni aur shadi ho jaye aur tum dono hamesha hasti muskurati pur-masarrat zindagi guzaro! Ameen Summa Ameen! 💍✨",
    "",
    "Insha'Allah hum bohat jald aik doosre se milenge aur pehle se bhi zyada haseen yaadein banayenge. Duniya ka nizaam idhar se udhar ho sakta hai, lekin Hassnain Ali ki taraf se tere liye dua, izzat aur be-loos pyar hamesha qaaim rahega. I love you so much, mere bhai!",
    "",
    "Salgirah Bohat Bohat Mubarak Ho, Umair Janeman! Tu hamesha yunhi dilon ki ronaq bana rahe! ❤️🎂",
    "",
    "— I Love You, Tera Mukhlis Bhai Hassnain Ali 🫂❤️ (Hamesha Ke Liye)"
  ];

  const fullLetter = letterLines.join('\n');

  const handleOpenGift = () => {
    if (isOpen || isRibbonUntying) return;

    soundEngine.playSparkleSound();
    setIsRibbonUntying(true);

    setTimeout(() => {
      soundEngine.playGiftOpenSound();
      triggerGiftOpeningExplosion();
      triggerHeartShower();
      setTimeout(() => triggerMegaCelebration(), 400);
      setIsOpen(true);
      setIsRibbonUntying(false);
    }, 700);
  };

  const handleResetGift = () => {
    setIsOpen(false);
    setTypedLetter('');
    setIsTypingDone(false);
  };

  // Letter typing animation
  useEffect(() => {
    if (!isOpen) {
      setTypedLetter('');
      setIsTypingDone(false);
      return;
    }

    let i = 0;
    setTypedLetter('');
    setIsTypingDone(false);

    const interval = setInterval(() => {
      if (i < fullLetter.length) {
        setTypedLetter(fullLetter.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [isOpen, fullLetter]);

  return (
    <section id="gift" className="relative py-24 px-4 max-w-5xl mx-auto">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Header */}
      <div className="text-center space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-serif font-medium">
          <Gift className="w-4 h-4" />
          <span>Khaas Tohfa · Sirf Umair Ali Ke Liye</span>
          <Gift className="w-4 h-4" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-gold-gradient">
          Khaas Virtual Tohfa Aur Roohani Khat 🎁
        </h2>

        <p className="text-slate-300 max-w-lg mx-auto text-sm sm:text-base font-serif">
          Yeh sunehri ribbon mein lipta hua tehfa aapke liye tayar kiya gaya hai. Is par click karein aur andar chupa paigham dekhein.
        </p>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {!isOpen ? (
          /* Gift Box In Closed State */
          <div className="flex flex-col items-center space-y-6">
            <div
              onClick={handleOpenGift}
              className={`relative cursor-pointer group transition-all duration-500 ${
                isRibbonUntying ? 'scale-110 rotate-3' : 'hover:scale-105 active:scale-95'
              }`}
            >
              {/* Outer Golden Aura */}
              <div className="absolute -inset-4 rounded-3xl bg-amber-400/20 blur-xl group-hover:bg-amber-400/40 transition-all animate-pulse" />

              {/* Gift Box Card Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-amber-400 shadow-[0_20px_50px_rgba(212,175,55,0.4)]">
                <img
                  src="/src/assets/images/gift_luxury_box_gold_1792665712333.jpg"
                  alt="Luxury Golden Gift Box"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Sparkling lights overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-amber-500/10" />

                {/* Floating sparkle badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-amber-400/60 text-xs font-semibold font-serif text-amber-300 whitespace-nowrap flex items-center gap-2 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ribbon Kholne Ke Liye Click Karein</span>
                </div>
              </div>
            </div>

            {/* Instruction button */}
            <button
              onClick={handleOpenGift}
              className="px-8 py-4 text-base font-bold text-slate-950 bg-gold-gradient rounded-full shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:shadow-[0_0_55px_rgba(212,175,55,0.9)] hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2.5"
            >
              <Gift className="w-5 h-5 text-slate-950" />
              <span className="font-serif">Umair, Apna Gift Open Karo 🎁</span>
            </button>
          </div>
        ) : (
          /* Gift Box In Opened State: Secret Letter Revealed */
          <div className="w-full space-y-8 animate-fade-in">
            {/* The Secret Parchment Letter */}
            <div className="relative p-8 sm:p-12 rounded-3xl glass-card border border-amber-500/40 shadow-[0_20px_60px_rgba(212,175,55,0.3)] bg-gradient-to-b from-[#13110d] via-[#0d0f17] to-[#07080d]">
              {/* Top Seal */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-amber-500/30">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-slate-950 shadow-md">
                    <Heart className="w-5 h-5 fill-slate-950" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-amber-300">
                      Bhai Chare Ka Posheeda Khat
                    </h3>
                    <p className="text-[11px] text-slate-400 font-serif">Hassnain Ali Ki Taraf Se Azeez Bhai Ke Naam</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleResetGift}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-amber-300 hover:bg-slate-800/80 transition-colors"
                    title="Tohfa Dobara Band Karein"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Letter Body with typing animation */}
              <div className="whitespace-pre-line font-serif text-base sm:text-lg text-slate-100 leading-relaxed font-normal min-h-[16rem]">
                {typedLetter}
                {!isTypingDone && (
                  <span className="inline-block w-2 h-5 bg-amber-400 ml-1 animate-pulse" />
                )}
              </div>

              {/* Footer Quote */}
              <div className="mt-8 pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-300/80 gap-3 font-serif">
                <span className="italic">"Khoon ka nahi, rooh aur wafa ka rishta hai."</span>
                <span>Hassnain & Umair · Hamesha Ke Liye</span>
              </div>
            </div>

            {/* Final Glowing Button: "Ek Aur Surprise? ❤️" */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <button
                onClick={() => {
                  soundEngine.playSparkleSound();
                  triggerMegaCelebration();
                  onTriggerFinalSurprise();
                }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.7)] hover:shadow-[0_0_70px_rgba(212,175,55,1)] hover:scale-105 active:scale-95 transition-all cursor-pointer animate-pulse-glow"
              >
                <Sparkles className="w-5 h-5 text-slate-950 group-hover:rotate-45 transition-transform" />
                <span className="font-serif">Ek Aur Surprise? ❤️</span>
                <Send className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-slate-400 font-serif">
                Aakhri shandaar aatishbazi aur jashn dekhne ke liye click karein ✨
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

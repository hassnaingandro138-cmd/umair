import { Heart, Globe, Gem, Sparkles, MapPin, Smile } from 'lucide-react';
import { soundEngine } from '../utils/audioEngine';
import { triggerHeartShower, triggerMegaCelebration } from '../utils/confetti';

export default function SpecialDuasSection() {
  const handleWishBlessings = () => {
    soundEngine.playSparkleSound();
    triggerHeartShower();
    setTimeout(() => triggerMegaCelebration(), 250);
  };

  return (
    <section id="duas" className="relative py-16 sm:py-24 px-3 sm:px-6 max-w-6xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] sm:w-[700px] h-[300px] sm:h-[500px] bg-amber-500/10 blur-[180px] pointer-events-none" />

      {/* Section Header - Natural & Elegant */}
      <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-serif font-medium">
          <Globe className="w-4 h-4" />
          <span>Hassnain Ali Ki Taraf Se · Dili Jazbaat</span>
          <Globe className="w-4 h-4" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-gold-gradient">
          Dooriyan Chahe Kitni Bhi Hon 🌍❤️
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto text-xs sm:text-base font-serif px-2">
          Chahe hum ek doosre se kitne bhi door hon, hamara bhai-chara aur dosti hamesha qaim aur mazboot rahegi.
        </p>
      </div>

      {/* Hero Dedication Card: Long Distance & Sukoon */}
      <div className="relative mb-8 sm:mb-12 p-5 sm:p-10 rounded-3xl glass-card border border-amber-500/40 shadow-[0_20px_50px_rgba(212,175,55,0.2)] bg-gradient-to-br from-[#0c0e18] via-[#090b12] to-[#06070a]">
        {/* Top Floating Badge */}
        <div className="absolute -top-3.5 left-4 sm:left-8 px-3.5 sm:px-5 py-1 rounded-full bg-[#05060A] border border-amber-400/60 text-[11px] sm:text-xs font-serif text-amber-300 tracking-wider flex items-center gap-1.5 shadow-lg whitespace-nowrap">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Faasle Meelon Ke, Rishta Dilon Ka</span>
        </div>

        <div className="space-y-4 pt-3">
          <div className="text-center sm:text-left">
            <span className="text-rose-400 font-serif text-sm sm:text-base font-bold inline-flex items-center gap-1.5">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
              <span>I Love You, Mere Bhai!</span>
            </span>
          </div>

          <div className="space-y-2.5">
            <h3 className="font-serif text-base sm:text-2xl font-bold text-amber-200 leading-snug">
              "Bhai, Hamari Dosti Kabhi Kamzor Nahi Hogi Aur Na Hi Kabhi Tootegi"
            </h3>
            <p className="font-serif text-xs sm:text-base md:text-lg text-slate-100 leading-relaxed italic">
              "Bhai, Allah Ta'ala aapko hamesha shad-o-aabaad aur khush rakhe! Chahe aaj hum is waqt ek doosre se door hain aur darmiyan meelon ka faasla hai, lekin hamari dosti kabhi kamzor nahi hogi aur na hi kabhi tootegi. Tu mera woh azeez bhai hai jiske saath baat kar ke aur jiske saath waqt bita kar mujhe dili sukoon milta hai. I love you brother! Tu hamesha hasta rahe mere yaar. Insha'Allah hum bohat jald milenge! 🫂❤️"
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-serif font-bold text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Roohani Rishta Aur Yaqeen</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-serif">
              "Mukhlis rishtey faaslon ke mohtaaj nahi hote. Chahe waqt badle ya halaat, Hassnain ke dil mein Umair ke liye izzat, pyar aur dua hamesha pehle se barh kar rahegi. Tu mera fakhr hai mere bhai."
            </p>
          </div>

          {/* Signature */}
          <div className="pt-3 border-t border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-amber-300/90 gap-2 font-serif">
            <span className="font-medium text-slate-300">
              Tera Sacha Bhai: <strong className="text-amber-400 text-sm">Hassnain Ali</strong> 🫂
            </span>
            <span className="text-rose-400 font-bold">
              I Love You Always ❤️
            </span>
            <span className="text-slate-400 italic">
              "Insha'Allah Hum Bohat Jald Milenge"
            </span>
          </div>
        </div>
      </div>

      {/* Two Highlight Cards: Bhabhi & Sukoon */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {/* Bhabhi & Mangni Card */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-pink-500/30 hover:border-pink-400/60 transition-all shadow-[0_15px_40px_rgba(244,114,182,0.12)] bg-gradient-to-b from-[#140b12] to-[#070509] space-y-4 flex flex-col justify-between">
          <div className="space-y-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400 shadow-md">
              <Gem className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <h3 className="font-serif text-lg sm:text-2xl font-bold text-slate-100">
              Bhai Hamesha Khush Rehna Bhabhi Ke Sath! 😉❤️
            </h3>

            <p className="font-serif text-xs sm:text-base text-slate-200 leading-relaxed italic">
              "Mere pyare bhai, hamesha khush rehna bhabhi ke sath! Meri rab ke huzoor dil ki gehraiyon se dua hai ke Allah Ta'ala tujhe teri pasandida mohabbat ata farmaye, tere dil ke tamam nek armaan poore hon aur bohat jald teri uske saath mangni aur shadi ki barkatein dekhne ko milein! Tum dono ki jodi hamesha salamat aur khushiyon se aabaad rahe! Ameen Summa Ameen! 💍✨"
            </p>

            <div className="p-3.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-xs text-pink-200 font-serif leading-relaxed">
              "Dua hai ke aane wala har saal tumhare aangan mein nayi khushiyan aur mohabbat ki roshni laye, aur hum sab jald mangni ke jashn mein shareek hon!"
            </div>
          </div>

          <div className="pt-3 border-t border-pink-500/20 flex items-center justify-between text-xs text-pink-300 font-serif">
            <span>Dil Se Dua</span>
            <span>Hassnain Ki Taraf Se ❤️</span>
          </div>
        </div>

        {/* Sukoon Card */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-amber-500/30 hover:border-amber-400/60 transition-all shadow-[0_15px_40px_rgba(212,175,55,0.12)] bg-gradient-to-b from-[#141209] to-[#070604] space-y-4 flex flex-col justify-between">
          <div className="space-y-3.5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-md">
              <Smile className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <h3 className="font-serif text-lg sm:text-2xl font-bold text-slate-100">
              "Jiske Saath Mujhe Dili Sukoon Milta Hai"
            </h3>

            <p className="font-serif text-xs sm:text-base text-slate-200 leading-relaxed italic">
              "Umair, sach baat yeh hai ke tu mera woh bhai hai jiske saath guftagu kar ke dil ke tamam dukh aur thakan door ho jati hai aur be-panah sukoon milta hai. Teri dosti meri zindagi ka aik anmol tohfa hai. Rab kare teri aankhon mein kabhi aanso na aayein aur tu hamesha khilkhilata rahe!"
            </p>

            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 font-serif leading-relaxed">
              "Sacha dost woh hota hai jiske paas aate hi rooh ko itminan mile. Umair Ali, tu wahi sacha yaar aur qeemti bhai hai."
            </div>
          </div>

          <div className="pt-3 border-t border-amber-500/20 flex items-center justify-between text-xs text-amber-300 font-serif">
            <span>Pakiza Bhai Chara</span>
            <span>Sukoon-e-Qalb ✨</span>
          </div>
        </div>
      </div>

      {/* Blessings Grid - Clean & Natural */}
      <div className="p-5 sm:p-8 rounded-3xl glass-card border border-amber-500/30 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-amber-500/20">
          <div>
            <h3 className="font-serif text-lg sm:text-2xl font-bold text-gold-gradient">
              Umair Ali Ke Liye Dil Se Duaein 🤲✨
            </h3>
            <p className="text-xs text-slate-400 mt-0.5 font-serif">
              Hassnain Ali ki taraf se apne pyare bhai ke liye.
            </p>
          </div>

          <button
            onClick={handleWishBlessings}
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-gold-gradient rounded-xl hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Aameen Ya Rab 🤲</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-amber-500/25 space-y-1.5">
            <div className="text-amber-300 text-xs sm:text-sm font-serif font-bold flex items-center gap-1.5">
              <span>🤲 Sehat Aur Lambi Umar</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
              "Aye Allah, mere pyare bhai Umair ko daaimi tandrusti, aafiyat aur lambi ba-barkat zindagi ata farma."
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-amber-500/25 space-y-1.5">
            <div className="text-amber-300 text-xs sm:text-sm font-serif font-bold flex items-center gap-1.5">
              <span>🤲 Kamyabi Aur Bulandi</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
              "Allah Ta'ala tujhe har imtihaan aur har maqsad mein aala tareen sarfarazi ata farmaye aur izzat-o-waqar se nawaze."
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-pink-500/25 space-y-1.5">
            <div className="text-pink-300 text-xs sm:text-sm font-serif font-bold flex items-center gap-1.5">
              <span>💍 Bhabhi Ke Sath Khushiyan</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
              "Allah kare tujhe teri pasandida mohabbat naseeb ho, jald shandaar mangni ho, aur tu hamesha bhabhi ke sath hasti muskurati zindagi guzare!"
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-amber-500/25 space-y-1.5">
            <div className="text-amber-300 text-xs sm:text-sm font-serif font-bold flex items-center gap-1.5">
              <span>🤝 Hamari Hamesha Ki Dosti</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
              "Faaslay chahe hazaron meelon ke hon, Hassnain aur Umair ki yeh dosti qayamat tak aisi hi mazboot aur mehekti rahe!"
            </p>
          </div>
        </div>

        <div className="pt-2 text-center">
          <p className="font-serif text-xs sm:text-sm text-amber-200 font-bold italic">
            "Tu hamesha hasta rahe, aabaad rahe, mere bhai! — Hassnain Ali ❤️"
          </p>
        </div>
      </div>
    </section>
  );
}

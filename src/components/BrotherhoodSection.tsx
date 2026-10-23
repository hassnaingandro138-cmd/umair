import { Heart, Shield, Sparkles, Star, Users } from 'lucide-react';

export default function BrotherhoodSection() {
  const emotionalMessage =
    "Umair Ali, kuch dost zindagi mein sirf dost bankar nahi aate, balki sage bhai ban jaate hain. Tu unhi logon mein se hai. Tere saath guzara hua har lamha mere liye nihayat qeemti hai aur tu mera woh azeez bhai hai jiske saath baat kar ke mujhe dili sukoon milta hai. Chahe waqt badal jaye ya faaslay hon, hamari dosti kabhi kamzor nahi hogi aur na hi kabhi tootegi. Bhai, hamesha khush rehna bhabhi ke sath! Meri dil se dua hai ke Allah tujhe teri mohabbat ata kare, jald mangni ki khushiyan milein, aur Allah Ta'ala tujhe hamesha shad-o-aabaad aur har buri nazar se mahfooz rakhe. Insha'Allah hum bohat jald milenge! Salgirah Mubarak mere jaaneman bhai! I love you! ❤️🫂";

  const pillars = [
    {
      title: "Khoon Se Zyada Gehra Rishta",
      desc: "Khoon ka rishta qismat banati hai, lekin wafa, izzat aur be-loos muhabbat insaan ko sage bhaiyon se barh kar qareeb kar deti hai. Tu mera wahi azeez bhai hai.",
      icon: Users,
    },
    {
      title: "Faasle Dooriyan Nahi Ban Sakte",
      desc: "Dooriyan chahe kitni bhi hon, do mukhlis bhaiyon ka rishta kabhi kamzor nahi ho sakta. Hamara yeh bhai-chara waqt aur faaslon ki qaid se azaad hai.",
      icon: Shield,
    },
    {
      title: "Qalbi Sukoon Aur Hamesha Ki Khushiyan",
      desc: "Tu woh bhai hai jiske saath baat karke dil ko itminan aur sukoon milta hai. Dua hai ke Allah tujhe bhabhi ke sath daaimi khushiyan aur aala muqaam ata farmaye.",
      icon: Star,
    },
  ];

  return (
    <section id="brotherhood" className="relative py-16 sm:py-24 px-3 sm:px-6 max-w-6xl mx-auto">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[300px] sm:h-[400px] bg-amber-500/5 blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gold-gradient">
          Dosti Nahi, Bhai Chara Hai Apna ❤️
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto text-xs sm:text-base font-serif px-2">
          Hansi mazaq se lekar zindagi ke har mod par aik doosre ka sahara banne tak — yeh rishta hamesha ke liye hai.
        </p>
      </div>

      {/* Central Emotional Dedication Card */}
      <div className="relative mb-12 sm:mb-14 p-5 sm:p-12 rounded-3xl glass-card border border-amber-500/40 shadow-[0_15px_40px_-15px_rgba(212,175,55,0.25)] bg-gradient-to-br from-[#110e0a] via-[#0b0c14] to-[#06070a]">
        <div className="pt-2 pb-2 text-center">
          <span className="text-rose-400 font-serif text-sm sm:text-lg font-bold flex items-center justify-center gap-1.5">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
            <span>I Love You, Mere Bhai!</span>
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500 animate-pulse" />
          </span>
        </div>

        <blockquote className="font-serif text-sm sm:text-xl md:text-2xl text-slate-100 leading-relaxed text-center italic max-w-4xl mx-auto pt-2">
          "{emotionalMessage}"
        </blockquote>

        <div className="mt-6 pt-5 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-3 font-serif text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">Mukhatib:</span>
            <span className="text-slate-200">Umair Ali (Janeman)</span>
          </div>
          <div className="flex items-center gap-2 text-rose-400 font-bold">
            <span>Brotherhood Forever 🤝</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">From:</span>
            <span className="text-slate-200">Tera Bhai, Hassnain Ali 🫂❤️</span>
          </div>
        </div>
      </div>

      {/* 3 Pillars of Brotherhood */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <div
              key={i}
              className="p-5 sm:p-8 rounded-2xl glass-card glass-card-hover border border-amber-500/25 space-y-3 sm:space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-md">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-serif text-base sm:text-xl font-bold text-slate-100">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
                  {pillar.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

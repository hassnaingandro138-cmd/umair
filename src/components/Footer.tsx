import { Heart, ArrowUp, RefreshCw } from 'lucide-react';

interface FooterProps {
  onReplaySurprise: () => void;
}

export default function Footer({ onReplaySurprise }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-amber-500/20 bg-[#040508] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Monogram / Brand mark */}
        <div className="w-14 h-14 rounded-full border border-amber-500/40 bg-amber-500/10 flex items-center justify-center text-gold-gradient font-serif font-bold text-base shadow-[0_0_20px_rgba(212,175,55,0.25)]">
          H & U
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold-gradient">
            HAPPY BIRTHDAY UMAIR JANEMAN FROM YOUR BROTHER HASSNAIN ALI ❤️
          </h3>
          <p className="text-sm text-slate-300 font-serif font-light max-w-lg mx-auto leading-relaxed">
            "Bhai, Allah Ta'ala aapko bhabhi ke sath daaimi khushiyan aur aala muqaam ata farmaye. Faasle chahe hazaron meelon ke hon, dosti hamesha zinda rahegi. Insha'Allah hum bohat jald milenge!"
          </p>
        </div>

        {/* Clean metadata separator */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-amber-300/90 font-serif">
          <span>Hassnain Ali & Umair Ali</span>
          <span aria-hidden="true">·</span>
          <span>Salgirah Mubarak</span>
          <span aria-hidden="true">·</span>
          <span>Bhai Chara Hamesha Qaim</span>
          <span aria-hidden="true">·</span>
          <span>Insha'Allah Jald Mulaqat Hogi</span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-4 pt-2">
          <button
            onClick={onReplaySurprise}
            className="px-4 py-2 text-xs font-serif font-medium rounded-lg text-amber-300 border border-amber-500/30 hover:bg-amber-500/10 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Surprise Dobara Dekhein</span>
          </button>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            title="Ooper Jayein"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 border-t border-slate-900 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 font-serif">
          <span>Hassnain Ali Ki Taraf Se Apne Bhai Umair Ali Ke Liye Tohfa-e-Muhabbat</span>
          <span className="flex items-center gap-1 text-slate-300">
            Hamesha Tere Sath, Mere Bhai <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          </span>
        </div>
      </div>
    </footer>
  );
}

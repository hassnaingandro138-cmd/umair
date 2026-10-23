import { useState, useEffect } from 'react';
import { Camera, Eye, X, Upload, Sparkles, RefreshCw } from 'lucide-react';

export interface MemoryItem {
  id: string;
  title: string;
  category: 'favorite' | 'legend' | 'brotherhood';
  categoryLabel: string;
  image: string;
  caption: string;
  date: string;
  isCustom?: boolean;
}

const DEFAULT_MEMORIES: MemoryItem[] = [
  {
    id: 'mem-1',
    title: 'Sunehri Sham Aur Bhai Chara',
    category: 'brotherhood',
    categoryLabel: 'Bhai Chara Hamesha Zindabad 🤝',
    image: '/src/assets/images/memory_brotherhood_sunset_1792665712598.jpg',
    caption: 'Har safar aur har manzil par shana ba shana khade rehna. Dosti jo har mod par wafa nibhati hai.',
    date: '8 December Ki Yaadein',
  },
  {
    id: 'mem-2',
    title: 'Umair Ali — Shandaar Shakhsiyat',
    category: 'legend',
    categoryLabel: 'Umair Ali — The Legend 😎',
    image: '/src/assets/images/memory_legend_portrait_1792665711600.jpg',
    caption: 'Ba-waqar andaz, pur-waqar muskurahat aur sonay jaisa naram dil. Tu hamesha hamara fakhr rahega!',
    date: 'Haseen Lamhaat',
  },
  {
    id: 'mem-3',
    title: 'Mehfilein Aur Dilkash Qehqehe',
    category: 'favorite',
    categoryLabel: 'Meri Pasandida Yaadein 💖',
    image: '/src/assets/images/memory_celebration_vibes_1792665712728.jpg',
    caption: 'Late-night chai ki mehfilein, dil khol kar hansna aur woh be-takalluf batein jo zindagi bhar yaad rahengi.',
    date: 'Dil Ke Qareeb',
  },
  {
    id: 'mem-4',
    title: 'Har Mushkil Mein Aik Doosre Ka Sahara',
    category: 'brotherhood',
    categoryLabel: 'Bhai Chara Hamesha Zindabad 🤝',
    image: '/src/assets/images/memory_brotherhood_sunset_1792665712598.jpg',
    caption: 'Aik aisa bhai jis par ankh band karke yaqeen kiya ja sake. Lakhon mein aik hai mera bhai Umair.',
    date: 'Wafadari Ki Misaal',
  },
  {
    id: 'mem-5',
    title: 'Sab Se Alag, Sab Se Pyara',
    category: 'legend',
    categoryLabel: 'Umair Ali — The Legend 😎',
    image: '/src/assets/images/memory_legend_portrait_1792665711600.jpg',
    caption: 'Mehfil ki jaan aur yaaron ka yaar — Umair Ali apne shandaar andaz mein.',
    date: 'Anmol Lamha',
  },
  {
    id: 'mem-6',
    title: 'Khushiyon Ka Jashn Aur Duaein',
    category: 'favorite',
    categoryLabel: 'Meri Pasandida Yaadein 💖',
    image: '/src/assets/images/memory_celebration_vibes_1792665712728.jpg',
    caption: 'Dua hai ke aane wala har din aisi hi khushiyon aur muskurahaton se bhara rahe! Ameen.',
    date: 'Jashn-e-Muskurahat',
  },
];

const STORAGE_KEY = 'umair_birthday_memories_v2';

export default function MemoriesGallery() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'favorite' | 'legend' | 'brotherhood'>('all');
  const [memories, setMemories] = useState<MemoryItem[]>(DEFAULT_MEMORIES);
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryItem | null>(null);
  const [editingPhotoId, setEditingPhotoId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMemories(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const saveMemories = (newMemories: MemoryItem[]) => {
    setMemories(newMemories);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newMemories));
    } catch {
      // ignore
    }
  };

  const resetToDefault = () => {
    if (window.confirm("Kiya aap tamam tasaveer ko shuruati halat par reset karna chahte hain?")) {
      setMemories(DEFAULT_MEMORIES);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, photoId: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      if (base64) {
        const updated = memories.map((item) =>
          item.id === photoId ? { ...item, image: base64, isCustom: true } : item
        );
        saveMemories(updated);
        if (selectedPhoto && selectedPhoto.id === photoId) {
          setSelectedPhoto({ ...selectedPhoto, image: base64, isCustom: true });
        }
        setEditingPhotoId(null);
      }
    };
    reader.readAsDataURL(file);
  };

  const filteredMemories =
    activeCategory === 'all'
      ? memories
      : memories.filter((m) => m.category === activeCategory);

  return (
    <section id="memories" className="relative py-24 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-400 font-serif font-medium">
          <Camera className="w-4 h-4" />
          <span>Yaadgaar Lamhaat · Hassnain Aur Umair</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-gold-gradient">
          Yaadgaar Gallery 📸
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-serif">
          Hamare is khoobsoorat safar ki haseen yaadein. Aap kisi bhi tasveer par click kar ke apni aur Umair ki asal tasveer yahan upload kar sakte hain!
        </p>
      </div>

      {/* Interactive Category Filter Tabs in Professional Roman Urdu */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <div className="inline-flex p-1.5 rounded-xl bg-slate-900/80 border border-amber-500/20 backdrop-blur-md">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-serif font-medium rounded-lg transition-all ${
              activeCategory === 'all'
                ? 'bg-gold-gradient text-slate-950 font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Tamam Yaadein
          </button>
          <button
            onClick={() => setActiveCategory('favorite')}
            className={`px-4 py-2 text-xs sm:text-sm font-serif font-medium rounded-lg transition-all ${
              activeCategory === 'favorite'
                ? 'bg-gold-gradient text-slate-950 font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Meri Pasandida Yaadein 💖
          </button>
          <button
            onClick={() => setActiveCategory('legend')}
            className={`px-4 py-2 text-xs sm:text-sm font-serif font-medium rounded-lg transition-all ${
              activeCategory === 'legend'
                ? 'bg-gold-gradient text-slate-950 font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Umair Ali — The Legend 😎
          </button>
          <button
            onClick={() => setActiveCategory('brotherhood')}
            className={`px-4 py-2 text-xs sm:text-sm font-serif font-medium rounded-lg transition-all ${
              activeCategory === 'brotherhood'
                ? 'bg-gold-gradient text-slate-950 font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Bhai Chara Hamesha Zindabad 🤝
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredMemories.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl glass-card overflow-hidden border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(212,175,55,0.2)] flex flex-col"
          >
            {/* Image Container with 4:3 Ratio */}
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-900 cursor-pointer" onClick={() => setSelectedPhoto(item)}>
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                <div className="p-3 rounded-full bg-gold-gradient text-slate-950 shadow-lg transform group-hover:scale-110 transition-transform">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-amber-500/30 text-[11px] font-serif font-medium text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>{item.categoryLabel}</span>
              </div>

              {item.isCustom && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-emerald-500/90 text-slate-950 text-[10px] font-bold font-serif">
                  Asal Tasveer
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-300 line-clamp-2 leading-relaxed font-serif">
                  {item.caption}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-serif">
                <span>{item.date}</span>

                <button
                  onClick={() => setEditingPhotoId(item.id)}
                  className="hover:text-amber-300 font-medium flex items-center gap-1 transition-colors cursor-pointer"
                  title="Apni asal tasveer yahan lagayein"
                >
                  <Upload className="w-3 h-3 text-amber-400" />
                  <span>Tasveer Badlein</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Helper Footer for user */}
      <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-400 font-serif">
        <span className="flex items-center gap-1.5 text-amber-300/90">
          <Camera className="w-3.5 h-3.5" />
          Kiya aap apni aur Umair ki asal tasveer lagana chahte hain? Kisi bhi card par "Tasveer Badlein" par click karein!
        </span>
        <button
          onClick={resetToDefault}
          className="text-slate-500 hover:text-slate-300 underline flex items-center gap-1 cursor-pointer"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Shuruati Tasaveer Reset Karein</span>
        </button>
      </div>

      {/* Hidden File Input when clicking Replace Photo */}
      {editingPhotoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="glass-card max-w-md w-full p-6 sm:p-8 rounded-3xl border border-amber-500/50 space-y-5 animate-fade-in">
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-lg font-bold text-slate-100 flex items-center gap-2">
                <Upload className="w-4 h-4 text-amber-400" />
                <span>Asal Tasveer Lagayein</span>
              </h4>
              <button
                onClick={() => setEditingPhotoId(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 font-serif leading-relaxed">
              Apne mobile ya computer se apni aur Umair ki koi bhi shandaar tasveer muntakhib karein. Yeh tasveer fauran is frame mein lag jayegi!
            </p>

            <label className="border-2 border-dashed border-amber-500/40 hover:border-amber-400 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer bg-amber-500/5 hover:bg-amber-500/10 transition-colors">
              <Camera className="w-8 h-8 text-amber-400 animate-bounce" />
              <span className="text-xs font-serif font-bold text-slate-200">
                Tasveer Muntakhib Karne Ke Liye Yahan Click Karein
              </span>
              <span className="text-[10px] text-slate-400 font-mono">JPG, PNG, WebP Tasveer</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload(e, editingPhotoId)}
              />
            </label>

            <button
              onClick={() => setEditingPhotoId(null)}
              className="w-full py-2.5 text-xs font-serif text-slate-400 hover:text-white cursor-pointer"
            >
              Mansookh Karein (Cancel)
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl glass-card border border-amber-500/40 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title and Close */}
            <div className="p-4 sm:px-6 border-b border-amber-500/20 flex items-center justify-between bg-slate-950/70">
              <div className="flex items-center gap-2">
                <span className="font-serif text-sm sm:text-base font-bold text-amber-300">
                  {selectedPhoto.title}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-xs text-slate-400 font-serif">{selectedPhoto.categoryLabel}</span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Band Karein"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-res Image Preview */}
            <div className="relative max-h-[65vh] flex items-center justify-center bg-black overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Bottom Caption & Action */}
            <div className="p-4 sm:p-6 bg-slate-950/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-serif">
                  {selectedPhoto.caption}
                </p>
                <p className="text-[11px] text-amber-400/80 font-serif">
                  {selectedPhoto.date}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setEditingPhotoId(selectedPhoto.id);
                  }}
                  className="px-4 py-2 text-xs font-serif font-bold text-slate-950 bg-gold-gradient rounded-lg hover:brightness-110 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Tasveer Badlein</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

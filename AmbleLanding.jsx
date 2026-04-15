import React, { useState, useEffect } from 'react';
import { Search, Bell, User, Play, Info, ChevronRight, Home, TrendingUp, Monitor, Film } from 'lucide-react';

const AmbleLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ["All", "Movies", "Series", "Anime", "Variety", "K-Drama"];
  
  const movies = [
    { id: 1, title: "Stranger Things", year: "2024", quality: "4K", duration: "45m", thumb: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800" },
    { id: 2, title: "The Last Dance", year: "2023", quality: "HD", duration: "1h 20m", thumb: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800" },
    { id: 3, title: "Cyberpunk: Edge", year: "2024", quality: "4K", duration: "24m", thumb: "https://images.unsplash.com/photo-1542204172-3c1f81706fbd?q=80&w=800" },
    { id: 4, title: "Beyond The Stars", year: "2024", quality: "BlueRay", duration: "2h 15m", thumb: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800" },
    { id: 5, title: "Ocean's Echo", year: "2023", quality: "HD", duration: "1h 55m", thumb: "https://images.unsplash.com/photo-1505118380757-91f5f45d8de6?q=80&w=800" },
    { id: 6, title: "Neon Nights", year: "2024", quality: "4K", duration: "1h 40m", thumb: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 z-50 w-full flex items-center justify-between px-8 py-4 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10' : 'bg-gradient-to-b from-black/70 to-transparent'}`}>
        <div className="flex items-center gap-10">
          <h1 className="text-3xl font-black tracking-tighter text-blue-500 italic">AMBLE</h1>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {categories.map(cat => (
              <a key={cat} href="#" className="hover:text-blue-400 transition-colors">{cat}</a>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search movies, anime..." 
              className="bg-white/10 border border-white/5 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-64"
            />
          </div>
          <Bell className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center cursor-pointer">
            <User className="w-5 h-5" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[85vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Featured"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        
        <div className="relative h-full flex flex-col justify-center px-12 lg:px-24 max-w-3xl space-y-6">
          <div className="flex items-center gap-2 text-blue-400 font-bold tracking-widest text-xs uppercase">
            <TrendingUp className="w-4 h-4" /> Trending in Movies
          </div>
          <h2 className="text-6xl font-black leading-tight">Interstellar <br/><span className="text-blue-500">Voyage</span></h2>
          <p className="text-lg text-gray-300 leading-relaxed line-clamp-3">
            In a future where Earth is no longer habitable, a team of explorers must travel beyond our galaxy to find a new home for humanity among the stars.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105">
              <Play className="fill-current w-5 h-5" /> Watch Now
            </button>
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-lg font-bold transition-all">
              <Info className="w-5 h-5" /> More Info
            </button>
          </div>
        </div>
      </header>

      {/* Movie Grids */}
      <main className="px-8 lg:px-12 -mt-20 relative z-10 pb-20">
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Monitor className="text-blue-500 w-5 h-5" /> Recommended For You
            </h3>
            <a href="#" className="text-sm text-gray-400 hover:text-blue-500 flex items-center">
              View All <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {movies.map((movie) => (
              <div key={movie.id} className="group cursor-pointer">
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-white/5 transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-500/50">
                  <img src={movie.thumb} alt={movie.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/40">
                      <Play className="fill-current text-white w-6 h-6 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    <span className="bg-blue-600 text-[10px] font-black px-1.5 py-0.5 rounded uppercase">{movie.quality}</span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black to-transparent">
                    <p className="text-xs font-medium text-gray-300">{movie.duration}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <h4 className="text-sm font-bold truncate group-hover:text-blue-400 transition-colors">{movie.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{movie.year} • Action</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Second Row Example */}
        <section className="mt-16 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Film className="text-blue-500 w-5 h-5" /> New Releases
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
             {/* Reusing movie data for demo */}
            {[...movies].reverse().map((movie) => (
              <div key={`new-${movie.id}`} className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/5 transition-all group-hover:border-blue-500/50">
                  <img src={movie.thumb} alt={movie.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-3">
                  <h4 className="text-sm font-bold truncate">{movie.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AmbleLanding;
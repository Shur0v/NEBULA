
import React, { useState, useMemo } from 'react';
import { GameCard } from '../components/GameCard';
import { FilterChips } from '../components/FilterChips';
import { SearchInput } from '../components/SearchInput';
import { MOCK_GAMES } from '../constants';
import { Game } from '../types';

interface DiscoveryProps {
  onGameClick: (game: Game) => void;
}

export const Discovery: React.FC<DiscoveryProps> = ({ onGameClick }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const trendingGames = useMemo(() => MOCK_GAMES.slice(0, 5), []);
  const allOtherGames = useMemo(() => MOCK_GAMES.slice(5), []);

  const filteredGames = useMemo(() => {
    return MOCK_GAMES.filter(game => {
      const matchesCategory = activeCategory === 'all' || game.category === activeCategory;
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            game.developer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full pb-24 md:pb-16 relative">
      {/* Background atmosphere is now handled globally via CSS in index.html */}

      {/* Hero Header Section */}
      <header className="relative pt-12 pb-14 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="flex-grow space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#22103A]/60 backdrop-blur-xl border border-[#9B5CFF]/40 rounded-2xl text-[11px] font-black text-[#9B5CFF] uppercase tracking-[0.3em] shadow-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35E7FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#35E7FF]"></span>
              </span>
              NEBULA CORE: ONLINE
            </div>
            
            <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic">
                <span className="shimmer-text">NEBULA</span>
                <br/>
                <span className="text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">RETRO</span>
                </h1>
                <p className="text-white/60 text-lg md:text-2xl font-medium max-w-xl leading-relaxed">
                Experience the golden era re-imagined. 
                <span className="text-[#35E7FF] font-bold"> Fast. Immersive. Pixel-perfect.</span>
                </p>
            </div>
          </div>
          
          <div className="w-full lg:w-[450px] space-y-4">
             <div className="glass-panel p-6 rounded-3xl border-[#35E7FF]/20 shadow-[0_0_50px_rgba(53,231,255,0.1)]">
                <p className="text-[10px] font-black uppercase text-[#35E7FF] tracking-widest mb-3">Gateway Access</p>
                <SearchInput value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
             </div>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-12 space-y-20">
        
        {/* Navigation & Category Section */}
        <div className="sticky top-4 z-40 bg-[#07060A]/40 backdrop-blur-2xl px-6 py-4 rounded-3xl border border-white/5 shadow-2xl">
          <FilterChips activeCategory={activeCategory} onSelect={setActiveCategory} />
        </div>

        {/* Dynamic Display based on search/category */}
        {activeCategory === 'all' && searchQuery === '' ? (
          <>
            {/* Trending Now Horizontal Scroll */}
            <section className="space-y-10">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tighter flex items-center gap-4">
                        <span className="w-2 h-10 bg-gradient-to-b from-[#35E7FF] to-transparent rounded-full shadow-[0_0_15px_rgba(53,231,255,0.5)]"></span>
                        TRENDING NOW
                    </h2>
                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.4em] ml-6">Most Played This Cycle</p>
                </div>
                <button className="hidden sm:block px-6 py-2 glass-panel rounded-full text-[11px] font-black text-white hover:text-[#35E7FF] hover:border-[#35E7FF]/40 transition-all uppercase tracking-widest">
                  Global Rank
                </button>
              </div>
              <div className="flex gap-8 overflow-x-auto no-scrollbar pb-10 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x">
                {trendingGames.map(game => (
                  <div key={game.id} className="w-[240px] md:w-[280px] flex-shrink-0 snap-center">
                    <GameCard game={game} onClick={onGameClick} />
                  </div>
                ))}
              </div>
            </section>

            {/* Main Discovery Grid with Attractive Layout */}
            <section className="space-y-10">
              <div className="space-y-1">
                <h2 className="text-2xl md:text-4xl font-black text-white italic tracking-tighter flex items-center gap-4">
                    <span className="w-2 h-10 bg-gradient-to-b from-[#9B5CFF] to-transparent rounded-full shadow-[0_0_15px_rgba(155,92,255,0.5)]"></span>
                    THE ARCHIVE
                </h2>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.4em] ml-6">Curated Selection</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12">
                {allOtherGames.map(game => (
                  <GameCard key={game.id} game={game} onClick={onGameClick} />
                ))}
              </div>
            </section>
          </>
        ) : (
          /* Filtered Results View */
          <section className="space-y-10">
            <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter text-center md:text-left">
              DETECTION RESULTS: <span className="text-[#35E7FF]">{filteredGames.length}</span>
            </h2>
            {filteredGames.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-12">
                {filteredGames.map(game => (
                  <GameCard key={game.id} game={game} onClick={onGameClick} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-32 glass-panel rounded-[3rem] text-center px-8 border-[#FF3DF2]/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF3DF2]/5 to-transparent pointer-events-none"></div>
                <div className="w-24 h-24 mb-8 flex items-center justify-center bg-[#22103A] rounded-full text-5xl animate-bounce shadow-[0_0_50px_rgba(155,92,255,0.3)]">👾</div>
                <h3 className="text-3xl font-black text-white italic tracking-tighter">SIGNAL LOST</h3>
                <p className="text-white/50 mt-4 max-w-sm text-lg font-medium leading-relaxed">We scanned the sector but found no relics matching those coordinates.</p>
                <button 
                  onClick={() => {setActiveCategory('all'); setSearchQuery('');}}
                  className="mt-12 px-12 py-5 bg-gradient-to-r from-[#35E7FF] to-[#9B5CFF] text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(53,231,255,0.3)] hover:scale-105 transition-all"
                >
                  Return to Home Base
                </button>
              </div>
            )}
          </section>
        )}

        {/* Enhanced Promo Module with Intense Lighting */}
        <div className="relative group overflow-hidden p-[2px] rounded-[3rem] bg-gradient-to-r from-[#35E7FF] via-[#9B5CFF] to-[#FF3DF2] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="bg-[#07060A]/80 backdrop-blur-md p-10 md:p-16 rounded-[2.9rem] relative overflow-hidden flex flex-col lg:flex-row items-center gap-14">
            {/* Pulsing Light Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF3DF2]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#FF3DF2]/20 transition-all duration-[3s]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#35E7FF]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 text-center lg:text-left lg:flex-grow space-y-8">
              <div className="flex justify-center lg:justify-start">
                  <span className="px-5 py-2 bg-[#FF3DF2]/15 text-[#FF3DF2] text-xs font-black rounded-full border border-[#FF3DF2]/30 uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(255,61,242,0.2)]">
                    Ascension Protocol
                  </span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                UNLEASH THE <br/><span className="shimmer-text italic uppercase">PRO ARCHIVE</span>
              </h2>
              <p className="text-white/60 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
                Elevate your sessions with <span className="text-[#35E7FF] font-bold">4K Upscaling</span>, 
                <span className="text-[#9B5CFF] font-bold"> Cloud Save Syncing</span>, and 
                unlimited access to our <span className="text-[#FF3DF2] font-bold">VIP Gallery</span>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-8">
                <button className="w-full sm:w-auto px-12 py-5 bg-white text-[#07060A] rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.2)]">
                  Start Evolution
                </button>
                <button className="text-white/40 hover:text-white font-black text-xs uppercase tracking-[0.3em] transition-colors">
                  View Specs
                </button>
              </div>
            </div>

            <div className="relative w-full max-w-sm lg:max-w-md aspect-square glass-panel rounded-[3rem] border-white/20 p-12 flex items-center justify-center group-hover:border-[#35E7FF]/40 transition-all shadow-2xl">
              <div className="text-8xl md:text-9xl drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] animate-pulse">💎</div>
              <div className="absolute -top-6 -right-6 px-6 py-3 bg-[#35E7FF] rounded-2xl shadow-[0_0_30px_rgba(53,231,255,0.6)] animate-bounce border-2 border-white/20">
                <span className="text-[#07060A] font-black italic text-2xl tracking-tighter">ELITE</span>
              </div>
              {/* Decorative Rings */}
              <div className="absolute inset-4 border border-white/5 rounded-[2.5rem]"></div>
              <div className="absolute inset-8 border border-white/5 rounded-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

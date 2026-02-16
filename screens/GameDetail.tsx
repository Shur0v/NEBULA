
import React from 'react';
import { Game } from '../types';
import { Button } from '../components/Button';

interface GameDetailProps {
  game: Game;
  onBack: () => void;
  onPlay: (game: Game) => void;
}

export const GameDetail: React.FC<GameDetailProps> = ({ game, onBack, onPlay }) => {
  return (
    <div className="min-h-screen bg-[#07060A] animate-in fade-in duration-500 relative overflow-hidden">
      {/* Cinematic Hero Section */}
      <div className="relative h-[70vh] md:h-[85vh] w-full">
        {/* Deep Atmospheric Lighting Layers */}
        <div className="absolute inset-0">
          <img 
            src={game.coverImage} 
            className="w-full h-full object-cover opacity-40 scale-105" 
            alt={game.title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07060A] via-[#07060A]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#07060A] via-transparent to-[#07060A]/30"></div>
          
          {/* Accent Glows */}
          <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-[#35E7FF]/10 blur-[150px] rounded-full"></div>
          <div className="absolute top-0 left-0 w-[40vw] h-[40vh] bg-[#9B5CFF]/10 blur-[150px] rounded-full"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-20">
          <button 
            onClick={onBack}
            className="absolute top-12 left-6 md:left-12 flex items-center gap-3 text-white/40 hover:text-[#35E7FF] transition-all group"
          >
            <div className="p-2 glass-panel rounded-xl group-hover:border-[#35E7FF]/40 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
            </div>
            <span className="text-xs font-black uppercase tracking-[0.2em]">Return to Archive</span>
          </button>

          <div className="max-w-4xl space-y-10">
            <div className="flex items-center gap-4">
              <span className="px-4 py-1.5 bg-[#9B5CFF]/10 border border-[#9B5CFF]/40 rounded-2xl text-[10px] font-black text-[#9B5CFF] uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(155,92,255,0.2)]">
                {game.category} UNIT
              </span>
              <span className="text-white/40 text-xs font-black tracking-widest uppercase italic">{game.year} RELEASE</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
              {game.title}
            </h1>
            
            <p className="mt-8 text-lg md:text-2xl text-white/70 leading-relaxed max-w-2xl font-medium italic">
              {game.description}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <Button 
                variant="primary"
                size="xl" 
                className="px-16"
                onClick={() => onPlay(game)}
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                EXECUTE SESSION
              </Button>
              <Button 
                variant="secondary" 
                size="xl" 
                className="px-12"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                SYNC DATA
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Specs Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-20">
            <section className="space-y-10">
              <div className="flex items-center gap-4">
                  <span className="w-2 h-8 bg-[#35E7FF] rounded-full shadow-[0_0_15px_rgba(53,231,255,0.6)]"></span>
                  <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Hardware Configuration</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { label: 'Host System', value: game.metadata.platform, color: '#35E7FF' },
                  { label: 'Source Studio', value: game.developer, color: '#FFFFFF' },
                  { label: 'Architecture', value: `${game.metadata.bitDepth}-BIT`, color: '#9B5CFF' },
                  { label: 'Epoch', value: game.year, color: '#FFFFFF' },
                  { label: 'Interface', value: game.metadata.players, color: '#FFFFFF' },
                  { label: 'Quality Index', value: `RANK ${game.rating}`, color: '#FF3DF2' },
                ].map((spec, i) => (
                  <div key={i} className="glass-panel p-6 rounded-2xl border-white/5 group hover:border-white/20 transition-all">
                    <p className="text-[9px] text-white/30 uppercase font-black tracking-[0.3em] mb-2">{spec.label}</p>
                    <p className="text-white text-lg font-black tracking-tight" style={{ color: spec.color }}>{spec.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-10">
              <div className="flex items-center gap-4">
                  <span className="w-2 h-8 bg-[#FF3DF2] rounded-full shadow-[0_0_15px_rgba(255,61,242,0.6)]"></span>
                  <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Briefing Log</h3>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/60 text-xl leading-relaxed font-medium">
                    {game.description} 
                    <br/><br/>
                    This unit has been fully decoded for high-fidelity emulation. Experience raw performance with zero input lag and native upscaling. The Nebula Retro core ensures your progress is saved instantly across the cosmic cloud.
                </p>
              </div>
            </section>
          </div>

          <aside className="space-y-12">
            <div className="glass-panel p-8 rounded-[2.5rem] border-[#35E7FF]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#35E7FF]/10 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <h4 className="font-black text-white italic tracking-tighter text-xl mb-8 uppercase">Sector Rankings</h4>
              <div className="space-y-6">
                {[
                  { name: 'PHANTOM_PILOT', score: '1,240,500' },
                  { name: 'CYBER_WIZARD', score: '1,102,300' },
                  { name: 'PIXEL_STORM', score: '998,000' },
                  { name: 'NEON_KNIGHT', score: '940,200' },
                ].map((entry, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black text-white/20">0{i+1}</span>
                        <span className="text-white font-bold text-sm tracking-tight">{entry.name}</span>
                    </div>
                    <span className="text-[#35E7FF] font-mono font-black text-sm drop-shadow-[0_0_5px_rgba(53,231,255,0.4)]">{entry.score}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-4 glass-panel rounded-2xl text-[#35E7FF] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#35E7FF]/10 transition-all">
                Access Global Index
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

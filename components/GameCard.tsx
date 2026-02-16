
import React from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <div 
      onClick={() => onClick(game)}
      className="group relative flex flex-col w-full h-full cursor-pointer transition-all duration-200 ease-out transform hover:scale-[1.05]"
    >
      {/* Dynamic Background Glow Layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl bg-gradient-to-tr from-[#FF3DF2]/20 via-[#9B5CFF]/10 to-[#35E7FF]/20 -z-10 blur-2xl"></div>
      
      {/* Top Layer: Cover Image Container with Border Light Effect */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-[#140A24] group-hover:border-white/30 group-active:border-[#35E7FF] transition-all duration-200 shadow-2xl overflow-hidden">
        {/* Animated Border Rim Light on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
            <div className="absolute inset-0 border-[2px] border-[#35E7FF]/40 rounded-2xl"></div>
        </div>

        <img 
          src={game.coverImage} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* High-Contrast Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-30">
            {game.rating >= 4.9 && (
            <div className="px-2 py-0.5 bg-[#35E7FF] text-[#07060A] text-[9px] font-black rounded-md italic tracking-tighter uppercase shadow-[0_0_15px_rgba(53,231,255,0.8)]">
                G.O.A.T.
            </div>
            )}
            {game.isSponsored && (
            <div className="px-2 py-0.5 bg-[#FF3DF2] text-white text-[9px] font-black tracking-widest uppercase rounded-md shadow-[0_0_15px_rgba(255,61,242,0.8)]">
                ELITE
            </div>
            )}
        </div>

        {/* Floating Metadata with Glassmorphism */}
        <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 text-[9px] font-black text-white group-hover:text-[#35E7FF] group-hover:border-[#35E7FF]/30 transition-all z-30 tracking-[0.1em]">
          {game.metadata.bitDepth}-BIT ARCHITECTURE
        </div>
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Middle Layer: Content with Glowing Accents */}
      <div className="mt-4 flex flex-col flex-grow px-2">
        <h3 className="text-white text-base md:text-lg font-black tracking-tight line-clamp-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#35E7FF] group-hover:to-[#9B5CFF] transition-all duration-200">
          {game.title}
        </h3>
        
        {/* Bottom Layer: Meta Row */}
        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-white/40 font-bold tracking-wider">{game.year}</span>
            <span className="w-1 h-1 rounded-full bg-[#9B5CFF]/40"></span>
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{game.metadata.platform}</span>
          </div>
          <div className="flex items-center gap-1 text-[#35E7FF] text-xs font-black neon-text-cyan">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            {game.rating}
          </div>
        </div>
      </div>
    </div>
  );
};


import React, { useState, useEffect } from 'react';
import { Game } from '../types';

interface PlayerProps {
  game: Game;
  onExit: () => void;
}

export const Player: React.FC<PlayerProps> = ({ game, onExit }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Immersive HUD Overlay */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between px-6 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={onExit}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div>
            <span className="text-white font-bold text-sm">{game.title}</span>
            <span className="mx-2 text-white/20">|</span>
            <span className="text-white/40 text-xs font-mono">24:12:05 SESSION</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-1.5 bg-[#35E7FF]/10 border border-[#35E7FF]/30 rounded-lg text-[#35E7FF] text-xs font-bold hover:bg-[#35E7FF]/20">
            SAVE STATE
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg">
            <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 w-48 bg-[#22103A] rounded-full overflow-hidden mb-4">
            <div className="h-full bg-gradient-to-r from-[#35E7FF] to-[#9B5CFF] animate-progress w-full origin-left"></div>
          </div>
          <p className="text-[#35E7FF] font-mono text-[10px] tracking-widest uppercase">Initializing Core Architecture...</p>
        </div>
      ) : (
        <div className="w-full h-full max-w-[4/3] aspect-[4/3] relative flex items-center justify-center group">
          {/* Main Visualizer Mockup */}
          <div className="relative w-full max-w-5xl px-4 md:px-0">
             <div className="aspect-[4/3] bg-[#140A24] rounded-2xl border-4 border-[#22103A] shadow-[0_0_50px_rgba(155,92,255,0.2)] overflow-hidden flex items-center justify-center">
               <img 
                 src={game.coverImage} 
                 className="w-full h-full object-cover opacity-50 absolute inset-0 mix-blend-overlay" 
                 alt="game background" 
               />
               <div className="z-10 text-center">
                 <h2 className="text-3xl font-black text-white italic tracking-tighter mb-4">PRESS START</h2>
                 <p className="text-[#35E7FF] animate-pulse text-sm font-bold">READY PLAYER ONE</p>
               </div>
               
               {/* CRT Effect Overlay */}
               <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_100%),linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20"></div>
             </div>
          </div>
        </div>
      )}

      {/* Bottom Controls HUD */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black to-transparent flex items-center justify-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         <div className="flex gap-12 items-center text-white/40 text-[10px] font-bold tracking-widest uppercase">
           <div className="flex items-center gap-2"><span className="p-1 bg-white/10 rounded">B</span> CANCEL</div>
           <div className="flex items-center gap-2"><span className="p-1 bg-white/10 rounded">A</span> SELECT</div>
           <div className="flex items-center gap-2"><span className="p-1 bg-white/10 rounded">START</span> PAUSE</div>
         </div>
      </div>

      <style>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-progress {
          animation: progress 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

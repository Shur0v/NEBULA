
import React, { useState } from 'react';
import { Discovery } from './screens/Discovery';
import { GameDetail } from './screens/GameDetail';
import { Player } from './screens/Player';
import { Game } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'DISCOVERY' | 'DETAIL' | 'PLAYER'>('DISCOVERY');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const handleGameSelect = (game: Game) => {
    setSelectedGame(game);
    setCurrentScreen('DETAIL');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlay = (game: Game) => {
    setSelectedGame(game);
    setCurrentScreen('PLAYER');
  };

  const handleBack = () => {
    setCurrentScreen('DISCOVERY');
  };

  return (
    <div className="min-h-screen bg-transparent text-white">
      {currentScreen === 'DISCOVERY' && (
        <Discovery onGameClick={handleGameSelect} />
      )}
      
      {currentScreen === 'DETAIL' && selectedGame && (
        <GameDetail 
          game={selectedGame} 
          onBack={handleBack} 
          onPlay={handlePlay} 
        />
      )}

      {currentScreen === 'PLAYER' && selectedGame && (
        <Player 
          game={selectedGame} 
          onExit={() => setCurrentScreen('DETAIL')} 
        />
      )}

      {/* Persistent Bottom Nav (Mobile Only) */}
      {currentScreen === 'DISCOVERY' && (
        <nav className="fixed bottom-0 inset-x-0 h-16 bg-[#07060A]/90 backdrop-blur-xl border-t border-white/5 flex items-center justify-around md:hidden z-50">
          <button className="flex flex-col items-center gap-1 text-[#35E7FF]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/40">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            <span className="text-[10px] font-bold uppercase tracking-widest">Library</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/40">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span className="text-[10px] font-bold uppercase tracking-widest">Events</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/40">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FF3DF2] to-[#9B5CFF] border border-white/20"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Profile</span>
          </button>
        </nav>
      )}
    </div>
  );
};

export default App;

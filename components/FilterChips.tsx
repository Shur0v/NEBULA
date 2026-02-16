
import React from 'react';
import { CATEGORIES } from '../constants';

interface FilterChipsProps {
  activeCategory: string;
  onSelect: (id: string) => void;
}

export const FilterChips: React.FC<FilterChipsProps> = ({ activeCategory, onSelect }) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`
              flex-shrink-0 flex items-center gap-2 px-5 py-2 rounded-full border transition-all duration-200 text-sm font-medium
              ${isActive 
                ? 'bg-[#9B5CFF]/10 border-[#9B5CFF] text-[#FFFFFF] shadow-[0_0_10px_rgba(155,92,255,0.3)]' 
                : 'bg-[#22103A]/40 border-white/5 text-white/50 hover:border-white/20 hover:text-white/80'
              }
            `}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
};


import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className="relative w-full group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-white/40 group-focus-within:text-[#35E7FF] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        className="block w-full pl-11 pr-4 py-3.5 bg-[#140A24] border border-white/5 rounded-xl text-sm placeholder-white/30 text-white focus:outline-none focus:ring-2 focus:ring-[#35E7FF]/20 focus:border-[#35E7FF]/50 transition-all shadow-inner"
        placeholder="Search for pixel masterpieces..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

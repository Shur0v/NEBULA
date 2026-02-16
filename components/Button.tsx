
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-black uppercase tracking-widest transition-all duration-200 rounded-xl active:scale-95 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'relative overflow-hidden bg-gradient-to-r from-[#35E7FF] via-[#9B5CFF] to-[#FF3DF2] bg-[length:200%_auto] hover:bg-right text-white shadow-[0_0_30px_rgba(155,92,255,0.4)] hover:shadow-[0_0_40px_rgba(53,231,255,0.5)] transition-all duration-500',
    secondary: 'bg-[#22103A] text-[#FFFFFF] border border-[#9B5CFF]/40 hover:border-[#35E7FF] hover:bg-[#22103A]/80 hover:shadow-[0_0_20px_rgba(155,92,255,0.2)]',
    ghost: 'bg-transparent text-[#FFFFFF]/70 hover:text-[#FFFFFF] hover:bg-white/5'
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
    xl: 'px-10 py-5 text-base'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
      )}
    </button>
  );
};

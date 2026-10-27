import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Illuminated Brand Shield */}
      <div className="relative">
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
        <div
          className={`relative ${iconSizes[size]} rounded-xl bg-[#0a0f1d] border border-orange-500/50 flex items-center justify-center text-white font-mono font-black tracking-tighter shadow-xl overflow-hidden`}
        >
          {/* Subtle diagonal glossy highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-orange-400 to-amber-600 font-extrabold">
            HU
          </span>
          {/* Active status pip */}
          <span className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-black tracking-tight text-white ${textSizes[size]} leading-none flex items-center gap-1`}
        >
          <span>HUMAIZ</span>
          <span className="text-orange-500 font-mono">.</span>
          <span className="text-slate-300 font-medium tracking-normal text-xs font-mono uppercase bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
            DEV
          </span>
        </span>
        <span className="text-[10px] uppercase font-mono tracking-wider text-orange-400/90 font-semibold mt-1">
          WordPress & E-Commerce Lead
        </span>
      </div>
    </div>
  );
};

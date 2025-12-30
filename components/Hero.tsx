import React from 'react';
import { GOLD_NUGS_IMAGE } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center p-6 pb-2 animate-fade-in">
      <div className="relative w-full max-w-md mx-auto mb-6 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <img 
          src={GOLD_NUGS_IMAGE} 
          alt="UG VR Gold Nugs Pile" 
          className="relative w-48 h-48 md:w-64 md:h-64 object-contain mx-auto drop-shadow-[0_0_15px_rgba(255,215,0,0.3)] transform transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-500 mb-2 tracking-tight drop-shadow-sm uppercase">
        UG VR Generator <span className="text-white block text-xl md:text-3xl mt-2">2026 Edition</span>
      </h1>
      
      <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto font-medium">
        Unlock Premium <span className="text-yellow-400">Gold Nugs</span> & <span className="text-green-400">Rare Items</span> Instantly.
        <br />
        <span className="text-xs text-slate-500 mt-1 block">Official Server Status: <span className="text-green-500 font-bold animate-pulse">ONLINE</span></span>
      </p>
    </div>
  );
};

export default Hero;
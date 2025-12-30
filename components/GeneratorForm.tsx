import React from 'react';
import { UserState, DeviceType, NugAmount } from '../types';
import { DEVICES, NUG_AMOUNTS, RARE_ITEM_IMAGE } from '../constants';

interface GeneratorFormProps {
  state: UserState;
  setState: React.Dispatch<React.SetStateAction<UserState>>;
  onGenerate: () => void;
}

const GeneratorForm: React.FC<GeneratorFormProps> = ({ state, setState, onGenerate }) => {
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const toggleRareItems = () => {
    setState(prev => ({ ...prev, rareItems: !prev.rareItems }));
  };

  return (
    <div className="w-full max-w-md mx-auto bg-ug-card border border-slate-700/50 rounded-2xl p-6 shadow-2xl shadow-yellow-900/10 relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>

      <div className="space-y-5">
        
        {/* Username Input */}
        <div className="space-y-2">
          <label htmlFor="username" className="block text-sm font-bold text-slate-300 uppercase tracking-wider">
            Username / VR ID
          </label>
          <div className="relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
             </div>
             <input
              type="text"
              id="username"
              name="username"
              value={state.username}
              onChange={handleInputChange}
              placeholder="Enter your UG VR Username"
              className="block w-full pl-10 pr-3 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white placeholder-slate-600 transition-all outline-none font-mono"
            />
          </div>
        </div>

        {/* Device Selection */}
        <div className="space-y-2">
          <label htmlFor="device" className="block text-sm font-bold text-slate-300 uppercase tracking-wider">
            Platform
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
             </div>
            <select
              id="device"
              name="device"
              value={state.device}
              onChange={handleInputChange}
              className="block w-full pl-10 pr-3 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white appearance-none transition-all outline-none font-mono"
            >
              {DEVICES.map(d => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Nugs Amount */}
        <div className="space-y-2">
          <label htmlFor="nugs" className="block text-sm font-bold text-slate-300 uppercase tracking-wider">
            Gold Nugs Amount
          </label>
          <div className="relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-yellow-500 font-bold text-lg">$</span>
             </div>
            <select
              id="nugs"
              name="nugs"
              value={state.nugs}
              onChange={handleInputChange}
              className="block w-full pl-10 pr-3 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-yellow-400 font-bold appearance-none transition-all outline-none font-mono"
            >
              {NUG_AMOUNTS.map(n => (
                <option key={n.value} value={n.value}>{n.label}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Rare Items Selector */}
        <div 
          onClick={toggleRareItems}
          className={`cursor-pointer group relative rounded-xl border-2 transition-all duration-300 overflow-hidden ${state.rareItems ? 'border-yellow-500 bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.2)]' : 'border-slate-700 bg-slate-800/50 hover:border-slate-500'}`}
        >
          <div className="p-3 flex items-center space-x-4">
            <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-black/50 border border-slate-600">
              <img src={RARE_ITEM_IMAGE} alt="Rare Dinosaur Egg" className="w-full h-full object-cover" />
              {state.rareItems && (
                <div className="absolute inset-0 bg-yellow-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-400 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3 className={`text-sm font-bold uppercase ${state.rareItems ? 'text-yellow-400' : 'text-slate-300'}`}>Add Rare Items</h3>
              <p className="text-xs text-slate-400">Includes Legendary Dinosaur Eggs & Skins</p>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${state.rareItems ? 'border-yellow-500 bg-yellow-500' : 'border-slate-600'}`}>
              {state.rareItems && <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={onGenerate}
          disabled={!state.username || state.username.length < 3}
          className={`w-full py-4 px-6 rounded-lg font-black uppercase tracking-widest text-lg shadow-lg transform transition-all duration-200 
            ${!state.username || state.username.length < 3 
              ? 'bg-slate-700 text-slate-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-500 text-black hover:scale-[1.02] hover:shadow-yellow-500/30 active:scale-95'
            }`}
        >
          Generate Now
        </button>

      </div>
    </div>
  );
};

export default GeneratorForm;
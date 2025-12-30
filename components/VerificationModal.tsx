import React from 'react';

// Declare the CPA function on window
declare global {
  interface Window {
    _KB: () => void;
  }
}

const VerificationModal: React.FC = () => {
  const handleVerify = () => {
    if (typeof window._KB === 'function') {
      window._KB();
    } else {
      console.error("CPA Locker script not loaded.");
      alert("Verification system is initializing... please try again in a few seconds.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-ug-card border-2 border-red-500/50 rounded-2xl p-8 shadow-[0_0_50px_rgba(239,68,68,0.2)] text-center animate-pulse-fast relative z-10">
      
      <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30">
        <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>

      <h2 className="text-2xl font-black text-white uppercase mb-2">Human Verification Required</h2>
      <p className="text-slate-400 mb-6 text-sm">
        To prevent bot abuse and protect the UG VR economy, we require a quick manual verification to release your Gold Nugs.
      </p>

      <button
        onClick={handleVerify}
        className="w-full py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold text-lg uppercase tracking-widest rounded-lg shadow-lg transform transition hover:scale-105 animate-bounce"
      >
        Verify Now
      </button>

      <div className="mt-4 text-xs text-slate-500">
        Time remaining: <span className="text-red-400 font-mono">04:59</span>
      </div>
    </div>
  );
};

export default VerificationModal;
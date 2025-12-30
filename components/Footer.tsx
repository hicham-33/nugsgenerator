import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-20 py-8 border-t border-slate-900 bg-black text-center">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-slate-600 text-xs leading-relaxed">
          Disclaimer: This site is a fan-made tool and is not affiliated with, endorsed by, or connected to UG VR or its developers. 
          All trademarks, images, and game content are property of their respective owners. This page is for educational purposes only.
        </p>
        <p className="text-slate-700 text-xs mt-4">
          &copy; 2026 UG VR Tools. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
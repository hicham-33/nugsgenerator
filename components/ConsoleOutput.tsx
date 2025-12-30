import React, { useEffect, useState, useRef } from 'react';
import { UserState } from '../types';

interface ConsoleOutputProps {
  state: UserState;
  onComplete: () => void;
}

const ConsoleOutput: React.FC<ConsoleOutputProps> = ({ state, onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sequence = [
      { text: `Connecting to UG VR Server (Port 8080)...`, delay: 500 },
      { text: `Connection established. Latency: 24ms`, delay: 1500 },
      { text: `Authenticating user: ${state.username}...`, delay: 2500 },
      { text: `User ${state.username} verified on ${state.device}.`, delay: 3500 },
      { text: `Accessing database...`, delay: 4500 },
      { text: `Injecting ${state.nugs} Gold Nugs...`, delay: 6000 },
      ...(state.rareItems ? [{ text: `Decrypting Rare Item table (Dino_Eggs_Legendary)...`, delay: 7500 }, { text: `Rare Item selected: Obsidian Rex Egg`, delay: 8500 }] : []),
      { text: `Finalizing transaction...`, delay: state.rareItems ? 9500 : 7500 },
      { text: `Cleaning up trace logs...`, delay: state.rareItems ? 10500 : 8500 },
      { text: `Manual Verification Required.`, delay: state.rareItems ? 11500 : 9500 },
    ];

    let timeouts: ReturnType<typeof setTimeout>[] = [];

    // Progress bar animation
    const duration = state.rareItems ? 11500 : 9500;
    const interval = 50;
    const step = 100 / (duration / interval);
    
    const progressTimer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return p + step;
      });
    }, interval);

    // Log sequence
    sequence.forEach(({ text, delay }) => {
      const timeout = setTimeout(() => {
        setLogs(prev => [...prev, text]);
        // Scroll to bottom
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, delay);
      timeouts.push(timeout);
    });

    const completionTimeout = setTimeout(() => {
      onComplete();
    }, duration + 500);
    timeouts.push(completionTimeout);

    return () => {
      clearInterval(progressTimer);
      timeouts.forEach(clearTimeout);
    };
  }, [state, onComplete]);

  return (
    <div className="w-full max-w-md mx-auto bg-black border border-slate-700 rounded-xl p-4 shadow-2xl relative overflow-hidden font-mono text-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-slate-500 text-xs">root@ugvr-server:~#</div>
      </div>

      {/* Logs */}
      <div ref={scrollRef} className="h-48 overflow-y-auto space-y-1 mb-4 scroll-smooth">
        {logs.map((log, index) => (
          <div key={index} className="text-green-400 break-words">
            <span className="text-slate-500 mr-2">[{new Date().toLocaleTimeString()}]</span>
            <span className={log.includes('Verification') ? 'text-red-500 font-bold animate-pulse' : ''}>{log}</span>
          </div>
        ))}
        <div className="animate-pulse text-green-500">_</div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
        <div 
          className="bg-yellow-500 h-2.5 rounded-full transition-all duration-100 ease-out" 
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>
      <div className="text-right text-xs text-slate-400 mt-1">{Math.round(progress)}% Complete</div>
    </div>
  );
};

export default ConsoleOutput;
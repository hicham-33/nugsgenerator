import React, { useEffect, useState } from 'react';
import { RECENT_ACTIVITY } from '../constants';

const SocialProof: React.FC = () => {
  const [activities, setActivities] = useState(RECENT_ACTIVITY);

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      const names = ["JudeVR", "QuestKing", "DinoMaster", "GoldHunter", "ProGamer123", "VR_Legend"];
      const amounts = ["1000", "2500", "5000", "9999"];
      
      const newActivity = {
        user: names[Math.floor(Math.random() * names.length)],
        amount: amounts[Math.floor(Math.random() * amounts.length)],
        time: "Just now"
      };

      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-12 bg-ug-card/50 border border-slate-800 rounded-xl p-4">
      <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3 flex items-center">
        <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
        Live Activity Feed
      </h3>
      <div className="space-y-3">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex justify-between items-center text-sm animate-fade-in-up">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold text-slate-300">
                {activity.user.charAt(0)}
              </div>
              <div>
                <span className="block text-slate-200 font-medium">{activity.user}</span>
                <span className="block text-slate-500 text-xs">{activity.time}</span>
              </div>
            </div>
            <div className="text-yellow-400 font-bold font-mono">
              +{activity.amount} Nugs
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;
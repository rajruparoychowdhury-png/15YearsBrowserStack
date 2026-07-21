import React from "react";
import { motion } from "motion/react";

interface LandingProps {
  onStart: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="w-full text-center space-y-8 py-8">
      <div className="flex justify-center mb-4">
        {/* Flat Cake Illustration with Transparent BG */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-64 h-64"
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Cake Stand */}
            <path d="M40 165 C 40 165, 40 175, 100 175 C 160 175, 160 165, 160 165 Z" fill="#cbd5e1"/>
            <rect x="90" y="165" width="20" height="20" fill="#94a3b8" />
            <ellipse cx="100" cy="165" rx="70" ry="10" fill="#e2e8f0"/>
            
            {/* Base Layer of Cake */}
            <rect x="45" y="110" width="110" height="45" rx="4" fill="#fbcfe8"/>
            <path d="M45 130 Q 72.5 140, 100 130 T 155 130" fill="none" stroke="#f472b6" strokeWidth="6"/>
            {/* Middle Layer of Cake */}
            <rect x="55" y="75" width="90" height="35" rx="4" fill="#ddd6fe"/>
            <path d="M55 90 Q 77.5 98, 100 90 T 145 90" fill="none" stroke="#a78bfa" strokeWidth="6"/>
            
            {/* Sprinkles */}
            <circle cx="65" cy="120" r="2.5" fill="#60a5fa" />
            <circle cx="85" cy="135" r="2.5" fill="#f472b6" />
            <circle cx="115" cy="122" r="2.5" fill="#f59e0b" />
            <circle cx="135" cy="138" r="2.5" fill="#a78bfa" />
            <circle cx="80" cy="88" r="2" fill="#34d399" />
            <circle cx="120" cy="85" r="2" fill="#f472b6" />

            {/* Birthday Candle 1 (Left) */}
            <rect x="75" y="45" width="6" height="30" rx="1" fill="#bfdbfe"/>
            <path d="M75 52 L 81 55 M 75 62 L 81 65" stroke="#60a5fa" strokeWidth="2"/>
            
            {/* Flame Left */}
            <path d="M78 28 C 75 38, 81 42, 78 45 C 85 42, 81 38, 78 28 Z" fill="#f59e0b" className="animate-pulse"/>
            <path d="M78 33 C 76 38, 80 40, 78 42 C 82 40, 80 38, 78 33 Z" fill="#ef4444" className="animate-pulse"/>

            {/* Birthday Candle 2 (Middle) */}
            <rect x="97" y="45" width="6" height="30" rx="1" fill="#bfdbfe"/>
            <path d="M97 52 L 103 55 M 97 62 L 103 65" stroke="#60a5fa" strokeWidth="2"/>
            
            {/* Flame Middle */}
            <path d="M100 28 C 97 38, 103 42, 100 45 C 107 42, 103 38, 100 28 Z" fill="#f59e0b" className="animate-pulse"/>
            <path d="M100 33 C 98 38, 102 40, 100 42 C 104 40, 102 38, 100 33 Z" fill="#ef4444" className="animate-pulse"/>

            {/* Birthday Candle 3 (Right) */}
            <rect x="119" y="45" width="6" height="30" rx="1" fill="#bfdbfe"/>
            <path d="M119 52 L 125 55 M 119 62 L 125 65" stroke="#60a5fa" strokeWidth="2"/>
            
            {/* Flame Right */}
            <path d="M122 28 C 119 38, 125 42, 122 45 C 129 42, 125 38, 122 28 Z" fill="#f59e0b" className="animate-pulse"/>
            <path d="M122 33 C 120 38, 124 40, 122 42 C 126 40, 124 38, 122 33 Z" fill="#ef4444" className="animate-pulse"/>

            {/* "15" Signboard badge on cake */}
          </svg>
        </motion.div>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-950 tracking-tight leading-tight mb-8">
          15 years of BrowserStack.<br />
          <span className="text-[36px] text-[#616d88]">15 years of celebrating the QA community.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 font-medium mb-2">
          Which QA persona are you?
        </p>
      </div>

      <div className="pt-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="gradient-accent text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-95 transition-all glow-hover touch-manipulation"
        >
          Start Assessment
        </motion.button>
      </div>
    </div>
  );
};

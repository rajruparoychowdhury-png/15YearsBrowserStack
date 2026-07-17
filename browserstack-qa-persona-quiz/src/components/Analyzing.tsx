import React, { useEffect, useState } from "react";

// @ts-ignore
import gemImg from "../assets/images/Gem.png";

interface AnalyzingProps {
  onComplete: () => void;
}

export const Analyzing: React.FC<AnalyzingProps> = ({ onComplete }) => {
  const [subtext, setSubtext] = useState("Mapping operational signals...");

  useEffect(() => {
    const statements = [
      "De-serializing your operational traits...",
      "Running tie-break verification pipelines...",
      "Synthesizing customized structural metrics...",
      "Compiling your ultimate QA superpower card..."
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < statements.length) {
        setSubtext(statements[i]);
        i++;
      }
    }, 600);

    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="w-full text-center py-16 space-y-8 flex flex-col items-center justify-center">
      <div className="relative flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-indigo-500"></div>
        <img 
          src={gemImg} 
          alt="BrowserStack Gem" 
          className="absolute w-14 h-14 object-contain animate-pulse select-none" 
          referrerPolicy="no-referrer" 
        />
      </div>
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-indigo-950">Analyzing Your QA Superpower...</h2>
        <p className="text-slate-500 max-w-sm mx-auto animate-pulse">
          {subtext}
        </p>
      </div>
    </div>
  );
};


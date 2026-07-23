import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import html2canvas from "html2canvas-pro";
import { ResultCard } from "./ResultCard";
import { PERSONAS } from "../data/quizData";

interface ResultProps {
  name: string;
  personaId: keyof typeof PERSONAS;
  onReset: () => void;
}

export const Result: React.FC<ResultProps> = ({ name, personaId, onReset }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCopied, setIsCopied] = useState(false);
  const persona = PERSONAS[personaId];

  // Pick a randomized variation once on mount
  const [variant] = useState(() => {
    const variations = persona.variations || [{ subtitle: "The Specialist", quote: "Excellence in testing." }];
    const randIndex = Math.floor(Math.random() * variations.length);
    return variations[randIndex];
  });

  useEffect(() => {
    // Fire confetti on load
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f472b6', '#a78bfa', '#60a5fa']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f472b6', '#a78bfa', '#60a5fa']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3, // very high resolution
        backgroundColor: null,
        useCORS: true,
      });
      const blob: Blob | null = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
      if (!blob) throw new Error("Failed to generate image blob");
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = `BrowserStack-QA-Superpower-${name.replace(/\s+/g, '-')}.png`;
      link.href = blobUrl;
      link.click();
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const testURL = window.location.href.split('#')[0];
  const shareText = `I just found out my QA Superpower is ${persona.title} on BrowserStack's 15th Birthday Persona Quiz! 🚀 Find yours too: ${testURL} #15YearsofBrowserStack`;

  const handleCopy = async () => {
    const fallbackCopy = () => {
      const textarea = document.createElement("textarea");
      textarea.value = shareText;
      // Keep it in the viewport (off-screen elements are ignored by iOS Safari's copy command)
      textarea.style.position = "fixed";
      textarea.style.top = "0";
      textarea.style.left = "0";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      let succeeded = false;
      try {
        succeeded = document.execCommand("copy");
      } catch {
        succeeded = false;
      }
      document.body.removeChild(textarea);
      return succeeded;
    };

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareText);
        setIsCopied(true);
      } else if (fallbackCopy()) {
        setIsCopied(true);
      }
    } catch {
      if (fallbackCopy()) {
        setIsCopied(true);
      }
    } finally {
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(testURL)}&text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'width=600,height=530');
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-start my-4">
      {/* Shareable Digital Card (Left / Top Column) */}
      <div className="md:col-span-5 flex flex-col items-center">
        <ResultCard ref={cardRef} name={name} personaId={personaId} variant={variant} />
        
        <button 
          onClick={handleDownload}
          className="mt-6 flex items-center gap-2 bg-indigo-950 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-900 transition-colors shadow-md text-sm touch-manipulation"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
          Download Digital Card
        </button>
      </div>

      {/* Explanation & Social Share Panel (Right / Bottom Column) */}
      <div className="md:col-span-7 space-y-6">
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4 text-left">
          <div className="space-y-1">
            <h2 className="text-3xl font-black text-indigo-950">
              {persona.title}
            </h2>
          </div>
          
          <p className="text-slate-600 leading-relaxed text-base">
            {persona.description}
          </p>

          <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100/50 space-y-2">
            <h4 className="font-semibold text-indigo-950 text-sm">Core Drivers</h4>
            <p className="text-sm text-slate-600">
              {persona.superpower}
            </p>
          </div>
        </div>

        {/* Share Segment */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4 text-left">
          <h3 className="font-bold text-indigo-950 text-base flex items-center gap-2">
            <span>Share Your Superpower on LinkedIn!</span>
          </h3>
          <p className="text-xs text-slate-500">
            Celebrate BrowserStack's 15th Birthday by sharing your verified QA persona with your professional network.
          </p>
          
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs text-slate-600 font-mono relative pr-12 break-words">
            <span>{shareText}</span>
            <button 
              onClick={handleCopy} 
              className="absolute right-3 top-3 text-indigo-500 hover:text-indigo-700 transition-colors" 
              title="Copy Text"
            >
              {isCopied ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                </svg>
              )}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={shareOnLinkedIn} 
              className="flex-1 gradient-accent text-white py-3 px-6 rounded-xl font-bold hover:opacity-95 transition-opacity text-center text-sm flex items-center justify-center gap-2 shadow-md touch-manipulation"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              Share on LinkedIn
            </button>
            <button 
              onClick={onReset} 
              className="sm:w-auto px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors text-sm touch-manipulation"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

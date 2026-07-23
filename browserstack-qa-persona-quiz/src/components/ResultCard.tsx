import React, { forwardRef } from "react";
import { PERSONAS } from "../data/quizData";

// @ts-ignore
import logoImg from "../assets/images/logo.png";
// @ts-ignore
import oracleImg from "../assets/images/oracle_illustration_1784291876387.jpg";
// @ts-ignore
import guardianImg from "../assets/images/guardian_illustration_1784291893532.jpg";
// @ts-ignore
import pathfinderImg from "../assets/images/pathfinder_illustration_1784291919991.jpg";
// @ts-ignore
import architectImg from "../assets/images/architect_illustration_1784291937165.jpg";
// @ts-ignore
import diplomatImg from "../assets/images/diplomat_illustration_1784291950294.jpg";
// @ts-ignore
import detectiveImg from "../assets/images/detective_illustration_1784291963370.jpg";
// @ts-ignore
import catalystImg from "../assets/images/catalyst_illustration_1784291977682.jpg";

const PERSONA_IMAGES: Record<string, string> = {
  oracle: oracleImg,
  guardian: guardianImg,
  pathfinder: pathfinderImg,
  architect: architectImg,
  diplomat: diplomatImg,
  detective: detectiveImg,
  catalyst: catalystImg,
};

interface ResultCardProps {
  name: string;
  personaId: keyof typeof PERSONAS;
  variant: { subtitle: string; quote: string };
}

export const ResultCard = forwardRef<HTMLDivElement, ResultCardProps>(({ name, personaId, variant }, ref) => {
  const persona = PERSONAS[personaId];
  const imageUrl = PERSONA_IMAGES[personaId];

  return (
    <div 
      ref={ref}
      className="w-full max-w-[320px] aspect-[4/5.4] rounded-2xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between text-indigo-950 gradient-card border-4 border-white select-none bg-white"
    >
      {/* Card Border/Accent Gradient */}
      <div className="absolute top-0 left-0 w-full h-2 gradient-accent"></div>
      
      {/* Top Row: BrowserStack Branding */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[10px] tracking-widest text-slate-400 font-bold">Your QA Archetype</p>
          <p className="text-xs font-bold text-indigo-900 tracking-tight">SUPERPOWER</p>
        </div>
        <img src={logoImg} alt="BrowserStack" className="h-6 object-contain mt-1" referrerPolicy="no-referrer" />
      </div>

      {/* Graphic (Render the cute chibi human illustration with fallback to SVG) */}
      <div className="flex justify-center items-center my-2 flex-grow h-40 overflow-hidden rounded-xl">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={persona.title} 
            className="w-full h-full max-h-[160px] object-contain select-none mix-blend-multiply scale-105" 
            referrerPolicy="no-referrer"
          />
        ) : (
          <svg 
            viewBox="0 0 200 200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-full max-h-[160px]"
            dangerouslySetInnerHTML={{ __html: persona.svgPath || "" }}
          />
        )}
      </div>

      {/* Middle Text Area */}
      <div className="text-center space-y-1">
        <h3 className="text-3xl font-black text-indigo-900 leading-tight">
          {persona.title}
        </h3>
      </div>

      {/* Card Bottom: User Name and URL */}
      <div className="border-t border-slate-200/60 pt-2.5 mt-2 flex flex-col items-center justify-center text-center">
        <p id="card-user-name" className="text-lg font-black text-indigo-950 truncate max-w-full leading-normal pt-1 pb-1">
          {name}
        </p>
        <div className="w-full border-t border-slate-200/60 my-2"></div>
        <p className="text-[10px] font-normal text-slate-600 pt-0.5">
          #15YearsofBrowserStack
        </p>
      </div>
    </div>
  );
});

ResultCard.displayName = "ResultCard";

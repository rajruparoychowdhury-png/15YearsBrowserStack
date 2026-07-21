/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Landing } from "./components/Landing";
import { NamePopup } from "./components/NamePopup";
import { Quiz } from "./components/Quiz";
import { Analyzing } from "./components/Analyzing";
import { Result } from "./components/Result";
import { TIE_BREAKER_ORDER, PERSONAS } from "./data/quizData";
// @ts-ignore
import logoImg from "./assets/images/logo.png";

type AppState = "landing" | "quiz" | "analyzing" | "result";

export default function App() {
  const [appState, setAppState] = useState<AppState>("landing");
  const [isNamePopupOpen, setIsNamePopupOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [personaResult, setPersonaResult] = useState<keyof typeof PERSONAS | null>(null);

  const handleStartClick = () => {
    setIsNamePopupOpen(true);
  };

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setIsNamePopupOpen(false);
    setAppState("quiz");
  };

  const calculateResult = (answers: string[]) => {
    // Count frequencies
    const counts: Record<string, number> = {};
    answers.forEach((persona) => {
      counts[persona] = (counts[persona] || 0) + 1;
    });

    // Find the max count
    let maxCount = 0;
    for (const count of Object.values(counts)) {
      if (count > maxCount) maxCount = count;
    }

    // Find all personas with max count
    const topPersonas = Object.keys(counts).filter((p) => counts[p] === maxCount);

    // Apply tie breaker
    let finalPersona = topPersonas[0];
    if (topPersonas.length > 1) {
      for (const p of TIE_BREAKER_ORDER) {
        if (topPersonas.includes(p)) {
          finalPersona = p;
          break;
        }
      }
    }

    setPersonaResult(finalPersona as keyof typeof PERSONAS);
    setAppState("analyzing");
  };

  return (
    <div className="gradient-bg min-h-dvh font-sans text-slate-800 antialiased overflow-x-hidden flex flex-col justify-between relative">
      {/* Background Decorative Blur circles as styled in original theme.
          Fixed (not absolute) so they sit in their own compositing layer and
          never repaint on scroll; smaller + lighter blur on small screens
          keeps mobile GPUs from dropping frames while scrolling. */}
      <div className="fixed top-[-80px] left-[-80px] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-pink-300 blur-[60px] sm:blur-[100px] opacity-30 pointer-events-none z-0 will-change-transform"></div>
      <div className="fixed bottom-[-80px] right-[-80px] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-blue-300 blur-[60px] sm:blur-[100px] opacity-30 pointer-events-none z-0 will-change-transform"></div>

      <div className="max-w-4xl w-full mx-auto px-4 py-8 flex-grow flex flex-col justify-between relative z-10">
        {/* Header / Logo */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2 select-none">
              <span className="flex items-center">
                <img src={logoImg} alt="BrowserStack" width="150" referrerPolicy="no-referrer" />
              </span>
            </span>
          </div>
          <div className="text-xs text-slate-500 font-medium">#15YearsofBrowserStack</div>
        </header>

        {/* Main Content Container */}
        <main className="flex-grow flex flex-col justify-center items-center">
          {appState === "landing" && (
            <>
              <Landing onStart={handleStartClick} />
              <NamePopup
                isOpen={isNamePopupOpen}
                onClose={() => setIsNamePopupOpen(false)}
                onSubmit={handleNameSubmit}
              />
            </>
          )}

          {appState === "quiz" && (
            <Quiz onComplete={calculateResult} />
          )}

          {appState === "analyzing" && (
            <Analyzing onComplete={() => setAppState("result")} />
          )}

          {appState === "result" && personaResult && (
            <Result name={userName} personaId={personaResult} onReset={() => setAppState("landing")} />
          )}
        </main>

        {/* Footer */}
        <footer className="mt-8 border-t border-slate-200/60 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-2">
          <p>&copy; 2026 BrowserStack. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

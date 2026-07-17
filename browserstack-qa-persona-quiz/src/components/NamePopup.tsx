import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface NamePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
}

export const NamePopup: React.FC<NamePopupProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-indigo-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-indigo-50/50 relative z-50"
          >
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-indigo-950 leading-snug">
                  Hello Tester! What's your name?
                </h3>
                <p className="text-sm text-slate-500">
                  Enter the name you want to be featured on your unique superpower card
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    maxLength={48}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-indigo-400 focus:outline-none transition-colors text-center text-lg font-medium text-slate-800"
                    autoFocus
                  />
                  <p className="text-right text-xs text-slate-400 mt-1">
                    {name.length} / 48
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-1/2 py-3 rounded-xl border border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!name.trim()}
                    className="w-1/2 py-3 rounded-xl gradient-accent text-white font-bold hover:opacity-95 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Let's Go!
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};


import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import './_group.css';

export function BuildProgress() {
  const [activeReassurance, setActiveReassurance] = useState(0);

  const reassurances = [
    "Your data stays in the GCC region.",
    "Setting up secure database connections...",
    "Optimizing performance for local networks.",
    "Applying regional compliance standards."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReassurance((prev) => (prev + 1) % reassurances.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reassurances.length]);

  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ 
        backgroundColor: 'var(--mn-navy)',
        fontFamily: 'var(--font-main)'
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes subtle-pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.4); transform: scale(1); }
          70% { box-shadow: 0 0 0 10px rgba(0, 212, 255, 0); transform: scale(1.1); }
          100% { box-shadow: 0 0 0 0 rgba(0, 212, 255, 0); transform: scale(1); }
        }
        .pulse-dot {
          animation: subtle-pulse 2s infinite cubic-bezier(0.66, 0, 0, 1);
        }
        .reassurance-enter {
          animation: fade-in-up 0.5s ease-out forwards;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />

      {/* Background Decoration */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(124, 58, 237, 0.08) 0%, transparent 60%)',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 70%, rgba(0, 212, 255, 0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 w-full max-w-md mx-auto px-6 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-3xl md:text-4xl font-bold mb-3 tracking-tight"
            style={{ color: 'var(--mn-surface)' }}
          >
            Dubai PT Booking App
          </h1>
          <p 
            className="text-lg"
            style={{ color: 'var(--mn-text-muted)' }}
          >
            Building your app...
          </p>
        </div>

        {/* Timeline */}
        <div className="w-full relative mb-16">
          <div 
            className="absolute left-[15px] top-4 bottom-4 w-[2px] rounded-full"
            style={{ backgroundColor: 'var(--mn-border)' }}
          ></div>
          
          <div 
            className="absolute left-[15px] top-4 h-[40%] w-[2px] rounded-full"
            style={{ 
              background: 'linear-gradient(to bottom, var(--mn-cyan), rgba(0, 212, 255, 0))' 
            }}
          ></div>

          <div className="space-y-8 relative">
            {/* Step 1: Completed */}
            <div className="flex items-start gap-5">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center relative z-10 flex-shrink-0"
                style={{ backgroundColor: 'var(--mn-cyan)', color: 'var(--mn-navy)' }}
              >
                <Check size={18} strokeWidth={3} />
              </div>
              <div className="pt-1">
                <span 
                  className="text-base font-semibold"
                  style={{ color: 'var(--mn-surface)' }}
                >
                  Understanding your idea
                </span>
              </div>
            </div>

            {/* Step 2: Completed */}
            <div className="flex items-start gap-5">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center relative z-10 flex-shrink-0"
                style={{ backgroundColor: 'var(--mn-cyan)', color: 'var(--mn-navy)' }}
              >
                <Check size={18} strokeWidth={3} />
              </div>
              <div className="pt-1">
                <span 
                  className="text-base font-semibold"
                  style={{ color: 'var(--mn-surface)' }}
                >
                  Designing your app structure
                </span>
              </div>
            </div>

            {/* Step 3: Active */}
            <div className="flex items-start gap-5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center relative z-10 flex-shrink-0">
                <div 
                  className="w-4 h-4 rounded-full pulse-dot"
                  style={{ backgroundColor: 'var(--mn-cyan)' }}
                ></div>
              </div>
              <div className="pt-1">
                <span 
                  className="text-base font-medium"
                  style={{ color: 'var(--mn-cyan)' }}
                >
                  Setting up your database
                </span>
              </div>
            </div>

            {/* Step 4: Pending */}
            <div className="flex items-start gap-5 opacity-60">
              <div 
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center relative z-10 flex-shrink-0"
                style={{ borderColor: 'var(--mn-border)', backgroundColor: 'var(--mn-navy)' }}
              ></div>
              <div className="pt-1">
                <span 
                  className="text-base"
                  style={{ color: 'var(--mn-text-dim)' }}
                >
                  Building your Arabic checkout
                </span>
              </div>
            </div>

            {/* Step 5: Pending */}
            <div className="flex items-start gap-5 opacity-60">
              <div 
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center relative z-10 flex-shrink-0"
                style={{ borderColor: 'var(--mn-border)', backgroundColor: 'var(--mn-navy)' }}
              ></div>
              <div className="pt-1">
                <span 
                  className="text-base"
                  style={{ color: 'var(--mn-text-dim)' }}
                >
                  Running security checks
                </span>
              </div>
            </div>

            {/* Step 6: Pending */}
            <div className="flex items-start gap-5 opacity-60">
              <div 
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center relative z-10 flex-shrink-0"
                style={{ borderColor: 'var(--mn-border)', backgroundColor: 'var(--mn-navy)' }}
              ></div>
              <div className="pt-1">
                <span 
                  className="text-base"
                  style={{ color: 'var(--mn-text-dim)' }}
                >
                  Final polish
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reassurance Message */}
        <div 
          className="px-6 py-4 rounded-xl border w-full max-w-sm text-center flex items-center justify-center min-h-[72px]"
          style={{ 
            backgroundColor: 'var(--mn-card)', 
            borderColor: 'var(--mn-border)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <p 
            key={activeReassurance}
            className="italic text-sm reassurance-enter"
            style={{ color: 'var(--mn-text-muted)' }}
          >
            "{reassurances[activeReassurance]}"
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuildProgress;
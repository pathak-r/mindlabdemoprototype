import React, { useState, useEffect } from 'react';
import { Check, Shield } from 'lucide-react';
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
        backgroundColor: '#FAFBFF',
        fontFamily: 'var(--font-main, sans-serif)'
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-blue {
          0% { box-shadow: 0 0 0 0 rgba(0, 102, 255, 0.4); transform: scale(1); }
          70% { box-shadow: 0 0 0 10px rgba(0, 102, 255, 0); transform: scale(1.1); }
          100% { box-shadow: 0 0 0 0 rgba(0, 102, 255, 0); transform: scale(1); }
        }
        .pulse-dot-blue {
          animation: pulse-blue 2s infinite cubic-bezier(0.66, 0, 0, 1);
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
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[100px] pointer-events-none opacity-40"
        style={{ background: '#0066FF' }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[100px] pointer-events-none opacity-30"
        style={{ background: '#FF9F0A' }}
      />

      <div className="relative z-10 w-full max-w-md mx-auto px-6 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 
            className="text-3xl md:text-4xl font-bold mb-2 tracking-tight"
            style={{ color: '#0F172A' }}
          >
            Dubai PT Booking App
          </h1>
          <p 
            className="text-base"
            style={{ color: '#64748B' }}
          >
            Building your app...
          </p>
        </div>

        {/* Timeline Card */}
        <div 
          className="w-full max-w-[420px] rounded-2xl p-8 mb-8 relative"
          style={{ 
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
          }}
        >
          <div 
            className="absolute left-[47px] top-[48px] bottom-[48px] w-[2px] rounded-full"
            style={{ backgroundColor: '#E2E8F0' }}
          ></div>
          
          <div 
            className="absolute left-[47px] top-[48px] h-[40%] w-[2px] rounded-full"
            style={{ backgroundColor: '#0066FF' }}
          ></div>

          <div className="space-y-8 relative">
            {/* Step 1: Completed */}
            <div className="flex items-start gap-4">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center relative z-10 flex-shrink-0"
                style={{ backgroundColor: '#0066FF', color: '#FFFFFF' }}
              >
                <Check size={16} strokeWidth={3} />
              </div>
              <div className="pt-1">
                <span 
                  className="text-base font-bold"
                  style={{ color: '#0F172A' }}
                >
                  Understanding your idea
                </span>
              </div>
            </div>

            {/* Step 2: Completed */}
            <div className="flex items-start gap-4">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center relative z-10 flex-shrink-0"
                style={{ backgroundColor: '#0066FF', color: '#FFFFFF' }}
              >
                <Check size={16} strokeWidth={3} />
              </div>
              <div className="pt-1">
                <span 
                  className="text-base font-bold"
                  style={{ color: '#0F172A' }}
                >
                  Designing your app structure
                </span>
              </div>
            </div>

            {/* Step 3: Active */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center relative z-10 flex-shrink-0">
                <div 
                  className="w-4 h-4 rounded-full pulse-dot-blue"
                  style={{ backgroundColor: '#0066FF' }}
                ></div>
              </div>
              <div className="pt-1">
                <span 
                  className="text-base font-bold"
                  style={{ color: '#0066FF' }}
                >
                  Setting up your database
                </span>
              </div>
            </div>

            {/* Step 4: Pending */}
            <div className="flex items-start gap-4">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center relative z-10 flex-shrink-0"
                style={{ backgroundColor: '#E2E8F0' }}
              ></div>
              <div className="pt-1">
                <span 
                  className="text-base"
                  style={{ color: '#94A3B8' }}
                >
                  Building your Arabic checkout
                </span>
              </div>
            </div>

            {/* Step 5: Pending */}
            <div className="flex items-start gap-4">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center relative z-10 flex-shrink-0"
                style={{ backgroundColor: '#E2E8F0' }}
              ></div>
              <div className="pt-1">
                <span 
                  className="text-base"
                  style={{ color: '#94A3B8' }}
                >
                  Running security checks
                </span>
              </div>
            </div>

            {/* Step 6: Pending */}
            <div className="flex items-start gap-4">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center relative z-10 flex-shrink-0"
                style={{ backgroundColor: '#E2E8F0' }}
              ></div>
              <div className="pt-1">
                <span 
                  className="text-base"
                  style={{ color: '#94A3B8' }}
                >
                  Final polish
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reassurance Message */}
        <div 
          className="px-6 py-4 rounded-xl flex items-center justify-center gap-3 w-full max-w-[420px]"
          style={{ 
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
          }}
        >
          <Shield size={20} style={{ color: '#0066FF' }} className="flex-shrink-0" />
          <p 
            key={activeReassurance}
            className="italic text-sm reassurance-enter m-0"
            style={{ color: '#64748B' }}
          >
            {reassurances[activeReassurance]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuildProgress;
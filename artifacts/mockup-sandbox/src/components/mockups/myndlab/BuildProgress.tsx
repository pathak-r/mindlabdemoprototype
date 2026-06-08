import React, { useState, useEffect } from 'react';
import { Check, Shield } from 'lucide-react';
import './_group.css';

const StarMotif = () => (
  <svg width="320" height="320" viewBox="0 0 100 100" fill="#1A6B6B" style={{ opacity: 0.06, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>
    <polygon points="50,5 57.3,32.4 81.8,18.2 67.6,42.7 95,50 67.6,57.3 81.8,81.8 57.3,67.6 50,95 42.7,67.6 18.2,81.8 32.4,57.3 5,50 32.4,42.7 18.2,18.2 42.7,32.4" />
  </svg>
);

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
      style={{
        minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #F5EFE6 0%, #FDFAF6 60%, #F0E8D8 100%)',
        fontFamily: 'var(--font-main)',
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-teal {
          0% { box-shadow: 0 0 0 0 rgba(26, 107, 107, 0.4); transform: scale(1); }
          70% { box-shadow: 0 0 0 10px rgba(26, 107, 107, 0); transform: scale(1.1); }
          100% { box-shadow: 0 0 0 0 rgba(26, 107, 107, 0); transform: scale(1); }
        }
        .pulse-dot-teal { animation: pulse-teal 2s infinite cubic-bezier(0.66, 0, 0, 1); }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .reassurance-enter { animation: fade-in-up 0.5s ease-out forwards; }
      `}} />

      <StarMotif />

      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '480px', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 36px)', fontWeight: 700, marginBottom: '8px', letterSpacing: '-0.5px', color: '#1C2B2B' }}>
            Dubai PT Booking App
          </h1>
          <p style={{ fontSize: '16px', color: '#6B7B7B', margin: 0 }}>
            Building your app...
          </p>
        </div>

        {/* Timeline Card */}
        <div style={{
          width: '100%', maxWidth: '420px', borderRadius: '20px', padding: '32px',
          marginBottom: '24px', position: 'relative',
          backgroundColor: '#FFFFFF', border: '1px solid #E8DDD0',
          boxShadow: '0 2px 12px rgba(28,43,43,0.07)',
        }}>
          <div style={{ position: 'absolute', left: '47px', top: '48px', bottom: '48px', width: '2px', borderRadius: '999px', backgroundColor: '#E8DDD0' }} />
          <div style={{ position: 'absolute', left: '47px', top: '48px', height: '40%', width: '2px', borderRadius: '999px', backgroundColor: '#1A6B6B' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative' }}>
            {/* Done */}
            {[
              { label: 'Understanding your idea', done: true },
              { label: 'Designing your app structure', done: true },
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10, flexShrink: 0, backgroundColor: '#1A6B6B', color: '#FFFFFF' }}>
                  <Check size={16} strokeWidth={3} />
                </div>
                <div style={{ paddingTop: '4px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#1C2B2B' }}>{step.label}</span>
                </div>
              </div>
            ))}

            {/* Active */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10, flexShrink: 0, backgroundColor: 'transparent' }}>
                <div className="pulse-dot-teal" style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#1A6B6B' }} />
              </div>
              <div style={{ paddingTop: '4px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#1A6B6B' }}>Setting up your database</span>
              </div>
            </div>

            {/* Pending */}
            {[
              'Building your Arabic checkout',
              'Running security checks',
              'Final polish',
            ].map((label, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', position: 'relative', zIndex: 10, flexShrink: 0, backgroundColor: '#E8DDD0' }} />
                <div style={{ paddingTop: '4px' }}>
                  <span style={{ fontSize: '16px', color: '#9BA8A8' }}>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reassurance */}
        <div style={{
          padding: '16px 24px', borderRadius: '14px', display: 'flex',
          alignItems: 'center', justifyContent: 'center', gap: '12px',
          width: '100%', maxWidth: '420px',
          backgroundColor: '#FFFFFF', border: '1px solid #E8DDD0',
          boxShadow: '0 2px 8px rgba(28,43,43,0.05)',
        }}>
          <Shield size={20} style={{ color: '#1A6B6B', flexShrink: 0 }} />
          <p key={activeReassurance} className="italic text-sm reassurance-enter" style={{ fontSize: '14px', fontStyle: 'italic', color: '#6B7B7B', margin: 0 }}>
            {reassurances[activeReassurance]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuildProgress;

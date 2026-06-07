import React, { useEffect, useState } from 'react';
import './_group.css';
import { CheckCircle, Copy, Share2, Smartphone, Globe } from 'lucide-react';
import AppLayout from './_shared/AppLayout';

export function ShareApp() {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number }>>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const colors = ['#0066FF', '#FF9F0A', '#10B981', '#FF6B6B'];
    const newConfetti = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2
    }));
    setConfetti(newConfetti);
  }, []);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#FAFBFF',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div dangerouslySetInnerHTML={{
        __html: `
        <style>
          @keyframes checkmarkScale {
            0% { transform: scale(0.5); opacity: 0; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
            10% { opacity: 0.8; }
            100% { transform: translateY(100px) rotate(360deg); opacity: 0; }
          }
        </style>
        `
      }} />
      
      {/* Confetti */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        {confetti.map(c => (
          <div
            key={c.id}
            style={{
              position: 'absolute',
              top: `${c.y}%`,
              left: `${c.x}%`,
              width: '5px',
              height: '5px',
              backgroundColor: c.color,
              borderRadius: '50%',
              opacity: 0,
              animation: `float 3s ease-out ${c.delay}s infinite`
            }}
          />
        ))}
      </div>

      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        zIndex: 1
      }}>
        
        <div style={{ maxWidth: '520px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          {/* Animated Checkmark */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#ECFDF5',
            border: '2px solid #10B981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            animation: 'checkmarkScale 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#0F172A',
            margin: '0 0 0.5rem 0',
            letterSpacing: '-0.02em'
          }}>
            You're live.
          </h1>
          
          <p style={{
            fontSize: '1.125rem',
            color: '#64748B',
            margin: '0 0 2.5rem 0'
          }}>
            Share your app with your first users.
          </p>

          {/* Link Box */}
          <div style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '1rem',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%', 
                backgroundColor: '#EEF4FF', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Globe size={16} color="#0066FF" />
              </div>
              <span style={{ 
                fontFamily: 'monospace', 
                color: '#0066FF', 
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                myndlab.app/dubai-pt-booking
              </span>
            </div>
            <button 
              onClick={handleCopy}
              style={{
                backgroundColor: '#EEF4FF',
                border: '1px solid #CBD5E1',
                color: '#0066FF',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          {/* QR Code Placeholder */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '2.5rem',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '2px',
              width: '160px',
              height: '160px'
            }}>
              {Array.from({ length: 144 }).map((_, i) => {
                const row = Math.floor(i / 12);
                const col = i % 12;
                
                // Corner patterns
                const isTopLeft = row < 3 && col < 3;
                const isTopRight = row < 3 && col > 8;
                const isBottomLeft = row > 8 && col < 3;
                
                let isDark = Math.random() > 0.5;
                if (isTopLeft || isTopRight || isBottomLeft) {
                   if (row === 0 || row === 2 || col === 0 || col === 2 || col === 9 || col === 11 || row === 9 || row === 11) isDark = true;
                   else if (row === 1 && col === 1) isDark = true;
                   else if (row === 1 && col === 10) isDark = true;
                   else if (row === 10 && col === 1) isDark = true;
                   else isDark = false;
                }

                return (
                  <div key={i} style={{
                    backgroundColor: isDark ? '#0F172A' : 'transparent',
                    borderRadius: '1px'
                  }} />
                );
              })}
            </div>
          </div>

          {/* Buttons */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button style={{
              width: '100%',
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '0.875rem',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)'
            }}>
              <Smartphone size={20} />
              Share on WhatsApp
            </button>
            
            <button style={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              color: '#0F172A',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              padding: '0.875rem',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <Share2 size={20} />
              Copy link
            </button>
          </div>
          
          {/* Footer Note */}
          <p style={{
            fontSize: '0.875rem',
            color: '#94A3B8',
            marginTop: '2.5rem',
            maxWidth: '300px'
          }}>
            Your app is ready for users. Check back in 24h for your first analytics.
          </p>

        </div>
      </div>
    </div>
  );
}

export default ShareApp;

import React, { useEffect, useState } from 'react';
import { CheckCircle, Copy, Share2, Smartphone } from 'lucide-react';
import './_group.css';

export function ShareApp() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate QR code dots
  const qrGrid = [];
  for (let i = 0; i < 256; i++) {
    // some pseudo-randomness for the QR code pattern
    const isDark = (Math.sin(i * 12.3) * Math.cos(i * 45.6)) > 0;
    qrGrid.push(
      <div 
        key={i} 
        style={{ 
          backgroundColor: isDark ? 'var(--mn-surface)' : 'transparent',
          width: '100%',
          height: '100%',
          borderRadius: '1px'
        }}
      />
    );
  }

  // Generate confetti dots
  const dots = [];
  const colors = ['var(--mn-cyan)', 'var(--mn-purple)', '#F59E0B'];
  for (let i = 0; i < 40; i++) {
    const size = Math.random() * 3 + 3; // 3 to 6px
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const animationDelay = `${Math.random() * 2}s`;
    
    dots.push(
      <div
        key={`dot-${i}`}
        className="absolute rounded-full opacity-60 animate-pulse"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          backgroundColor: color,
          animationDelay,
          boxShadow: `0 0 ${size * 2}px ${color}`
        }}
      />
    );
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--mn-navy)', color: 'var(--mn-surface)', fontFamily: 'var(--font-main)' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scale-in {
          0% { transform: scale(0.5); opacity: 0; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-check {
          animation: scale-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .glow-box {
          box-shadow: 0 0 20px var(--mn-cyan-glow), inset 0 0 10px rgba(0, 212, 255, 0.05);
          border: 1px solid rgba(0, 212, 255, 0.3);
        }
      `}} />

      {/* Background Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {dots}
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6 pt-12 pb-20">
        
        {/* Animated Checkmark */}
        <div className="animate-check mb-8 bg-green-500/10 p-4 rounded-full border border-green-500/20">
          <CheckCircle className="w-16 h-16 text-green-400" strokeWidth={1.5} />
        </div>

        {/* Headlines */}
        <div className="text-center mb-10 space-y-3">
          <h1 className="text-5xl font-bold tracking-tight text-white">You're live.</h1>
          <p className="text-lg" style={{ color: 'var(--mn-text-muted)' }}>
            Share your app with your first users.
          </p>
        </div>

        {/* PWA Link Box */}
        <div className="w-full flex flex-col items-center space-y-6 mb-10">
          <div className="glow-box w-full rounded-2xl flex items-center justify-between p-1.5 pl-5 bg-[var(--mn-navy-light)] backdrop-blur-sm transition-all">
            <span className="font-mono text-sm sm:text-base text-[var(--mn-cyan)] truncate mr-4">
              myndlab.app/dubai-pt-booking
            </span>
            <button 
              onClick={handleCopy}
              className="flex items-center justify-center h-10 px-4 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--mn-cyan)]"
              style={{ backgroundColor: 'var(--mn-navy-mid)', color: copied ? 'var(--mn-cyan)' : 'var(--mn-surface)' }}
            >
              {copied ? <CheckCircle className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          {/* QR Code Placeholder */}
          <div className="p-4 rounded-2xl bg-white flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.05)]">
            <div className="w-48 h-48 grid grid-cols-16 grid-rows-16 gap-[1px]">
              {qrGrid}
            </div>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="w-full flex flex-col sm:flex-row gap-4 mb-12">
          <button className="flex-1 flex items-center justify-center py-4 px-6 rounded-2xl font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95" style={{ backgroundColor: '#25D366' }}>
            <Smartphone className="w-5 h-5 mr-2" />
            Share on WhatsApp
          </button>
          <button 
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center py-4 px-6 rounded-2xl font-semibold transition-transform hover:scale-[1.02] active:scale-95 border border-[var(--mn-border)] hover:bg-[var(--mn-card)]" 
            style={{ color: 'var(--mn-surface)' }}
          >
            <Share2 className="w-5 h-5 mr-2" />
            Copy link
          </button>
        </div>

        {/* Stats Teaser */}
        <div className="text-center mt-auto">
          <p className="text-sm px-4" style={{ color: 'var(--mn-text-dim)' }}>
            Your app is ready for users. Check back in 24h for your first analytics.
          </p>
        </div>
      </div>
    </div>
  );
}

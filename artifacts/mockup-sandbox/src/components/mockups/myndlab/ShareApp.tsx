import React, { useEffect, useState } from 'react';
import { Check, Copy, Smartphone, Globe, MessageCircle, Mail, QrCode, ArrowRight, LayoutDashboard } from 'lucide-react';
import './_group.css';

export function ShareApp() {
  const [copied, setCopied] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number; size: number }>>([]);

  useEffect(() => {
    const colors = ['#0F5D54', '#B07A2B', '#0F9D6E', '#9DC7BF', '#D6C8B4'];
    setConfetti(Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 20,
      color: colors[i % colors.length],
      delay: Math.random() * 2.5,
      size: 4 + Math.random() * 5,
    })));
  }, []);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F4EDE1', fontFamily: 'var(--font-main)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '56px 24px 80px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes confettiFall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        @keyframes popIn { from { opacity: 0; transform: scale(0.5); } to { opacity: 1; transform: scale(1); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .sa-check { animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4) 0.1s both; }
        .sa-d1 { animation: fadeUp 0.5s ease-out 0.25s both; }
        .sa-d2 { animation: fadeUp 0.5s ease-out 0.38s both; }
        .sa-d3 { animation: fadeUp 0.5s ease-out 0.52s both; }
        .sa-d4 { animation: fadeUp 0.5s ease-out 0.65s both; }
        .share-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(28,43,43,0.15) !important; }
        .copy-btn:hover { background: #E3F0EC !important; }
        .next-card:hover { border-color: #0F5D54 !important; background: #E3F0EC !important; }
        * { box-sizing: border-box; }
      `}} />

      {/* Confetti */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        {confetti.map(c => (
          <div key={c.id} style={{ position: 'absolute', top: `${c.y}%`, left: `${c.x}%`, width: `${c.size}px`, height: `${c.size}px`, background: c.color, borderRadius: c.id % 3 === 0 ? '2px' : '50%', animation: `confettiFall ${2.5 + c.delay}s ease-in ${c.delay}s forwards` }} />
        ))}
      </div>

      <div style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>

        {/* Check */}
        <div className="sa-check" style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F9D6E, #0A7D57)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 8px 24px rgba(16,185,129,0.35)' }}>
          <Check size={34} color="#fff" strokeWidth={3} />
        </div>

        {/* Headline */}
        <div className="sa-d1" style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h1 style={{ fontFamily: 'var(--mn-display)', fontSize: '44px', fontWeight: 600, letterSpacing: '-1px', margin: '0 0 8px 0', color: '#16302C' }}>
            You're live.
          </h1>
          <p style={{ fontSize: '16px', color: '#5E6F6A', margin: '0 0 4px 0' }}>
            Dubai PT Booking App is live and ready to share.
          </p>
          <p style={{ fontSize: '14px', color: '#92A09B', margin: 0 }}>
            Share it with your first users right now.
          </p>
        </div>

        {/* Link box */}
        <div className="sa-d2" style={{ width: '100%', background: '#FFFFFF', border: '1px solid #E6DBCB', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', boxShadow: '0 2px 8px rgba(28,43,43,0.06)' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#E3F0EC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Globe size={17} color="#0F5D54" />
          </div>
          <span style={{ fontFamily: 'var(--mn-mono)', color: '#0F5D54', fontSize: '13.5px', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 500 }}>
            myndlab.app/dubai-pt-booking
          </span>
          <button className="copy-btn" onClick={handleCopy} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', background: copied ? '#E6F6EF' : '#F4EDE1', border: '1px solid #E6DBCB', borderRadius: '8px', fontSize: '13px', fontWeight: 600, color: copied ? '#0F9D6E' : '#16302C', cursor: 'pointer', flexShrink: 0, transition: 'all 0.2s' }}>
            {copied ? <><Check size={13} /> Copied!</> : <><Copy size={13} /> Copy</>}
          </button>
        </div>

        {/* QR Code */}
        <div className="sa-d2" style={{ background: '#FFFFFF', border: '1px solid #E6DBCB', borderRadius: '16px', padding: '20px', marginBottom: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', boxShadow: '0 2px 8px rgba(28,43,43,0.04)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(11, 1fr)', gap: '2px', width: '132px', height: '132px' }}>
            {Array.from({ length: 121 }).map((_, idx) => {
              const r = Math.floor(idx / 11), c = idx % 11;
              const corner = (r < 3 && c < 3) || (r < 3 && c > 7) || (r > 7 && c < 3);
              const border = corner && (r === 0 || r === 2 || c === 0 || c === 2 || c === 8 || c === 10 || r === 8 || r === 10);
              const inner = (r === 1 && c === 1) || (r === 1 && c === 9) || (r === 9 && c === 1);
              const dark = border || inner || (!corner && Math.random() > 0.5);
              return <div key={idx} style={{ background: dark ? '#16302C' : 'transparent', borderRadius: '1px' }} />;
            })}
          </div>
          <div style={{ fontSize: '12px', color: '#92A09B', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <QrCode size={12} /> Scan to open on any device
          </div>
        </div>

        {/* Share actions */}
        <div className="sa-d3" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
          <button className="share-btn" style={{ width: '100%', padding: '15px', background: '#25D366', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px', boxShadow: '0 4px 14px rgba(37,211,102,0.3)', transition: 'all 0.2s' }}>
            <MessageCircle size={20} fill="#fff" strokeWidth={1.5} /> Share on WhatsApp
          </button>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {[
              { icon: <Smartphone size={17} />, label: 'Send via SMS' },
              { icon: <Mail size={17} />, label: 'Send by email' },
            ].map((btn, i) => (
              <button key={i} className="share-btn" style={{ padding: '13px', background: '#FFFFFF', color: '#16302C', border: '1px solid #E6DBCB', borderRadius: '12px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', boxShadow: '0 1px 4px rgba(28,43,43,0.05)', transition: 'all 0.2s' }}>
                {btn.icon} {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* What's next */}
        <div className="sa-d4" style={{ width: '100%' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', color: '#92A09B', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>
            What's next?
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { icon: <LayoutDashboard size={16} color="#0F5D54" />, label: 'Go to your dashboard', sublabel: 'See your app and analytics', bg: '#E3F0EC' },
              { icon: <Globe size={16} color="#B07A2B" />, label: 'Build another app', sublabel: 'Start your next idea', bg: '#F4E8D2' },
            ].map((item, i) => (
              <div key={i} className="next-card" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: '#FFFFFF', border: '1px solid #E6DBCB', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.18s', boxShadow: '0 1px 4px rgba(28,43,43,0.04)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#16302C' }}>{item.label}</div>
                  <div style={{ fontSize: '12px', color: '#92A09B' }}>{item.sublabel}</div>
                </div>
                <ArrowRight size={16} color="#D6C8B4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareApp;

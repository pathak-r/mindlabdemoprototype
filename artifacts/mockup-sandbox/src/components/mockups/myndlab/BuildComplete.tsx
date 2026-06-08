import React, { useState } from 'react';
import { Check, ChevronRight, Download, Github, Rocket, Smartphone, Globe2, ChevronDown } from 'lucide-react';
import './_group.css';

export function BuildComplete({ isTechnical = false }: { isTechnical?: boolean }) {
  const [customiseOpen, setCustomiseOpen] = useState(false);
  const [appName, setAppName] = useState('Dubai PT Booking');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F5EFE6', fontFamily: 'var(--font-main)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '48px 24px 80px', boxSizing: 'border-box' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes popIn { from { opacity: 0; transform: scale(0.6); } to { opacity: 1; transform: scale(1); } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .bc-d1 { animation: fadeUp 0.5s ease-out 0.05s both; }
        .bc-d2 { animation: fadeUp 0.5s ease-out 0.15s both; }
        .bc-d3 { animation: fadeUp 0.5s ease-out 0.28s both; }
        .bc-d4 { animation: fadeUp 0.5s ease-out 0.42s both; }
        .bc-icon { animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.4) 0s both; }
        .phone-float { animation: float 4s ease-in-out infinite 1s; }
        .bc-primary-btn:hover { background: #B07D2E !important; box-shadow: 0 8px 20px rgba(200,150,62,0.4) !important; transform: translateY(-1px); }
        .bc-secondary-btn:hover { background: #F5EFE6 !important; border-color: #D4C9BC !important; }
        .bc-text-link:hover { color: #1C2B2B !important; }
        .bc-tech-btn:hover { border-color: #D4C9BC !important; transform: translateY(-2px); box-shadow: 0 6px 16px rgba(28,43,43,0.08) !important; }
        .customise-row { transition: all 0.2s ease; }
        * { box-sizing: border-box; }
      `}} />

      <div style={{ width: '100%', maxWidth: '560px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Check icon */}
        <div className="bc-icon" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #10B981, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 8px 20px rgba(16,185,129,0.3)' }}>
          <Check size={30} color="#fff" strokeWidth={3} />
        </div>

        {/* Headline */}
        <div className="bc-d1" style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.9px', margin: '0 0 10px 0', color: '#1C2B2B', lineHeight: 1.15 }}>
            Your app is ready.
          </h1>
          <p style={{ fontSize: '17px', color: '#6B7B7B', margin: 0 }}>Dubai PT Booking App</p>
        </div>

        {/* Phone mockup */}
        <div className="bc-d2 phone-float" style={{ width: '200px', height: '400px', background: '#1C2B2B', borderRadius: '28px', padding: '6px', boxShadow: '0 20px 48px rgba(26,107,107,0.18), 0 4px 12px rgba(28,43,43,0.2)', marginBottom: '44px', flexShrink: 0 }}>
          <div style={{ width: '100%', height: '100%', background: '#FDFAF6', borderRadius: '22px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '70px', height: '18px', background: '#1C2B2B', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', zIndex: 10 }} />
            <div style={{ height: '48px', background: '#FFFFFF', borderBottom: '1px solid #E8DDD0', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 16px 10px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#1C2B2B' }}>Dubai PT</span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#1A6B6B', direction: 'rtl' }}>احجز</span>
            </div>
            <div style={{ flex: 1, padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ background: '#E8F3F3', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#1A6B6B', direction: 'rtl' }}>احجز موعدك</div>
                <div style={{ fontSize: '10px', color: '#6B7B7B' }}>Book your session</div>
              </div>
              {[{ time: 'Today 10:00 AM', loc: 'Marina Studio', dot: '#1A6B6B' }, { time: 'Tomorrow 2:00 PM', loc: 'JLT Branch', dot: '#C8963E' }].map((item, i) => (
                <div key={i} style={{ background: '#FFFFFF', borderRadius: '8px', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #E8DDD0' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: item.dot, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#1C2B2B' }}>{item.time}</div>
                    <div style={{ fontSize: '9px', color: '#9BA8A8' }}>{item.loc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ height: '44px', background: '#FFFFFF', borderTop: '1px solid #E8DDD0', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', paddingBottom: '6px' }}>
              {['#1A6B6B', '#D4C9BC', '#D4C9BC'].map((c, i) => <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: c }} />)}
            </div>
          </div>
        </div>

        {/* PWA Card */}
        <div className="bc-d3" style={{ width: '100%', background: '#FFFFFF', border: '2px solid #1A6B6B', borderRadius: '20px', padding: '28px', marginBottom: '16px', boxShadow: '0 4px 20px rgba(26,107,107,0.1)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, background: '#1A6B6B', color: '#fff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', padding: '5px 14px', borderBottomLeftRadius: '12px' }}>
            RECOMMENDED
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#E8F3F3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Globe2 size={22} color="#1A6B6B" />
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#1C2B2B', marginBottom: '4px', letterSpacing: '-0.3px' }}>
                Publish as a PWA
              </div>
              <div style={{ fontSize: '13px', color: '#6B7B7B', lineHeight: 1.5 }}>
                We've determined this is the fastest path to your first users.
              </div>
            </div>
          </div>

          <div style={{ background: '#F5EFE6', borderRadius: '12px', padding: '16px 18px', marginBottom: '20px', border: '1px solid #E8DDD0' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1C2B2B', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Smartphone size={13} color="#1A6B6B" /> What's a PWA?
            </div>
            <p style={{ fontSize: '13px', color: '#6B7B7B', margin: 0, lineHeight: 1.6 }}>
              A Progressive Web App works like a native app on any phone — your users tap a link, add it to their home screen in one tap, and it works even offline. <strong>No App Store. No approval wait. Available on iOS and Android instantly.</strong>
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '20px' }}>
            {['Ready in seconds, not weeks', 'Share via WhatsApp, SMS, or QR code', 'Works on every device — iOS and Android', 'Updates reach all users instantly'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 500, color: '#1C2B2B' }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Check size={10} color="#10B981" strokeWidth={3} />
                </div>
                {item}
              </div>
            ))}
          </div>

          <button className="bc-primary-btn" style={{ width: '100%', padding: '15px', background: '#C8963E', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 14px rgba(200,150,62,0.35)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Rocket size={17} fill="#fff" strokeWidth={1.5} /> Publish as PWA
          </button>
        </div>

        {/* Customise */}
        <div className="bc-d3" style={{ width: '100%', marginBottom: '12px' }}>
          <button className="bc-secondary-btn" onClick={() => setCustomiseOpen(v => !v)} style={{ width: '100%', padding: '14px 20px', background: '#FFFFFF', border: '1px solid #E8DDD0', borderRadius: '14px', fontSize: '15px', fontWeight: 600, color: '#1C2B2B', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 4px rgba(28,43,43,0.04)', transition: 'all 0.15s' }}>
            Customise before publishing
            <ChevronDown size={16} color="#9BA8A8" style={{ transform: customiseOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
          </button>

          {customiseOpen && (
            <div style={{ background: '#FFFFFF', border: '1px solid #E8DDD0', borderTop: 'none', borderRadius: '0 0 14px 14px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="customise-row">
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#6B7B7B', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>App name</div>
                <input value={appName} onChange={e => setAppName(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #E8DDD0', borderRadius: '8px', fontSize: '14px', color: '#1C2B2B', outline: 'none', fontFamily: 'inherit', background: '#F5EFE6' }} />
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#6B7B7B', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Icon colour</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['#1A6B6B', '#C8963E', '#10B981', '#8B5CF6', '#EF4444'].map((c, i) => (
                    <div key={i} style={{ width: '32px', height: '32px', borderRadius: '8px', background: c, cursor: 'pointer', border: i === 0 ? '3px solid #1C2B2B' : 'none', boxSizing: 'border-box' }} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Technical deploy */}
        {isTechnical && (
          <div className="bc-d4" style={{ width: '100%', marginBottom: '12px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
              {[
                { icon: <Rocket size={26} color="#1A6B6B" />, label: 'Deploy to Vercel', sublabel: 'Setup required', bg: '#E8F3F3' },
                { icon: <Github size={26} color="#1C2B2B" />, label: 'Connect GitHub', sublabel: 'Push to repo', bg: '#F5EFE6' },
                { icon: <Download size={26} color="#6B7B7B" />, label: 'Download Source', sublabel: 'ZIP archive', bg: '#F5EFE6' },
              ].map((item, i) => (
                <button key={i} className="bc-tech-btn" style={{ padding: '24px 16px', background: '#FFFFFF', border: '1.5px solid #E8DDD0', borderRadius: '16px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', boxShadow: '0 2px 8px rgba(28,43,43,0.06)', transition: 'all 0.2s' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#1C2B2B', textAlign: 'center', lineHeight: 1.3 }}>{item.label}</div>
                  <div style={{ fontSize: '12px', color: '#9BA8A8', textAlign: 'center' }}>{item.sublabel}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        <button className="bc-text-link bc-d4" style={{ background: '#FFFFFF', border: '1.5px solid #E8DDD0', borderRadius: '14px', color: '#6B7B7B', fontSize: '15px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '16px 24px', width: '100%', marginTop: '4px', transition: 'color 0.15s', boxShadow: '0 1px 4px rgba(28,43,43,0.04)' }}>
          I need App Store distribution instead <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default BuildComplete;

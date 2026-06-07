import React, { useState } from 'react';
import { Check, ChevronRight, Download, Github, Rocket, Smartphone, Globe2, ChevronDown } from 'lucide-react';
import './_group.css';

export function BuildComplete({ isTechnical = false }: { isTechnical?: boolean }) {
  const [customiseOpen, setCustomiseOpen] = useState(false);
  const [appName, setAppName] = useState('Dubai PT Booking');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFBFF', fontFamily: 'var(--font-main)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '48px 24px 80px', boxSizing: 'border-box' }}>
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
        .bc-primary-btn:hover { background: #0052CC !important; box-shadow: 0 8px 20px rgba(0,102,255,0.4) !important; transform: translateY(-1px); }
        .bc-secondary-btn:hover { background: #F8FAFC !important; border-color: #CBD5E1 !important; }
        .bc-text-link:hover { color: #0F172A !important; }
        .bc-tech-btn:hover { border-color: #CBD5E1 !important; transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.08) !important; }
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
          <h1 style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.9px', margin: '0 0 10px 0', color: '#0F172A', lineHeight: 1.15 }}>
            Your app is ready.
          </h1>
          <p style={{ fontSize: '17px', color: '#64748B', margin: 0 }}>Dubai PT Booking App</p>
        </div>

        {/* Phone mockup */}
        <div className="bc-d2 phone-float" style={{ width: '200px', height: '400px', background: '#0F172A', borderRadius: '28px', padding: '6px', boxShadow: '0 20px 48px rgba(0,102,255,0.18), 0 4px 12px rgba(0,0,0,0.2)', marginBottom: '44px', flexShrink: 0 }}>
          <div style={{ width: '100%', height: '100%', background: '#FAFBFF', borderRadius: '22px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '70px', height: '18px', background: '#0F172A', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', zIndex: 10 }} />
            <div style={{ height: '48px', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 16px 10px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>Dubai PT</span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#0066FF', direction: 'rtl' }}>احجز</span>
            </div>
            <div style={{ flex: 1, padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ background: '#EEF4FF', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0066FF', direction: 'rtl' }}>احجز موعدك</div>
                <div style={{ fontSize: '10px', color: '#64748B' }}>Book your session</div>
              </div>
              {[{ time: 'Today 10:00 AM', loc: 'Marina Studio', dot: '#0066FF' }, { time: 'Tomorrow 2:00 PM', loc: 'JLT Branch', dot: '#FF9F0A' }].map((item, i) => (
                <div key={i} style={{ background: '#FFFFFF', borderRadius: '8px', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: item.dot, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#0F172A' }}>{item.time}</div>
                    <div style={{ fontSize: '9px', color: '#94A3B8' }}>{item.loc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ height: '44px', background: '#FFFFFF', borderTop: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', paddingBottom: '6px' }}>
              {['#0066FF', '#CBD5E1', '#CBD5E1'].map((c, i) => <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: c }} />)}
            </div>
          </div>
        </div>

        {/* ── PWA Recommendation Card ── */}
        <div className="bc-d3" style={{ width: '100%', background: '#FFFFFF', border: '2px solid #0066FF', borderRadius: '20px', padding: '28px', marginBottom: '16px', boxShadow: '0 4px 20px rgba(0,102,255,0.1)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, background: '#0066FF', color: '#fff', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em', padding: '5px 14px', borderBottomLeftRadius: '12px' }}>
            RECOMMENDED
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#EEF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Globe2 size={22} color="#0066FF" />
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '4px', letterSpacing: '-0.3px' }}>
                Publish as a PWA
              </div>
              <div style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5 }}>
                We've determined this is the fastest path to your first users.
              </div>
            </div>
          </div>

          {/* PWA explanation box */}
          <div style={{ background: '#F8FAFF', borderRadius: '12px', padding: '16px 18px', marginBottom: '20px', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Smartphone size={13} color="#0066FF" /> What's a PWA?
            </div>
            <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: 1.6 }}>
              A Progressive Web App works like a native app on any phone — your users tap a link, add it to their home screen in one tap, and it works even offline. <strong>No App Store. No approval wait. Available on iOS and Android instantly.</strong>
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '20px' }}>
            {['Ready in seconds, not weeks', 'Share via WhatsApp, SMS, or QR code', 'Works on every device — iOS and Android', 'Updates reach all users instantly'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 500, color: '#0F172A' }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Check size={10} color="#10B981" strokeWidth={3} />
                </div>
                {item}
              </div>
            ))}
          </div>

          <button className="bc-primary-btn" style={{ width: '100%', padding: '15px', background: '#0066FF', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,102,255,0.35)', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Rocket size={17} fill="#fff" strokeWidth={1.5} /> Publish as PWA
          </button>
        </div>

        {/* Customise */}
        <div className="bc-d3" style={{ width: '100%', marginBottom: '12px' }}>
          <button className="bc-secondary-btn" onClick={() => setCustomiseOpen(v => !v)} style={{ width: '100%', padding: '14px 20px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', fontSize: '15px', fontWeight: 600, color: '#0F172A', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 4px rgba(0,0,0,0.04)', transition: 'all 0.15s' }}>
            Customise before publishing
            <ChevronDown size={16} color="#94A3B8" style={{ transform: customiseOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
          </button>

          {customiseOpen && (
            <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderTop: 'none', borderRadius: '0 0 14px 14px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'App name', value: appName, onChange: setAppName },
              ].map((field, i) => (
                <div key={i} className="customise-row">
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#64748B', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{field.label}</div>
                  <input value={field.value} onChange={e => field.onChange(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', color: '#0F172A', outline: 'none', fontFamily: 'inherit', background: '#FAFBFF' }} />
                </div>
              ))}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#64748B', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Icon colour</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['#0066FF', '#FF9F0A', '#10B981', '#8B5CF6', '#EF4444'].map((c, i) => (
                    <div key={i} style={{ width: '32px', height: '32px', borderRadius: '8px', background: c, cursor: 'pointer', border: i === 0 ? '3px solid #0F172A' : 'none', boxSizing: 'border-box' }} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Technical deploy options */}
        {isTechnical && (
          <div className="bc-d4" style={{ width: '100%', marginBottom: '12px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
              {[
                { icon: <Rocket size={26} color="#0066FF" />, label: 'Deploy to Vercel', sublabel: 'Setup required', bg: '#EEF4FF' },
                { icon: <Github size={26} color="#0F172A" />, label: 'Connect GitHub', sublabel: 'Push to repo', bg: '#F1F5F9' },
                { icon: <Download size={26} color="#64748B" />, label: 'Download Source', sublabel: 'ZIP archive', bg: '#F1F5F9' },
              ].map((item, i) => (
                <button key={i} className="bc-tech-btn" style={{ padding: '24px 16px', background: '#FFFFFF', border: '1.5px solid #E2E8F0', borderRadius: '16px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', transition: 'all 0.2s' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', textAlign: 'center', lineHeight: 1.3 }}>{item.label}</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', textAlign: 'center' }}>{item.sublabel}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* App store escape */}
        <button className="bc-text-link bc-d4" style={{ background: '#FFFFFF', border: '1.5px solid #E2E8F0', borderRadius: '14px', color: '#475569', fontSize: '15px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '16px 24px', width: '100%', marginTop: '4px', transition: 'color 0.15s', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          I need App Store distribution instead <ChevronRight size={16} />
        </button>

      </div>
    </div>
  );
}

export default BuildComplete;

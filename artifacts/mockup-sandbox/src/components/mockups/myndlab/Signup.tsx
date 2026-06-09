import React from 'react';
import { Apple, Mail, Rocket, Code2, Check } from 'lucide-react';
import './_group.css';
import { StarMark } from './_shared/TopNav';

export function Signup() {
  return (
    <div style={{
      backgroundColor: '#F4EDE1', minHeight: '100vh', width: '100%',
      fontFamily: 'var(--font-main)', color: '#16302C',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '56px 24px 80px', boxSizing: 'border-box',
    }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .su-block { animation: fadeUp 0.5s ease-out forwards; opacity: 0; }
        .su-d1 { animation-delay: 0ms; }
        .su-d2 { animation-delay: 120ms; }
        .su-d3 { animation-delay: 240ms; }
        .su-sso-btn:hover { background: #F4EDE1 !important; border-color: #D6C8B4 !important; }
        .su-founder-card { transition: all 0.2s ease; }
        .su-founder-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(28,43,43,0.12) !important; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulseRing { 0% { transform: scale(0.85); opacity: 0.5; } 100% { transform: scale(1.25); opacity: 0; } }
      `}} />

      {/* Logo */}
      <div className="su-block su-d1" style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '48px' }}>
        <StarMark size={34} />
        <span style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.5px', color: '#16302C' }}>Mynd<span style={{ color: '#0F5D54' }}>lab</span></span>
      </div>

      {/* Auth */}
      <div className="su-block su-d1" style={{ width: '100%', maxWidth: '420px', marginBottom: '72px' }}>
        <h1 style={{ fontFamily: 'var(--mn-display)', fontSize: '36px', fontWeight: 600, letterSpacing: '-0.8px', margin: '0 0 8px 0', textAlign: 'center', color: '#16302C' }}>
          Let's get you building.
        </h1>
        <p style={{ fontSize: '16px', color: '#5E6F6A', margin: '0 0 36px 0', textAlign: 'center' }}>
          Free to start. No credit card needed.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              ),
              label: 'Continue with Google',
            },
            { icon: <Apple size={22} />, label: 'Continue with Apple' },
            { icon: <Mail size={22} color="#5E6F6A" />, label: 'Continue with email' },
          ].map((btn, i) => (
            <button key={i} className="su-sso-btn" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
              width: '100%', padding: '14px 20px', background: '#FFFFFF',
              border: '1px solid #E6DBCB', borderRadius: '12px', fontSize: '15px', fontWeight: 600,
              color: '#16302C', cursor: 'pointer', boxShadow: '0 1px 3px rgba(28,43,43,0.05)',
              position: 'relative', transition: 'all 0.15s ease',
            }}>
              <span style={{ position: 'absolute', left: '20px', display: 'flex' }}>{btn.icon}</span>
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Founder type */}
      <div className="su-block su-d2" style={{ width: '100%', maxWidth: '560px', marginBottom: '72px' }}>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '28px', justifyContent: 'center' }}>
          <div style={{ width: '28px', height: '5px', borderRadius: '3px', background: '#0F5D54' }} />
          <div style={{ width: '28px', height: '5px', borderRadius: '3px', background: '#0F5D54' }} />
          <div style={{ width: '28px', height: '5px', borderRadius: '3px', background: '#E6DBCB' }} />
        </div>

        <h2 style={{ fontFamily: 'var(--mn-display)', fontSize: '28px', fontWeight: 600, letterSpacing: '-0.5px', margin: '0 0 6px 0', textAlign: 'center', color: '#16302C' }}>
          One quick question
        </h2>
        <p style={{ fontSize: '15px', color: '#5E6F6A', margin: '0 0 28px 0', textAlign: 'center' }}>
          We'll tailor your experience based on your answer.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* Non-technical */}
          <div className="su-founder-card" style={{
            background: '#E3F0EC', border: '2px solid #0F5D54',
            borderRadius: '20px', padding: '28px 24px', cursor: 'pointer',
            position: 'relative', boxShadow: '0 4px 16px rgba(26,107,107,0.12)',
          }}>
            <div style={{ position: 'absolute', top: '16px', right: '16px', width: '20px', height: '20px', borderRadius: '50%', background: '#0F5D54', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Check size={11} color="#fff" strokeWidth={3} />
            </div>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#0F5D54', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Rocket size={24} color="#fff" />
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#16302C', marginBottom: '8px', lineHeight: 1.3 }}>
              Non-technical founder
            </div>
            <p style={{ fontSize: '13px', color: '#5E6F6A', margin: '0 0 16px 0', lineHeight: 1.5 }}>
              I have a great idea and want to build fast without worrying about the tech.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {['Simple, guided setup', 'AI makes the choices', 'PWA-first distribution'].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', fontWeight: 600, color: '#0F5D54' }}>
                  <Check size={12} strokeWidth={3} /> {f}
                </div>
              ))}
            </div>
          </div>

          {/* Technical */}
          <div className="su-founder-card" style={{
            background: '#FFFFFF', border: '2px solid #E6DBCB',
            borderRadius: '20px', padding: '28px 24px', cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(28,43,43,0.05)',
          }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#F4EDE1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Code2 size={24} color="#16302C" />
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#16302C', marginBottom: '8px', lineHeight: 1.3 }}>
              Technical founder
            </div>
            <p style={{ fontSize: '13px', color: '#5E6F6A', margin: '0 0 16px 0', lineHeight: 1.5 }}>
              I want control over my stack, deployments, GitHub, and source code.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px 8px' }}>
              {[
                ['Your tech stack', 'Cloud deploy'],
                ['Connect GitHub', 'Export to ZIP'],
                ['Deploy to Vercel', 'Self-hosted'],
                ['CI/CD ready', 'Custom domain'],
                ['Environment mgmt', null],
              ].map(([left, right], row) => (
                <React.Fragment key={row}>
                  {[left, right].map((f, col) => f && (
                    <div key={col} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', fontWeight: 500, color: '#5E6F6A', whiteSpace: 'nowrap', gridColumn: !right ? '1 / -1' : undefined }}>
                      <Check size={11} color="#92A09B" strokeWidth={2.5} style={{ flexShrink: 0 }} /> {f}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <button style={{
          marginTop: '24px', width: '100%', padding: '15px',
          background: '#0F5D54', color: '#fff', border: 'none',
          borderRadius: '12px', fontSize: '16px', fontWeight: 600,
          cursor: 'pointer', boxShadow: '0 4px 12px rgba(15,93,84,0.3)',
          letterSpacing: '-0.2px',
        }}>
          Continue →
        </button>
      </div>

      {/* Loading */}
      <div className="su-block su-d3" style={{ width: '100%', maxWidth: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '28px', justifyContent: 'center' }}>
          <div style={{ width: '28px', height: '5px', borderRadius: '3px', background: '#0F5D54' }} />
          <div style={{ width: '28px', height: '5px', borderRadius: '3px', background: '#0F5D54' }} />
          <div style={{ width: '28px', height: '5px', borderRadius: '3px', background: '#0F5D54' }} />
        </div>

        <div style={{ position: 'relative', width: '72px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#E3F0EC', animation: 'pulseRing 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
          <div style={{ width: '36px', height: '36px', border: '3px solid #0F5D54', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.9s linear infinite', position: 'relative', zIndex: 1 }} />
        </div>
        <div style={{ fontSize: '18px', fontWeight: 700, color: '#16302C', marginBottom: '6px' }}>
          Setting up your workspace…
        </div>
        <p style={{ fontSize: '14px', color: '#92A09B', margin: 0 }}>
          This takes a few seconds.
        </p>
      </div>
    </div>
  );
}

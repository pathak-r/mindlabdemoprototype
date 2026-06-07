import React from 'react';
import { Plus, ExternalLink, Share2, MoreHorizontal, Zap, Globe, TrendingUp } from 'lucide-react';
import './_group.css';

const myApps = [
  {
    name: 'Dubai PT Booking',
    description: 'Booking app for personal trainer',
    status: 'Live',
    statusColor: '#10B981',
    statusBg: '#ECFDF5',
    url: 'myndlab.app/dubai-pt-booking',
    views: 47,
    installs: 12,
    color: '#0066FF',
    ar: 'احجز',
    lastBuilt: 'Just now',
  },
];

export function PromptExperience() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFBFF', fontFamily: 'var(--font-main)', display: 'flex', flexDirection: 'column' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .pe-d1 { animation: fadeUp 0.45s ease-out 0.05s both; }
        .pe-d2 { animation: fadeUp 0.45s ease-out 0.15s both; }
        .pe-d3 { animation: fadeUp 0.45s ease-out 0.25s both; }
        .app-card-hover:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(0,0,0,0.1) !important; }
        .new-card-hover:hover { border-color: #0066FF !important; background: #EEF4FF !important; }
        .action-btn:hover { background: #F1F5F9 !important; }
        * { box-sizing: border-box; }
      `}} />

      {/* Top Nav */}
      <nav style={{ height: '60px', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '9px', background: 'linear-gradient(135deg, #0066FF, #FF9F0A)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '16px' }}>M</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: '17px', letterSpacing: '-0.3px' }}>Myndlab</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button style={{ background: 'none', border: 'none', color: '#0066FF', fontSize: '14px', fontWeight: 700, cursor: 'pointer' }}>My Apps</button>
          <button style={{ background: 'none', border: 'none', color: '#64748B', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>Templates</button>
          <button style={{ background: 'none', border: 'none', color: '#64748B', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>Settings</button>
          <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'linear-gradient(135deg, #0066FF, #6366F1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '13px' }}>R</span>
          </div>
        </div>
      </nav>

      <main style={{ flex: 1, padding: '40px 48px', overflowY: 'auto', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>

        {/* Header */}
        <div className="pe-d1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.6px', margin: '0 0 4px 0', color: '#0F172A' }}>My Apps</h1>
            <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>1 app live · Free plan · 2 builds remaining</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '11px 20px', background: '#0066FF', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,102,255,0.3)' }}>
            <Plus size={16} strokeWidth={2.5} /> Build another app
          </button>
        </div>

        {/* Stats bar */}
        <div className="pe-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {[
            { icon: <Globe size={18} color="#0066FF" />, label: 'Apps live', value: '1', bg: '#EEF4FF' },
            { icon: <TrendingUp size={18} color="#FF9F0A" />, label: 'Total views', value: '47', bg: '#FFF7E6' },
            { icon: <Zap size={18} color="#10B981" />, label: 'Installs', value: '12', bg: '#ECFDF5' },
          ].map((stat, i) => (
            <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: stat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {stat.icon}
              </div>
              <div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.5px' }}>{stat.value}</div>
                <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500 }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Apps grid */}
        <div className="pe-d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '48px' }}>

          {/* Published app card */}
          {myApps.map((app, i) => (
            <div key={i} className="app-card-hover" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', transition: 'all 0.2s', cursor: 'pointer' }}>
              {/* App preview */}
              <div style={{ height: '140px', background: 'linear-gradient(135deg, #EEF4FF, #E0E7FF)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ width: '80px', height: '140px', background: '#FFFFFF', borderRadius: '14px', border: '4px solid #CBD5E1', marginTop: '30px', display: 'flex', flexDirection: 'column', padding: '8px', gap: '6px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                  <div style={{ height: '20px', background: '#EEF4FF', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '9px', fontWeight: 800, color: '#0066FF' }}>{app.ar}</span>
                  </div>
                  <div style={{ height: '8px', background: '#E2E8F0', borderRadius: '3px' }} />
                  <div style={{ height: '8px', background: '#E2E8F0', borderRadius: '3px', width: '70%' }} />
                </div>
                {/* Status badge */}
                <div style={{ position: 'absolute', top: '10px', right: '10px', background: app.statusBg, color: app.statusColor, fontSize: '11px', fontWeight: 700, padding: '3px 9px', borderRadius: '999px', border: `1px solid ${app.statusColor}30` }}>
                  ● {app.status}
                </div>
              </div>

              {/* App info */}
              <div style={{ padding: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>{app.name}</div>
                  <button className="action-btn" style={{ width: '28px', height: '28px', borderRadius: '8px', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.15s' }}>
                    <MoreHorizontal size={15} color="#94A3B8" />
                  </button>
                </div>
                <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '12px' }}>{app.lastBuilt}</div>

                <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                  {[{ val: app.views, label: 'views' }, { val: app.installs, label: 'installs' }].map((s, j) => (
                    <div key={j} style={{ fontSize: '12px', color: '#64748B' }}>
                      <span style={{ fontWeight: 700, color: '#0F172A' }}>{s.val}</span> {s.label}
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: '11px', color: '#0066FF', fontFamily: 'monospace', marginBottom: '14px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {app.url}
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ flex: 1, padding: '8px', background: '#EEF4FF', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 600, color: '#0066FF', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    <ExternalLink size={12} /> Open
                  </button>
                  <button style={{ flex: 1, padding: '8px', background: '#F1F5F9', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 600, color: '#0F172A', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    <Share2 size={12} /> Share
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* New app placeholder cards */}
          {[1, 2].map(i => (
            <div key={i} className="new-card-hover" style={{ background: '#FFFFFF', border: '2px dashed #E2E8F0', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '320px', cursor: 'pointer', transition: 'all 0.2s', gap: '12px', padding: '32px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Plus size={22} color="#94A3B8" />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#64748B', marginBottom: '4px' }}>Start a new app</div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>Describe your idea and build</div>
              </div>
            </div>
          ))}
        </div>

        {/* Plan usage */}
        <div className="pe-d3" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Free plan · 2 builds remaining</div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>Upgrade to build unlimited apps</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '120px' }}>
              <div style={{ height: '6px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '33%', background: '#0066FF', borderRadius: '3px' }} />
              </div>
              <div style={{ fontSize: '10px', color: '#94A3B8', marginTop: '4px', textAlign: 'right' }}>1 of 3 used</div>
            </div>
            <button style={{ padding: '9px 18px', background: '#FF9F0A', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 2px 8px rgba(255,159,10,0.3)' }}>
              Upgrade
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PromptExperience;

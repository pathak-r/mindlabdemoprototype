import React from 'react';
import { Plus, ExternalLink, Share2, MoreHorizontal, Zap, Globe, TrendingUp, Check, ArrowRight, Users } from 'lucide-react';
import './_group.css';
import { StarMark } from './_shared/TopNav';

const myApps = [
  {
    name: 'Dubai PT Booking',
    description: 'Booking app for personal trainer',
    status: 'Live',
    statusColor: '#0F9D6E',
    statusBg: '#E6F6EF',
    url: 'myndlab.app/dubai-pt-booking',
    views: 47,
    installs: 12,
    color: '#0F5D54',
    ar: 'احجز',
    lastBuilt: 'Just now',
  },
];

export function PromptExperience() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F4EDE1', fontFamily: 'var(--font-main)', display: 'flex', flexDirection: 'column' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .pe-d1 { animation: fadeUp 0.45s ease-out 0.05s both; }
        .pe-d2 { animation: fadeUp 0.45s ease-out 0.15s both; }
        .pe-d3 { animation: fadeUp 0.45s ease-out 0.25s both; }
        .app-card-hover:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(28,43,43,0.1) !important; }
        .new-card-hover:hover { border-color: #0F5D54 !important; background: #E3F0EC !important; }
        .action-btn:hover { background: #F4EDE1 !important; }
        * { box-sizing: border-box; }
      `}} />

      {/* Nav */}
      <nav style={{ height: '60px', background: '#FFFFFF', borderBottom: '1px solid #E6DBCB', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', flexShrink: 0, boxShadow: '0 1px 3px rgba(28,43,43,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <StarMark size={26} />
          <span style={{ fontWeight: 600, fontSize: '18px', letterSpacing: '-0.4px', color: '#16302C' }}>Mynd<span style={{ color: '#0F5D54' }}>lab</span></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button style={{ background: 'none', border: 'none', fontFamily: 'var(--mn-mono)', color: '#0F5D54', fontSize: '12.5px', fontWeight: 500, cursor: 'pointer' }}>My Apps</button>
          <button style={{ background: 'none', border: 'none', fontFamily: 'var(--mn-mono)', color: '#5E6F6A', fontSize: '12.5px', cursor: 'pointer' }}>Templates</button>
          <button style={{ background: 'none', border: 'none', fontFamily: 'var(--mn-mono)', color: '#5E6F6A', fontSize: '12.5px', cursor: 'pointer' }}>Settings</button>
          <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#0F5D54', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span style={{ color: '#fff', fontWeight: 600, fontSize: '13px' }}>R</span>
          </div>
        </div>
      </nav>

      <main style={{ flex: 1, padding: '40px 48px', overflowY: 'auto', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>

        {/* Header */}
        <div className="pe-d1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px' }}>
          <div>
            <h1 style={{ fontFamily: 'var(--mn-display)', fontSize: '32px', fontWeight: 600, letterSpacing: '-0.6px', margin: '0 0 4px 0', color: '#16302C' }}>My Apps</h1>
            <p style={{ fontSize: '14px', color: '#5E6F6A', margin: 0 }}>1 app live · Free plan · 2 builds remaining</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '11px 20px', background: '#0F5D54', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 12px rgba(15,93,84,0.3)' }}>
            <Plus size={16} strokeWidth={2.5} /> Build another app
          </button>
        </div>

        {/* Stats */}
        <div className="pe-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {[
            { icon: <Globe size={18} color="#0F5D54" />, label: 'Apps live', value: '1', bg: '#E3F0EC' },
            { icon: <TrendingUp size={18} color="#B07A2B" />, label: 'Total views', value: '47', bg: '#F4E8D2' },
            { icon: <Zap size={18} color="#0F9D6E" />, label: 'Installs', value: '12', bg: '#E6F6EF' },
          ].map((stat, i) => (
            <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E6DBCB', borderRadius: '14px', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px', boxShadow: '0 1px 4px rgba(28,43,43,0.04)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: stat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {stat.icon}
              </div>
              <div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#16302C', letterSpacing: '-0.5px' }}>{stat.value}</div>
                <div style={{ fontSize: '12px', color: '#5E6F6A', fontWeight: 500 }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Apps grid */}
        <div className="pe-d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '48px' }}>

          {myApps.map((app, i) => (
            <div key={i} className="app-card-hover" style={{ background: '#FFFFFF', border: '1px solid #E6DBCB', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(28,43,43,0.06)', transition: 'all 0.2s', cursor: 'pointer' }}>
              <div style={{ height: '140px', background: 'linear-gradient(135deg, #E3F0EC, #C9E2DB)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ width: '80px', height: '140px', background: '#FFFFFF', borderRadius: '14px', border: '4px solid #D6C8B4', marginTop: '30px', display: 'flex', flexDirection: 'column', padding: '8px', gap: '6px', boxShadow: '0 4px 12px rgba(28,43,43,0.1)' }}>
                  <div style={{ height: '20px', background: '#E3F0EC', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '9px', fontWeight: 800, color: '#0F5D54' }}>{app.ar}</span>
                  </div>
                  <div style={{ height: '8px', background: '#E6DBCB', borderRadius: '3px' }} />
                  <div style={{ height: '8px', background: '#E6DBCB', borderRadius: '3px', width: '70%' }} />
                </div>
                <div style={{ position: 'absolute', top: '10px', right: '10px', background: app.statusBg, color: app.statusColor, fontSize: '11px', fontWeight: 700, padding: '3px 9px', borderRadius: '999px', border: `1px solid ${app.statusColor}30` }}>
                  ● {app.status}
                </div>
              </div>

              <div style={{ padding: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#16302C' }}>{app.name}</div>
                  <button className="action-btn" style={{ width: '28px', height: '28px', borderRadius: '8px', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.15s' }}>
                    <MoreHorizontal size={15} color="#92A09B" />
                  </button>
                </div>
                <div style={{ fontSize: '12px', color: '#92A09B', marginBottom: '12px' }}>{app.lastBuilt}</div>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                  {[{ val: app.views, label: 'views' }, { val: app.installs, label: 'installs' }].map((s, j) => (
                    <div key={j} style={{ fontSize: '12px', color: '#5E6F6A' }}>
                      <span style={{ fontWeight: 700, color: '#16302C' }}>{s.val}</span> {s.label}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: '11px', color: '#0F5D54', fontFamily: 'var(--mn-mono)', marginBottom: '14px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {app.url}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ flex: 1, padding: '8px', background: '#E3F0EC', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 600, color: '#0F5D54', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    <ExternalLink size={12} /> Open
                  </button>
                  <button style={{ flex: 1, padding: '8px', background: '#F4EDE1', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 600, color: '#16302C', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    <Share2 size={12} /> Share
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Upsell card */}
          <div style={{ background: 'linear-gradient(145deg, #FBF6EE, #F4E8D2)', border: '1.5px solid #E8C87A', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', minHeight: '320px', boxShadow: '0 2px 8px rgba(200,150,62,0.08)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#B07A2B', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', marginBottom: '16px', alignSelf: 'flex-start' }}>
              <Zap size={11} strokeWidth={2.5} /> Go Pro
            </div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#16302C', letterSpacing: '-0.4px', marginBottom: '6px', lineHeight: 1.25 }}>Build without limits</div>
            <div style={{ fontSize: '12px', color: '#92400E', marginBottom: '20px', lineHeight: 1.5 }}>Stop counting builds. Ship as many apps as your ideas demand.</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', flex: 1 }}>
              {['Unlimited app builds', 'Custom domain per app', 'Priority AI generation', 'Advanced analytics'].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', fontWeight: 500, color: '#78350F' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#B07A2B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={10} color="#fff" strokeWidth={3} />
                  </div>
                  {f}
                </div>
              ))}
            </div>
            <button style={{ marginTop: '20px', width: '100%', padding: '11px', background: '#B07A2B', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', boxShadow: '0 4px 12px rgba(200,150,62,0.35)' }}>
              Upgrade now <ArrowRight size={14} strokeWidth={2.5} />
            </button>
          </div>

          {/* Community card */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E6DBCB', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', minHeight: '320px', boxShadow: '0 2px 8px rgba(28,43,43,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#E3F0EC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={15} color="#0F5D54" />
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#16302C' }}>Founders building now</div>
            </div>
            <div style={{ fontSize: '11.5px', color: '#92A09B', marginBottom: '20px' }}>See what the GCC community is shipping</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
              {[
                { code: 'SA', name: 'Riyadh Salon Booking', cat: 'Beauty' },
                { code: 'AE', name: 'Abu Dhabi Grocery', cat: 'Food & Delivery' },
                { code: 'EG', name: 'Cairo Fitness Tracker', cat: 'Health' },
                { code: 'KW', name: 'Kuwait Car Rentals', cat: 'Transport' },
              ].map((app, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#E3F0EC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--mn-mono)', fontSize: '12px', fontWeight: 600, color: '#0F5D54' }}>
                    {app.code}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#16302C', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{app.name}</div>
                    <div style={{ fontSize: '11px', color: '#92A09B' }}>{app.cat}</div>
                  </div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0F9D6E', flexShrink: 0 }} />
                </div>
              ))}
            </div>
            <button style={{ marginTop: '16px', background: 'none', border: 'none', color: '#0F5D54', fontSize: '12.5px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', padding: 0 }}>
              Explore community <ArrowRight size={13} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PromptExperience;

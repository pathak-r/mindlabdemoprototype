import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal, Calendar, UtensilsCrossed, Building2, ChevronRight, ToggleLeft, ToggleRight, Zap, Users, Globe } from 'lucide-react';
import './_group.css';

const APP_TYPE_LABELS: Record<string, string> = {
  booking:   'booking & appointments',
  food:      'food & delivery',
  retail:    'retail & store',
  portfolio: 'portfolio & CV',
  health:    'healthcare',
  education: 'education & training',
};

const APP_TYPE_PLACEHOLDERS: Record<string, string> = {
  booking:   'e.g. A booking app for a Dubai personal trainer that accepts WhatsApp enquiries…',
  food:      'e.g. A food delivery app for a Riyadh restaurant with Arabic menu and cash on delivery…',
  retail:    'e.g. An online store selling abayas in Jeddah with Instagram-style product photos…',
  portfolio: 'e.g. A portfolio site for a UAE freelance designer with Arabic and English versions…',
  health:    'e.g. A patient booking app for a private clinic in Abu Dhabi with SMS reminders…',
  education: 'e.g. An online tutoring platform for Saudi students with video lessons and quizzes…',
};

export function Dashboard({ isTechnical = false, appType, language }: { isTechnical?: boolean; appType?: string; language?: 'ar' | 'en' }) {
  const [prompt, setPrompt] = useState('');
  const [adviserOn, setAdviserOn] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  const wordCount = prompt.trim().split(/\s+/).filter(Boolean).length;
  const qualityPct = Math.min(100, wordCount * 7);
  const qualityLabel = qualityPct < 25 ? 'Basic' : qualityPct < 55 ? 'Good' : qualityPct < 80 ? 'Strong' : 'Excellent';
  const qualityColor = qualityPct < 25 ? '#94A3B8' : qualityPct < 55 ? '#FF9F0A' : qualityPct < 80 ? '#0066FF' : '#10B981';

  const suggestions = [
    { text: 'Add target audience', active: wordCount >= 3 },
    { text: 'Specify language (Arabic / English)', active: wordCount >= 6 },
    { text: 'Include payment method', active: wordCount >= 10 },
    { text: 'Mention your city / region', active: wordCount >= 14 },
  ].filter(s => s.active);

  const examplePrompts = [
    { text: 'Booking app for a Dubai personal trainer', Icon: Calendar, chipBg: '#EEF4FF', chipColor: '#0066FF' },
    { text: 'Food delivery app for a Riyadh restaurant', Icon: UtensilsCrossed, chipBg: '#FFF7E6', chipColor: '#FF9F0A' },
    { text: 'Property listings platform for Abu Dhabi', Icon: Building2, chipBg: '#ECFDF5', chipColor: '#10B981' },
  ];

  const personalizedPlaceholder = appType
    ? (APP_TYPE_PLACEHOLDERS[appType] ?? 'Describe your app idea in detail…')
    : 'Describe your app idea — the more detail, the better your build…';

  const personalizedGreeting = appType
    ? `Let's build your ${APP_TYPE_LABELS[appType] ?? 'app'}`
    : 'What will you build today?';

  const templates = [
    { label: 'Booking & Appointments', ar: 'احجز موعد', color: '#0066FF', bg: '#EEF4FF' },
    { label: 'Food Delivery', ar: 'طلب طعام', color: '#FF9F0A', bg: '#FFF7E6' },
    { label: 'E-Commerce', ar: 'تسوق الآن', color: '#10B981', bg: '#ECFDF5' },
    { label: 'Healthcare', ar: 'استشارة', color: '#8B5CF6', bg: '#F3E8FF' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFBFF', fontFamily: 'var(--font-main)', display: 'flex', flexDirection: 'column' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .suggestion-chip { animation: fadeIn 0.25s ease-out forwards; }
        .example-row:hover { background: #F8FAFF !important; border-color: #CBD5E1 !important; transform: translateX(3px); }
        .template-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.1) !important; }
        .build-btn:hover { background: #0052CC !important; box-shadow: 0 6px 16px rgba(0,102,255,0.4) !important; }
        .options-chip:hover { border-color: #CBD5E1 !important; background: #F1F5F9 !important; }
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
          <button style={{ background: 'none', border: 'none', color: '#64748B', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>My Apps</button>
          <button style={{ background: 'none', border: 'none', color: '#64748B', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>Templates</button>
          <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'linear-gradient(135deg, #0066FF, #6366F1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '13px' }}>R</span>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '64px 24px 80px', overflowY: 'auto' }}>
        <div style={{ width: '100%', maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '40px' }}>

          {/* Headline */}
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '38px', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.15, margin: '0 0 12px 0', color: '#0F172A' }}>
              {appType ? (
                <>{personalizedGreeting},{' '}<span style={{ background: 'linear-gradient(135deg, #0066FF, #FF9F0A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Rohit</span></>
              ) : (
                <>What do you want to build,{' '}<span style={{ background: 'linear-gradient(135deg, #0066FF, #FF9F0A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Rohit?</span></>
              )}
            </h1>
            <p style={{ fontSize: '17px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
              {language === 'ar'
                ? 'صف فكرتك — سيكون تطبيقك جاهزاً في دقائق.'
                : 'Describe your idea. We\'ll have your app ready in minutes.'}
            </p>
          </div>

          {/* Prompt Area */}
          <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '20px', padding: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}>
            <textarea
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder={personalizedPlaceholder}
              style={{
                width: '100%', background: 'transparent', border: 'none', outline: 'none',
                resize: 'none', padding: '24px 24px 8px', fontSize: '17px', color: '#0F172A',
                minHeight: '140px', fontFamily: 'inherit', lineHeight: 1.6,
              }}
            />

            {/* Bottom bar */}
            <div style={{ padding: '8px 16px 12px', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {/* AI adviser toggle */}
              <button
                onClick={() => setAdviserOn(v => !v)}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: adviserOn ? '#EEF4FF' : '#F1F5F9', border: `1px solid ${adviserOn ? '#BFDBFE' : '#E2E8F0'}`, borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 600, color: adviserOn ? '#0066FF' : '#64748B', transition: 'all 0.2s' }}
              >
                {adviserOn ? <ToggleRight size={16} /> : <ToggleLeft size={16} />}
                <Sparkles size={13} />
                AI Adviser {adviserOn ? 'ON' : 'OFF'}
              </button>

              {/* Technical founder: Options chip */}
              {isTechnical && (
                <button
                  onClick={() => setShowOptions(v => !v)}
                  className="options-chip"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: showOptions ? '#F1F5F9' : '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 600, color: '#0F172A', transition: 'all 0.15s' }}
                >
                  <SlidersHorizontal size={13} color="#64748B" />
                  Options · <span style={{ color: '#0066FF' }}>Next.js / Supabase</span>
                </button>
              )}

              <div style={{ flex: 1 }} />

              {/* Build button */}
              <button className="build-btn" style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '10px 22px', background: '#0066FF', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,102,255,0.3)', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
                <Zap size={15} fill="#fff" /> Build it
              </button>
            </div>

            {/* Technical options panel */}
            {isTechnical && showOptions && (
              <div style={{ margin: '0 12px 12px', padding: '20px', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '16px' }}>Build Options</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {[
                    { label: 'Frontend', value: 'Next.js', locked: false },
                    { label: 'Backend', value: 'Supabase', locked: false },
                  ].map((opt, i) => (
                    <div key={i}>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: '#94A3B8', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{opt.label}</div>
                      <div style={{ padding: '10px 14px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', fontWeight: 600, color: '#0F172A', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {opt.value}
                        <ChevronRight size={14} color="#94A3B8" />
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '12px', padding: '12px 14px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <div style={{ width: '32px', height: '32px', background: '#F1F5F9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🎨</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A' }}>Using default style</div>
                    <div style={{ fontSize: '11px', color: '#94A3B8' }}>light · modern · cards</div>
                  </div>
                  <ChevronRight size={14} color="#94A3B8" style={{ marginLeft: 'auto' }} />
                </div>
              </div>
            )}
          </div>

          {/* AI Adviser suggestions OR quality score */}
          {adviserOn ? (
            suggestions.length > 0 ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '-24px' }}>
                <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Sparkles size={11} /> Suggestions:
                </span>
                {suggestions.map((s, i) => (
                  <button key={i} className="suggestion-chip" onClick={() => setPrompt(p => p + ` ${s.text.toLowerCase()}`)} style={{ padding: '5px 12px', background: '#EEF4FF', border: '1px solid #BFDBFE', borderRadius: '999px', fontSize: '12px', fontWeight: 600, color: '#0066FF', cursor: 'pointer', transition: 'all 0.15s' }}>
                    + {s.text}
                  </button>
                ))}
              </div>
            ) : (
              <p style={{ fontSize: '13px', color: '#94A3B8', textAlign: 'center', marginTop: '-24px' }}>
                <Sparkles size={12} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                Start typing — AI Adviser will suggest improvements as you go.
              </p>
            )
          ) : (
            <div style={{ marginTop: '-24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#64748B' }}>Prompt strength</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: qualityColor }}>{qualityLabel}</span>
              </div>
              <div style={{ height: '5px', background: '#E2E8F0', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${qualityPct}%`, background: qualityColor, borderRadius: '3px', transition: 'all 0.4s ease' }} />
              </div>
            </div>
          )}

          {/* Example prompts */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '14px' }}>Or try one of these</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {examplePrompts.map(({ text, Icon, chipBg, chipColor }, i) => (
                <button key={i} className="example-row" onClick={() => setPrompt(text)} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', cursor: 'pointer', width: '100%', textAlign: 'left', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', transition: 'all 0.18s' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: chipBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} color={chipColor} strokeWidth={1.8} />
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#0F172A', flex: 1 }}>{text}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#0066FF', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                    Use <ChevronRight size={13} />
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Templates */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '14px' }}>Browse templates</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {templates.map((t, i) => (
                <div key={i} className="template-card" style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '18px 14px', cursor: 'pointer', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', transition: 'all 0.2s', textAlign: 'center' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: '18px', fontWeight: 800, color: t.color }}>
                    {t.ar.charAt(0)}
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A', lineHeight: 1.3 }}>{t.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Social proof */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', paddingTop: '8px', borderTop: '1px solid #E2E8F0' }}>
            {[
              { icon: <Users size={14} />, text: '2,400+ GCC founders' },
              { icon: <Globe size={14} />, text: 'Arabic & English native' },
              { icon: <Zap size={14} />, text: 'Live in minutes' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#94A3B8', fontWeight: 500 }}>
                {item.icon} {item.text}
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}

export default Dashboard;

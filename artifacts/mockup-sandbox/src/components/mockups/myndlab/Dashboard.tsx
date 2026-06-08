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
  const qualityColor = qualityPct < 25 ? '#9BA8A8' : qualityPct < 55 ? '#C8963E' : qualityPct < 80 ? '#1A6B6B' : '#10B981';

  const suggestions = [
    { text: 'Add target audience', active: wordCount >= 3 },
    { text: 'Specify language (Arabic / English)', active: wordCount >= 6 },
    { text: 'Include payment method', active: wordCount >= 10 },
    { text: 'Mention your city / region', active: wordCount >= 14 },
  ].filter(s => s.active);

  const examplePrompts = [
    { text: 'Booking app for a Dubai personal trainer', Icon: Calendar, chipBg: '#E8F3F3', chipColor: '#1A6B6B' },
    { text: 'Food delivery app for a Riyadh restaurant', Icon: UtensilsCrossed, chipBg: '#FDF3E3', chipColor: '#C8963E' },
    { text: 'Property listings platform for Abu Dhabi', Icon: Building2, chipBg: '#ECFDF5', chipColor: '#10B981' },
  ];

  const personalizedPlaceholder = appType
    ? (APP_TYPE_PLACEHOLDERS[appType] ?? 'Describe your app idea in detail…')
    : 'Describe your app idea — the more detail, the better your build…';

  const personalizedGreeting = appType
    ? `Let's build your ${APP_TYPE_LABELS[appType] ?? 'app'}`
    : 'What will you build today?';

  const templates = [
    { label: 'Booking & Appointments', ar: 'احجز موعد', color: '#1A6B6B', bg: '#E8F3F3' },
    { label: 'Food Delivery', ar: 'طلب طعام', color: '#C8963E', bg: '#FDF3E3' },
    { label: 'E-Commerce', ar: 'تسوق الآن', color: '#10B981', bg: '#ECFDF5' },
    { label: 'Healthcare', ar: 'استشارة', color: '#8B5CF6', bg: '#F3E8FF' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F5EFE6', fontFamily: 'var(--font-main)', display: 'flex', flexDirection: 'column' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .suggestion-chip { animation: fadeIn 0.25s ease-out forwards; }
        .example-row:hover { background: #F5EFE6 !important; border-color: #D4C9BC !important; transform: translateX(3px); }
        .template-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(28,43,43,0.1) !important; }
        .build-btn:hover { background: #B07D2E !important; box-shadow: 0 6px 16px rgba(200,150,62,0.4) !important; }
        .options-chip:hover { border-color: #D4C9BC !important; background: #F5EFE6 !important; }
        * { box-sizing: border-box; }
      `}} />

      {/* Nav */}
      <nav style={{ height: '60px', background: '#FFFFFF', borderBottom: '1px solid #E8DDD0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', flexShrink: 0, boxShadow: '0 1px 3px rgba(28,43,43,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '9px', background: 'linear-gradient(135deg, #1A6B6B, #C8963E)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '16px' }}>M</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: '17px', letterSpacing: '-0.3px', color: '#1C2B2B' }}>Myndlab</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button style={{ background: 'none', border: 'none', color: '#6B7B7B', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>My Apps</button>
          <button style={{ background: 'none', border: 'none', color: '#6B7B7B', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>Templates</button>
          <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'linear-gradient(135deg, #1A6B6B, #155858)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '13px' }}>R</span>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '64px 24px 80px', overflowY: 'auto' }}>
        <div style={{ width: '100%', maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '40px' }}>

          {/* Headline */}
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '38px', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.15, margin: '0 0 12px 0', color: '#1C2B2B' }}>
              {appType ? (
                <>{personalizedGreeting},{' '}<span style={{ background: 'linear-gradient(135deg, #1A6B6B, #C8963E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Rohit</span></>
              ) : (
                <>What do you want to build,{' '}<span style={{ background: 'linear-gradient(135deg, #1A6B6B, #C8963E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Rohit?</span></>
              )}
            </h1>
            <p style={{ fontSize: '17px', color: '#6B7B7B', margin: 0, lineHeight: 1.5 }}>
              {language === 'ar'
                ? 'صف فكرتك — سيكون تطبيقك جاهزاً في دقائق.'
                : "Describe your idea. We'll have your app ready in minutes."}
            </p>
          </div>

          {/* Prompt Area */}
          <div style={{ background: '#FFFFFF', border: '1px solid #D4C9BC', borderRadius: '20px', padding: '4px', boxShadow: '0 2px 12px rgba(28,43,43,0.07)' }}>
            <textarea
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder={personalizedPlaceholder}
              style={{
                width: '100%', background: 'transparent', border: 'none', outline: 'none',
                resize: 'none', padding: '24px 24px 8px', fontSize: '17px', color: '#1C2B2B',
                minHeight: '140px', fontFamily: 'inherit', lineHeight: 1.6,
              }}
            />

            <div style={{ padding: '8px 16px 12px', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setAdviserOn(v => !v)}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: adviserOn ? '#E8F3F3' : '#F5EFE6', border: `1px solid ${adviserOn ? '#A8D1D1' : '#E8DDD0'}`, borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 600, color: adviserOn ? '#1A6B6B' : '#6B7B7B', transition: 'all 0.2s' }}
              >
                {adviserOn ? <ToggleRight size={16} /> : <ToggleLeft size={16} />}
                <Sparkles size={13} />
                AI Adviser {adviserOn ? 'ON' : 'OFF'}
              </button>

              {isTechnical && (
                <button
                  onClick={() => setShowOptions(v => !v)}
                  className="options-chip"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: showOptions ? '#F5EFE6' : '#FFFFFF', border: '1px solid #E8DDD0', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 600, color: '#1C2B2B', transition: 'all 0.15s' }}
                >
                  <SlidersHorizontal size={13} color="#6B7B7B" />
                  Options · <span style={{ color: '#1A6B6B' }}>Next.js / Supabase</span>
                </button>
              )}

              <div style={{ flex: 1 }} />

              <button className="build-btn" style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '10px 22px', background: '#C8963E', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(200,150,62,0.35)', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
                <Zap size={15} fill="#fff" /> Build it
              </button>
            </div>

            {isTechnical && showOptions && (
              <div style={{ margin: '0 12px 12px', padding: '20px', background: '#F5EFE6', borderRadius: '12px', border: '1px solid #E8DDD0' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', color: '#9BA8A8', textTransform: 'uppercase', marginBottom: '16px' }}>Build Options</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {[
                    { label: 'Frontend', value: 'Next.js' },
                    { label: 'Backend', value: 'Supabase' },
                  ].map((opt, i) => (
                    <div key={i}>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: '#9BA8A8', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{opt.label}</div>
                      <div style={{ padding: '10px 14px', background: '#FFFFFF', border: '1px solid #E8DDD0', borderRadius: '8px', fontSize: '14px', fontWeight: 600, color: '#1C2B2B', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {opt.value}
                        <ChevronRight size={14} color="#9BA8A8" />
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '12px', padding: '12px 14px', background: '#FFFFFF', border: '1px solid #E8DDD0', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <div style={{ width: '32px', height: '32px', background: '#F5EFE6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🎨</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#1C2B2B' }}>Using default style</div>
                    <div style={{ fontSize: '11px', color: '#9BA8A8' }}>light · modern · cards</div>
                  </div>
                  <ChevronRight size={14} color="#9BA8A8" style={{ marginLeft: 'auto' }} />
                </div>
              </div>
            )}
          </div>

          {/* Adviser */}
          {adviserOn ? (
            suggestions.length > 0 ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '-24px' }}>
                <span style={{ fontSize: '12px', color: '#9BA8A8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Sparkles size={11} /> Suggestions:
                </span>
                {suggestions.map((s, i) => (
                  <button key={i} className="suggestion-chip" onClick={() => setPrompt(p => p + ` ${s.text.toLowerCase()}`)} style={{ padding: '5px 12px', background: '#E8F3F3', border: '1px solid #A8D1D1', borderRadius: '999px', fontSize: '12px', fontWeight: 600, color: '#1A6B6B', cursor: 'pointer', transition: 'all 0.15s' }}>
                    + {s.text}
                  </button>
                ))}
              </div>
            ) : (
              <p style={{ fontSize: '13px', color: '#9BA8A8', textAlign: 'center', marginTop: '-24px' }}>
                <Sparkles size={12} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                Start typing — AI Adviser will suggest improvements as you go.
              </p>
            )
          ) : (
            <div style={{ marginTop: '-24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#6B7B7B' }}>Prompt strength</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: qualityColor }}>{qualityLabel}</span>
              </div>
              <div style={{ height: '5px', background: '#E8DDD0', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${qualityPct}%`, background: qualityColor, borderRadius: '3px', transition: 'all 0.4s ease' }} />
              </div>
            </div>
          )}

          {/* Examples */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', color: '#9BA8A8', textTransform: 'uppercase', marginBottom: '14px' }}>Or try one of these</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {examplePrompts.map(({ text, Icon, chipBg, chipColor }, i) => (
                <button key={i} className="example-row" onClick={() => setPrompt(text)} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', background: '#FFFFFF', border: '1px solid #E8DDD0', borderRadius: '12px', cursor: 'pointer', width: '100%', textAlign: 'left', boxShadow: '0 1px 3px rgba(28,43,43,0.04)', transition: 'all 0.18s' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: chipBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} color={chipColor} strokeWidth={1.8} />
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#1C2B2B', flex: 1 }}>{text}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#1A6B6B', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                    Use <ChevronRight size={13} />
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Templates */}
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', color: '#9BA8A8', textTransform: 'uppercase', marginBottom: '14px' }}>Browse templates</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {templates.map((t, i) => (
                <div key={i} className="template-card" style={{ background: '#FFFFFF', border: '1px solid #E8DDD0', borderRadius: '14px', padding: '18px 14px', cursor: 'pointer', boxShadow: '0 1px 4px rgba(28,43,43,0.05)', transition: 'all 0.2s', textAlign: 'center' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: '18px', fontWeight: 800, color: t.color }}>
                    {t.ar.charAt(0)}
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#1C2B2B', lineHeight: 1.3 }}>{t.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Social proof */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', paddingTop: '8px', borderTop: '1px solid #E8DDD0' }}>
            {[
              { icon: <Users size={14} />, text: '2,400+ GCC founders' },
              { icon: <Globe size={14} />, text: 'Arabic & English native' },
              { icon: <Zap size={14} />, text: 'Live in minutes' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#9BA8A8', fontWeight: 500 }}>
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

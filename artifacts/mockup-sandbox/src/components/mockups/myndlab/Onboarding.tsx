import { Check, ArrowRight } from 'lucide-react';
import './_group.css';
import { useState } from 'react';

export interface OnboardingAnswers {
  appType: string;
  builtBefore: boolean;
  language: 'ar' | 'en';
}

interface OnboardingProps {
  onComplete?: (answers: OnboardingAnswers) => void;
}

const APP_TYPES = [
  { id: 'booking',   label: 'Booking & Appointments', emoji: '📅', color: '#1A6B6B', bg: '#E8F3F3' },
  { id: 'food',      label: 'Food & Delivery',         emoji: '🍔', color: '#C8963E', bg: '#FDF3E3' },
  { id: 'retail',    label: 'Retail & Store',           emoji: '🛍️', color: '#10B981', bg: '#ECFDF5' },
  { id: 'portfolio', label: 'Portfolio & CV',           emoji: '💼', color: '#8B5CF6', bg: '#F3E8FF' },
  { id: 'health',    label: 'Healthcare',               emoji: '🏥', color: '#B05C5C', bg: '#FBF0F0' },
  { id: 'education', label: 'Education & Training',     emoji: '🎓', color: '#0EA5E9', bg: '#E0F2FE' },
];

export function Onboarding({ onComplete }: OnboardingProps) {
  const [appType, setAppType]         = useState<string | null>(null);
  const [builtBefore, setBuiltBefore] = useState<boolean | null>(null);
  const [language, setLanguage]       = useState<'ar' | 'en' | null>(null);

  const allDone = appType !== null && builtBefore !== null && language !== null;

  const handleSubmit = () => {
    if (allDone && onComplete) {
      onComplete({ appType: appType!, builtBefore: builtBefore!, language: language! });
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F5EFE6', fontFamily: 'var(--font-main)', display: 'flex', flexDirection: 'column' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ob-fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .ob-card { transition: all 0.15s ease; cursor: pointer; }
        .ob-card:hover { transform: translateY(-2px); }
        .ob-pill { transition: all 0.15s ease; cursor: pointer; }
        .ob-pill:hover { transform: scale(1.03); }
        .ob-submit:not(:disabled):hover { background: #B07D2E !important; box-shadow: 0 6px 20px rgba(200,150,62,0.45) !important; }
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
        <div style={{ fontSize: '13px', color: '#9BA8A8', fontWeight: 500 }}>Quick setup · 3 questions</div>
      </nav>

      {/* Main */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 24px 40px', overflowY: 'auto' }}>
        <div style={{ width: '100%', maxWidth: '560px', animation: 'ob-fadeUp 0.4s ease-out both', display: 'flex', flexDirection: 'column', gap: '36px' }}>

          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#1C2B2B', letterSpacing: '-0.5px', marginBottom: '6px' }}>
              Let's set up your workspace
            </h2>
            <p style={{ fontSize: '14px', color: '#6B7B7B' }}>
              Three quick questions so we can personalise your experience.
            </p>
          </div>

          {/* Q1 */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: appType ? '#1A6B6B' : '#E8DDD0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s' }}>
                {appType ? <Check size={12} color="#fff" strokeWidth={3} /> : <span style={{ fontSize: '11px', fontWeight: 700, color: '#9BA8A8' }}>1</span>}
              </div>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#1C2B2B' }}>What type of app do you want to build?</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {APP_TYPES.map(t => {
                const selected = appType === t.id;
                return (
                  <div key={t.id} className="ob-card" onClick={() => setAppType(t.id)} style={{
                    background: selected ? t.bg : '#FFFFFF',
                    border: `2px solid ${selected ? t.color : '#E8DDD0'}`,
                    borderRadius: '14px', padding: '14px',
                    display: 'flex', alignItems: 'center', gap: '10px',
                    boxShadow: selected ? `0 4px 12px ${t.color}22` : '0 1px 3px rgba(28,43,43,0.05)',
                    position: 'relative',
                  }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                      {t.emoji}
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: selected ? t.color : '#1C2B2B', lineHeight: 1.3 }}>{t.label}</span>
                    {selected && (
                      <div style={{ position: 'absolute', top: '8px', right: '8px', width: '16px', height: '16px', borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Check size={9} color="#fff" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Q2 */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: builtBefore !== null ? '#1A6B6B' : '#E8DDD0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s' }}>
                {builtBefore !== null ? <Check size={12} color="#fff" strokeWidth={3} /> : <span style={{ fontSize: '11px', fontWeight: 700, color: '#9BA8A8' }}>2</span>}
              </div>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#1C2B2B' }}>Have you built an app before?</span>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { val: true,  emoji: '⚡', label: 'Yes', color: '#1A6B6B', bg: '#E8F3F3' },
                { val: false, emoji: '🌱', label: 'No, first time', color: '#10B981', bg: '#ECFDF5' },
              ].map(opt => {
                const selected = builtBefore === opt.val;
                return (
                  <div key={String(opt.val)} className="ob-pill" onClick={() => setBuiltBefore(opt.val)} style={{
                    flex: 1,
                    background: selected ? opt.bg : '#FFFFFF',
                    border: `2px solid ${selected ? opt.color : '#E8DDD0'}`,
                    borderRadius: '14px', padding: '16px 20px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    boxShadow: selected ? `0 4px 12px ${opt.color}22` : '0 1px 3px rgba(28,43,43,0.05)',
                    position: 'relative',
                  }}>
                    <span style={{ fontSize: '22px' }}>{opt.emoji}</span>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: selected ? opt.color : '#1C2B2B' }}>{opt.label}</span>
                    {selected && (
                      <div style={{ position: 'absolute', top: '8px', right: '8px', width: '16px', height: '16px', borderRadius: '50%', background: opt.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Check size={9} color="#fff" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Q3 */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: language ? '#1A6B6B' : '#E8DDD0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s' }}>
                {language ? <Check size={12} color="#fff" strokeWidth={3} /> : <span style={{ fontSize: '11px', fontWeight: 700, color: '#9BA8A8' }}>3</span>}
              </div>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#1C2B2B' }}>Arabic or English?</span>
              <span style={{ fontSize: '12px', color: '#9BA8A8', fontWeight: 400 }}>You can change this later.</span>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { val: 'ar' as const, emoji: '🇦🇪', label: 'العربية', sub: 'Arabic · RTL', color: '#1A6B6B', bg: '#E8F3F3' },
                { val: 'en' as const, emoji: '🇬🇧', label: 'English', sub: 'English · LTR', color: '#C8963E', bg: '#FDF3E3' },
              ].map(opt => {
                const selected = language === opt.val;
                return (
                  <div key={opt.val} className="ob-pill" onClick={() => setLanguage(opt.val)} style={{
                    flex: 1, background: selected ? opt.bg : '#FFFFFF',
                    border: `2px solid ${selected ? opt.color : '#E8DDD0'}`,
                    borderRadius: '14px', padding: '20px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', textAlign: 'center',
                    boxShadow: selected ? `0 4px 12px ${opt.color}22` : '0 1px 3px rgba(28,43,43,0.05)',
                    position: 'relative',
                  }}>
                    <span style={{ fontSize: '32px' }}>{opt.emoji}</span>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: selected ? opt.color : '#1C2B2B', direction: opt.val === 'ar' ? 'rtl' : 'ltr' }}>{opt.label}</div>
                    <div style={{ fontSize: '11px', color: '#9BA8A8', fontWeight: 500 }}>{opt.sub}</div>
                    {selected && (
                      <div style={{ position: 'absolute', top: '8px', right: '8px', width: '16px', height: '16px', borderRadius: '50%', background: opt.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Check size={9} color="#fff" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Submit */}
          <button
            className="ob-submit"
            onClick={handleSubmit}
            disabled={!allDone}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              background: allDone ? '#C8963E' : '#E8DDD0',
              color: allDone ? '#fff' : '#9BA8A8',
              border: 'none', borderRadius: '14px', padding: '15px 28px',
              fontSize: '15px', fontWeight: 700, cursor: allDone ? 'pointer' : 'default',
              boxShadow: allDone ? '0 4px 16px rgba(200,150,62,0.35)' : 'none',
              transition: 'all 0.15s',
            }}
          >
            Start building <ArrowRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </main>
    </div>
  );
}

export default Onboarding;

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import './_group.css';

export interface OnboardingAnswers {
  appType: string;
  builtBefore: boolean;
  language: 'ar' | 'en';
}

interface OnboardingProps {
  onComplete?: (answers: OnboardingAnswers) => void;
}

const APP_TYPES = [
  { id: 'booking',   label: 'Booking & Appointments', emoji: '📅', color: '#0066FF', bg: '#EEF4FF' },
  { id: 'food',      label: 'Food & Delivery',         emoji: '🍔', color: '#FF9F0A', bg: '#FFF7E6' },
  { id: 'retail',    label: 'Retail & Store',           emoji: '🛍️', color: '#10B981', bg: '#ECFDF5' },
  { id: 'portfolio', label: 'Portfolio & CV',           emoji: '💼', color: '#8B5CF6', bg: '#F3E8FF' },
  { id: 'health',    label: 'Healthcare',               emoji: '🏥', color: '#EF4444', bg: '#FEF2F2' },
  { id: 'education', label: 'Education & Training',     emoji: '🎓', color: '#0EA5E9', bg: '#E0F2FE' },
];

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(1);
  const [appType, setAppType] = useState<string | null>(null);
  const [builtBefore, setBuiltBefore] = useState<boolean | null>(null);
  const [language, setLanguage] = useState<'ar' | 'en' | null>(null);

  const canContinue =
    step === 1 ? !!appType :
    step === 2 ? builtBefore !== null :
    !!language;

  const handleContinue = () => {
    if (step < 3) {
      setStep(s => s + 1);
    } else if (onComplete && appType && builtBefore !== null && language) {
      onComplete({ appType, builtBefore, language });
    }
  };

  const steps = [
    { n: 1, label: 'App type' },
    { n: 2, label: 'Experience' },
    { n: 3, label: 'Language' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFBFF', fontFamily: 'var(--font-main)', display: 'flex', flexDirection: 'column' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ob-fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .ob-card { transition: all 0.15s ease; cursor: pointer; }
        .ob-card:hover { transform: translateY(-2px); }
        .ob-continue:hover { background: #0052CC !important; box-shadow: 0 6px 16px rgba(0,102,255,0.4) !important; }
        * { box-sizing: border-box; }
      `}} />

      {/* Nav */}
      <nav style={{ height: '60px', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '9px', background: 'linear-gradient(135deg, #0066FF, #FF9F0A)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '16px' }}>M</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: '17px', letterSpacing: '-0.3px' }}>Myndlab</span>
        </div>
        <div style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 500 }}>Step {step} of 3</div>
      </nav>

      {/* Main */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px 24px 32px', overflowY: 'auto' }}>

        {/* Step progress */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '44px', animation: 'ob-fadeUp 0.4s ease-out both' }}>
          {steps.map((s, i) => (
            <React.Fragment key={s.n}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: s.n < step ? '#0066FF' : s.n === step ? '#0066FF' : '#E2E8F0',
                  color: s.n <= step ? '#fff' : '#94A3B8',
                  fontSize: '13px', fontWeight: 700, transition: 'all 0.2s',
                  boxShadow: s.n === step ? '0 0 0 4px rgba(0,102,255,0.15)' : 'none',
                }}>
                  {s.n < step ? <Check size={14} strokeWidth={3} /> : s.n}
                </div>
                <span style={{ fontSize: '11px', fontWeight: s.n === step ? 700 : 500, color: s.n === step ? '#0F172A' : '#94A3B8', whiteSpace: 'nowrap' }}>{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div style={{ width: '64px', height: '2px', background: s.n < step ? '#0066FF' : '#E2E8F0', margin: '0 4px', marginBottom: '20px', transition: 'background 0.3s' }} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Step content */}
        <div style={{ width: '100%', maxWidth: '560px', animation: 'ob-fadeUp 0.4s ease-out 0.05s both' }}>

          {/* ── STEP 1 ── */}
          {step === 1 && (
            <>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.5px', marginBottom: '6px', textAlign: 'center' }}>
                What type of app do you want to build?
              </h2>
              <p style={{ fontSize: '14px', color: '#64748B', textAlign: 'center', marginBottom: '28px' }}>
                We'll tailor your build experience around this.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {APP_TYPES.map(t => {
                  const selected = appType === t.id;
                  return (
                    <div key={t.id} className="ob-card" onClick={() => setAppType(t.id)} style={{
                      background: selected ? t.bg : '#FFFFFF',
                      border: `2px solid ${selected ? t.color : '#E2E8F0'}`,
                      borderRadius: '16px', padding: '18px 16px',
                      display: 'flex', alignItems: 'center', gap: '12px',
                      boxShadow: selected ? `0 4px 12px ${t.color}22` : '0 1px 4px rgba(0,0,0,0.05)',
                      position: 'relative',
                    }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                        {t.emoji}
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: selected ? t.color : '#0F172A', lineHeight: 1.3 }}>{t.label}</span>
                      {selected && (
                        <div style={{ position: 'absolute', top: '10px', right: '10px', width: '18px', height: '18px', borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Check size={10} color="#fff" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* ── STEP 2 ── */}
          {step === 2 && (
            <>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.5px', marginBottom: '6px', textAlign: 'center' }}>
                Have you built an app before?
              </h2>
              <p style={{ fontSize: '14px', color: '#64748B', textAlign: 'center', marginBottom: '28px' }}>
                We'll adjust how much guidance we give you.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { val: true,  emoji: '⚡', label: 'Yes, I have', sub: "I know what I'm doing", color: '#0066FF', bg: '#EEF4FF' },
                  { val: false, emoji: '🌱', label: 'No, first time', sub: "I'd love some guidance", color: '#10B981', bg: '#ECFDF5' },
                ].map(opt => {
                  const selected = builtBefore === opt.val;
                  return (
                    <div key={String(opt.val)} className="ob-card" onClick={() => setBuiltBefore(opt.val)} style={{
                      background: selected ? opt.bg : '#FFFFFF',
                      border: `2px solid ${selected ? opt.color : '#E2E8F0'}`,
                      borderRadius: '20px', padding: '28px 20px',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', textAlign: 'center',
                      boxShadow: selected ? `0 4px 12px ${opt.color}22` : '0 1px 4px rgba(0,0,0,0.05)',
                      position: 'relative',
                    }}>
                      <span style={{ fontSize: '36px' }}>{opt.emoji}</span>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: selected ? opt.color : '#0F172A' }}>{opt.label}</div>
                      <div style={{ fontSize: '12px', color: '#64748B' }}>{opt.sub}</div>
                      {selected && (
                        <div style={{ position: 'absolute', top: '12px', right: '12px', width: '20px', height: '20px', borderRadius: '50%', background: opt.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Check size={11} color="#fff" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* ── STEP 3 ── */}
          {step === 3 && (
            <>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.5px', marginBottom: '6px', textAlign: 'center' }}>
                Arabic or English?
              </h2>
              <p style={{ fontSize: '14px', color: '#64748B', textAlign: 'center', marginBottom: '28px' }}>
                Your app interface language. You can change this later.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { val: 'ar' as const, emoji: '🇦🇪', label: 'العربية', sub: 'Arabic · Right to left', color: '#0066FF', bg: '#EEF4FF' },
                  { val: 'en' as const, emoji: '🇬🇧', label: 'English', sub: 'English · Left to right', color: '#FF9F0A', bg: '#FFF7E6' },
                ].map(opt => {
                  const selected = language === opt.val;
                  return (
                    <div key={opt.val} className="ob-card" onClick={() => setLanguage(opt.val)} style={{
                      background: selected ? opt.bg : '#FFFFFF',
                      border: `2px solid ${selected ? opt.color : '#E2E8F0'}`,
                      borderRadius: '20px', padding: '32px 20px',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', textAlign: 'center',
                      boxShadow: selected ? `0 4px 12px ${opt.color}22` : '0 1px 4px rgba(0,0,0,0.05)',
                      position: 'relative',
                    }}>
                      <span style={{ fontSize: '40px' }}>{opt.emoji}</span>
                      <div style={{ fontSize: '17px', fontWeight: 800, color: selected ? opt.color : '#0F172A', direction: opt.val === 'ar' ? 'rtl' : 'ltr' }}>{opt.label}</div>
                      <div style={{ fontSize: '12px', color: '#64748B' }}>{opt.sub}</div>
                      {selected && (
                        <div style={{ position: 'absolute', top: '12px', right: '12px', width: '20px', height: '20px', borderRadius: '50%', background: opt.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Check size={11} color="#fff" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* Nav buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '32px', gap: '12px' }}>
            {step > 1 ? (
              <button onClick={() => setStep(s => s - 1)} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '10px 18px', fontSize: '13px', fontWeight: 600, color: '#64748B', cursor: 'pointer' }}>
                <ArrowLeft size={14} strokeWidth={2.5} /> Back
              </button>
            ) : <div />}
            <button className="ob-continue" onClick={handleContinue} disabled={!canContinue} style={{
              flex: step === 1 ? 1 : undefined,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px',
              background: canContinue ? '#0066FF' : '#E2E8F0',
              color: canContinue ? '#fff' : '#94A3B8',
              border: 'none', borderRadius: '12px', padding: '12px 28px',
              fontSize: '14px', fontWeight: 700, cursor: canContinue ? 'pointer' : 'default',
              boxShadow: canContinue ? '0 4px 12px rgba(0,102,255,0.3)' : 'none',
              transition: 'all 0.15s', minWidth: '160px',
            }}>
              {step < 3 ? 'Continue' : 'Start building'} <ArrowRight size={15} strokeWidth={2.5} />
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Onboarding;

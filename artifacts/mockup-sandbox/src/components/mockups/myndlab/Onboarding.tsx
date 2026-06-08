import { Check, ArrowRight, Calendar, UtensilsCrossed, ShoppingBag, Briefcase, Stethoscope, GraduationCap, Zap, Sprout } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import './_group.css';
import { StarMark } from './_shared/TopNav';
import { useState } from 'react';

export interface OnboardingAnswers {
  appType: string;
  builtBefore: boolean;
  language: 'ar' | 'en';
}

interface OnboardingProps {
  onComplete?: (answers: OnboardingAnswers) => void;
}

const APP_TYPES: { id: string; label: string; Icon: LucideIcon; color: string; bg: string }[] = [
  { id: 'booking',   label: 'Booking & Appointments', Icon: Calendar,         color: '#0F5D54', bg: '#E3F0EC' },
  { id: 'food',      label: 'Food & Delivery',         Icon: UtensilsCrossed,  color: '#0F5D54', bg: '#E3F0EC' },
  { id: 'retail',    label: 'Retail & Store',           Icon: ShoppingBag,      color: '#0F5D54', bg: '#E3F0EC' },
  { id: 'portfolio', label: 'Portfolio & CV',           Icon: Briefcase,        color: '#0F5D54', bg: '#E3F0EC' },
  { id: 'health',    label: 'Healthcare',               Icon: Stethoscope,      color: '#0F5D54', bg: '#E3F0EC' },
  { id: 'education', label: 'Education & Training',     Icon: GraduationCap,    color: '#0F5D54', bg: '#E3F0EC' },
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
    <div style={{ minHeight: '100vh', backgroundColor: '#F4EDE1', fontFamily: 'var(--font-main)', display: 'flex', flexDirection: 'column' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ob-fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .ob-card { transition: all 0.15s ease; cursor: pointer; }
        .ob-card:hover { transform: translateY(-2px); }
        .ob-pill { transition: all 0.15s ease; cursor: pointer; }
        .ob-pill:hover { transform: scale(1.03); }
        .ob-submit:not(:disabled):hover { background: #0A4A43 !important; box-shadow: 0 6px 20px rgba(15,93,84,0.4) !important; }
        * { box-sizing: border-box; }
      `}} />

      {/* Nav */}
      <nav style={{ height: '60px', background: '#FFFFFF', borderBottom: '1px solid #E6DBCB', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', flexShrink: 0, boxShadow: '0 1px 3px rgba(28,43,43,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <StarMark size={26} />
          <span style={{ fontWeight: 600, fontSize: '18px', letterSpacing: '-0.4px', color: '#16302C' }}>Mynd<span style={{ color: '#0F5D54' }}>lab</span></span>
        </div>
        <div style={{ fontFamily: 'var(--mn-mono)', fontSize: '12px', color: '#92A09B', letterSpacing: '0.3px' }}>Quick setup · 3 questions</div>
      </nav>

      {/* Main */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 24px 40px', overflowY: 'auto' }}>
        <div style={{ width: '100%', maxWidth: '560px', animation: 'ob-fadeUp 0.4s ease-out both', display: 'flex', flexDirection: 'column', gap: '36px' }}>

          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--mn-display)', fontSize: '30px', fontWeight: 600, color: '#16302C', letterSpacing: '-0.6px', marginBottom: '8px' }}>
              Let's set up your workspace
            </h2>
            <p style={{ fontSize: '14px', color: '#5E6F6A' }}>
              Three quick questions so we can personalise your experience.
            </p>
          </div>

          {/* Q1 */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: appType ? '#0F5D54' : '#E6DBCB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s' }}>
                {appType ? <Check size={12} color="#fff" strokeWidth={3} /> : <span style={{ fontSize: '11px', fontWeight: 700, color: '#92A09B' }}>1</span>}
              </div>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#16302C' }}>What type of app do you want to build?</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {APP_TYPES.map(t => {
                const selected = appType === t.id;
                return (
                  <div key={t.id} className="ob-card" onClick={() => setAppType(t.id)} style={{
                    background: selected ? t.bg : '#FFFFFF',
                    border: `2px solid ${selected ? t.color : '#E6DBCB'}`,
                    borderRadius: '14px', padding: '14px',
                    display: 'flex', alignItems: 'center', gap: '10px',
                    boxShadow: selected ? `0 4px 12px ${t.color}22` : '0 1px 3px rgba(28,43,43,0.05)',
                    position: 'relative',
                  }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <t.Icon size={18} color={t.color} strokeWidth={1.8} />
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: selected ? t.color : '#16302C', lineHeight: 1.3 }}>{t.label}</span>
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
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: builtBefore !== null ? '#0F5D54' : '#E6DBCB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s' }}>
                {builtBefore !== null ? <Check size={12} color="#fff" strokeWidth={3} /> : <span style={{ fontSize: '11px', fontWeight: 700, color: '#92A09B' }}>2</span>}
              </div>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#16302C' }}>Have you built an app before?</span>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { val: true,  Icon: Zap,    label: 'Yes', color: '#0F5D54', bg: '#E3F0EC' },
                { val: false, Icon: Sprout, label: 'No, first time', color: '#0F5D54', bg: '#E3F0EC' },
              ].map(opt => {
                const selected = builtBefore === opt.val;
                return (
                  <div key={String(opt.val)} className="ob-pill" onClick={() => setBuiltBefore(opt.val)} style={{
                    flex: 1,
                    background: selected ? opt.bg : '#FFFFFF',
                    border: `2px solid ${selected ? opt.color : '#E6DBCB'}`,
                    borderRadius: '14px', padding: '16px 20px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                    boxShadow: selected ? `0 4px 12px ${opt.color}22` : '0 1px 3px rgba(28,43,43,0.05)',
                    position: 'relative',
                  }}>
                    <opt.Icon size={20} color={selected ? opt.color : '#92A09B'} strokeWidth={1.8} />
                    <span style={{ fontSize: '14px', fontWeight: 700, color: selected ? opt.color : '#16302C' }}>{opt.label}</span>
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
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: language ? '#0F5D54' : '#E6DBCB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s' }}>
                {language ? <Check size={12} color="#fff" strokeWidth={3} /> : <span style={{ fontSize: '11px', fontWeight: 700, color: '#92A09B' }}>3</span>}
              </div>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#16302C' }}>Arabic or English?</span>
              <span style={{ fontSize: '12px', color: '#92A09B', fontWeight: 400 }}>You can change this later.</span>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { val: 'ar' as const, glyph: 'ع', label: 'العربية', sub: 'Arabic · RTL', color: '#0F5D54', bg: '#E3F0EC' },
                { val: 'en' as const, glyph: 'En', label: 'English', sub: 'English · LTR', color: '#B07A2B', bg: '#F4E8D2' },
              ].map(opt => {
                const selected = language === opt.val;
                return (
                  <div key={opt.val} className="ob-pill" onClick={() => setLanguage(opt.val)} style={{
                    flex: 1, background: selected ? opt.bg : '#FFFFFF',
                    border: `2px solid ${selected ? opt.color : '#E6DBCB'}`,
                    borderRadius: '14px', padding: '20px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center',
                    boxShadow: selected ? `0 4px 12px ${opt.color}22` : '0 1px 3px rgba(28,43,43,0.05)',
                    position: 'relative',
                  }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: selected ? '#FFFFFF' : opt.bg, border: `1px solid ${selected ? opt.color : '#E6DBCB'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: opt.val === 'ar' ? 'var(--mn-arabic)' : 'var(--mn-display)', fontSize: opt.val === 'ar' ? '24px' : '20px', fontWeight: 600, color: opt.color }}>{opt.glyph}</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: selected ? opt.color : '#16302C', direction: opt.val === 'ar' ? 'rtl' : 'ltr', fontFamily: opt.val === 'ar' ? 'var(--mn-arabic)' : 'inherit' }}>{opt.label}</div>
                    <div style={{ fontFamily: 'var(--mn-mono)', fontSize: '10.5px', color: '#92A09B', letterSpacing: '0.2px' }}>{opt.sub}</div>
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
              background: allDone ? '#0F5D54' : '#E6DBCB',
              color: allDone ? '#fff' : '#92A09B',
              border: 'none', borderRadius: '14px', padding: '15px 28px',
              fontSize: '15px', fontWeight: 600, cursor: allDone ? 'pointer' : 'default',
              boxShadow: allDone ? '0 4px 16px rgba(15,93,84,0.3)' : 'none',
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

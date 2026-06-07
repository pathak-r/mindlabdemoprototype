import React, { useState } from 'react';
import { Lightbulb, Check, ArrowRight } from 'lucide-react';
import './_group.css';

export function PromptExperience() {
  const [prompt, setPrompt] = useState("Build me a booking app for a Dubai personal trainer — Arabic checkout, WhatsApp confirmation, admin dashboard");
  const [appType, setAppType] = useState("Booking");
  const [language, setLanguage] = useState("Arabic-first");

  return (
    <div style={{
      backgroundColor: '#FAFBFF',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#0F172A',
      padding: '64px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <style dangerouslySetInnerHTML={{__html: `
        * { box-sizing: border-box; }
        .prompt-card { transition: all 0.2s ease; }
        .prompt-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.1); }
        .choice-btn { transition: all 0.2s ease; }
        .choice-btn:hover { transform: translateY(-1px); }
        .choice-btn:active { transform: translateY(0); }
        .build-btn { transition: all 0.2s ease; }
        .build-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,102,255,0.35); }
        .build-btn:active { transform: translateY(0); box-shadow: 0 2px 8px rgba(0,102,255,0.25); }
        .example-card { transition: all 0.2s ease; }
        .example-card:hover { transform: translateX(4px); border-color: #CBD5E1; }
      `}} />

      <div style={{ width: '100%', maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 700,
            margin: '0 0 12px 0',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #0066FF, #FF9F0A)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            What do you want to build?
          </h1>
          <p style={{ color: '#64748B', fontSize: '16px', margin: 0 }}>
            Describe your idea, or start with a template.
          </p>
        </div>

        {/* PROMPT DISPLAY */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="prompt-card" style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
          }}>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              style={{
                width: '100%',
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#0F172A',
                margin: 0,
                fontWeight: 500,
                border: 'none',
                outline: 'none',
                resize: 'none',
                minHeight: '100px',
                backgroundColor: 'transparent',
                fontFamily: 'inherit'
              }}
              placeholder="Describe your app idea..."
            />
          </div>

          {/* PROMPT QUALITY INDICATOR */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            paddingLeft: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Check size={16} color="#0066FF" strokeWidth={3} />
              <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>Prompt quality: Detailed</span>
            </div>
            <div style={{ flex: 1, height: '4px', backgroundColor: '#E2E8F0', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '85%', height: '100%', backgroundColor: '#0066FF', borderRadius: '2px' }}></div>
            </div>
          </div>
        </div>

        {/* INLINE PROMPT COACH */}
        <div style={{
          backgroundColor: '#FFF7E6',
          borderRadius: '12px',
          padding: '16px 20px',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start'
        }}>
          <Lightbulb size={20} color="#FF9F0A" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5', color: '#0F172A' }}>
            <strong style={{ color: '#FF9F0A', fontWeight: 600 }}>Tip:</strong> Adding your target audience makes the build smarter. Try: <em>'for busy Dubai professionals who book via Instagram.'</em>
          </p>
        </div>

        {/* EXAMPLE PROMPTS */}
        <div>
          <h3 style={{ fontSize: '13px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', fontWeight: 700 }}>Or try one of these:</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              "Build me a booking app for a Dubai personal trainer...",
              "Create a food delivery app for a Riyadh restaurant...",
              "Build a property listings platform for Abu Dhabi..."
            ].map((examplePrompt, i) => (
              <div 
                key={i} 
                className="example-card"
                onClick={() => setPrompt(examplePrompt)}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  border: '1px solid #E2E8F0',
                  borderLeft: '3px solid #0066FF',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <span style={{ color: '#0F172A', fontSize: '14px', fontWeight: 500 }}>{examplePrompt}</span>
                <span style={{ color: '#0066FF', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap', marginLeft: '16px' }}>
                  Use this <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* A FEW QUICK CHOICES */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '8px' }}>
          <div>
            <h3 style={{ fontSize: '13px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', fontWeight: 700 }}>What type of app?</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['Booking', 'E-commerce', 'Marketplace', 'SaaS'].map((type) => (
                <button 
                  key={type} 
                  className="choice-btn"
                  onClick={() => setAppType(type)}
                  style={{
                    padding: '12px 20px',
                    borderRadius: '8px',
                    border: `1px solid ${appType === type ? '#0066FF' : '#E2E8F0'}`,
                    backgroundColor: appType === type ? '#EEF4FF' : '#FFFFFF',
                    color: appType === type ? '#0066FF' : '#0F172A',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    outline: 'none',
                    margin: 0
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '13px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', fontWeight: 700 }}>Language?</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['Arabic-first', 'Bilingual', 'English'].map((lang) => (
                <button 
                  key={lang} 
                  className="choice-btn"
                  onClick={() => setLanguage(lang)}
                  style={{
                    padding: '12px 20px',
                    borderRadius: '8px',
                    border: `1px solid ${language === lang ? '#0066FF' : '#E2E8F0'}`,
                    backgroundColor: language === lang ? '#EEF4FF' : '#FFFFFF',
                    color: language === lang ? '#0066FF' : '#0F172A',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    outline: 'none',
                    margin: 0
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* BUILD CTA */}
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <button className="build-btn" style={{
            width: '100%',
            backgroundColor: '#0066FF',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '12px',
            padding: '20px 24px',
            fontSize: '18px',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(0,102,255,0.25)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
            outline: 'none'
          }}>
            Build it <ArrowRight size={20} strokeWidth={3} />
          </button>
          <p style={{ color: '#64748B', fontSize: '13px', margin: 0, lineHeight: '1.5', fontWeight: 500 }}>
            Your first build takes about 2 minutes. You'll get a working app you can customise, share, and publish.
          </p>
        </div>

      </div>
    </div>
  );
}

export default PromptExperience;

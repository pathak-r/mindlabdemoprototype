import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import './_group.css';

export function BuildComplete() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#FAFBFF',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .anim-fade-up {
          animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        
        .gradient-text {
          background: linear-gradient(135deg, #0066FF 0%, #FF9F0A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-primary:hover { opacity: 0.95; transform: scale(1.02); }
        .btn-secondary:hover { background-color: #F8FAFC !important; }
        .btn-tertiary:hover { color: #0F172A !important; }
      `}} />

      <div style={{ maxWidth: '600px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* LOGO */}
        <div className="anim-fade-up" style={{
          width: '56px',
          height: '56px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #0066FF 0%, #FF9F0A 100%)',
          marginBottom: '24px',
          boxShadow: '0 8px 16px rgba(0, 102, 255, 0.2)'
        }} />

        {/* HEADLINE */}
        <div className="anim-fade-up delay-100" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '40px',
            fontWeight: 800,
            color: '#0F172A',
            letterSpacing: '-0.02em',
            margin: '0 0 12px 0',
            lineHeight: 1.1
          }}>
            Your app is <span className="gradient-text">ready.</span>
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#64748B',
            margin: 0,
            fontWeight: 400
          }}>
            Here's what we built for you.
          </p>
        </div>

        {/* PHONE MOCKUP */}
        <div className="anim-fade-up delay-200" style={{
          position: 'relative',
          width: '260px',
          height: '540px',
          backgroundColor: '#0F172A',
          borderRadius: '32px',
          padding: '8px',
          boxShadow: '0 0 0 1px rgba(15,23,42,0.05), 0 24px 48px rgba(0,102,255,0.2)',
          marginBottom: '48px',
          flexShrink: 0,
          animation: 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards 200ms, float 6s ease-in-out infinite 800ms'
        }}>
          {/* Screen Inner */}
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#FAFBFF',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Reflection Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 50%)',
              pointerEvents: 'none',
              zIndex: 10
            }} />

            {/* Notch */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '24px',
              backgroundColor: '#0F172A',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              zIndex: 20
            }} />

            {/* App Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: '32px' }}>
              {/* Header */}
              <div style={{
                padding: '16px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                borderBottom: '1px solid #E2E8F0',
                backgroundColor: '#FFFFFF'
              }}>
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A' }}>Dubai PT Booking</span>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#0066FF' }} dir="rtl">حجز دبي</span>
              </div>

              {/* Body */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                
                {/* Greeting */}
                <div style={{ backgroundColor: '#EEF4FF', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#0066FF', marginBottom: '4px' }} dir="rtl">احجز موعدك الآن</div>
                  <div style={{ fontSize: '12px', color: '#64748B' }}>Book your session</div>
                </div>

                {/* Slots */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Upcoming</div>
                  
                  <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #E2E8F0' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0066FF' }} />
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A' }}>Today, 10:00 AM</div>
                      <div style={{ fontSize: '11px', color: '#64748B' }}>Marina Studio</div>
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#FFFFFF', padding: '12px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #E2E8F0' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF9F0A' }} />
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A' }}>Tomorrow, 2:00 PM</div>
                      <div style={{ fontSize: '11px', color: '#64748B' }}>JLT Branch</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Tab Bar */}
              <div style={{
                height: '60px',
                backgroundColor: '#FFFFFF',
                borderTop: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                paddingBottom: '12px'
              }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#0066FF' }} />
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#CBD5E1' }} />
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#CBD5E1' }} />
              </div>

            </div>
          </div>
        </div>

        {/* THREE ACTION BUTTONS */}
        <div className="anim-fade-up delay-300" style={{
          width: '100%',
          maxWidth: '420px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '32px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px' }}>
            <button className="btn-primary" style={{
              backgroundColor: '#0066FF',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '12px',
              padding: '16px 24px',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,102,255,0.25)',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              width: '100%'
            }}>
              Publish as PWA — share a link instantly
            </button>
            <p style={{
              fontSize: '13px',
              color: '#64748B',
              textAlign: 'center',
              margin: 0,
              lineHeight: 1.4
            }}>
              Your app is perfect for PWA distribution. Your users can install it directly from WhatsApp.
            </p>
          </div>

          <button className="btn-secondary" style={{
            backgroundColor: '#FFFFFF',
            color: '#0F172A',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '16px 24px',
            fontSize: '15px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            transition: 'background-color 0.2s',
            width: '100%'
          }}>
            Customise before publishing
          </button>

          <button className="btn-tertiary" style={{
            backgroundColor: 'transparent',
            color: '#64748B',
            border: 'none',
            padding: '12px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'color 0.2s',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px'
          }}>
            I need App Store distribution instead <ArrowRight size={14} />
          </button>
        </div>

        {/* SECURITY SUMMARY */}
        <div className="anim-fade-up delay-400" style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '16px',
          padding: '16px 24px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {[
            "Row-level security",
            "Inputs sanitised",
            "PII encryption"
          ].map((item, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#0F172A'
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Check size={10} color="#FFFFFF" strokeWidth={3} />
              </div>
              {item}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

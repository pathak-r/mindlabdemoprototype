import React from 'react';
import { Mail, Store, Users, ShoppingBag, LayoutGrid, Calendar, Home, Loader2, Apple } from 'lucide-react';
import './_group.css';

export function Signup() {
  const colors = {
    bg: '#FAFBFF',
    surface: '#FFFFFF',
    surfaceSecondary: '#F1F5F9',
    textHeadline: '#0F172A',
    textBody: '#64748B',
    textDim: '#94A3B8',
    primary: '#0066FF',
    secondary: '#FF9F0A',
    bgBlue: '#EEF4FF',
    bgAmber: '#FFF7E6',
    success: '#10B981',
    border: '#E2E8F0',
    borderStrong: '#CBD5E1',
  };

  return (
    <div style={{
      backgroundColor: colors.bg,
      minHeight: '100vh',
      width: '100%',
      fontFamily: 'Inter, system-ui, sans-serif',
      color: colors.textBody,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '64px 24px',
      boxSizing: 'border-box'
    }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .step-card {
          width: 100%;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 80px;
          animation: fade-in 0.6s ease-out forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .btn-hover:hover {
          background-color: #F8FAFC !important;
          border-color: #CBD5E1 !important;
        }
        .tap-card {
          transition: all 0.2s ease;
        }
        .tap-card:hover:not(.selected) {
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          border-color: #CBD5E1;
        }
      `}} />

      {/* STEP 1 */}
      <div className="step-card" style={{ alignItems: 'center', textAlign: 'center' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '16px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '24px'
          }}>
            M
          </div>
          <span style={{
            fontSize: '24px',
            fontWeight: '800',
            color: colors.textHeadline,
            letterSpacing: '-0.5px'
          }}>Myndlab</span>
        </div>

        <h1 style={{
          fontSize: '40px',
          fontWeight: '800',
          color: colors.textHeadline,
          margin: '0 0 40px 0',
          letterSpacing: '-1px',
          lineHeight: '1.1'
        }}>
          Let's get you building.
        </h1>

        <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { icon: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>, label: 'Continue with Google' },
            { icon: <Apple size={24} color={colors.textHeadline} />, label: 'Continue with Apple' },
            { icon: <Mail size={24} color={colors.textHeadline} />, label: 'Continue with email' },
          ].map((btn, i) => (
            <button key={i} className="btn-hover" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              width: '100%',
              padding: '16px',
              backgroundColor: colors.surface,
              border: `1px solid ${colors.border}`,
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              color: colors.textHeadline,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              position: 'relative'
            }}>
              <span style={{ position: 'absolute', left: '24px', display: 'flex' }}>{btn.icon}</span>
              {btn.label}
            </button>
          ))}
        </div>

        <p style={{
          fontSize: '14px',
          color: colors.textDim,
          marginTop: '24px'
        }}>
          Free to start. No credit card needed.
        </p>
      </div>

      {/* STEP 2a */}
      <div className="step-card">
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
          <div style={{ height: '6px', width: '32px', borderRadius: '3px', backgroundColor: colors.primary }} />
          <div style={{ height: '6px', width: '32px', borderRadius: '3px', backgroundColor: colors.border }} />
          <div style={{ height: '6px', width: '32px', borderRadius: '3px', backgroundColor: colors.border }} />
        </div>
        
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: colors.textHeadline,
          margin: '0 0 24px 0',
          letterSpacing: '-0.5px'
        }}>
          What do you want to build?
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px'
        }}>
          {[
            { id: 'food', icon: <ShoppingBag />, label: 'Food Delivery' },
            { id: 'booking', icon: <Calendar />, label: 'Booking & Appointments' },
            { id: 'property', icon: <Home />, label: 'Property Listings' },
            { id: 'market', icon: <Store />, label: 'Marketplace' },
            { id: 'community', icon: <Users />, label: 'Community App' },
            { id: 'other', icon: <LayoutGrid />, label: 'Something else' },
          ].map(item => {
            const isSelected = item.id === 'booking';
            return (
              <div key={item.id} className={`tap-card ${isSelected ? 'selected' : ''}`} style={{
                backgroundColor: isSelected ? colors.bgBlue : colors.surface,
                border: `2px solid ${isSelected ? colors.primary : colors.border}`,
                borderRadius: '16px',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {isSelected && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: colors.primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                )}
                <div style={{ 
                  color: isSelected ? colors.primary : colors.textBody,
                  backgroundColor: isSelected ? 'rgba(0,102,255,0.1)' : colors.surfaceSecondary,
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.icon}
                </div>
                <span style={{
                  fontSize: '15px',
                  fontWeight: isSelected ? '700' : '600',
                  color: isSelected ? colors.primary : colors.textHeadline,
                  lineHeight: '1.4'
                }}>
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* STEP 2b */}
      <div className="step-card">
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
          <div style={{ height: '6px', width: '32px', borderRadius: '3px', backgroundColor: colors.primary }} />
          <div style={{ height: '6px', width: '32px', borderRadius: '3px', backgroundColor: colors.primary }} />
          <div style={{ height: '6px', width: '32px', borderRadius: '3px', backgroundColor: colors.border }} />
        </div>
        
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: colors.textHeadline,
          margin: '0 0 24px 0',
          letterSpacing: '-0.5px'
        }}>
          Have you built an app before?
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {[
            { id: 'never', label: 'Never' },
            { id: 'once', label: 'Once or twice' },
            { id: 'regularly', label: 'Yes, regularly' },
          ].map(item => {
            const isSelected = item.id === 'once';
            return (
              <div key={item.id} className={`tap-card ${isSelected ? 'selected' : ''}`} style={{
                backgroundColor: isSelected ? colors.bgBlue : colors.surface,
                border: `2px solid ${isSelected ? colors.primary : colors.border}`,
                borderRadius: '12px',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}>
                <span style={{
                  fontSize: '16px',
                  fontWeight: isSelected ? '600' : '500',
                  color: isSelected ? colors.primary : colors.textHeadline,
                }}>
                  {item.label}
                </span>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: `2px solid ${isSelected ? colors.primary : colors.borderStrong}`,
                  backgroundColor: isSelected ? colors.primary : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {isSelected && <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'white' }} />}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* STEP 2c */}
      <div className="step-card">
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
          <div style={{ height: '6px', width: '32px', borderRadius: '3px', backgroundColor: colors.primary }} />
          <div style={{ height: '6px', width: '32px', borderRadius: '3px', backgroundColor: colors.primary }} />
          <div style={{ height: '6px', width: '32px', borderRadius: '3px', backgroundColor: colors.primary }} />
        </div>
        
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: colors.textHeadline,
          margin: '0 0 24px 0',
          letterSpacing: '-0.5px'
        }}>
          Which language do you prefer?
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {[
            { id: 'ar', label: 'العربية (Arabic)' },
            { id: 'both', label: 'Both' },
            { id: 'en', label: 'English' },
          ].map(item => {
            const isSelected = item.id === 'both';
            return (
              <div key={item.id} className={`tap-card ${isSelected ? 'selected' : ''}`} style={{
                backgroundColor: isSelected ? colors.bgBlue : colors.surface,
                border: `2px solid ${isSelected ? colors.primary : colors.border}`,
                borderRadius: '12px',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}>
                <span style={{
                  fontSize: '16px',
                  fontWeight: isSelected ? '600' : '500',
                  color: isSelected ? colors.primary : colors.textHeadline,
                }}>
                  {item.label}
                </span>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: `2px solid ${isSelected ? colors.primary : colors.borderStrong}`,
                  backgroundColor: isSelected ? colors.primary : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {isSelected && <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'white' }} />}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* TRANSITION STATE */}
      <div className="step-card" style={{ alignItems: 'center', textAlign: 'center', marginTop: '40px' }}>
        <div style={{
          position: 'relative',
          width: '80px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            backgroundColor: colors.bgBlue,
            animation: 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }} />
          <Loader2 
            size={32} 
            color={colors.primary} 
            style={{ 
              animation: 'spin 1.5s linear infinite',
              position: 'relative',
              zIndex: 1
            }} 
          />
        </div>
        
        <h3 style={{
          fontSize: '20px',
          fontWeight: '700',
          color: colors.primary,
          margin: '0 0 8px 0',
          background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Setting up your workspace...
        </h3>
        
        <p style={{
          fontSize: '14px',
          color: colors.textDim,
          margin: 0
        }}>
          This takes a few seconds.
        </p>
      </div>

    </div>
  );
}

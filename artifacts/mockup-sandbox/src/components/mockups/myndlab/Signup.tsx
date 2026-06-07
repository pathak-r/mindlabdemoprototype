import React, { useState } from 'react';
import './_group.css';
import { Mail, Smartphone, Calendar, Home, ShoppingCart, Users, Sparkles } from 'lucide-react';

export function Signup() {
  return (
    <div className="min-h-screen bg-[var(--mn-navy)] text-[var(--mn-surface)] font-[var(--font-main)] flex flex-col items-center py-20 px-4 overflow-y-auto selection:bg-[var(--mn-cyan)] selection:text-[var(--mn-navy)]">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-cyan {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.4); }
          50% { box-shadow: 0 0 0 10px rgba(0, 212, 255, 0); }
        }
        .pulse-dot {
          animation: pulse-cyan 2s infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />

      <div className="w-full max-w-md space-y-32 pb-32">
        {/* STEP 1: Auth Screen */}
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[var(--mn-cyan)] to-[var(--mn-purple)] flex items-center justify-center font-bold text-white shadow-[0_0_15px_var(--mn-cyan-glow)]">
                M
              </div>
              <span className="text-xl font-semibold tracking-tight">Myndlab</span>
            </div>
            
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Let's get you building.</h1>
              <p className="text-[var(--mn-text-muted)] text-sm">Join thousands of creators shaping the future.</p>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl border border-[var(--mn-border)] bg-[var(--mn-card)] hover:bg-[rgba(255,255,255,0.08)] transition-all text-sm font-medium">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl border border-[var(--mn-border)] bg-[var(--mn-card)] hover:bg-[rgba(255,255,255,0.08)] transition-all text-sm font-medium">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.59-.72 1.55.07 2.76.71 3.49 1.95-2.9 1.76-2.41 5.76.38 6.94-1.12 2.64-1.89 3.58-2.54 4.01M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.02 4.41-3.74 4.25" />
              </svg>
              Continue with Apple
            </button>
            <button className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl border border-[var(--mn-border)] bg-[var(--mn-card)] hover:bg-[rgba(255,255,255,0.08)] transition-all text-sm font-medium">
              <Mail className="w-5 h-5" />
              Continue with email
            </button>
          </div>
          
          <p className="text-center text-xs text-[var(--mn-text-dim)]">
            Free to start. No credit card needed.
          </p>
        </div>

        {/* Divider */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[var(--mn-border)]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[var(--mn-navy)] px-4 text-xs font-medium text-[var(--mn-text-dim)] tracking-widest uppercase">
              Onboarding
            </span>
          </div>
        </div>

        {/* STEP 2a: What to build */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-[var(--mn-cyan)] text-xs font-semibold tracking-wider">1 OF 3</div>
            <h2 className="text-2xl font-bold">What do you want to build?</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: <ShoppingCart className="w-6 h-6 mb-3" />, label: "Food Delivery", selected: false },
              { icon: <Calendar className="w-6 h-6 mb-3" />, label: "Booking & Appointments", selected: false },
              { icon: <Home className="w-6 h-6 mb-3" />, label: "Property Listings", selected: true },
              { icon: <Smartphone className="w-6 h-6 mb-3" />, label: "Marketplace", selected: false },
              { icon: <Users className="w-6 h-6 mb-3" />, label: "Community App", selected: false },
              { icon: <Sparkles className="w-6 h-6 mb-3" />, label: "Something else", selected: false }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`
                  p-5 rounded-xl border cursor-pointer transition-all duration-200
                  ${item.selected 
                    ? 'border-[var(--mn-cyan)] bg-[var(--mn-cyan-glow)] shadow-[0_0_20px_var(--mn-cyan-glow)]' 
                    : 'border-[var(--mn-border)] bg-[var(--mn-card)] hover:border-[rgba(248,249,252,0.2)]'
                  }
                `}
              >
                <div className={`${item.selected ? 'text-[var(--mn-cyan)]' : 'text-[var(--mn-text-muted)]'}`}>
                  {item.icon}
                </div>
                <div className={`text-sm font-medium ${item.selected ? 'text-white' : 'text-[var(--mn-text-muted)]'}`}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STEP 2b: Built before */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-[var(--mn-cyan)] text-xs font-semibold tracking-wider">2 OF 3</div>
            <h2 className="text-2xl font-bold">Have you built an app before?</h2>
          </div>
          
          <div className="flex flex-col gap-3">
            {[
              { label: "Never — this is my first time", selected: false },
              { label: "Once or twice", selected: true },
              { label: "Yes, regularly", selected: false }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`
                  p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between
                  ${item.selected 
                    ? 'border-[var(--mn-cyan)] bg-[var(--mn-cyan-glow)] shadow-[0_0_15px_var(--mn-cyan-glow)]' 
                    : 'border-[var(--mn-border)] bg-[var(--mn-card)] hover:border-[rgba(248,249,252,0.2)]'
                  }
                `}
              >
                <span className={`text-sm font-medium ${item.selected ? 'text-white' : 'text-[var(--mn-text-muted)]'}`}>
                  {item.label}
                </span>
                {item.selected && (
                  <div className="w-2 h-2 rounded-full bg-[var(--mn-cyan)] pulse-dot"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* STEP 2c: Language */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-[var(--mn-cyan)] text-xs font-semibold tracking-wider">3 OF 3</div>
            <h2 className="text-2xl font-bold">Which language do you prefer?</h2>
          </div>
          
          <div className="flex flex-col gap-3">
            {[
              { label: "العربية (Arabic)", selected: false },
              { label: "Both — Arabic and English", selected: true },
              { label: "English", selected: false }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`
                  p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between
                  ${item.selected 
                    ? 'border-[var(--mn-cyan)] bg-[var(--mn-cyan-glow)] shadow-[0_0_15px_var(--mn-cyan-glow)]' 
                    : 'border-[var(--mn-border)] bg-[var(--mn-card)] hover:border-[rgba(248,249,252,0.2)]'
                  }
                `}
              >
                <span className={`text-sm font-medium ${item.selected ? 'text-white' : 'text-[var(--mn-text-muted)]'}`}>
                  {item.label}
                </span>
                {item.selected && (
                  <div className="w-2 h-2 rounded-full bg-[var(--mn-cyan)] pulse-dot"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Transition State */}
        <div className="pt-12">
          <div className="p-8 rounded-2xl border border-[var(--mn-border)] bg-[rgba(255,255,255,0.02)] flex flex-col items-center justify-center space-y-6 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--mn-cyan-glow)] to-transparent opacity-20"></div>
            
            <div className="relative">
              <div className="w-16 h-16 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center animate-spin-slow">
                <div className="w-12 h-12 rounded-full border border-[var(--mn-cyan)] border-t-transparent animate-spin"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[var(--mn-cyan)] pulse-dot"></div>
              </div>
            </div>
            
            <div className="text-center relative z-10">
              <h3 className="text-lg font-medium text-white mb-1">Setting up your workspace...</h3>
              <p className="text-sm text-[var(--mn-text-muted)]">Configuring preferences and environment</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

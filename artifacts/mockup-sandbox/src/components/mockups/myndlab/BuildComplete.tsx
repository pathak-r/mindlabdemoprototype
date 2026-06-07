import React from 'react';
import { Check, ChevronRight, Share, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import './_group.css';

export function BuildComplete() {
  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center p-6 sm:p-12 font-sans"
      style={{ 
        backgroundColor: 'var(--mn-navy)', 
        color: 'var(--mn-surface)',
        fontFamily: 'var(--font-main)'
      }}
    >
      <div className="max-w-4xl w-full flex flex-col items-center gap-12">
        
        {/* 1. TOP HEADLINE */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight" style={{ color: 'var(--mn-surface)' }}>
            Your app is ready.
          </h1>
          <p className="text-lg sm:text-xl" style={{ color: 'var(--mn-text-muted)' }}>
            Here's what we built for you.
          </p>
        </div>

        {/* 2. PHONE MOCKUP */}
        <div 
          className="relative w-[320px] h-[650px] rounded-[48px] p-2 sm:w-[350px] sm:h-[700px] flex-shrink-0"
          style={{ 
            backgroundColor: 'var(--mn-navy-mid)', 
            boxShadow: '0 0 0 1px var(--mn-border), 0 25px 50px -12px rgba(0,0,0,0.5), 0 0 80px -20px var(--mn-cyan-glow)',
          }}
        >
          {/* Inner Screen */}
          <div className="w-full h-full bg-white rounded-[40px] overflow-hidden relative flex flex-col">
            {/* Notch */}
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
              <div className="w-32 h-6 bg-black rounded-b-2xl"></div>
            </div>

            {/* Status Bar Fake */}
            <div className="h-12 w-full bg-white relative z-10"></div>

            {/* App Content */}
            <div className="flex-1 flex flex-col text-slate-900 overflow-y-auto pb-20">
              
              {/* App Header */}
              <div className="px-6 pb-4 pt-2 border-b border-slate-100 flex flex-col">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Fitness App</span>
                <div className="flex justify-between items-end">
                  <h2 className="text-xl font-bold text-slate-900 leading-none">Dubai PT</h2>
                  <span className="text-lg font-bold text-slate-900 leading-none" dir="rtl">حجز مدرب</span>
                </div>
              </div>

              <div className="p-6 space-y-6 flex-1 bg-slate-50">
                
                {/* Greeting */}
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold" dir="rtl">احجز موعدك الآن</h3>
                  <p className="text-sm text-slate-500">Book your next session</p>
                </div>

                {/* Date Picker Mock */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-semibold">This Week <span className="text-slate-400 ml-1 text-xs font-normal" dir="rtl">هذا الأسبوع</span></h4>
                    <span className="text-xs text-indigo-600 font-medium">See all</span>
                  </div>
                  <div className="flex gap-2 overflow-hidden">
                    {[
                      { day: 'Mon', num: '12', active: false },
                      { day: 'Tue', num: '13', active: true },
                      { day: 'Wed', num: '14', active: false },
                      { day: 'Thu', num: '15', active: false },
                    ].map((d, i) => (
                      <div key={i} className={`flex flex-col items-center justify-center p-3 rounded-2xl w-16 flex-shrink-0 ${d.active ? 'bg-indigo-600 text-white shadow-md' : 'bg-white border border-slate-100 text-slate-600'}`}>
                        <span className={`text-xs ${d.active ? 'text-indigo-100' : 'text-slate-400'}`}>{d.day}</span>
                        <span className="text-lg font-bold mt-1">{d.num}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Available Slots */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold">Morning Slots <span className="text-slate-400 ml-1 text-xs font-normal" dir="rtl">الفترة الصباحية</span></h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 border border-indigo-100 bg-indigo-50/50 rounded-xl flex items-center justify-center text-sm font-medium text-indigo-700">08:00 AM</div>
                    <div className="p-3 border border-slate-200 bg-white rounded-xl flex items-center justify-center text-sm font-medium text-slate-600">09:00 AM</div>
                    <div className="p-3 border border-slate-200 bg-white rounded-xl flex items-center justify-center text-sm font-medium text-slate-400 line-through">10:00 AM</div>
                    <div className="p-3 border border-slate-200 bg-white rounded-xl flex items-center justify-center text-sm font-medium text-slate-600">11:00 AM</div>
                  </div>
                </div>

                {/* Action Button Inside Mockup */}
                <div className="mt-4 p-4 bg-indigo-600 rounded-2xl text-white flex justify-between items-center shadow-lg shadow-indigo-200">
                  <span className="font-medium">Confirm Booking</span>
                  <span className="font-bold text-sm bg-white/20 px-2 py-1 rounded-lg">250 AED</span>
                </div>

              </div>
            </div>

            {/* Bottom Nav Mock */}
            <div className="absolute bottom-0 inset-x-0 h-20 bg-white border-t border-slate-100 flex items-center justify-around px-6 pb-4">
              <div className="flex flex-col items-center gap-1 text-indigo-600">
                <Calendar className="w-5 h-5" />
                <span className="text-[10px] font-medium">Book</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-slate-400">
                <Clock className="w-5 h-5" />
                <span className="text-[10px] font-medium">History</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-slate-400">
                <User className="w-5 h-5" />
                <span className="text-[10px] font-medium">Profile</span>
              </div>
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-900 rounded-full"></div>
          </div>
        </div>

        {/* 3. THREE ACTION BUTTONS */}
        <div className="w-full max-w-[400px] flex flex-col gap-4">
          
          <button 
            className="group w-full flex flex-col items-center justify-center py-4 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ 
              backgroundColor: 'var(--mn-cyan)', 
              color: 'var(--mn-navy)',
              boxShadow: '0 0 20px var(--mn-cyan-glow)'
            }}
          >
            <span className="text-base font-semibold flex items-center gap-2">
              Publish as PWA — share a link instantly
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="text-xs font-medium mt-1 opacity-80 text-center">
              Your app is perfect for PWA distribution. Your users can install it directly from WhatsApp.
            </span>
          </button>

          <button 
            className="w-full flex items-center justify-center py-4 px-6 rounded-xl transition-colors duration-200"
            style={{ 
              backgroundColor: 'transparent', 
              color: 'var(--mn-surface)',
              border: '1px solid var(--mn-border)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--mn-card)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <span className="text-sm font-medium">
              Customise before publishing
            </span>
          </button>

          <button 
            className="w-full flex items-center justify-center py-3 px-6 rounded-xl transition-colors duration-200 group"
            style={{ 
              backgroundColor: 'transparent', 
              color: 'var(--mn-text-dim)',
            }}
          >
            <span className="text-sm font-medium group-hover:text-white transition-colors">
              I need App Store distribution instead <span className="ml-1">→</span>
            </span>
          </button>
        </div>

        {/* 4. SECURITY SUMMARY CARD */}
        <div 
          className="w-full max-w-2xl mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 py-4 px-6 rounded-2xl"
          style={{ 
            backgroundColor: 'var(--mn-card)', 
            border: '1px solid var(--mn-border)' 
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Check className="w-3 h-3" strokeWidth={3} />
            </div>
            <span className="text-xs font-medium" style={{ color: 'var(--mn-text-muted)' }}>Row-level security configured</span>
          </div>
          
          <div className="hidden sm:block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--mn-border)' }}></div>
          
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Check className="w-3 h-3" strokeWidth={3} />
            </div>
            <span className="text-xs font-medium" style={{ color: 'var(--mn-text-muted)' }}>Inputs sanitised</span>
          </div>

          <div className="hidden sm:block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--mn-border)' }}></div>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Check className="w-3 h-3" strokeWidth={3} />
            </div>
            <span className="text-xs font-medium" style={{ color: 'var(--mn-text-muted)' }}>PII encryption active</span>
          </div>
        </div>

      </div>
    </div>
  );
}

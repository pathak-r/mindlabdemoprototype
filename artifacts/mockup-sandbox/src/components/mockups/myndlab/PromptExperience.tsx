import React, { useState } from 'react';
import { Lightbulb, Check, Sparkles } from 'lucide-react';
import './_group.css';

export function PromptExperience() {
  const [prompt, setPrompt] = useState("Build me a booking app for a Dubai personal trainer — Arabic checkout, WhatsApp confirmation, admin dashboard");
  const [appType, setAppType] = useState("Booking");
  const [language, setLanguage] = useState("Arabic-first");

  return (
    <div 
      className="min-h-screen w-full flex justify-center py-16 px-4 md:px-8 font-sans"
      style={{ backgroundColor: 'var(--mn-navy)', color: 'var(--mn-surface)' }}
    >
      <div className="w-full max-w-[720px] flex flex-col gap-10">
        
        {/* Header/Title */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">What do you want to build?</h1>
          <p style={{ color: 'var(--mn-text-muted)' }} className="text-sm">
            Describe your idea, or start with a template.
          </p>
        </div>

        {/* Prompt Input Section */}
        <div className="flex flex-col gap-3">
          <div 
            className="w-full rounded-xl p-4 transition-all duration-300"
            style={{ 
              backgroundColor: 'var(--mn-card)', 
              border: '1px solid var(--mn-cyan)',
              boxShadow: 'var(--mn-cyan-glow) 0px 0px 15px -3px'
            }}
          >
            <textarea
              className="w-full bg-transparent border-none outline-none resize-none text-lg leading-relaxed placeholder:text-opacity-30 min-h-[120px]"
              style={{ color: 'var(--mn-surface)' }}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your app..."
            />
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--mn-border)' }}>
              <div className="h-full rounded-full transition-all duration-500 w-[85%]" style={{ backgroundColor: 'var(--mn-cyan)' }} />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: 'var(--mn-cyan)' }}>
              <span>Prompt quality: Detailed</span>
              <Check className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Coach tip */}
        <div 
          className="flex items-start gap-3 p-4 rounded-lg"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--mn-border)' }}
        >
          <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--mn-purple)' }} />
          <p className="text-sm leading-relaxed" style={{ color: 'var(--mn-text-muted)' }}>
            <strong style={{ color: 'var(--mn-surface)' }} className="font-medium">Tip:</strong> Adding your target audience makes the build smarter. Try: 'for busy Dubai professionals who book via Instagram.'
          </p>
        </div>

        {/* Example Prompts */}
        <div className="flex flex-col gap-4">
          <div className="text-sm font-medium tracking-wide uppercase" style={{ color: 'var(--mn-text-muted)' }}>
            Or try one of these:
          </div>
          <div className="flex flex-col gap-3">
            {[
              "Build me a booking app for a Dubai personal trainer — Arabic checkout, WhatsApp confirmation, and a simple admin dashboard.",
              "Create a food delivery app for a Riyadh restaurant — Arabic and English menu, online payment, and live order tracking.",
              "Build a property listings platform for Abu Dhabi — Arabic descriptions, WhatsApp enquiry button, and an agent admin panel."
            ].map((example, i) => (
              <button 
                key={i}
                onClick={() => setPrompt(example)}
                className="group relative flex flex-col items-start gap-3 p-5 rounded-xl text-left transition-all duration-200 hover:translate-x-1"
                style={{ 
                  backgroundColor: 'var(--mn-card)', 
                  border: '1px solid var(--mn-border)',
                  borderLeft: '3px solid var(--mn-cyan)'
                }}
              >
                <p className="text-sm leading-relaxed pr-8" style={{ color: 'var(--mn-surface)' }}>
                  {example}
                </p>
                <div 
                  className="self-end text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" 
                  style={{ color: 'var(--mn-cyan)' }}
                >
                  Use this <span>→</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Choices */}
        <div className="flex flex-col gap-8 pt-4">
          
          {/* App Type */}
          <div className="flex flex-col gap-3">
            <div className="text-sm font-medium tracking-wide uppercase" style={{ color: 'var(--mn-text-muted)' }}>
              What type of app?
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Booking', 'E-commerce', 'Marketplace', 'SaaS'].map((type) => (
                <button
                  key={type}
                  onClick={() => setAppType(type)}
                  className="py-3 px-4 rounded-lg text-sm font-medium transition-all"
                  style={{
                    backgroundColor: appType === type ? 'rgba(0, 212, 255, 0.08)' : 'var(--mn-card)',
                    border: `1px solid ${appType === type ? 'var(--mn-cyan)' : 'var(--mn-border)'}`,
                    color: appType === type ? 'var(--mn-cyan)' : 'var(--mn-surface)',
                    boxShadow: appType === type ? 'var(--mn-cyan-glow) 0px 0px 10px 0px' : 'none'
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Language */}
          <div className="flex flex-col gap-3">
            <div className="text-sm font-medium tracking-wide uppercase" style={{ color: 'var(--mn-text-muted)' }}>
              Language?
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['Arabic-first', 'Bilingual', 'English'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className="py-3 px-4 rounded-lg text-sm font-medium transition-all"
                  style={{
                    backgroundColor: language === lang ? 'rgba(0, 212, 255, 0.08)' : 'var(--mn-card)',
                    border: `1px solid ${language === lang ? 'var(--mn-cyan)' : 'var(--mn-border)'}`,
                    color: language === lang ? 'var(--mn-cyan)' : 'var(--mn-surface)',
                    boxShadow: language === lang ? 'var(--mn-cyan-glow) 0px 0px 10px 0px' : 'none'
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="flex flex-col gap-4 mt-8 pb-12">
          <button 
            className="w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: 'var(--mn-cyan)', color: 'var(--mn-navy)' }}
          >
            <Sparkles className="w-5 h-5" />
            Build it →
          </button>
          <p className="text-center text-xs" style={{ color: 'var(--mn-text-muted)' }}>
            Your first build takes about 2 minutes. You'll get a working app you can customise, share, and publish.
          </p>
        </div>

      </div>
    </div>
  );
}

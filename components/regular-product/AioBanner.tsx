import React from 'react';
import { Download, ChevronRight, CheckCircle2, Star, Zap } from 'lucide-react';

export default function AioBanner() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="relative overflow-hidden bg-slate-900 rounded-[48px] text-white">
          {/* Decorative Gradient Background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 p-16 lg:p-24 items-center">
            {/* Left side: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                <Star size={12} className="text-blue-400 fill-blue-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">The Ultimate Toolkit</span>
              </div>
              
              <h2 className="text-[48px] lg:text-[64px] font-black tracking-tighter leading-[0.9] mb-8">
                UniFab <br />
                <span className="text-blue-500">All-In-One</span>
              </h2>
              
              <p className="text-xl text-slate-400 font-medium mb-12 max-w-lg leading-relaxed">
                Unlock the full potential of AI. 14 professional tools for video upscaling, audio restoration, and cinematic enhancement in one powerful license.
              </p>

              <div className="space-y-4 mb-12">
                {[
                  '14+ Pro AI Tools Included',
                  'Universal Lifetime License',
                  'Priority GPU Processing',
                  'Commercial Usage Rights'
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-blue-500" />
                    <span className="text-sm font-bold tracking-tight">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg transition-all hover:bg-slate-100 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
                  <Zap size={20} className="fill-slate-900" />
                  Upgrade Now
                </button>
                <button className="bg-slate-800 text-white border border-slate-700 px-10 py-5 rounded-2xl font-black text-lg transition-all hover:bg-slate-700 flex items-center justify-center gap-2">
                  View Bundle
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Right side: Visual Grid / Mockup */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Video AI', color: 'bg-blue-500' },
                { label: 'Audio AI', color: 'bg-indigo-500' },
                { label: 'HDR AI', color: 'bg-purple-500' },
                { label: 'Face AI', color: 'bg-pink-500' },
              ].map((item, i) => (
                <div 
                  key={item.label}
                  className={`aspect-square rounded-3xl p-8 flex flex-col justify-between transition-transform duration-500 hover:scale-[1.05] cursor-default ${
                    i % 2 === 0 ? 'translate-y-8' : ''
                  } ${item.color}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Zap size={24} className="text-white" />
                  </div>
                  <p className="text-xl font-black tracking-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

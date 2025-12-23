import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent-purple/20 rounded-full blur-[120px] mix-blend-screen opacity-30"></div>
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center relative">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-400/30 bg-brand-400/10 backdrop-blur-sm text-brand-300 font-medium text-sm animate-fade-in-up">
          🚀 A Revolutionary Leap in Video Processing Technology
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400">
            unifab4
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-purple">
            Coming Soon
          </span>
        </h1>

        <p className="text-xl md:text-3xl text-slate-200 mb-10 max-w-3xl mx-auto font-light tracking-wide">
          Pre-order now for a <span className="text-brand-400 font-bold mx-2">limited-time low price</span> upgrade!
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <button 
             onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
             className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Pre-order Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={() => document.getElementById('terms')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-slate-400 hover:text-white underline decoration-slate-600 underline-offset-4 text-sm transition-colors cursor-pointer"
          >
            Terms & Conditions
          </button>
        </div>

        {/* Floating UI Mockup */}
        <div className="relative mx-auto max-w-5xl mt-8 animate-float">
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-900/50 bg-slate-900/50 backdrop-blur-sm aspect-[16/9] relative group">
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
             <img 
              src="https://picsum.photos/seed/unifabui/1200/675" 
              alt="UniFab 4 UI" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute bottom-10 left-10 z-20 text-left">
               <div className="bg-black/50 backdrop-blur-md p-4 rounded-lg border border-white/10">
                 <p className="text-brand-400 font-mono text-xs mb-1">PROCESSING COMPLETE</p>
                 <h3 className="text-xl font-bold">Real HDR • 16K Upscaling</h3>
               </div>
             </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
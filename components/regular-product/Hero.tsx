import React from 'react';
import { ArrowRight, Download, PlayCircle } from 'lucide-react';

interface HeroProps {
  onDownload?: () => void;
  onBuyNow?: () => void;
}

export default function Hero({ onDownload, onBuyNow }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] -z-10 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Next-Gen AI Engine 4.0 is here</span>
          </div>

          {/* Main Title - Apple Style Typography */}
          <h1 className="text-[64px] md:text-[100px] font-black tracking-tight leading-[0.95] text-slate-900 mb-10 max-w-5xl">
            Pro Video Quality.<br /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-400">
              Powered by AI.
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mb-12 leading-relaxed">
            Experience cinematic upscaling to 16K, intelligent restoration, and professional color grading in one seamless workflow.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-20">
            <button 
              onClick={onDownload}
              className="group bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:bg-slate-800 hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              Get Started for Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-2 text-slate-900 font-bold text-lg hover:text-blue-600 transition-colors group">
              <PlayCircle size={24} className="group-hover:scale-110 transition-transform" />
              Watch the film
            </button>
          </div>

          {/* Product Hero Image / Render */}
          <div className="relative w-full max-w-6xl mx-auto px-4 md:px-0 group">
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full scale-75 group-hover:scale-90 transition-transform duration-1000"></div>
            
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 bg-white aspect-[16/9]">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                alt="UniFab Workspace" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
              />
              
              {/* Floating UI Elements Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
              
              {/* Stats Badge */}
              <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-6">
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Processing Speed</p>
                  <p className="text-2xl font-black text-slate-900 tracking-tighter">200% Faster</p>
                </div>
                <div className="w-[1px] h-10 bg-slate-200"></div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Resolution Max</p>
                  <p className="text-2xl font-black text-slate-900 tracking-tighter">16K Ultra HD</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Wall - Ultra Clean */}
        <div className="mt-32 border-t border-slate-100 pt-16 text-center">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-12">
            Trusted by creators at world-class studios
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12 opacity-30 grayscale contrast-125">
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-6" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" alt="Marvel" className="h-8" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" alt="Disney+" className="h-8" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Adobe_Systems_logo_and_wordmark.svg" alt="Adobe" className="h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

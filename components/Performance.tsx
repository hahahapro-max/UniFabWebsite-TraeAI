import React from 'react';
import { Gauge, Monitor, Zap, Layers } from 'lucide-react';

export default function Performance() {
  return (
    <section className="py-20 bg-slate-900/30 border-y border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Major Local AI Engine Upgrade</h2>
          <p className="text-slate-400">Stronger, faster, and clearer local processing capabilities</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} /> Performance Boost
            </div>
            <h3 className="text-4xl font-bold mt-2 mb-6 leading-tight">
              Speed Increased by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-black italic">300%</span>
              <br />
              <span className="text-2xl text-white">All-New Upscaler Model</span>
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              UniFab 4 introduces the industry's best new upscaling model. This is not just an improvement in image quality, but a leap in efficiency. Inference speed has tripled compared to the previous generation while maintaining delicate textures.
            </p>
            
            <div className="space-y-6 bg-slate-950/50 p-6 rounded-2xl border border-white/5">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold text-white flex items-center gap-2"><Gauge size={16} className="text-brand-400"/> UniFab 4.0 (New Model)</span>
                  <span className="text-brand-400 font-mono">0.05s / frame</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden relative">
                   <div className="absolute inset-0 bg-brand-400/20 animate-pulse"></div>
                  <div className="h-full bg-gradient-to-r from-brand-400 to-brand-600 w-[95%] shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold text-slate-500">UniFab 3.0</span>
                  <span className="text-slate-600 font-mono">0.15s / frame</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-600 w-[30%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
             <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">Local Upscaler to 16K</h4>
                <p className="text-slate-400 text-sm">Even running locally, utilize the latest models to upscale videos to 16K resolution with vivid details.</p>
             </div>
             
             <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 hover:bg-slate-800 transition-colors">
                <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="text-purple-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">HDR to Real Dolby Vision</h4>
                <p className="text-slate-400 text-sm">HDR Upconverter now supports outputting real Dolby Vision format, bringing cinema-grade dynamic range and color depth.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
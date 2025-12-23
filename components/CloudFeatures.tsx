import React from 'react';
import { CloudLightning, Zap, Infinity, Sparkles } from 'lucide-react';

export default function CloudFeatures() {
  return (
    <section id="cloud" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/20 via-slate-950 to-slate-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <span className="text-accent-purple font-bold tracking-wider uppercase text-sm">Cloud Power</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">FabCloud Technology</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
             No expensive graphics card needed, freeing up local computing power. Leverage cloud AI clusters to bring unprecedented image quality improvements to your videos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: HDR */}
          <div className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/5 hover:border-brand-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-500/10">
            <div className="h-64 overflow-hidden relative">
              <img src="https://picsum.photos/seed/hdr/800/400" alt="HDR" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  Lifetime License
                </span>
                <span className="bg-white/10 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                  FabCloud
                </span>
              </div>
            </div>
            
            <div className="p-8 relative">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20 group-hover:-translate-y-2 transition-transform">
                 <CloudLightning className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">UniFab HDR Upconverter AI</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Remaster SDR videos to <span className="text-brand-400 font-semibold">Real HDR</span> in the cloud.
                We provide ample processing time, allowing you to enjoy ultimate colors regardless of local hardware bottlenecks.
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-3"><Zap size={18} className="text-yellow-400" /> <span>No high-end local GPU required, blazing-fast cloud processing</span></li>
                <li className="flex items-center gap-3"><Infinity size={18} className="text-brand-400" /> <span>Includes generous cloud processing hours</span></li>
              </ul>
            </div>
          </div>

          {/* Card 2: Upscaler */}
          <div className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/5 hover:border-accent-purple/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-purple/10">
            <div className="h-64 overflow-hidden relative">
              <img src="https://picsum.photos/seed/upscale/800/400" alt="Upscaler" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-accent-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  Lifetime License
                </span>
                <span className="bg-white/10 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                  FabCloud
                </span>
              </div>
            </div>
            
            <div className="p-8 relative">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-accent-purple/20 group-hover:-translate-y-2 transition-transform">
                 <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">UniFab Video Upscaler AI</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Upscale videos to a stunning <span className="text-accent-purple font-semibold">16K resolution</span> using cloud computing power.
                Break free from local VRAM limitations and achieve cinema-grade image quality.
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-3"><Zap size={18} className="text-yellow-400" /> <span>No performance requirements, cloud cluster rendering</span></li>
                <li className="flex items-center gap-3"><Infinity size={18} className="text-accent-purple" /> <span>Includes ample hours, supports 16K ultra-clear output</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
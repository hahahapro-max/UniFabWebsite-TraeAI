import React from 'react';
import { Layout, MessageSquareHeart, Film, CheckCircle2 } from 'lucide-react';

export default function MajorUpdates() {
  return (
    <section className="py-24 bg-slate-950 space-y-32">
      {/* 1. New UI Experience */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 order-2 md:order-1 relative">
             <div className="absolute inset-0 bg-brand-500/20 blur-[100px] rounded-full opacity-50"></div>
             <img 
               src="https://picsum.photos/seed/ui/800/600" 
               alt="New UI" 
               className="relative rounded-lg shadow-2xl border border-white/10 z-10 hover:scale-[1.02] transition-transform duration-500"
             />
             {/* Floating elements */}
             <div className="absolute -right-5 top-10 bg-slate-800 p-4 rounded-lg border border-white/10 shadow-xl z-20 animate-float hidden md:block">
                <div className="flex gap-2 items-center text-sm font-bold text-white">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div> Simple Mode
                </div>
             </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
              <Layout className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Brand New UI Experience</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We have completely reconstructed UniFab's interaction logic. Smoother UI animations, simpler operation flows, and brand new intelligent categorization. Whether you are a professional or a beginner, you can find joy in the intuitive interface.
            </p>
            <ul className="space-y-4">
               {['Minimalist Design', '60fps Smooth Animations', 'Smart Workflow Presets'].map(item => (
                 <li key={item} className="flex items-center gap-3 text-slate-300">
                   <CheckCircle2 size={20} className="text-brand-500" /> {item}
                 </li>
               ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 2. AI Smart Customer Service */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
              <MessageSquareHeart className="w-8 h-8 text-pink-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Smart Customer Service</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Encountering technical difficulties? No need to wait in line for human support. The built-in AI smart assistant knows every detail of UniFab and can instantly answer your questions, or even help troubleshoot conversion failures.
            </p>
             <button className="text-pink-400 font-bold hover:text-pink-300 transition-colors flex items-center gap-2">
               Learn more about AI support capabilities &rarr;
             </button>
          </div>
          <div className="md:w-1/2 relative">
             <div className="absolute inset-0 bg-pink-500/20 blur-[100px] rounded-full opacity-40"></div>
             <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8 shadow-2xl">
                {/* Chat Mockup */}
                <div className="space-y-4">
                   <div className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0"></div>
                     <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none text-sm text-slate-300">
                       How to upscale this video to 4K HDR?
                     </div>
                   </div>
                   <div className="flex gap-4 flex-row-reverse">
                     <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center flex-shrink-0 text-xs">AI</div>
                     <div className="bg-brand-900/50 border border-brand-500/30 p-3 rounded-2xl rounded-tr-none text-sm text-white shadow-[0_0_15px_rgba(236,72,153,0.1)]">
                       I suggest using the "Upscaler" module and selecting the "Fast" model. For HDR, please check the "Dolby Vision" output option...
                     </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 3. Video Converter Free */}
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-16 border border-white/5 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-16 bg-green-500/10 blur-[100px] rounded-full"></div>
           
           <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
             <div className="md:w-1/2">
                <div className="inline-block bg-green-500 text-slate-950 font-bold px-4 py-1 rounded-full text-sm mb-6">
                  FREE FOR EVERYONE
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Video Converter Is Now Completely Free</h2>
                <p className="text-slate-300 text-lg mb-8">
                  To give back to our users, UniFab 4.0's basic video conversion function (Video Converter) is now permanently free! Supports 1000+ video format conversions, retains GPU acceleration, and has no feature cuts.
                </p>
                <div className="flex gap-4 flex-wrap">
                   {['MP4', 'MKV', 'MOV', 'AVI', 'MP3', 'WebM'].map(fmt => (
                     <span key={fmt} className="px-4 py-2 bg-slate-950 rounded-lg text-slate-400 font-mono text-sm border border-white/10">
                       {fmt}
                     </span>
                   ))}
                </div>
             </div>
             <div className="md:w-1/3 flex justify-center">
                <Film size={200} className="text-slate-700/50 rotate-12" />
                <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 text-white font-black text-9xl opacity-10 pointer-events-none">
                  $0
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
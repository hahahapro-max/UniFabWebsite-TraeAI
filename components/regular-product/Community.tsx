import React from 'react';
import { Star } from 'lucide-react';

export default function Community() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Join the UniFab Community and See What Users Say
          </h2>
        </div>

        <div className="bg-slate-50 rounded-[40px] p-8 lg:p-16 border border-slate-100 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Video Comparison */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-900">
            <img 
              src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop" 
              alt="Community Showcase" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[18px] border-l-white ml-2"></div>
              </div>
            </div>
            
            {/* Split Line */}
            <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/50 backdrop-blur-sm z-10"></div>
            <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest">Original</div>
            <div className="absolute top-4 right-4 bg-blue-600 px-3 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest">Enhanced</div>
          </div>

          {/* Right - Testimonial Detail */}
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" 
                alt="User Avatar" 
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <h4 className="text-xl font-black text-slate-900">Sarah Lee</h4>
                <p className="text-slate-400 text-sm font-bold">Graphic designer, landscape video and boy</p>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="grid grid-cols-4 gap-4">
                <span className="text-slate-400 font-black text-sm uppercase">Model:</span>
                <span className="col-span-3 text-slate-900 font-bold">Climate video upscaler AI</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <span className="text-slate-400 font-black text-sm uppercase">Before:</span>
                <span className="col-span-3 text-slate-900 font-bold">Blurry 720p</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <span className="text-slate-400 font-black text-sm uppercase">After:</span>
                <span className="col-span-3 text-blue-600 font-black">Stunning 4K, enhanced textures</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-8 text-blue-100 text-8xl font-serif">“</div>
              <p className="text-slate-600 font-medium text-lg leading-relaxed relative z-10">
                I was hesitant about AI upscaling at first, but the results were incredible — it restored life into old family vacation footage, every building, tree, and cloud now pop and detail!
              </p>
            </div>

            <div className="flex gap-1 mt-8">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className="fill-blue-600 text-blue-600" />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          <div className="w-10 h-1.5 bg-blue-600 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

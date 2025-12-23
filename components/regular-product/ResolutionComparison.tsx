import React from 'react';

export default function ResolutionComparison() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
              AI Upscale Video Resolution <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">up to 16K</span> in Crystal-Clear Detail
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
              With UniFab's AI Video Upscaling Software, you can easily enhance and upscale video resolution from 720p or 1080p to 4K, 8K, or even 16K ultra-high definition. Trained on millions of video frames, UniFab's AI Upscaler delivers accurate, consistent, and natural-looking results. Its advanced AI algorithms intelligently restore lost details, reduce noise, and refine textures, ensuring every frame appears sharp, clean, and lifelike.
            </p>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-blue-500/25">
              Try for Free
            </button>
          </div>

          {/* Right Image/Mockup */}
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50 aspect-video relative">
              <img 
                src="https://images.unsplash.com/photo-1550745679-31950e318182?q=80&w=2070&auto=format&fit=crop" 
                alt="16K Resolution" 
                className="w-full h-full object-cover"
              />
              
              {/* Resolution Labels */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 right-0 w-1/2 h-[2px] bg-white/50 backdrop-blur-sm flex items-center justify-end px-4">
                  <span className="text-white font-black text-xl drop-shadow-lg">16K</span>
                </div>
                <div className="absolute top-1/2 right-0 w-3/4 h-[2px] bg-white/30 backdrop-blur-sm flex items-center justify-end px-4">
                  <span className="text-white font-black text-lg drop-shadow-lg">8K</span>
                </div>
                <div className="absolute top-3/4 right-0 w-full h-[2px] bg-white/20 backdrop-blur-sm flex items-center justify-end px-4">
                  <span className="text-white font-black text-base drop-shadow-lg">4K</span>
                </div>
              </div>

              {/* Icon Overlay */}
              <div className="absolute top-8 left-8 bg-blue-600 p-4 rounded-2xl shadow-xl">
                <div className="text-white font-black text-2xl">4K</div>
              </div>
            </div>

            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 z-[-1]"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

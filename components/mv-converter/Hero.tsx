
import React from 'react';
import { ArrowRight, Music, Mic2 } from 'lucide-react';

interface MvHeroProps {
  onBuyNow?: () => void;
  onDownload?: () => void;
}

export default function MvHero({ onBuyNow, onDownload }: MvHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#7c3aed] to-[#4f46e5]">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2 text-white text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Extract High-Quality <br />
              Audio from Music Videos
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 mb-8 font-medium max-w-xl mx-auto md:mx-0">
              Convert MV to MP3, FLAC, WAV with AI Vocal Separation. 
              The ultimate tool for music lovers and creators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={onDownload}
                className="px-8 py-4 bg-white text-violet-700 rounded-lg font-bold text-lg shadow-xl hover:bg-gray-50 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Free Download <span className="text-xs font-normal opacity-70">(Win 11/10/8)</span>
              </button>
              <button 
                onClick={onBuyNow}
                className="px-8 py-4 bg-violet-800/50 backdrop-blur-sm border border-white/20 text-white rounded-lg font-bold text-lg hover:bg-violet-800/70 transition-all"
              >
                Buy Now
              </button>
            </div>
            
            <p className="mt-4 text-xs text-indigo-200 opacity-80">
              No watermark · 30-day money back guarantee
            </p>
          </div>

          <div className="md:w-1/2 relative">
             <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-indigo-900/40 bg-slate-900 border-4 border-white/10">
                {/* Mock UI */}
                <img src="https://picsum.photos/seed/mvui/800/500" alt="UniFab MV Converter Interface" className="w-full h-auto block" />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce-slow hidden md:flex">
                   <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                     <Mic2 className="text-pink-600" size={24} />
                   </div>
                   <div>
                     <div className="text-slate-900 font-bold text-sm">AI Vocal Remover</div>
                     <div className="text-slate-500 text-xs">Voice / Instrumental</div>
                   </div>
                </div>

                 <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce-slow hidden md:flex" style={{animationDelay: '1s'}}>
                   <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                     <Music className="text-cyan-600" size={24} />
                   </div>
                   <div>
                     <div className="text-slate-900 font-bold text-sm">Lossless Audio</div>
                     <div className="text-slate-500 text-xs">MP3 / FLAC / WAV</div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

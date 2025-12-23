
import React from 'react';
import { Mic2, Music, Scissors, Tag, Zap } from 'lucide-react';

export default function AIToolkit() {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-3xl p-8 lg:p-16 shadow-2xl overflow-hidden relative">
           
           {/* Background Decorations */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
           
           <div className="lg:w-1/2 z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                UniFab MV Converter AI: <br/>
                The All-In-One Audio Solution
              </h2>
              
              <ul className="space-y-4 mb-8">
                {[
                  { icon: <Zap className="text-amber-500" size={20}/>, text: "High-Speed Batch Extraction" },
                  { icon: <Mic2 className="text-pink-500" size={20}/>, text: "AI Vocal/Instrumental Separation" },
                  { icon: <Music className="text-violet-500" size={20}/>, text: "Lossless Format Conversion" },
                  { icon: <Tag className="text-blue-500" size={20}/>, text: "Smart ID3 Metadata Editing" },
                  { icon: <Scissors className="text-green-500" size={20}/>, text: "Precision Audio Trimming" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="bg-slate-50 p-2 rounded-lg">{item.icon}</div>
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                 <button className="bg-violet-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200">
                    Free Download
                 </button>
                 <button className="bg-white text-violet-600 border border-violet-200 px-8 py-4 rounded-xl font-bold hover:bg-violet-50 transition-colors">
                    Learn More
                 </button>
              </div>
              <p className="mt-4 text-sm text-slate-400 flex items-center gap-2">
                 <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span> 100% Safe & Clean
              </p>
           </div>

           <div className="lg:w-1/2 mt-12 lg:mt-0 relative z-10 flex justify-center">
              <div className="relative">
                 <img src="https://picsum.photos/seed/tool/600/400" alt="Dashboard" className="rounded-xl shadow-2xl border border-slate-100 relative z-10" />
                 
                 {/* Floating Icons */}
                 <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-violet-500 animate-float">
                       <Music size={24}/>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-pink-500 animate-float" style={{animationDelay: '1s'}}>
                       <Mic2 size={24}/>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-amber-500 animate-float" style={{animationDelay: '2s'}}>
                       <Zap size={24}/>
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}

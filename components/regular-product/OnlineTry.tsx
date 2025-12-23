import React, { useState } from 'react';
import { Play, Maximize2, ShieldCheck, Zap } from 'lucide-react';

export default function OnlineTry() {
  const [activeTab, setActiveTab] = useState('upscale');

  const comparisons = [
    {
      id: 'upscale',
      title: 'Resolution Upscaling',
      desc: 'Transform 480p footage into crystal clear 4K with AI texture reconstruction.',
      before: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop',
      features: ['16K Max Output', 'Artifact Removal', 'Edge Sharpening']
    },
    {
      id: 'restoration',
      title: 'Smart Restoration',
      desc: 'Revive old, grainy, or damaged film with deep learning noise reduction.',
      before: 'https://images.unsplash.com/photo-1542204172-3c13952b5b7a?q=80&w=1935&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1512070670240-ee3ba012f4c5?q=80&w=2072&auto=format&fit=crop',
      features: ['Grain Control', 'Scratch Removal', 'Stabilization']
    }
  ];

  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left: Interactive Comparison */}
          <div className="lg:w-3/5 w-full">
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
              <div className="aspect-[16/10] relative">
                <img 
                  src={comparisons.find(c => c.id === activeTab)?.after} 
                  alt="After" 
                  className="w-full h-full object-cover"
                />
                
                {/* Comparison Slider Handle (Visual only) */}
                <div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-xl cursor-ew-resize">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center text-slate-900">
                    <Maximize2 size={20} />
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-8 left-8 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest border border-white/10">
                  Original
                </div>
                <div className="absolute top-8 right-8 px-4 py-2 bg-blue-600/80 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest border border-white/10">
                  UniFab AI
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-2/5 w-full">
            <h2 className="text-[48px] font-black tracking-tighter leading-tight mb-8">
              See the <span className="text-blue-500">difference</span> in every frame.
            </h2>
            
            <div className="space-y-4 mb-12">
              {comparisons.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-6 rounded-3xl transition-all duration-300 border ${
                    activeTab === item.id 
                    ? 'bg-white/10 border-white/20' 
                    : 'bg-transparent border-transparent hover:bg-white/5'
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className={`text-sm leading-relaxed transition-colors ${
                    activeTab === item.id ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-500" size={24} />
                <span className="text-sm font-bold text-slate-400">Secure Privacy</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="text-blue-500" size={24} />
                <span className="text-sm font-bold text-slate-400">Instant Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

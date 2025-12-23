import React, { useState } from 'react';
import { Sparkles, Zap, Shield, Camera, Film, Monitor } from 'lucide-react';

export default function ModelSelector() {
  const [activeTab, setActiveTab] = useState('quality');

  const models = [
    { 
      id: 'quality', 
      name: 'Quality Model', 
      icon: <Sparkles className="w-6 h-6" />,
      tagline: 'Uncompromising Detail',
      desc: 'Our flagship neural network designed for high-end cinematic restoration.',
      features: ['Deep Texture Recovery', 'Noise-Free Clarity', '16K Native Support'],
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop'
    },
    { 
      id: 'fast', 
      name: 'Turbo Model', 
      icon: <Zap className="w-6 h-6" />,
      tagline: 'Real-time Efficiency',
      desc: 'Optimized for high-speed batch processing without sacrificing clarity.',
      features: ['300% Faster Rendering', 'Hardware Accelerated', 'Smart Compression'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop'
    },
    { 
      id: 'anime', 
      name: 'Anime Model', 
      icon: <Camera className="w-6 h-6" />,
      tagline: 'Vibrant & Sharp',
      desc: 'Specially tuned for cell-shaded content and 2D animation upscaling.',
      features: ['Edge Smoothing', 'Flat Color Protection', 'Line Art Enhancement'],
      image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=1974&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-[48px] font-black tracking-tight text-slate-900 mb-6">
            Engineered for every pixel.
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl">
            Choose from our specialized AI models, each trained on millions of frames for specific visual challenges.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar Selector */}
          <div className="lg:col-span-4 space-y-4">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveTab(model.id)}
                className={`w-full text-left p-8 rounded-[24px] transition-all duration-500 group ${
                  activeTab === model.id 
                  ? 'bg-white shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-slate-100' 
                  : 'hover:bg-slate-100 border border-transparent'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                  activeTab === model.id ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500 group-hover:bg-slate-300'
                }`}>
                  {model.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{model.name}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                  {model.tagline}
                </p>
              </button>
            ))}
          </div>

          {/* Main Display Area */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-slate-100 h-full flex flex-col">
              {models.map((model) => model.id === activeTab && (
                <div key={model.id} className="flex-grow flex flex-col animate-in fade-in slide-in-from-right-4 duration-700">
                  <div className="p-12 pb-0">
                    <div className="flex flex-wrap gap-3 mb-8">
                      {model.features.map(f => (
                        <span key={f} className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest">
                          {f}
                        </span>
                      ))}
                    </div>
                    <p className="text-2xl font-bold text-slate-900 mb-8 max-w-xl">
                      {model.desc}
                    </p>
                  </div>
                  
                  <div className="mt-auto px-12 pb-12">
                    <div className="relative aspect-video rounded-2xl overflow-hidden group">
                      <img 
                        src={model.image} 
                        alt={model.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                          <Film size={18} />
                        </div>
                        <span className="font-bold text-sm tracking-tight">AI Preview Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

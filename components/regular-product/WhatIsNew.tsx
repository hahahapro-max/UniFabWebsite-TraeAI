import React, { useState } from 'react';

const updates = [
  { 
    id: 'engine', 
    title: 'Upgraded AI engine for 200% faster processing', 
    label: '120 New AI Models',
    desc: 'The brand new engine significantly accelerates processing speed — up to 200% faster on compatible GPUs. This improvement allows for a much smoother video enhancement experience.',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop'
  },
  { 
    id: 'ui', 
    title: 'Brand new UI for seamless workflow', 
    label: '2.0 UniFab UI',
    desc: 'Redesigned from the ground up to minimize clicks and maximize efficiency. Features a sleek dark mode, customizable workspace, and real-time processing feedback.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 'vocal', 
    title: 'Advanced vocal remover for music production', 
    label: '1.0 Vocal remover',
    desc: 'Separate vocals and background music with industry-leading precision. Perfect for karaoke, sampling, and high-quality remixing projects.',
    img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop'
  },
];

export default function WhatIsNew() {
  const [activeUpdate, setActiveUpdate] = useState('engine');

  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            What's New in UniFab AI Video Upscaler
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left - Vertical Tabs */}
          <div className="lg:col-span-4 space-y-4">
            {updates.map((update) => (
              <button
                key={update.id}
                onClick={() => setActiveUpdate(update.id)}
                className={`w-full p-6 rounded-2xl flex items-center justify-between transition-all duration-300 ${
                  activeUpdate === update.id 
                  ? 'bg-white shadow-xl scale-105 border-l-4 border-blue-600' 
                  : 'bg-transparent hover:bg-white/50 text-slate-400'
                }`}
              >
                <span className="font-black text-lg">{update.label}</span>
                <div className={`w-3 h-3 rounded-full ${activeUpdate === update.id ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
              </button>
            ))}
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-8 bg-white rounded-[40px] p-12 shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 relative group">
              <img 
                src={updates.find(u => u.id === activeUpdate)?.img} 
                alt="Update Preview" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-600/90 rounded-full flex items-center justify-center text-white shadow-xl animate-pulse">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-[12px] border-l-white ml-1"></div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight transition-all duration-300">
                {updates.find(u => u.id === activeUpdate)?.title}
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-8 transition-all duration-300">
                {updates.find(u => u.id === activeUpdate)?.desc}
              </p>
              <a href="#" className="text-blue-600 font-black flex items-center gap-2 hover:gap-3 transition-all">
                More Updates <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

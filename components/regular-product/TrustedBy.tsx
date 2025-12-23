import React, { useState } from 'react';
import { Star } from 'lucide-react';

const categories = ['Media', 'Youtuber', 'Users'];

const testimonials = {
  Media: [
    { name: 'TechRadar', role: 'Technology Media', content: 'UniFab Video Upscaler AI is a game-changer for old video restoration. The 16K upscaling is remarkably detailed.', stars: 5 },
    { name: 'PCMag', role: 'Software Reviewer', content: 'One of the most intuitive AI video enhancement tools we have tested. The results speak for themselves.', stars: 5 },
  ],
  Youtuber: [
    { name: 'VideoExpert', role: '400K Subscribers', content: 'I use UniFab for all my 4K upscaling needs. It saves me hours of manual editing and the quality is superior.', stars: 5 },
  ],
  Users: [
    { name: 'Eric', role: 'Photographer', content: 'UniFab Video Upscaler helped me restore my old 720p travel videos. The detail and sharpness it brings back are incredible.', stars: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Sophie', role: 'Vlogger', content: 'I use UniFab for upscaling my travel videos to 4K, and the difference is stunning. My footage looks so crisp and vibrant now.', stars: 5, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop' },
    { name: 'John D.', role: 'Casual User', content: 'After testing many AI upscalers, UniFab is the one I stuck with. Its interface is simple and results are top-notch.', stars: 5, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop' },
  ]
};

export default function TrustedBy() {
  const [activeTab, setActiveTab] = useState('Users');

  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
          <div className="flex items-center gap-6">
             <div className="text-blue-100">
               <svg width="80" height="60" viewBox="0 0 80 60" fill="currentColor">
                 <path d="M20 0C8.954 0 0 8.954 0 20V40C0 51.046 8.954 60 20 60H30V0H20Z" opacity="0.1" />
                 <path d="M50 0V60H60C71.046 60 80 51.046 80 40V20C80 8.954 71.046 0 60 0H50Z" opacity="0.1" />
               </svg>
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-slate-900">Trusted by</h2>
          </div>

          <div className="flex bg-white p-2 rounded-2xl shadow-lg border border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-xl font-black transition-all ${
                  activeTab === cat ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials[activeTab as keyof typeof testimonials].map((t, i) => (
            <div key={i} className="bg-white rounded-[40px] p-10 shadow-xl border border-slate-100 flex flex-col justify-between hover:scale-105 transition-transform duration-500">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 font-medium leading-relaxed mb-8">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-8">
                {t.avatar && (
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                )}
                <div>
                  <h4 className="font-black text-slate-900">{t.name}</h4>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-400 font-bold text-sm">Rating on TrustPilot: ★★★★☆ 4.8/5</p>
        </div>
      </div>
    </section>
  );
}

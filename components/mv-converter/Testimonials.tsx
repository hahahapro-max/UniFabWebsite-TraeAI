
import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Music Producer",
      text: "The AI vocal remover is a game changer for my remixes. It cleanly separates the tracks without artifacts. Highly recommended for any creator.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Mike Chen",
      role: "Karaoke Enthusiast",
      text: "I have a huge collection of old MVs. UniFab helped me convert them all to high-quality MP3s for my car. The batch processing is super fast.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "David Ross",
      role: "Video Editor",
      text: "Solid tool. I use it to extract background scores from clips. The interface is clean and the ID3 tagging saves me so much time organizing files.",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-slate-900">Trusted by Music Lovers Worldwide</h2>
           <div className="flex justify-center gap-8 mt-6">
              <span className="text-violet-600 font-bold border-b-2 border-violet-600 pb-1">Users</span>
              <span className="text-slate-400 hover:text-slate-600 cursor-pointer">Media</span>
              <span className="text-slate-400 hover:text-slate-600 cursor-pointer">Youtubers</span>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {reviews.map((r, i) => (
             <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow relative">
                <Quote className="absolute top-8 right-8 text-slate-200" size={40} />
                <p className="text-slate-600 mb-8 leading-relaxed relative z-10">
                   "{r.text}"
                </p>
                <div className="flex gap-1 mb-6 text-amber-400">
                   {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <div className="flex items-center gap-4">
                   <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                   <div>
                      <div className="font-bold text-slate-900">{r.name}</div>
                      <div className="text-xs text-slate-500">{r.role}</div>
                   </div>
                </div>
             </div>
           ))}
        </div>
        
        <div className="text-center mt-12 text-slate-500 text-sm">
           Rate us on <span className="font-bold text-slate-900 cursor-pointer">TrustPilot</span> &gt;&gt;
        </div>
      </div>
    </section>
  );
}

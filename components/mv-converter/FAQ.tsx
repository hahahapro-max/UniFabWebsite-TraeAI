
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "Is the MV Converter AI really free to try?",
    a: "Yes! UniFab offers a 30-day free trial where you can use the MV Converter features. The AI vocal separation allows for 3 trial usages before purchase."
  },
  {
    q: "What audio formats can I output to?",
    a: "We support MP3, FLAC, WAV, AAC, AC3, EAC3, WMA, and more. You can also customize the bitrate (up to 320kbps for MP3) and sample rate."
  },
  {
    q: "How does the AI Vocal Remover work?",
    a: "Our trained neural network analyzes the audio spectrum and identifies frequency patterns specific to human vocals vs. instruments, separating them into two distinct tracks with minimal quality loss."
  },
  {
    q: "Does it support 4K or 8K video inputs?",
    a: "Absolutely. UniFab supports input resolutions up to 8K. The audio extraction process is independent of the video resolution, ensuring fast processing even for large files."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">FAQs about MV Converter</h2>
        
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-bold text-lg text-slate-800">{item.q}</span>
                {openIndex === index ? <Minus size={20} className="text-violet-600" /> : <Plus size={20} className="text-slate-400" />}
              </button>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

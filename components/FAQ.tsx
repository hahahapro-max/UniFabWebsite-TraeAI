import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "When will UniFab 4.0 be officially released?",
    a: "We expect to officially push the UniFab 4.0 update in the middle of next month. Pre-order users will receive priority download links."
  },
  {
    q: "Does FabCloud service have internet speed requirements?",
    a: "FabCloud requires uploading videos to the cloud for processing. While there are no hard limits on bandwidth, faster upload speeds will significantly reduce overall waiting time. Processing happens in the cloud and does not consume local data allowance."
  },
  {
    q: "I already bought UniFab 3, do I need to pay full price for 4.0?",
    a: "No. Existing users can check for exclusive discount upgrade plans in the Member Center. This pre-order page is mainly for new users or those wishing to complete their module collection."
  },
  {
    q: "Are there any feature cuts after Video Converter became free?",
    a: "No. UniFab 4.0 makes the basic conversion function completely free, supporting conversion between all mainstream formats, and retains GPU hardware acceleration capabilities."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border border-white/10 rounded-lg bg-slate-900 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-800/50 transition-colors"
              >
                <span className="font-medium text-lg">{item.q}</span>
                {openIndex === index ? <Minus size={20} className="text-brand-400" /> : <Plus size={20} className="text-slate-500" />}
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
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
import React from 'react';
import { Check, ShieldCheck, Clock, Gift } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-brand-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl overflow-hidden border border-brand-500/30 shadow-[0_0_50px_rgba(14,165,233,0.15)]">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-600 to-accent-purple p-8 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <ShieldCheck size={120} />
             </div>
             <span className="inline-block bg-white text-brand-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
               Pre-order Special
             </span>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">UniFab 4.0 All-In-One</h2>
             <p className="text-brand-100">Pre-order now to lock in the lowest launch day price</p>
          </div>

          <div className="grid md:grid-cols-5">
            {/* Features List */}
            <div className="md:col-span-3 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5">
              <h3 className="text-xl font-bold mb-6">Pre-order Benefits Include:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="mt-1 bg-brand-500/20 p-1 rounded-full"><Check size={14} className="text-brand-400" /></div>
                  <span className="text-white font-semibold">Enjoy Limited-Time Low Price</span>
                </li>
                 <li className="flex items-start gap-3 text-slate-300">
                  <div className="mt-1 bg-brand-500/20 p-1 rounded-full"><Check size={14} className="text-brand-400" /></div>
                  <span>Includes FabCloud Lifetime License (HDR + Upscaler)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="mt-1 bg-brand-500/20 p-1 rounded-full"><Gift size={14} className="text-brand-400" /></div>
                  <span>Future New Products Will Be Added for Free</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="mt-1 bg-brand-500/20 p-1 rounded-full"><Check size={14} className="text-brand-400" /></div>
                  <span>Includes All-New 16K Upscaler & Dolby Vision Engine</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="mt-1 bg-brand-500/20 p-1 rounded-full"><Check size={14} className="text-brand-400" /></div>
                  <span>Priority Access to AI Customer Service & New UI</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                 <div className="flex items-center gap-2 text-xs text-slate-400">
                   <ShieldCheck size={16} className="text-green-500"/> <span className="font-semibold text-slate-300">Money-Back Guarantee</span>
                 </div>
                 <div className="flex items-center gap-2 text-xs text-slate-400">
                   <Clock size={16} className="text-blue-500"/> <span className="font-semibold text-slate-300">24/7 Customer Support</span>
                 </div>
              </div>
            </div>

            {/* Price CTA */}
            <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center items-center bg-slate-900/50">
              <div className="text-slate-400 line-through text-lg mb-1">$499.99</div>
              <div className="flex items-start gap-1 mb-2">
                 <span className="text-2xl font-bold mt-2">$</span>
                 <span className="text-6xl font-bold text-white">259</span>
                 <span className="text-2xl font-bold mt-2">.99</span>
              </div>
              <p className="text-brand-400 text-sm font-medium mb-8">Save $240.00 today</p>
              
              <button className="w-full bg-brand-500 hover:bg-brand-400 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-brand-500/25 transition-all hover:scale-105 active:scale-95">
                Pre-order Now
              </button>
              <p className="text-xs text-slate-500 mt-4 text-center">
                *Price will increase after the official release of UniFab 4.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
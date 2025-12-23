
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface ProductBundlesProps {
  onBuyNow?: () => void;
}

export default function ProductBundles({ onBuyNow }: ProductBundlesProps) {
  return (
    <section className="py-24 bg-indigo-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Grab the Bundle, Unlock Big Savings!</h2>
          <p className="text-slate-600">Choose the plan that fits your creative needs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Standard */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:border-violet-200 transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-bl-lg">
              Standard
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2">MV Audio Extractor</h3>
            <div className="flex gap-2 mb-4">
              <span className="bg-violet-100 text-violet-700 text-xs font-bold px-2 py-1 rounded">Lifetime</span>
            </div>
            
            <p className="text-slate-500 text-sm mb-6 h-10">
              Efficiently extract audio from any video format. Supports batch processing and high-quality output.
            </p>

            <div className="flex items-end gap-3 mb-8">
               <span className="text-slate-400 line-through text-lg">$69.99</span>
               <span className="text-4xl font-bold text-amber-500">$39.99</span>
            </div>

            <button 
              onClick={onBuyNow}
              className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-bold mb-6 transition-colors shadow-lg shadow-violet-200"
            >
              Buy Now
            </button>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm text-slate-600 cursor-pointer group-hover:text-violet-600">
                 <span className="font-medium">See features</span>
                 <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Card 2: AI Bundle */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-violet-500 relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-violet-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg shadow-md">
              Best Value
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2">MV Converter AI Suite</h3>
            <div className="flex gap-2 mb-4">
              <span className="bg-violet-100 text-violet-700 text-xs font-bold px-2 py-1 rounded">Lifetime</span>
              <span className="bg-pink-100 text-pink-700 text-xs font-bold px-2 py-1 rounded">AI Powered</span>
            </div>
            
            <p className="text-slate-500 text-sm mb-6 h-10">
              Includes Standard features PLUS AI Vocal Remover to separate vocals and instrumentals automatically.
            </p>

            <div className="flex items-end gap-3 mb-8">
               <span className="text-slate-400 line-through text-lg">$129.99</span>
               <span className="text-4xl font-bold text-amber-500">$59.99</span>
            </div>

            <button 
              onClick={onBuyNow}
              className="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-lg font-bold mb-6 transition-colors shadow-lg shadow-violet-200"
            >
              Buy Now
            </button>

            <ul className="space-y-2 text-sm text-slate-600 mb-4">
               <li className="flex gap-2 items-center"><Check size={16} className="text-green-500"/> All Standard Features</li>
               <li className="flex gap-2 items-center"><Check size={16} className="text-green-500"/> <strong>AI Vocal Separation</strong></li>
               <li className="flex gap-2 items-center"><Check size={16} className="text-green-500"/> Priority Customer Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

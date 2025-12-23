import React from 'react';

export default function WhyChoose() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Why Choose UniFab AI Video Upscaler?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Card 1 - Value Proposition */}
          <div className="bg-slate-50 rounded-[40px] p-12 border border-slate-100 flex flex-col justify-between">
            <div>
              <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">Unbeatable</span>
              <h3 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
                High-quality performance at the best price
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed text-lg mb-8">
                Driven by a "customer-first" philosophy, UniFab Technology delivers exceptional speed and quality while offering the best value in video upscaling solutions in the market.
              </p>
              <p className="text-slate-400 text-sm italic">*Best Value Cards based on average competitor pricing.</p>
            </div>
          </div>

          {/* Card 2 - Price Comparison Chart */}
          <div className="bg-slate-50 rounded-[40px] p-12 border border-slate-100 relative overflow-hidden">
            <h3 className="text-2xl font-black text-slate-900 mb-12 text-center">Price Comparisons</h3>
            
            <div className="flex items-end justify-center gap-8 lg:gap-16 h-64">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 lg:w-20 bg-blue-100 rounded-2xl h-48 relative group">
                  <div className="absolute inset-x-0 bottom-0 bg-blue-200 rounded-2xl h-full transition-all duration-1000"></div>
                </div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Alizee Photo Enhancer</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-16 lg:w-20 bg-blue-100 rounded-2xl h-32 relative group">
                  <div className="absolute inset-x-0 bottom-0 bg-blue-300 rounded-2xl h-full transition-all duration-1000"></div>
                </div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Topaz Photo AI</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-16 lg:w-20 bg-blue-600 rounded-2xl h-16 relative group shadow-lg shadow-blue-500/20">
                  <div className="absolute inset-x-0 bottom-0 bg-blue-600 rounded-2xl h-full"></div>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-2 py-1 rounded-md whitespace-nowrap">
                    Lowest Price
                  </div>
                </div>
                <p className="text-xs font-black text-blue-600 uppercase tracking-widest">UniFab Video Upscaler AI</p>
              </div>
            </div>
            
            <p className="mt-12 text-slate-400 text-[10px] text-center">*All prices are in USD, please check official websites for updates.</p>
          </div>
        </div>

        {/* Bottom Tabs */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {['Speed', 'Effect', 'Price', 'More Advantages'].map((tab) => (
            <button key={tab} className="text-lg font-black text-slate-400 hover:text-slate-900 transition-colors pb-2 border-b-2 border-transparent hover:border-blue-600">
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

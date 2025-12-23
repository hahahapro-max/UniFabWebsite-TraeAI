import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function PricingCards() {
  const plans = [
    {
      name: 'Monthly',
      price: '29.99',
      period: '/mo',
      desc: 'Flexible professional AI tools.',
      features: ['All AI Video Models', '16K Export', 'Basic Support'],
      button: 'Start Monthly',
      highlight: false
    },
    {
      name: 'Lifetime',
      price: '179.99',
      period: '',
      desc: 'The complete professional suite.',
      features: ['Unlimited AI Processing', 'Priority Cloud Rendering', 'Lifetime Updates', '24/7 VIP Support'],
      button: 'Get Lifetime Access',
      highlight: true,
      save: 'Save $90'
    },
    {
      name: 'Business',
      price: '499.99',
      period: '/yr',
      desc: 'Scale your studio production.',
      features: ['Multi-seat License', 'API Access', 'Custom AI Training', 'Dedicated Manager'],
      button: 'Contact Sales',
      highlight: false
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-[48px] md:text-[64px] font-black tracking-tighter text-slate-900 mb-6">
            Simple, transparent pricing.
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Choose the plan that fits your workflow. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col p-10 rounded-[32px] transition-all duration-500 ${
                plan.highlight 
                ? 'bg-slate-900 text-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] scale-105 z-10' 
                : 'bg-white border border-slate-100 hover:border-slate-200'
              }`}
            >
              {plan.save && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {plan.save}
                </div>
              )}

              <div className="mb-10">
                <h3 className={`text-xl font-black mb-4 ${plan.highlight ? 'text-blue-400' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-black tracking-tighter">${plan.price}</span>
                  <span className={`text-lg font-bold ${plan.highlight ? 'text-slate-400' : 'text-slate-400'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`font-medium ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlight ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-900'
                    }`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-sm font-bold tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-black text-sm transition-all duration-300 flex items-center justify-center gap-2 group ${
                plan.highlight 
                ? 'bg-white text-slate-900 hover:bg-slate-100' 
                : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}>
                {plan.button}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <p className="text-center mt-16 text-slate-400 text-sm font-medium">
          All plans include 30-day money-back guarantee. Secure checkout with Stripe.
        </p>
      </div>
    </section>
  );
}

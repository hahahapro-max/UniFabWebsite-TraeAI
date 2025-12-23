import React from 'react';
import { MonitorPlay, Layout, MessageSquareHeart, Film, Award, Maximize } from 'lucide-react';

const features = [
  {
    icon: <Maximize className="w-8 h-8 text-cyan-400" />,
    title: "Local Upscaler to 16K",
    description: "Upscale videos to 16K resolution with industry-leading models even on local machines."
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-purple-400" />,
    title: "Real Dolby Vision",
    description: "HDR Upconverter now supports outputting true Dolby Vision for cinematic dynamic range."
  },
  {
    icon: <Layout className="w-8 h-8 text-pink-400" />,
    title: "All-New UI Experience",
    description: "Completely redesigned interface with smoother animations and more intuitive layouts."
  },
  {
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    title: "Best Upscaling Models",
    description: "Integrated top-tier AI algorithms to remove noise and reconstruct textures perfectly."
  },
  {
    icon: <MessageSquareHeart className="w-8 h-8 text-red-400" />,
    title: "AI Intelligent Support",
    description: "Built-in AI assistant is ready to solve technical issues and operational questions instantly."
  },
  {
    icon: <Film className="w-8 h-8 text-green-400" />,
    title: "Video Converter Now Free",
    description: "The essential Video Converter features of UniFab 4.0 are now completely free to use!"
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Complete Evolution & Beyond</h2>
          <p className="text-slate-400">Not just an AI update, but a complete reshaping of the entire workflow.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:bg-slate-900 hover:border-white/10 transition-all duration-300 group">
              <div className="bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
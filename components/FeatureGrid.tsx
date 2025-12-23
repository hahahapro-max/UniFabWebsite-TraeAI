import React from 'react';
import { MonitorPlay, Layout, MessageSquareHeart, Film, Award, Maximize } from 'lucide-react';

const features = [
  {
    icon: <Maximize className="w-8 h-8 text-cyan-400" />,
    title: "Local Upscaler to 16K",
    description: "即使在本地运行，也能利用最新模型将视频放大至 16K 分辨率，细节毕现。"
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-purple-400" />,
    title: "Real Dolby Vision",
    description: "HDR Upconverter 现在支持输出真正的 Dolby Vision 格式，带来影院级的动态范围。"
  },
  {
    icon: <Layout className="w-8 h-8 text-pink-400" />,
    title: "全新 UI 体验",
    description: "完全重构的界面，更流畅的动效，更直观的分类，让专业操作变得简单悦目。"
  },
  {
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    title: "最好的放大模型",
    description: "集成了业界领先的 AI 算法，在去除噪点的同时完美重建细节纹理。"
  },
  {
    icon: <MessageSquareHeart className="w-8 h-8 text-red-400" />,
    title: "AI 智能客服",
    description: "遇到问题？内置 AI 助手随时待命，即时解决您的技术疑问和操作难题。"
  },
  {
    icon: <Film className="w-8 h-8 text-green-400" />,
    title: "Video Converter 免费化",
    description: "UniFab 4.0 的基础视频转换功能（Video Converter）现在完全免费开放使用！"
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">全面进化，不止于此</h2>
          <p className="text-slate-400">不仅仅是 AI 模型的更新，更是整个工作流的重塑</p>
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
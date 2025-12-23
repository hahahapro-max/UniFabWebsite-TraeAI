import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Globe, User } from 'lucide-react';

interface NavbarProps {
  onDownload?: () => void;
}

export default function Navbar({ onDownload }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const logoUrl = new URL('../../img/unifab-cat.png', import.meta.url).href;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white/70 backdrop-blur-2xl border-b border-slate-200/50 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
        {/* Left: Logo & Main Nav */}
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2 group cursor-pointer">
            <img src={logoUrl} alt="UniFab" className="h-7 w-auto transition-transform duration-500 group-hover:scale-110" />
            <span className="font-extrabold text-xl tracking-tighter text-slate-900">
              UniFab
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-slate-600 tracking-tight">
            <div className="group relative py-2">
              <span className="cursor-pointer hover:text-slate-900 transition-colors flex items-center gap-1">
                Products <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
              </span>
              <div className="absolute top-full -left-4 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-white/90 backdrop-blur-2xl rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 p-3 min-w-[240px]">
                  {['Video Upscaler AI', 'Audio AI Toolkit', 'UniFab All-In-One'].map(item => (
                    <div key={item} className="px-4 py-3 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors">
                      <p className="text-slate-900 text-sm font-bold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <span className="cursor-pointer hover:text-slate-900 transition-colors">Enterprise</span>
            <span className="cursor-pointer hover:text-slate-900 transition-colors">Pricing</span>
            <span className="cursor-pointer hover:text-slate-900 transition-colors">Resources</span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-5 text-slate-400">
            <Search size={18} className="cursor-pointer hover:text-slate-900 transition-colors" />
            <Globe size={18} className="cursor-pointer hover:text-slate-900 transition-colors" />
          </div>
          <div className="h-4 w-[1px] bg-slate-200 hidden md:block"></div>
          <button 
            onClick={onDownload}
            className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/10"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

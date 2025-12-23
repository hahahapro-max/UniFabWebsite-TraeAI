
import React, { useState, useEffect } from 'react';
import { Gift, Bell, User, ChevronRight } from 'lucide-react';

interface NavbarProps {
  theme?: 'dark' | 'light';
  onDownload?: () => void;
}

export default function Navbar({ theme = 'dark', onDownload }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<null | 'video' | 'audio' | 'tool' | 'cloud'>(null);
  const [showNotif, setShowNotif] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme logic: 
  // 'dark' = Default (Slate 950 bg on scroll, White text)
  // 'light' = New Page (White bg on scroll, Purple/Black text)
  
  const scrollBg = theme === 'dark' ? 'bg-slate-950/80' : 'bg-white/90 shadow-md';
  const textColor = (activeMenu || showNotif || (isScrolled && theme === 'light')) ? 'text-slate-800' : 'text-slate-100';
  const buttonVariant = isScrolled && theme === 'light' ? 'bg-violet-600 text-white hover:bg-violet-700' : 'bg-white text-slate-950 hover:bg-brand-400';
  const logoUrl = new URL('../img/unifab-cat.png', import.meta.url).href;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${(activeMenu || showNotif) ? 'bg-white shadow-md border-b border-slate-200 py-4' : (isScrolled ? `${scrollBg} backdrop-blur-md border-b ${theme === 'light' ? 'border-slate-200' : 'border-white/10'} py-4` : 'bg-transparent py-6')}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <img src={logoUrl} alt="UniFab" className="h-10 w-auto" />
        </div>
        
        <div className={`hidden md:flex gap-6 text-sm font-medium ${textColor}`}>
          <button className="hover:opacity-80" onMouseEnter={() => setActiveMenu('video')}>Video AI</button>
          <button className="hover:opacity-80" onMouseEnter={() => setActiveMenu('audio')}>Audio AI</button>
          <button className="hover:opacity-80" onMouseEnter={() => setActiveMenu('tool')}>Video Tool</button>
          <button className="hover:opacity-80" onMouseEnter={() => setActiveMenu('cloud')}>Cloud Tools</button>
          <a href="#" className="hover:opacity-80">Support</a>
        </div>

        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-semibold">
              <Gift className="w-4 h-4" />
              <span>Up to 43% OFF</span>
            </div>
            <button 
              onClick={onDownload}
              className={`bg-violet-600 text-white hover:bg-violet-700 px-6 py-2 rounded-full font-bold text-sm transition-colors shadow-lg`}
            >
              Download
            </button>
            <button className={`hidden md:flex items-center justify-center ${textColor}`} onMouseEnter={() => setShowNotif(true)}>
              <Bell className="w-5 h-5" />
            </button>
            <button className={`hidden md:flex items-center justify-center ${textColor}`}>
              <User className="w-5 h-5" />
            </button>
        </div>
      </div>
      {showNotif && (
        <div className="absolute right-4 top-full" onMouseLeave={() => setShowNotif(false)}>
          <div className="mt-2 w-[460px] rounded-2xl bg-white border border-slate-200 shadow-2xl p-4">
            {[ 
              { tag: 'Sales', date: '2025-12-11', color: 'orange', title: 'Year-End Christmas Appreciation Sale: 40% OFF Plus $15 OFF!' },
              { tag: 'New Feature', date: '2025-12-11', color: 'purple', title: 'UniFab 4 Pre-Sale Is Live! Grab All New Features Before the Price Goes Up!' },
              { tag: 'New Feature', date: '2025-11-12', color: 'purple', title: 'RTX Rapid Upscaler AI Launches! Ultra-Fast Nvidia-Powered Video Upscaling – 30% OFF for a Limited Time' },
            ].map((item, i) => (
              <div key={i} className="flex items-start justify-between gap-3 px-3 py-3 hover:bg-slate-50 rounded-xl">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`${item.color==='orange' ? 'bg-orange-100 text-orange-700' : 'bg-purple-100 text-purple-700'} text-xs font-semibold px-2 py-1 rounded-full`}>{item.tag}</span>
                    <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded-md">{item.date}</span>
                  </div>
                  <div className="text-slate-900 font-semibold text-sm leading-snug">
                    {item.title}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      )}
      {activeMenu && (
        <div className="absolute left-0 top-full w-full bg-white" onMouseLeave={() => setActiveMenu(null)}>
          <div className="mx-auto container px-4 py-6">
            {activeMenu === 'video' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-slate-200">
                    <div className="text-xs font-bold bg-orange-400 text-white inline-block px-2 py-1 rounded-full">14 tools in one suite!</div>
                    <div className="mt-3 text-lg font-semibold">UniFab All-In-One</div>
                    <div className="text-sm text-slate-500">All-Inclusive Video & Audio Enhancer Powered by AI</div>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200">
                    <div className="text-lg font-semibold">UniFab Studio</div>
                    <div className="text-sm text-slate-500">Professional Video Enhancement Solution</div>
                  </div>
                </div>
                <div className="md:col-span-2 grid grid-cols-2 gap-x-8 gap-y-2 items-start content-start">
                  {[
                    ['HDR Upconverter AI','Icon_HDR Upconverter AI.png',''],
                    ['Video Upscaler AI','Icon_Video Upscaler AI.png','HOT'],
                    ['Smoother AI','Icon_Smoother AI.png',''],
                    ['Denoise AI','Icon_Denoise AI.png',''],
                    ['Deinterlace AI','Icon_Deinterlace AI.png',''],
                    ['Video Background Remover AI','Icon_Video Background Remover AI.png','FREE'],
                    ['Video Stabilizer AI','Video_Stabilizer AI.png',''],
                    ['Colorizer AI','Icon_Colorizer AI.png','HOT'],
                    ['Face Enhancer AI','Video_Face Enhancer - FabCloud.png',''],
                    ['RTX RapidHDR AI','Icon_RTX RapidHDR AI.png',''],
                    ['RTX Rapid Upscaler AI','Icon_RTX Rapid Upscaler AI@2x.png','NEW'],
                  ].map(([name,file,badge],i) => {
                    const src = new URL(`../img/${file}`, import.meta.url).href;
                    return (
                      <div key={i} className="flex items-center justify-between py-1 w-full">
                        <a href="#" className="flex items-center gap-2 text-slate-700 hover:text-violet-600 text-sm">
                          <img src={src} alt={name as string} className="w-5 h-5" />
                          <span>{name as string}</span>
                        </a>
                        {badge && <span className={`text-[10px] px-2 py-0.5 rounded-full ${badge==='HOT' ? 'bg-red-100 text-red-600' : badge==='FREE' ? 'bg-green-100 text-green-600' : badge==='NEW' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'}`}>{badge}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {activeMenu === 'audio' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-slate-200">
                    <div className="text-xs font-bold bg-orange-400 text-white inline-block px-2 py-1 rounded-full">14 tools in one suite!</div>
                    <div className="mt-3 text-lg font-semibold">UniFab All-In-One</div>
                    <div className="text-sm text-slate-500">All-Inclusive Video & Audio Enhancer Powered by AI</div>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200">
                    <div className="text-lg font-semibold">UniFab Studio</div>
                    <div className="text-sm text-slate-500">Professional Video Enhancement Solution</div>
                  </div>
                </div>
                <div className="md:col-span-2 flex flex-col gap-2 items-start">
                  {[
                    ['Audio Upmix AI','Icon_ Audio Upmix AI.png',''],
                    ['Vocal Remover AI','Icon_Vocal Remover.png','FREE'],
                  ].map(([name,file,badge],i) => {
                    const src = new URL(`../img/${file}`, import.meta.url).href;
                    return (
                      <div key={i} className="flex items-center justify-between py-1 w-full">
                        <a href="#" className="flex items-center gap-2 text-slate-700 hover:text-violet-600 text-sm">
                          <img src={src} alt={name as string} className="w-5 h-5" />
                          <span>{name as string}</span>
                        </a>
                        {badge && <span className={`text-[10px] px-2 py-0.5 rounded-full ${badge==='FREE' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>{badge}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {activeMenu === 'tool' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-slate-200">
                    <div className="text-xs font-bold bg-orange-400 text-white inline-block px-2 py-1 rounded-full">14 tools in one suite!</div>
                    <div className="mt-3 text-lg font-semibold">UniFab All-In-One</div>
                    <div className="text-sm text-slate-500">All-Inclusive Video & Audio Enhancer Powered by AI</div>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200">
                    <div className="text-lg font-semibold">UniFab Studio</div>
                    <div className="text-sm text-slate-500">Professional Video Enhancement Solution</div>
                  </div>
                </div>
                <div className="md:col-span-2 flex flex-col gap-2 items-start">
                  {[
                    ['Video Translator AI','Icon_Video Translator AI@2x.png','Beta'],
                    ['Subtitle Generator AI – FabCloud','Icon_ AI Subtitle Generator.png',''],
                    ['TV Show Converter','Icon_TV Show Converter@2x.png',''],
                    ['Video Converter','Icon_Video Converter.png','HOT'],
                  ].map(([name,file,badge],i) => {
                    const src = new URL(`../img/${file}`, import.meta.url).href;
                    return (
                      <div key={i} className="flex items-center justify-between py-1 w-full">
                        <a href="#" className="flex items-center gap-2 text-slate-700 hover:text-violet-600 text-sm">
                          <img src={src} alt={name as string} className="w-5 h-5" />
                          <span>{name as string}</span>
                        </a>
                        {badge && <span className={`text-[10px] px-2 py-0.5 rounded-full ${badge==='HOT' ? 'bg-red-100 text-red-600' : badge==='Beta' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>{badge}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {activeMenu === 'cloud' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  {['Cloud Center','Pricing','Cloud Workspace','Guidebook'].map((name,i) => (
                    <a key={i} href="#" className="block py-1 text-slate-700 hover:text-violet-600 text-sm">{name}</a>
                  ))}
                </div>
                <div className="md:col-span-2 flex flex-col gap-2 items-start">
                  {[
                    ['Subtitle Generator AI Cloud','Icon_ AI Subtitle Generator.png','NEW'],
                    ['HDR Upconverter AI Cloud (Coming soon)','Icon_HDR Upconverter AI.png',''],
                    ['Video Upscaler AI Cloud (Coming soon)','Icon_Video Upscaler AI.png',''],
                  ].map(([name,file,badge],i) => {
                    const src = new URL(`../img/${file}`, import.meta.url).href;
                    return (
                      <div key={i} className="flex items-center justify-between py-1 w-full">
                        <a href="#" className="flex items-center gap-2 text-slate-700 hover:text-violet-600 text-sm">
                          <img src={src} alt={name as string} className="w-5 h-5" />
                          <span>{name as string}</span>
                        </a>
                        {badge && <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-600">{badge}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

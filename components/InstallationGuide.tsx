
import React, { useState } from 'react';
import { Download, ExternalLink, Clock, X, User, MoreVertical, ShieldCheck, Zap, Mail, MessageSquare } from 'lucide-react';

interface InstallationGuideProps {
  onRestartDownload?: () => void;
  onBack?: () => void;
}

export default function InstallationGuide({ onRestartDownload, onBack }: InstallationGuideProps) {
  const [showPopup, setShowPopup] = useState(true);
  const [os, setOs] = useState<'win' | 'mac'>('win');
  const [device, setDevice] = useState<'win' | 'mac'>('win');
  const logoUrl = new URL('../img/unifab-cat.png', import.meta.url).href;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative">
      {/* Developer Switcher (Left Side) */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[110] bg-white/90 backdrop-blur-sm border-r border-y border-slate-200 rounded-r-2xl shadow-xl p-4 flex flex-col gap-6">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Installer OS</p>
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => setOs('win')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${os === 'win' ? 'bg-blue-500 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Windows
            </button>
            <button 
              onClick={() => setOs('mac')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${os === 'mac' ? 'bg-blue-500 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              macOS
            </button>
          </div>
        </div>
        
        <div className="w-full h-px bg-slate-100"></div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">User Device</p>
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => setDevice('win')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${device === 'win' ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Win PC
            </button>
            <button 
              onClick={() => setDevice('mac')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${device === 'mac' ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              Macbook
            </button>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100">
           <div className={`text-[10px] font-bold text-center px-2 py-1 rounded ${os === device ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
             {os === device ? 'MATCHED' : 'MISMATCH'}
           </div>
        </div>
      </div>

      {/* Floating Instruction Popup */}
      {showPopup && (
        <div className="fixed top-6 right-6 z-[100] w-[380px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 border border-slate-100 animate-fade-in-up">
          <button 
            onClick={() => setShowPopup(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="relative">
            {/* Step 1 */}
            <div className="flex gap-4 mb-8 relative">
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 z-10"></div>
                <div className="w-px h-full border-l border-dashed border-blue-300 absolute top-2.5"></div>
              </div>
              <div className="flex-1">
                <p className="text-[15px] font-bold text-slate-900 mb-4">
                  <span className="text-blue-500 mr-1">Step 1:</span> Click the icon to open the download list
                </p>
                {/* Toolbar Mockup */}
                <div className="bg-[#f0f7ff] rounded-xl px-4 py-3 flex items-center justify-between">
                  <div className="h-6 w-32 bg-white/60 rounded-full"></div>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full border-2 border-blue-400 flex items-center justify-center bg-white shadow-sm">
                        <Download size={14} className="text-blue-500" />
                      </div>
                      <div className="absolute -bottom-1 -right-1">
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.66208 19.7824L10.3721 17.5144L12.5121 21.8244C12.6321 22.0644 12.8721 22.2144 13.1321 22.2144C13.1821 22.2144 13.2421 22.2144 13.3021 22.1944C13.6221 22.0944 13.8021 21.7544 13.7021 21.4344L11.5621 17.1244L16.5121 16.5144C16.7821 16.4844 17.0021 16.2944 17.0721 16.0344C17.1421 15.7744 17.0421 15.4944 16.8221 15.3344L6.15208 7.23444C5.93208 7.07444 5.63208 7.08444 5.42208 7.26444C5.21208 7.44444 5.13208 7.72444 5.23208 7.98444L8.71208 16.9944L5.18208 18.6944C4.88208 18.8344 4.75208 19.1944 4.89208 19.4944C5.03208 19.7944 5.38208 19.9244 5.68208 19.7844L5.66208 19.7824Z" fill="#4b5563"/>
                         </svg>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <User size={14} className="text-blue-400" />
                    </div>
                    <MoreVertical size={14} className="text-blue-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative">
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 z-10"></div>
              </div>
              <div className="flex-1">
                <p className="text-[15px] font-bold text-slate-900 mb-4">
                  <span className="text-blue-500 mr-1">Step 2:</span> Click the downloaded file to install
                </p>
                {/* File Card Mockup */}
                <div className="bg-white border-2 border-blue-500 rounded-xl p-3 flex items-center gap-3 shadow-sm">
                  <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center shrink-0">
                      <img src={logoUrl} alt="UniFab" className="w-5 h-5" />
                    </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">UniFab_Installer{os === 'win' ? '.exe' : '.dmg'}</p>
                    <p className="text-[10px] text-blue-500 font-medium">Open file</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Section with Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#fff1f2] via-[#f0f9ff] to-white pt-16 pb-12">
        <div className="container mx-auto px-4 relative z-10 text-center">
          {/* Thanks Message */}
          <div className="flex items-center justify-center gap-2 mb-4 text-slate-400 font-bold">
            <span className="text-lg tracking-wide uppercase">Thanks for downloading!</span>
          </div>

          {/* Main Download Header */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="w-auto h-16 flex items-center justify-center">
               <img src={logoUrl} alt="Unifab Cat" className="h-16 w-auto" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Download not working?
            </h1>
            <button 
              onClick={onRestartDownload}
              className="px-8 py-4 bg-[#0070f3] hover:bg-blue-600 text-white rounded-full text-lg font-bold transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
            >
              Restart download
            </button>
          </div>

          {/* OS Switcher */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 p-1 rounded-xl flex gap-1">
              <button 
                onClick={() => setOs('win')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${os === 'win' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Windows
              </button>
              <button 
                onClick={() => setOs('mac')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${os === 'mac' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                macOS
              </button>
            </div>
          </div>

          {/* OS Mismatch Notice or Referral Text */}
          <div className="max-w-4xl mx-auto">
            {os !== device ? (
              <div className="bg-orange-50/50 border border-orange-100 rounded-[32px] p-8 md:p-10 animate-fade-in">
                <div className="max-w-2xl mx-auto">
                  <p className="text-lg md:text-xl text-slate-800 leading-relaxed mb-6">
                    <span className="font-black text-orange-600 mr-2 uppercase tracking-tight">Notice:</span> 
                    You are downloading the <span className="font-bold text-slate-900">{os === 'win' ? 'Windows' : 'macOS'}</span> version of software on <span className="font-bold text-slate-900">{device === 'win' ? 'Windows' : 'macOS'}</span> device.
                  </p>
                  <p className="text-slate-500 font-medium mb-10">If you want to continue, please click the button below to download it manually.</p>
                  
                  <button className="px-12 py-4 bg-slate-900 hover:bg-black text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-slate-200 active:scale-95">
                    Confirm to Download
                  </button>
                </div>
              </div>
            ) : (
              /* Normal case: Hide text according to user request "正常下载这里不写任何文案" */
              null
            )}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Steps Section */}
        <div className={`grid grid-cols-1 ${os === 'win' ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-8 mb-12`}>
          {/* Step 1: Open */}
          <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col h-full">
            <div className="mb-6">
              <h2 className="text-2xl font-black text-slate-900 mb-3">1 Open</h2>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Click the browser's upper-right icon or press <span className="font-bold text-slate-800">{os === 'win' ? 'Ctrl + J' : 'Command + Option + L'}</span> to find and launch the downloaded file.
              </p>
            </div>
            
            {/* Visual for Step 1 (Browser Mockup) */}
            <div className="mt-auto relative bg-[#f8fafc] rounded-2xl border border-slate-100 overflow-hidden pt-8 px-4 h-64">
               {/* Browser UI Mockup */}
               <div className="absolute top-0 left-0 right-0 bg-white border-b border-slate-100 px-4 py-2 flex items-center justify-end gap-3">
                  <div className="w-3 h-3 rounded-full border border-slate-200 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                  </div>
                  <div className="w-3 h-3 rounded-full border border-slate-200"></div>
                  <div className="w-4 h-4 rounded bg-slate-100 flex items-center justify-center">
                    <Download size={10} className="text-slate-400" />
                  </div>
                  <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-blue-500"></div>
                  </div>
               </div>

               {/* Download Item Mockup */}
               <div className="mt-4 bg-white rounded-xl border border-slate-200 p-4 shadow-sm max-w-[280px] relative">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shrink-0">
                      <img src={logoUrl} alt="UniFab" className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-slate-800 truncate mb-0.5">UniFab_Installer{os === 'win' ? '.exe' : '.dmg'}</p>
                      <p className="text-[10px] text-slate-400">2.0 MB • Done</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <div className="w-6 h-6 rounded hover:bg-slate-50 flex items-center justify-center cursor-pointer border border-slate-100">
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"></path></svg>
                      </div>
                      <div className="w-6 h-6 rounded bg-slate-50 flex items-center justify-center cursor-pointer border border-slate-200 relative group">
                         <ExternalLink size={12} className="text-slate-600" />
                         {/* Cursor Mockup */}
                         <div className="absolute -bottom-2 -right-2 pointer-events-none">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.66208 19.7824L10.3721 17.5144L12.5121 21.8244C12.6321 22.0644 12.8721 22.2144 13.1321 22.2144C13.1821 22.2144 13.2421 22.2144 13.3021 22.1944C13.6221 22.0944 13.8021 21.7544 13.7021 21.4344L11.5621 17.1244L16.5121 16.5144C16.7821 16.4844 17.0021 16.2944 17.0721 16.0344C17.1421 15.7744 17.0421 15.4944 16.8221 15.3344L6.15208 7.23444C5.93208 7.07444 5.63208 7.08444 5.42208 7.26444C5.21208 7.44444 5.13208 7.72444 5.23208 7.98444L8.71208 16.9944L5.18208 18.6944C4.88208 18.8344 4.75208 19.1944 4.89208 19.4944C5.03208 19.7944 5.38208 19.9244 5.68208 19.7844L5.66208 19.7824Z" fill="black"/>
                           </svg>
                         </div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Step 2 (Conditional) */}
          {os === 'mac' && (
            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col h-full">
              <div className="mb-6">
                <h2 className="text-2xl font-black text-slate-900 mb-3">2 Allow</h2>
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  If the consent prompt appears, please allow the installation.
                </p>
              </div>
              <div className="mt-auto relative bg-[#f8fafc] rounded-2xl border border-slate-100 overflow-hidden p-6 h-64 flex items-center justify-center">
                <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden w-full max-w-[280px]">
                  <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="w-3 h-3 rounded bg-slate-200"></div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <img src={logoUrl} alt="UniFab" className="w-6 h-6 grayscale opacity-60" />
                    </div>
                    <p className="text-[10px] text-slate-600 font-medium mb-4 leading-tight">
                      "UniFab Installer" is an app downloaded from the Internet. Are you sure you want to open it?
                    </p>
                    <div className="flex flex-col gap-1">
                      <button className="w-full py-1.5 bg-blue-500 text-white text-[10px] font-bold rounded-md shadow-sm">Open</button>
                      <button className="w-full py-1.5 bg-slate-100 text-slate-600 text-[10px] font-medium rounded-md">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Final Step: Install */}
          <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col h-full">
            <div className="mb-6">
              <h2 className="text-2xl font-black text-slate-900 mb-3">{os === 'win' ? '2' : '3'} Install</h2>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Follow the instructions and wait for the installation to complete.
              </p>
            </div>

            {/* Visual for Install (Installer Mockup) */}
            <div className="mt-auto relative bg-[#f8fafc] rounded-2xl border border-slate-100 overflow-hidden pt-8 px-6 h-64 flex flex-col">
               <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden w-full">
                  <div className="bg-slate-50 px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                     <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                     </div>
                     <div className="text-[10px] text-slate-400 font-medium">UniFab Installer</div>
                  </div>
                  <div className="p-6 flex flex-col items-center gap-6">
                     <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shadow-md">
                        <img src={logoUrl} alt="UniFab" className="w-8 h-8" />
                     </div>
                     <div className="w-full space-y-3">
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-500 w-full"></div>
                        </div>
                        <div className="text-center">
                           <span className="text-xs font-bold text-slate-600">100%</span>
                        </div>
                     </div>
                  </div>
               </div>
               {/* Background Mockup Image (Subtle) */}
               <div className="absolute inset-0 opacity-10 pointer-events-none -z-10 flex items-center justify-center">
                  <img src="https://picsum.photos/seed/installerbg/600/400" alt="bg" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>

        {/* Need more help? */}
        <div className="text-center mb-16">
          <p className="text-slate-500 text-[15px]">
            需要详细的教程？ <a href="#" className="text-blue-500 font-bold hover:underline inline-flex items-center gap-1 ml-1">查看UniFab guide book</a>
          </p>
        </div>

        {/* UniFab Achievement Section */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mb-16 px-4">
           {/* Achievement 1 */}
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl border border-violet-100 shadow-sm flex items-center justify-center">
                 <Download className="text-violet-600" size={24} />
              </div>
              <div className="text-left">
                 <p className="text-base font-black text-slate-800 leading-tight">2,000,000+</p>
                 <p className="text-xs text-slate-500 font-medium">Downloads per Year</p>
              </div>
           </div>

           {/* Achievement 2 */}
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl border border-violet-100 shadow-sm flex items-center justify-center">
                 <User className="text-violet-600" size={24} />
              </div>
              <div className="text-left">
                 <p className="text-base font-black text-slate-800 leading-tight">180,000+</p>
                 <p className="text-xs text-slate-500 font-medium">Satisfied Customers</p>
              </div>
           </div>

           {/* Achievement 3 */}
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl border border-violet-100 shadow-sm flex items-center justify-center">
                 <ShieldCheck className="text-violet-600" size={24} />
              </div>
              <div className="text-left">
                 <p className="text-base font-black text-slate-800 leading-tight">100% Secure</p>
                 <p className="text-xs text-slate-500 font-medium">No viruses, no ads</p>
              </div>
           </div>

           {/* Achievement 4 */}
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl border border-violet-100 shadow-sm flex items-center justify-center">
                 <Zap className="text-violet-600" size={24} />
              </div>
              <div className="text-left">
                 <p className="text-base font-black text-slate-800 leading-tight">30-Day</p>
                 <p className="text-xs text-slate-500 font-medium">Free trial, no watermark</p>
              </div>
           </div>
        </div>

        {/* Footer Policy */}
        <div className="text-center mb-16">
        </div>
      </main>

      {/* Questions & Support Section */}
      <section className="pb-24 pt-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative bg-gradient-to-br from-[#f5f3ff] via-[#fff1f2] to-[#fdf4ff] rounded-[40px] p-12 md:p-16 text-center overflow-hidden border border-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.03)]">
            {/* Background Decorative Icons */}
            <div className="absolute top-10 left-10 opacity-[0.03] rotate-[-12deg] pointer-events-none">
              <Mail size={120} />
            </div>
            <div className="absolute bottom-10 right-10 opacity-[0.03] rotate-[12deg] pointer-events-none">
              <MessageSquare size={120} />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Have any questions?
              </h2>
              <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                Welcome to join our community to learn and share UniFab knowledge with <span className="text-violet-600 font-bold">1.8M</span> users. For any questions, you can also contact us.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-2xl font-black text-lg transition-all border border-slate-200 shadow-sm flex items-center justify-center gap-2">
                  <MessageSquare size={22} className="text-violet-600" />
                  Join The Community
                </button>
                <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-violet-200 flex items-center justify-center gap-2">
                  <Mail size={22} />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

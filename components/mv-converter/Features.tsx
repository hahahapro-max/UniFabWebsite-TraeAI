
import React from 'react';
import { Music, Mic, Layers, Settings, FileAudio, Scissors, ArrowRight } from 'lucide-react';

export default function Features() {
  return (
    <section className="bg-white py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 space-y-24">
        
        {/* Feature 1: AI Vocal Remover */}
        <div className="flex flex-col md:flex-row items-center gap-16">
           <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-pink-100 rounded-full blur-[80px] opacity-60"></div>
              <img src="https://picsum.photos/seed/vocal/600/400" alt="AI Vocal Remover" className="relative rounded-2xl shadow-2xl border border-slate-100 z-10" />
              
              {/* Overlay Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg z-20 flex gap-4 items-center">
                 <div className="flex flex-col items-center">
                    <Mic className="text-pink-500 mb-1" size={20}/>
                    <div className="w-1 h-8 bg-pink-200 rounded-full overflow-hidden"><div className="w-full h-2/3 bg-pink-500 mt-auto"></div></div>
                 </div>
                 <div className="text-2xl font-black text-slate-300">/</div>
                 <div className="flex flex-col items-center">
                    <Music className="text-cyan-500 mb-1" size={20}/>
                    <div className="w-1 h-8 bg-cyan-200 rounded-full overflow-hidden"><div className="w-full h-2/3 bg-cyan-500 mt-auto"></div></div>
                 </div>
              </div>
           </div>
           
           <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                 Separate Vocals & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">Instrumentals</span> with AI
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                 Perfect for creating karaoke tracks, remixing, or background music extraction. 
                 Our advanced AI engine precisely isolates the human voice from the instrumental accompaniment, 
                 giving you two distinct, high-quality audio tracks.
              </p>
              <button className="px-6 py-3 bg-pink-50 text-pink-600 font-bold rounded-lg hover:bg-pink-100 transition-colors flex items-center gap-2">
                 <Mic size={18} /> Try AI Separation Free
              </button>
           </div>
        </div>

        {/* Feature 2: Format Support */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
           <div className="md:w-1/2 relative">
               <div className="absolute inset-0 bg-blue-100 rounded-full blur-[80px] opacity-60"></div>
               <img src="https://picsum.photos/seed/formats/600/400" alt="Format Support" className="relative rounded-2xl shadow-2xl border border-slate-100 z-10" />
               
               {/* Floating Formats */}
               <div className="absolute -bottom-5 -right-5 flex gap-2 animate-bounce-slow">
                  {['MP4', 'MKV', 'AVI'].map(fmt => (
                     <span key={fmt} className="bg-slate-800 text-white px-3 py-1 rounded-md text-sm font-mono shadow-lg">{fmt}</span>
                  ))}
               </div>
               <div className="absolute -top-5 -left-5 flex gap-2 animate-bounce-slow" style={{animationDelay: '1.5s'}}>
                  {['MP3', 'FLAC', 'WAV'].map(fmt => (
                     <span key={fmt} className="bg-violet-600 text-white px-3 py-1 rounded-md text-sm font-mono shadow-lg">{fmt}</span>
                  ))}
               </div>
           </div>
           
           <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                 <span className="text-violet-600">Multi-Format</span> Input & Output
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                 Whether it's MP4, MKV, AVI, or WMV, UniFab handles it all. 
                 Output to universal MP3, lossless FLAC for audiophiles, or WAV for editing. 
                 Customize bitrate, sample rate, and channels to fit your specific needs.
              </p>
              <ul className="grid grid-cols-2 gap-4 text-slate-700">
                 <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-violet-500"></div> Lossless Conversion</li>
                 <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-violet-500"></div> Custom Bitrate</li>
                 <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-violet-500"></div> High Speed Engine</li>
                 <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-violet-500"></div> All Codecs Supported</li>
              </ul>
           </div>
        </div>

        {/* Feature 3: Batch & Edit */}
        <div className="flex flex-col md:flex-row items-center gap-16">
           <div className="md:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-4"><Layers size={24}/></div>
                    <h3 className="font-bold text-slate-900 mb-2">Batch Process</h3>
                    <p className="text-sm text-slate-500">Convert entire playlists in one go</p>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow mt-8">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4"><Scissors size={24}/></div>
                    <h3 className="font-bold text-slate-900 mb-2">Audio Trim</h3>
                    <p className="text-sm text-slate-500">Cut unwanted intros or outros</p>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mb-4"><Settings size={24}/></div>
                    <h3 className="font-bold text-slate-900 mb-2">ID3 Tags</h3>
                    <p className="text-sm text-slate-500">Edit metadata cover & artist</p>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow mt-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mb-4"><FileAudio size={24}/></div>
                    <h3 className="font-bold text-slate-900 mb-2">Manage Library</h3>
                    <p className="text-sm text-slate-500">Keep files organized output</p>
                 </div>
              </div>
           </div>
           
           <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                 Workflow Optimized for <span className="text-blue-600">Efficiency</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                 Don't waste time converting one by one. Import thousands of files, set your preferences, and let UniFab work in the background. 
                 Use the built-in trimmer to get only the audio segment you need, and automatically fetch or edit metadata tags for a clean library.
              </p>
              <button className="text-blue-600 font-bold hover:underline flex items-center gap-2">
                 Learn more about batch tools <ArrowRight size={16}/>
              </button>
           </div>
        </div>

      </div>
    </section>
  );
}

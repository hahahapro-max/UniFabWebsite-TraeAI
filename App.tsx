
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CloudFeatures from './components/CloudFeatures';
import Performance from './components/Performance';
import MajorUpdates from './components/MajorUpdates';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MvConverterPage from './pages/MvConverterPage';
import CheckoutPage from './components/checkou/App';
import { PaymentSuccess } from './components/checkou/components/PaymentSuccess';
import InstallationGuide from './components/InstallationGuide';
import RegularProductPage from './pages/RegularProductPage';

export default function App() {
  // Simple client-side routing state
  // Default to 'mv' to show the new page immediately as requested
  const [page, setPage] = useState<'home' | 'mv' | 'checkout' | 'success' | 'download' | 'product'>('mv');

  // We need to pass the navigation capability to Navbar
  // Since Navbar is currently hardcoded in files, I will wrap the main content 
  // but I need to modify Navbar to accept props or I can just put a floating switcher for demo purposes
  // if I don't want to modify Navbar deeply.
  // Actually, keeping it clean: I will pass a custom event or just use a floating toggle for this demo 
  // since Navbar is imported in MvConverterPage too.
  
  // Let's modify Navbar in the next change block to accept page switching or just add a global simple menu.
  
  return (
    <>
      {/* Simple Global Switcher for Demo Purposes */}
      <div className="fixed top-24 right-4 z-[60] flex flex-col gap-2">
        <button 
          onClick={() => setPage('home')} 
          className={`px-4 py-2 rounded-lg text-xs font-bold shadow-lg transition-all ${page === 'home' ? 'bg-brand-500 text-white' : 'bg-slate-800 text-slate-400'}`}
        >
          UniFab 4.0 Launch
        </button>
        <button 
          onClick={() => setPage('mv')} 
          className={`px-4 py-2 rounded-lg text-xs font-bold shadow-lg transition-all ${page === 'mv' ? 'bg-cyan-500 text-white' : 'bg-slate-800 text-slate-400'}`}
        >
          MV Converter AI
        </button>
        <button 
          onClick={() => setPage('product')} 
          className={`px-4 py-2 rounded-lg text-xs font-bold shadow-lg transition-all ${page === 'product' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}
        >
          Regular Product
        </button>
        <button 
          onClick={() => setPage('checkout')} 
          className={`px-4 py-2 rounded-lg text-xs font-bold shadow-lg transition-all ${page === 'checkout' ? 'bg-violet-600 text-white' : 'bg-slate-800 text-slate-400'}`}
        >
          Checkout
        </button>
        <button 
          onClick={() => setPage('success')} 
          className={`px-4 py-2 rounded-lg text-xs font-bold shadow-lg transition-all ${page === 'success' ? 'bg-green-600 text-white' : 'bg-slate-800 text-slate-400'}`}
        >
          Success
        </button>
        <button 
          onClick={() => setPage('download')} 
          className={`px-4 py-2 rounded-lg text-xs font-bold shadow-lg transition-all ${page === 'download' ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'}`}
        >
          Download Guide
        </button>
      </div>

      {page === 'home' ? (
        <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans">
          <Navbar onDownload={() => setPage('download')} />
          <main>
            <Hero />
            <CloudFeatures />
            <Performance />
            <MajorUpdates />
            <Pricing />
            <FAQ />
          </main>
          <Footer />
        </div>
      ) : page === 'mv' ? (
        <MvConverterPage 
          onBuyNow={() => setPage('checkout')} 
          onDownload={() => setPage('download')}
        />
      ) : page === 'product' ? (
        <RegularProductPage 
          onBuyNow={() => setPage('checkout')} 
          onDownload={() => setPage('download')}
        />
      ) : page === 'checkout' ? (
        <CheckoutPage onSuccess={() => setPage('success')} />
      ) : page === 'success' ? (
        <PaymentSuccess />
      ) : (
        <InstallationGuide onBack={() => setPage('mv')} />
      )}
    </>
  );
}

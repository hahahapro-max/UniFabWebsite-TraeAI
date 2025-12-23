
import React from 'react';
import Navbar from '../components/Navbar';
import MvHero from '../components/mv-converter/Hero';
import ProductBundles from '../components/mv-converter/ProductBundles';
import Features from '../components/mv-converter/Features';
import AIToolkit from '../components/mv-converter/AIToolkit';
import Testimonials from '../components/mv-converter/Testimonials';
import FAQ from '../components/mv-converter/FAQ';
import Footer from '../components/Footer';

interface MvConverterPageProps {
  onBuyNow?: () => void;
  onDownload?: () => void;
}

export default function MvConverterPage({ onBuyNow, onDownload }: MvConverterPageProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans">
      {/* Pass 'light' theme to Navbar to ensure visibility on white backgrounds when scrolled */}
      <Navbar theme="light" onDownload={onDownload} />
      <main>
        <MvHero onBuyNow={onBuyNow} onDownload={onDownload} />
        <ProductBundles onBuyNow={onBuyNow} />
        <Features />
        <AIToolkit />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

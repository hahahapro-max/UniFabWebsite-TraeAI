import React from 'react';
import Navbar from '../components/regular-product/Navbar';
import Hero from '../components/regular-product/Hero';
import ModelSelector from '../components/regular-product/ModelSelector';
import OnlineTry from '../components/regular-product/OnlineTry';
import ResolutionComparison from '../components/regular-product/ResolutionComparison';
import WhatIsNew from '../components/regular-product/WhatIsNew';
import WhyChoose from '../components/regular-product/WhyChoose';
import PricingCards from '../components/regular-product/PricingCards';
import Community from '../components/regular-product/Community';
import AioBanner from '../components/regular-product/AioBanner';
import TrustedBy from '../components/regular-product/TrustedBy';
import Footer from '../components/Footer';

interface RegularProductPageProps {
  onDownload?: () => void;
  onBuyNow?: () => void;
}

export default function RegularProductPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <ModelSelector />
        <OnlineTry />
        <AioBanner />
        <PricingCards />
      </main>
      <Footer />
    </div>
  );
}

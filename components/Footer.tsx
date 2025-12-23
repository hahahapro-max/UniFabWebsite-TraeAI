import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        
        {/* Terms Section Anchor */}
        <div id="terms" className="max-w-4xl mx-auto mb-16 p-8 bg-slate-900/30 rounded-2xl border border-white/5">
          <h3 className="text-lg font-bold mb-4 text-slate-300">Terms & Conditions</h3>
          <div className="text-xs text-slate-500 space-y-4 h-48 overflow-y-auto pr-2 custom-scrollbar">
            <p>1. <strong>Pre-order Terms:</strong> The discounted price is valid only during the pre-order period. The software license and download link for UniFab 4.0 will be delivered to your registered email address upon the official release date.</p>
            <p>2. <strong>FabCloud License:</strong> The "FabCloud Lifetime License" grants you access to cloud-based processing features (HDR Upconverter AI Cloud & Video Upscaler AI Cloud). While there is no expiration date on the license itself, usage is subject to a generous monthly fair-use processing hour limit to ensure service quality for all users.</p>
            <p>3. <strong>Hardware Requirements:</strong> Cloud features do not rely on local hardware performance. However, local processing modules (Local Upscaler, Local HDR) still depend on your machine's GPU capabilities. Minimum requirements for local processing: NVIDIA GeForce GTX 1050 or higher.</p>
            <p>4. <strong>Refund Policy:</strong> We offer a 30-day money-back guarantee. The period starts from the official launch date of UniFab 4.0 for pre-order customers, ensuring you have enough time to evaluate the new version.</p>
            <p>5. <strong>Free Upgrades:</strong> Purchasing this pre-order package entitles you to all minor updates within the UniFab 4.x version cycle. Future products added to the suite may be included as per the "New Product Addition" promise, subject to specific promotional terms at that time.</p>
            <p>6. <strong>Free Video Converter:</strong> The Video Converter module is free for all users in version 4.0. Some advanced formats or codecs might require specific system codecs installed.</p>
            <p>7. <strong>Support:</strong> 24/7 Customer Support is available via our ticket system and email. AI Customer Service is an assistive tool and may not resolve all complex technical issues without human intervention.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} UniFab Software. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            <a href="#" className="hover:text-white transition-colors">About Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { CheckCircle, ExternalLink, HelpCircle, User, MessageCircle, ChevronDown, Box, Gift, Clock } from 'lucide-react';

const LoopingTimer = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60)); // Loop back to 15:00
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="flex items-center gap-1.5 text-red-500 font-bold bg-red-50 px-3 py-1 rounded-full text-xs animate-pulse">
      <Clock size={14} />
      <span>Limited time offer: {formatTime(timeLeft)}</span>
    </div>
  );
};

export const PaymentSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#333] font-sans pb-20">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 pt-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="text-green-500 w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment completed!</h1>
          <p className="text-gray-500">Thank you for choosing UniFab products!</p>
        </div>

        {/* Order Info Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-lg font-bold mb-6">Order information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              <div className="flex justify-between md:block">
                <span className="text-gray-400 text-sm block mb-1">Order number</span>
                <span className="text-sm font-medium">pi_3SaZwolZe6kY5plj2AnLLVLG</span>
              </div>
              <div className="flex justify-between md:block">
                <span className="text-gray-400 text-sm block mb-1">Product name</span>
                <span className="text-sm font-medium">UniFab Subtitle Generator AI</span>
              </div>
              <div className="flex justify-between md:block">
                <span className="text-gray-400 text-sm block mb-1">Transaction amount</span>
                <span className="text-sm font-medium">87.99 USD</span>
              </div>
              <div className="flex justify-between md:block">
                <span className="text-gray-400 text-sm block mb-1">Order date</span>
                <span className="text-sm font-medium">2025-12-04</span>
              </div>
              <div className="flex justify-between md:block">
                <span className="text-gray-400 text-sm block mb-1">Subscription period</span>
                <span className="text-sm font-medium">Lifetime</span>
              </div>
              <div className="flex justify-between md:block">
                <span className="text-gray-400 text-sm block mb-1">License</span>
                <span className="text-sm font-medium">fangfang_yuan11@163.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upgrade Recommendation */}
        <div className="bg-[#fcfaff] rounded-xl border border-[#e5d5ff] p-6 mb-8 relative overflow-visible shadow-sm">
          {/* 35% OFF Badge */}
          <div className="absolute -top-px -right-px bg-[#bc5aff] text-white text-sm font-bold px-4 py-2 rounded-tr-xl rounded-bl-2xl shadow-sm">
            35% OFF!
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-1 text-[#6236ff] font-bold text-lg cursor-pointer hover:opacity-80 transition-opacity">
              <span>先别着急走，推荐你升级到全新 All-In-One</span>
              <ChevronDown size={20} />
            </div>
            <LoopingTimer />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Box Image Illustration */}
            <div className="w-40 h-40 flex-shrink-0 relative flex items-center justify-center">
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="relative w-32 h-32 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl shadow-xl transform -rotate-3 flex items-center justify-center border-2 border-white/20">
                   <Box className="text-white w-16 h-16 opacity-20 absolute" />
                   <div className="relative z-20 flex flex-col items-center">
                      <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center shadow-lg mb-2">
                        <span className="text-2xl">🐱</span>
                      </div>
                      <div className="text-[10px] text-white font-bold tracking-tighter text-center leading-none">
                        UNIFAB<br/>ALL-IN-ONE
                      </div>
                   </div>
                </div>
                {/* Floating elements around the box */}
                <div className="absolute -bottom-2 -left-4 bg-white p-2 rounded-lg shadow-md border border-gray-100 flex items-center gap-2 transform rotate-6">
                   <div className="w-6 h-6 bg-amber-100 rounded flex items-center justify-center">
                      <Gift size={14} className="text-amber-600" />
                   </div>
                   <div className="text-[10px] font-bold text-gray-700">AMAZON $30</div>
                </div>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-gray-900 mb-3">UniFab All-In-One (Lifetime)</h3>
              <p className="text-[#666] text-sm leading-relaxed mb-6">
                由于你已经购买了单品，现在升级到 AIO 享受超级折扣！<br />
                我们推荐这款包含 15 合 1 解决方案和 2 份礼品的超值套餐。<br />
                <span className="text-gray-400">(超过 60% 的客户选择了它。)</span>
              </p>
              
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="text-3xl font-bold text-[#ff9d2e]">$319.99</span>
                <span className="text-lg text-gray-400 line-through font-medium">$499.99</span>
              </div>
            </div>

            <div className="flex-shrink-0 mt-6 md:mt-0">
              <button className="px-10 py-3 border-2 border-[#6236ff] text-[#6236ff] font-black text-lg rounded-xl hover:bg-[#6236ff] hover:text-white transition-all shadow-sm active:scale-95">
                Upgrade
              </button>
            </div>
          </div>
        </div>

        {/* Authorization Process */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-lg font-bold mb-4">Authorization Process</h2>
          <p className="text-sm text-gray-600 mb-8">
            Please follow the steps below to complete product authorization and activate the software. For detailed usage instructions, see the <a href="#" className="text-blue-600 hover:underline">[Online Product User Manual]</a>.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-sm mb-2">Step 1: Check Authorization Email</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                After purchase, a receipt with product authorization details will be sent to your registered email.<br />
                - If your email is not registered with a UniFab account before, you'll receive an additional "Initial Password Setup" email. Please set your password first.<br />
                - If you don't receive any email within 1 hour, check your spam/promotions folder. If still missing, contact customer service for assistance.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-2">Step 2: Download and Install UniFab</h3>
              <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                <li>Visit the official download page: <a href="https://unifab.ai/download.htm" className="text-blue-600 hover:underline">https://unifab.ai/download.htm</a></li>
                <li>Click "Free Download" to get the installation package.</li>
                <li>Run the installation package and follow the prompts.</li>
              </ol>
            </div>

            <div>
              <h3 className="font-bold text-sm mb-2">Step 3: Log In and Authorize</h3>
              <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
                <li>Launch UniFab and click the "Authorization" button on the interface.</li>
                <li>Enter the following account information for authorization:
                  <ul className="pl-6 mt-1 space-y-1">
                    <li>a. Email: The email address you provided when purchasing the product.</li>
                    <li>b. Password: Your UniFab account password (including the one set via the initial password email).</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-lg font-bold mb-6">FAQs</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                <HelpCircle size={16} className="text-gray-400" />
                How do I claim an Amazon gift card?
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed pl-6">
                You can claim your Amazon gift card 30 days after purchase. Log in to the Member Center, and at the top of the "Product" section, click the link to collect your Amazon voucher. Follow the on-screen instructions to complete the claim. If it shows that the stock is insufficient, please wait patiently as we will restock soon.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                <HelpCircle size={16} className="text-gray-400" />
                How can I request a refund or cancel my subscription?
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed pl-6">
                UniFab offers a 14-day money-back guarantee for yearly and lifetime subscriptions. To request a refund, please contact customer support. To cancel your subscription, go to the Member Center, select Subscribe, then click Cancel subscription, and follow the instructions in the confirmation email to complete the cancellation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                <HelpCircle size={16} className="text-gray-400" />
                What is FabCloud and how to use it?
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed pl-6">
                FabCloud is an AI-powered cloud service that enables fast processing even on low-performance devices. You can access all Fab brand cloud features in your browser or via Fab desktop application like UniFab, BookFab, and DVDFab, which also include selected cloud functions. More cloud features are coming soon. FabCloud Credits are the units used to pay for cloud processing. Choose a credits plan that suits your needs, then use credits on all Fab brand cloud features on both web and desktop.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#f0f4ff] rounded-2xl p-8 flex flex-col items-center text-center group cursor-pointer hover:bg-[#e6edff] transition-colors">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <User className="text-indigo-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Visit member center</h3>
            <ul className="text-sm text-gray-500 space-y-2 mb-8">
              <li>View and manage your own product</li>
              <li>Upgrade your product</li>
              <li>Change your account password</li>
              <li>View and manage your coupons</li>
            </ul>
            <a href="#" className="text-indigo-600 font-bold text-sm flex items-center gap-1">
              Visit member center &gt;&gt;
            </a>
          </div>

          <div className="bg-[#f0f4ff] rounded-2xl p-8 flex flex-col items-center text-center group cursor-pointer hover:bg-[#e6edff] transition-colors">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <MessageCircle className="text-indigo-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Contact service team</h3>
            <ul className="text-sm text-gray-500 space-y-2 mb-8">
              <li>Change your license email address</li>
              <li>Any questions related to product features</li>
              <li>Use the 14-day money-back guarantee</li>
            </ul>
            <a href="#" className="text-indigo-600 font-bold text-sm flex items-center gap-1">
              Contact service team &gt;&gt;
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

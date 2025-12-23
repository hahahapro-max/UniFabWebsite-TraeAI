import React, { useState } from 'react';
import { Mail, ShieldCheck, CheckCircle } from 'lucide-react';
import { Header } from './components/Header';
import { PaymentSection } from './components/PaymentSection';
import { OrderSummary } from './components/OrderSummary';
import { TrustBadges } from './components/TrustBadges';
import { CheckoutState, PaymentMethod } from './types';

interface CheckoutAppProps {
  onSuccess?: () => void;
}

const App: React.FC<CheckoutAppProps> = ({ onSuccess }) => {
  const [checkoutState, setCheckoutState] = useState<CheckoutState>({
    email: '',
    paymentMethod: PaymentMethod.CREDIT_CARD,
    isUpsellSelected: false,
    country: 'United States',
    zipCode: '',
    couponCode: ''
  });

  const updateState = (updates: Partial<CheckoutState>) => {
    setCheckoutState(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Action Area (Payment First) */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="space-y-6">
              
              {/* Payment Section - Removed "Step 1" numbering */}
              <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                   <h2 className="text-xl font-bold flex items-center gap-2 text-gray-900">
                     Payment Information
                   </h2>
                   <p className="text-sm text-gray-500 mt-1">Safe & Secure 256-bit SSL encrypted payment.</p>
                </div>
                
                <PaymentSection 
                  state={checkoutState} 
                  onChange={updateState} 
                />
              </section>

              {/* Unified Note & Trust Box - Integrated to remove redundancy */}
              <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Left Side: Core Promises with Icons */}
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Mail className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <p className="text-[15px] font-bold text-gray-800">Instant Delivery</p>
                        <p className="text-[13px] text-gray-500 leading-relaxed mt-1">
                          Your license key and multi-PC license will be delivered to your email immediately after purchase.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                        <ShieldCheck className="text-green-600" size={20} />
                      </div>
                      <div>
                        <p className="text-[15px] font-bold text-gray-800">Secure Payment</p>
                        <p className="text-[13px] text-gray-500 leading-relaxed mt-1">
                          Safe & secure 256-bit SSL encrypted payment. We do not store your card details.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                        <CheckCircle className="text-orange-600" size={20} />
                      </div>
                      <div>
                        <p className="text-[15px] font-bold text-gray-800">30-Day Money-Back Guarantee</p>
                        <p className="text-[13px] text-gray-500 leading-relaxed mt-1">
                          We stand behind our product with a full refund policy if you are not satisfied.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Important Notes & Policy */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-[15px] font-bold text-gray-800 mb-3">Important Note:</p>
                      <ul className="space-y-3 text-[13px] text-gray-600">
                        <li className="flex gap-2">
                          <span className="text-blue-500 font-bold">•</span>
                          <span>We've automatically applied the best site-wide discount for you.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-blue-500 font-bold">•</span>
                          <span>The final payment may vary slightly due to fees and taxes from different platforms.</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-blue-500 font-bold">•</span>
                          <span>Questions? Contact us at <a href="mailto:support@unifab.ai" className="text-blue-600 hover:underline">support@unifab.ai</a>.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-50">
                      <p className="text-[12px] text-gray-400 italic leading-relaxed">
                        *By placing this secure order, I confirm that I have read and agree to the <a href="#" className="underline hover:text-gray-800 font-medium">Privacy Policy</a> and <a href="#" className="underline hover:text-gray-800 font-medium">Purchase Policy</a>.
                      </p>
                      <p className="text-[11px] text-gray-400 mt-2">
                        Price excludes taxes. Renewal rates may apply if subscribed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary (Context) */}
          <div className="w-full lg:w-[380px] order-1 lg:order-2 flex-shrink-0">
            <div className="sticky top-6 space-y-6">
              <OrderSummary 
                state={checkoutState} 
                onToggleUpsell={(val) => updateState({ isUpsellSelected: val })}
                onCouponChange={(val) => updateState({ couponCode: val })}
                onSuccess={onSuccess}
              />
            </div>
          </div>

        </div>
      </main>

      <footer className="mt-12 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-400">
          <div className="flex items-center gap-1">
            <span>Need Help?</span>
            <a href="#" className="text-gray-500 hover:text-gray-800 underline">Contact us</a>
            <span>if you have any questions.</span>
          </div>
          <div className="hidden md:block h-4 w-px bg-gray-200"></div>
          <p>Copyright © {new Date().getFullYear()} UniFab.ai All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
import React, { useMemo, useState, useEffect } from 'react';
import { Check, Lock, Clock, Tag } from 'lucide-react';
import { MAIN_PRODUCT, FREE_GIFTS, UPSELL_PRODUCT } from '../constants';
import { CheckoutState, PaymentMethod } from '../types';

interface Props {
  state: CheckoutState;
  onToggleUpsell: (selected: boolean) => void;
  onCouponChange?: (code: string) => void;
  onSuccess?: () => void;
}

// Simple internal countdown component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="bg-red-50 border border-red-100 rounded-lg p-3 mb-5 flex items-center justify-center gap-2 text-red-700 animate-fade-in shadow-sm">
        <Clock size={18} className="animate-pulse" />
        <span className="text-sm font-bold">Offer expires in {formatTime(timeLeft)}</span>
    </div>
  );
};

export const OrderSummary: React.FC<Props> = ({ state, onToggleUpsell, onCouponChange, onSuccess }) => {
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [localCoupon, setLocalCoupon] = useState(state.couponCode || '');

  const subtotal = MAIN_PRODUCT.price;
  const discount = MAIN_PRODUCT.originalPrice ? MAIN_PRODUCT.originalPrice - MAIN_PRODUCT.price : 0;
  const upsellPrice = state.isUpsellSelected ? UPSELL_PRODUCT.price : 0;
  const total = subtotal + upsellPrice;

  // CTA Text changes based on payment method
  const ctaText = useMemo(() => {
    if (state.paymentMethod === PaymentMethod.PAYPAL) return `Pay $${total.toFixed(2)} with PayPal`;
    if (state.paymentMethod === PaymentMethod.GOOGLE_PAY) return `Pay $${total.toFixed(2)} with GPay`;
    return `Pay $${total.toFixed(2)} Now`;
  }, [state.paymentMethod, total]);

  const ctaColor = state.paymentMethod === PaymentMethod.PAYPAL ? 'bg-[#FFC439] hover:bg-[#F4BB30] text-black' : 'bg-indigo-600 hover:bg-indigo-700 text-white';

  const handleApplyCoupon = () => {
    if(onCouponChange) onCouponChange(localCoupon);
  };

  const handlePay = () => {
    if (onSuccess) onSuccess();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
        
        {/* Urgent Countdown */}
        <CountdownTimer />

        {/* Main Product */}
        <div className="flex gap-4 mb-4 pb-6 border-b border-gray-100">
            <img 
                src={MAIN_PRODUCT.image} 
                alt={MAIN_PRODUCT.name} 
                className="w-16 h-16 rounded-lg object-cover bg-gray-100 border border-gray-200"
            />
            <div className="flex-1">
                <h4 className="font-bold text-gray-900">{MAIN_PRODUCT.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-500">{MAIN_PRODUCT.description}</span>
                </div>
                
                <div className="mt-3 flex items-center gap-2">
                     <span className="font-bold text-indigo-600">${MAIN_PRODUCT.price}</span>
                     {MAIN_PRODUCT.originalPrice && (
                         <span className="text-sm text-gray-400 line-through">${MAIN_PRODUCT.originalPrice}</span>
                     )}
                </div>
            </div>
        </div>

        {/* Free Gifts - Visual Reinforcement */}
        <div className="space-y-3 mb-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Included Free Gifts</p>
            {FREE_GIFTS.map(gift => (
                <div key={gift.id} className="flex items-start gap-2 text-sm">
                    <div className="mt-0.5 text-green-500 shrink-0">
                        <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="text-gray-600 flex-1">{gift.name}</span>
                    <span className="text-green-600 font-medium">Free</span>
                </div>
            ))}
        </div>

        {/* Subtle Upsell */}
        <div className="bg-orange-50 rounded-lg p-4 border border-orange-100 mb-6 transition-colors hover:border-orange-200">
            <div className="flex items-start gap-3">
                <input 
                    type="checkbox" 
                    id="upsell"
                    checked={state.isUpsellSelected}
                    onChange={(e) => onToggleUpsell(e.target.checked)}
                    className="mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
                />
                <label htmlFor="upsell" className="text-sm cursor-pointer select-none">
                    <span className="font-semibold text-gray-900 block">Add {UPSELL_PRODUCT.name}</span>
                    <span className="text-gray-500 block text-xs mt-0.5">{UPSELL_PRODUCT.description}</span>
                    <span className="block mt-1 font-bold text-gray-900">+ ${UPSELL_PRODUCT.price}</span>
                </label>
            </div>
        </div>

        {/* Totals Section */}
        <div className="space-y-3 pt-4 border-t border-gray-100">
            <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            {state.isUpsellSelected && (
                 <div className="flex justify-between text-sm text-gray-600">
                    <span>Extended Service</span>
                    <span>${upsellPrice.toFixed(2)}</span>
                </div>
            )}
            <div className="flex justify-between text-sm text-green-600 font-medium">
                <span>Total Savings</span>
                <span>-${discount.toFixed(2)}</span>
            </div>

            {/* Coupon Code Section */}
            <div className="pt-2">
                {!showCouponInput ? (
                     <button 
                        onClick={() => setShowCouponInput(true)}
                        className="text-sm text-indigo-600 font-medium flex items-center gap-1 hover:text-indigo-800 transition-colors"
                     >
                        <Tag size={14} />
                        Add Coupon Code
                     </button>
                ) : (
                    <div className="flex gap-2 animate-fade-in">
                        <input 
                            type="text" 
                            placeholder="Enter code" 
                            value={localCoupon}
                            onChange={(e) => setLocalCoupon(e.target.value)}
                            className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <button 
                            onClick={handleApplyCoupon}
                            className="px-3 py-1.5 text-sm bg-gray-800 text-white rounded hover:bg-black transition-colors"
                        >
                            Apply
                        </button>
                    </div>
                )}
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-2">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-3xl font-bold text-[#ff9d2e] tracking-tight">${total.toFixed(2)}</span>
            </div>

            {/* Currency Switcher Mock */}
            <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
                <span>Pay in another currency</span>
                <select className="bg-gray-50 border border-gray-200 rounded px-2 py-1 focus:outline-none text-xs font-medium">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>JPY</option>
                </select>
            </div>

            {/* Primary CTA - Moved Up as requested */}
            <button 
                onClick={handlePay}
                className={`w-full mt-6 py-4 rounded-xl font-bold text-lg shadow-md transition-transform active:scale-[0.98] flex items-center justify-center gap-2 ${ctaColor}`}
            >
                <Lock size={20} />
                {ctaText}
            </button>


        </div>
        
    
      </div>
    </div>
  );
};
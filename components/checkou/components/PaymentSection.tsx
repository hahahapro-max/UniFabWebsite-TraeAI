import React from 'react';
import { CreditCard, Lock, User, Mail, ShieldCheck, Check } from 'lucide-react';
import { CheckoutState } from '../types';
import { COUNTRIES } from '../constants';

interface Props {
  state: CheckoutState;
  onChange: (updates: Partial<CheckoutState>) => void;
}

export const PaymentSection: React.FC<Props> = ({ state, onChange }) => {
  
  // Since payment method is auto-recommended by IP, we display the default form (Credit Card) directly.
  // Logic for PayPal/Google Pay redirection would be handled by backend/IP detection in a real app.

  return (
    <div className="p-6">
      
      {/* Dynamic Payment Form Area */}
      <div className="space-y-6">
        
        {/* Contact Email */}
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Mail size={16} /> Contact Information
            </h3>
            <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <Mail size={18} />
                    </div>
                    <input
                        type="email"
                        value={state.email}
                        onChange={(e) => onChange({ email: e.target.value })}
                        placeholder="To receive product license..."
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                </div>
                <p className="text-xs text-gray-500 mt-1">We'll send your receipt and license key here.</p>
            </div>
        </div>

        {/* Card Details (Default View) */}
        <div className="animate-fade-in space-y-5">
             <div className="flex justify-between items-center">
                 <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                    <CreditCard size={16} /> Card Details
                 </h3>
                 <div className="flex gap-2">
                    {/* Visual indicators for card types */}
                    <div className="h-6 w-10 bg-gray-200 rounded"></div>
                    <div className="h-6 w-10 bg-gray-200 rounded"></div>
                    <div className="h-6 w-10 bg-gray-200 rounded"></div>
                 </div>
             </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <Lock size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiration (MM/YY)</label>
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVC / CWW</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <User size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="Full Name on Card"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
              </div>

              {/* Country / Zip needed for AVS */}
              <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <div className="relative">
                        <select 
                            className="block w-full pl-3 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
                            value={state.country}
                            onChange={(e) => onChange({ country: e.target.value })}
                        >
                            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                         <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                    <input
                        type="text"
                        value={state.zipCode}
                        onChange={(e) => onChange({ zipCode: e.target.value })}
                        placeholder="Zip/Postal"
                        className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
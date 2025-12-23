import React from 'react';
import { Shield, Lock, CreditCard } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Money Back */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-full shrink-0">
                <Shield size={24} />
            </div>
            <div>
                <p className="text-sm font-bold text-gray-800">14-Day Guarantee</p>
                <p className="text-xs text-gray-500">Money back assurance</p>
            </div>
        </div>

        {/* Secure Payment */}
         <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
            <div className="p-2 bg-green-50 text-green-600 rounded-full shrink-0">
                <Lock size={24} />
            </div>
            <div>
                <p className="text-sm font-bold text-gray-800">SSL Secure</p>
                <p className="text-xs text-gray-500">256-bit encryption</p>
            </div>
        </div>

        {/* Instant Delivery */}
         <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-full shrink-0">
                <CreditCard size={24} />
            </div>
            <div>
                <p className="text-sm font-bold text-gray-800">Instant Delivery</p>
                <p className="text-xs text-gray-500">License key via email</p>
            </div>
        </div>
    </div>
  );
};
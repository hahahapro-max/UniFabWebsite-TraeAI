import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  const logoUrl = new URL('../../../img/unifab-cat.png', import.meta.url).href;
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <img 
              src={logoUrl}
              alt="UniFab" 
              className="h-8 w-auto"
            />
        </div>
        <div className="flex items-center gap-2 opacity-90">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/64px-Visa_Inc._logo.svg.png" alt="Visa" className="h-5 w-auto" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/64px-Mastercard-logo.svg.png" alt="Mastercard" className="h-5 w-auto" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo_%282018%29.svg/64px-American_Express_logo_%282018%29.svg.png" alt="Amex" className="h-5 w-auto" />
             <div className="h-4 w-px bg-gray-300 mx-1"></div>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/64px-PayPal.svg.png" alt="PayPal" className="h-5 w-auto" />
        </div>
      </div>
    </header>
  );
};

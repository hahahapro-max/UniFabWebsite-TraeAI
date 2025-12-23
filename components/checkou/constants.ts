import { CartItem, PaymentMethod } from './types';

export const MAIN_PRODUCT: CartItem = {
  id: 'unifab-all-in-one',
  name: 'UniFab All-In-One',
  type: 'software',
  price: 299.99,
  originalPrice: 499.99,
  description: 'Lifetime License',
  image: 'https://picsum.photos/80/80', // Placeholder for product box shot
  features: [
    'Lossless Quality Video Output',
    'GPU Hardware Acceleration',
    'Supports 1000+ Video Formats',
    'AI-Enhanced Video Editing'
  ]
};

export const UPSELL_PRODUCT: CartItem = {
  id: 'extended-download',
  name: 'Extended Download Service',
  type: 'service',
  price: 9.99,
  description: 'Re-download your software anytime.'
};

export const FREE_GIFTS: CartItem[] = [
  { id: 'gift-1', name: 'FabCloud - 4000', type: 'gift', price: 0 },
  { id: 'gift-2', name: 'UniFab 5PC License', type: 'gift', price: 0 },
  { id: 'gift-3', name: '$30 Amazon Gift Card', type: 'gift', price: 0 },
];

export const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "Germany", "France", "Japan", "Australia"
];

export const PAYMENT_METHODS = [
  { id: PaymentMethod.CREDIT_CARD, label: 'Credit Card', icon: 'credit-card' },
  { id: PaymentMethod.PAYPAL, label: 'PayPal', icon: 'paypal' },
  { id: PaymentMethod.GOOGLE_PAY, label: 'Google Pay', icon: 'smartphone' },
];
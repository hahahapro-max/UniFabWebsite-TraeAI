export enum PaymentMethod {
  CREDIT_CARD = 'credit_card',
  PAYPAL = 'paypal',
  GOOGLE_PAY = 'google_pay',
  IDEAL = 'ideal'
}

export interface CartItem {
  id: string;
  name: string;
  type: 'software' | 'service' | 'gift';
  price: number;
  originalPrice?: number;
  description?: string;
  image?: string;
  features?: string[];
}

export interface CheckoutState {
  email: string;
  paymentMethod: PaymentMethod;
  isUpsellSelected: boolean;
  country: string;
  zipCode: string;
  couponCode: string;
}
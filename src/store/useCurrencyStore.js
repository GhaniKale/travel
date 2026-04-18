import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Hardcoded sample rate for this frontend prototype (1 USD = 15500 IDR)
const EXCHANGE_RATE = 15500;

export const useCurrencyStore = create(
  persist(
    (set, get) => ({
      currency: 'IDR', // Default currency
      setCurrency: (currency) => set({ currency }),
      
      // Helper function to format price based on selected currency
      formatPrice: (priceInUsd) => {
        const { currency } = get();
        
        if (currency === 'USD') {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0
            }).format(priceInUsd);
        } else {
            // Convert to IDR
            const priceInIdr = priceInUsd * EXCHANGE_RATE;
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(priceInIdr);
        }
      }
    }),
    {
      name: 'travel-currency-storage',
    }
  )
);

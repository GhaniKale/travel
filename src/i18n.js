import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "destinations": "Destinations",
        "packages": "Tour Packages",
        "about": "About Us",
        "contact": "Contact",
        "itinerary": "Itinerary Planner",
        "book": "Book Now"
      },
      "checkout": {
        "title": "Checkout",
        "guest_details": "Guest Details",
        "payment": "Payment Method",
        "summary": "Order Summary",
        "pay_now": "Pay Now"
      },
      "common": {
        "view_details": "View Details",
        "starts_from": "Starts from",
        "total": "Total",
        "success": "Success!"
      }
    }
  },
  id: {
    translation: {
      "nav": {
        "home": "Beranda",
        "destinations": "Destinasi",
        "packages": "Paket Tur",
        "about": "Tentang Kami",
        "contact": "Kontak",
        "itinerary": "Rencana Perjalanan",
        "book": "Pesan Sekarang"
      },
      "checkout": {
        "title": "Pembayaran",
        "guest_details": "Detail Tamu",
        "payment": "Metode Pembayaran",
        "summary": "Ringkasan Pesanan",
        "pay_now": "Bayar Sekarang"
      },
      "common": {
        "view_details": "Lihat Detail",
        "starts_from": "Mulai dari",
        "total": "Total",
        "success": "Berhasil!"
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "id", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWishlistStore } from '../../store/useWishlistStore';
import { useCurrencyStore } from '../../store/useCurrencyStore';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const location = useLocation();
    const wishlistItems = useWishlistStore(state => state.items);
    const { currency, setCurrency } = useCurrencyStore();
    const { t, i18n } = useTranslation();
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // KUNCI SOLUSI 2: Body Scroll Lock
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    // Tutup menu otomatis saat pindah halaman
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'id' ? 'en' : 'id');
    };
    const isActive = (path) => location.pathname === path;

    return (
        <header className="fixed top-0 w-full z-50 bg-surface/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-sm pt-safe">
            <nav className="flex justify-between items-center px-4 md:px-8 py-3 max-w-7xl mx-auto">
                <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter text-sky-900 dark:text-white">Nusantara Travel</Link>
                <div className="hidden md:flex flex-1 justify-center gap-8 font-headline font-medium text-sm tracking-tight z-50 relative">
                    <Link to="/" className={`transition-colors ${isActive('/') ? 'text-sky-700 dark:text-sky-400 border-b-2 border-sky-700 dark:border-sky-400 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300'}`}>{t('nav.home')}</Link>
                    <Link to="/destinations" className={`transition-colors ${isActive('/destinations') ? 'text-sky-700 dark:text-sky-400 border-b-2 border-sky-700 dark:border-sky-400 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300'}`}>{t('nav.destinations')}</Link>
                    <Link to="/packages" className={`transition-colors ${isActive('/packages') ? 'text-sky-700 dark:text-sky-400 border-b-2 border-sky-700 dark:border-sky-400 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300'}`}>{t('nav.packages')}</Link>
                    <Link to="/about" className={`transition-colors ${isActive('/about') ? 'text-sky-700 dark:text-sky-400 border-b-2 border-sky-700 dark:border-sky-400 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300'}`}>{t('nav.about')}</Link>
                    <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-sky-700 dark:text-sky-400 border-b-2 border-sky-700 dark:border-sky-400 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300'}`}>{t('nav.contact')}</Link>
                    <Link to="/itinerary" className={`transition-colors ${isActive('/itinerary') ? 'text-sky-700 dark:text-sky-400 border-b-2 border-sky-700 dark:border-sky-400 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300'}`}>{t('nav.itinerary')}</Link>
                </div>
                <div className="flex items-center gap-3">
                    {/* Localization Controls */}
                    <div className="hidden sm:flex items-center gap-2 border-r border-outline-variant pr-3 mr-1">
                        <button 
                            onClick={toggleLanguage}
                            className="text-xs font-bold bg-surface-container-low px-2 py-1 rounded text-on-surface hover:bg-surface-container transition-colors"
                        >
                            {i18n.language.toUpperCase()}
                        </button>
                        <select 
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="bg-transparent text-xs font-bold text-on-surface border-none focus:ring-0 p-0 cursor-pointer"
                        >
                            <option value="IDR">IDR</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>

                    <Link to="/wishlist" className="relative p-2 text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300 transition-colors">
                        <span className="material-symbols-outlined">favorite</span>
                        {wishlistItems.length > 0 && (
                            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                                {wishlistItems.length}
                            </span>
                        )}
                    </Link>

                    {/* Hamburger Button untuk Mobile */}
                    <button 
                        className="md:hidden p-2 z-[60] relative outline-none flex items-center justify-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>

                    <Link to="/checkout" className="editorial-gradient text-on-secondary px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide scale-95 active:scale-90 transition-transform hidden sm:block">
                        {t('nav.book')}
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-surface dark:bg-slate-900 flex flex-col items-center justify-center gap-5 md:hidden min-h-dvh fade-in animate-in duration-200">
                    <Link to="/" className={`text-2xl font-headline font-bold ${isActive('/') ? 'text-sky-700' : 'text-slate-600'}`}>{t('nav.home')}</Link>
                    <Link to="/destinations" className={`text-2xl font-headline font-bold ${isActive('/destinations') ? 'text-sky-700' : 'text-slate-600'}`}>{t('nav.destinations')}</Link>
                    <Link to="/packages" className={`text-2xl font-headline font-bold ${isActive('/packages') ? 'text-sky-700' : 'text-slate-600'}`}>{t('nav.packages')}</Link>
                    <Link to="/about" className={`text-2xl font-headline font-bold ${isActive('/about') ? 'text-sky-700' : 'text-slate-600'}`}>{t('nav.about')}</Link>
                    <Link to="/contact" className={`text-2xl font-headline font-bold ${isActive('/contact') ? 'text-sky-700' : 'text-slate-600'}`}>{t('nav.contact')}</Link>
                    <Link to="/itinerary" className={`text-2xl font-headline font-bold ${isActive('/itinerary') ? 'text-sky-700' : 'text-slate-600'}`}>{t('nav.itinerary')}</Link>
                    
                    {/* Localization in Mobile Menu */}
                    <div className="flex items-center gap-4 mt-4 w-3/4 max-w-xs">
                        <button 
                            onClick={toggleLanguage}
                            className="text-sm font-bold bg-surface-container-low border border-outline-variant px-4 py-3 rounded-xl flex-1 hover:bg-surface-container active:scale-95 transition-all outline-none"
                        >
                            {i18n.language === 'id' ? '🇮🇩 IDN' : '🇬🇧 ENG'}
                        </button>
                        <select 
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="bg-surface-container-low border border-outline-variant text-sm font-bold rounded-xl px-4 py-3 flex-1 text-center outline-none focus:ring-1 focus:ring-primary appearance-none"
                        >
                            <option value="IDR">IDR</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>

                    {/* Book Now Khusus Mobile Menu */}
                    <Link to="/checkout" className="editorial-gradient text-on-secondary px-8 py-3.5 rounded-xl text-base font-bold tracking-wide w-3/4 max-w-xs text-center shadow-lg mt-2 active:scale-95 transition-transform">
                        {t('nav.book')}
                    </Link>
                </div>
            )}
        </header>
    );
}

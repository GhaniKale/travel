import { Link, useLocation } from 'react-router-dom';
import { useWishlistStore } from '../../store/useWishlistStore';
import { useCurrencyStore } from '../../store/useCurrencyStore';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const location = useLocation();
    const wishlistItems = useWishlistStore(state => state.items);
    const { currency, setCurrency } = useCurrencyStore();
    const { t, i18n } = useTranslation();
    
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'id' ? 'en' : 'id');
    };
    const isActive = (path) => location.pathname === path;

    return (
        <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm glass-nav">
            <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
                <Link to="/" className="text-2xl font-bold tracking-tighter text-sky-900 dark:text-white">Nusantara Travel</Link>
                <div className="hidden md:flex flex-1 justify-center gap-8 font-headline font-medium text-sm tracking-tight">
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
                    <Link to="/checkout" className="editorial-gradient text-on-secondary px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide scale-95 active:scale-90 transition-transform hidden sm:block">
                        {t('nav.book')}
                    </Link>
                </div>
            </nav>
        </header>
    );
}

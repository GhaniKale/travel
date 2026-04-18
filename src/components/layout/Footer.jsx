import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full border-t border-slate-200 bg-slate-50 dark:bg-surface-container dark:border-outline-variant/20">
            <div className="grid grid-cols-1 md:grid-cols-4 px-8 max-w-7xl mx-auto gap-y-12 py-16 font-body text-sm leading-relaxed">
                <div className="md:col-span-1">
                    <span className="text-xl font-bold text-sky-900 dark:text-primary mb-4 block">Nusantara Travel</span>
                    <p className="text-slate-500 dark:text-on-surface-variant mb-6">The premier editorial travel experience across the Indonesian archipelago. Discover beauty, craft memories.</p>
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-sky-700 dark:text-primary cursor-pointer hover:scale-110 transition-transform text-2xl">public</span>
                        <span className="material-symbols-outlined text-sky-700 dark:text-primary cursor-pointer hover:scale-110 transition-transform text-2xl">nest_eco_leaf</span>
                        <span className="material-symbols-outlined text-sky-700 dark:text-primary cursor-pointer hover:scale-110 transition-transform text-2xl">diversity_3</span>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-sky-900 dark:text-primary mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><Link to="/destinations" className="text-slate-500 dark:text-on-surface-variant hover:underline decoration-2 underline-offset-4 transition-opacity opacity-80 hover:opacity-100">Destinations</Link></li>
                        <li><Link to="#" className="text-slate-500 dark:text-on-surface-variant hover:underline decoration-2 underline-offset-4 transition-opacity opacity-80 hover:opacity-100">Tour Packages</Link></li>
                        <li><Link to="/about" className="text-slate-500 dark:text-on-surface-variant hover:underline decoration-2 underline-offset-4 transition-opacity opacity-80 hover:opacity-100">About Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-sky-900 dark:text-primary mb-6">Support</h4>
                    <ul className="space-y-4">
                        <li><Link to="/contact" className="text-slate-500 dark:text-on-surface-variant hover:underline decoration-2 underline-offset-4 transition-opacity opacity-80 hover:opacity-100">Contact</Link></li>
                        <li><Link to="#" className="text-slate-500 dark:text-on-surface-variant hover:underline decoration-2 underline-offset-4 transition-opacity opacity-80 hover:opacity-100">Privacy Policy</Link></li>
                        <li><Link to="#" className="text-slate-500 dark:text-on-surface-variant hover:underline decoration-2 underline-offset-4 transition-opacity opacity-80 hover:opacity-100">Terms of Service</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-sky-900 dark:text-primary mb-6">Newsletter</h4>
                    <p className="text-slate-500 dark:text-on-surface-variant mb-4">Receive travel inspiration monthly.</p>
                    <div className="flex border border-outline-variant/30 rounded-lg overflow-hidden bg-white dark:bg-surface-container-highest">
                        <input className="flex-1 px-4 py-2 text-sm border-none focus:ring-0 dark:bg-transparent dark:text-on-surface" placeholder="Email address" type="email" />
                        <button className="bg-sky-700 dark:bg-primary dark:text-on-primary text-white px-4 py-2 flex items-center justify-center">
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-200 dark:border-outline-variant/20">
                <p className="text-slate-500 dark:text-on-surface-variant text-xs text-center">© 2024 Nusantara Travel. All rights reserved.</p>
            </div>
        </footer>
    );
}

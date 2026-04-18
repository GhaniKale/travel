export default function FeaturedDestinations() {
    return (
        <section className="py-24 px-8 bg-surface">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="font-headline font-bold text-4xl text-on-background mb-4 tracking-tight">Handpicked Destinations</h2>
                        <p className="text-on-surface-variant text-lg">Curated experiences in the most breathtaking locations across the archipelago.</p>
                    </div>
                    <a className="text-primary font-bold flex items-center gap-2 group" href="#">
                        Explore all destinations
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Bali */}
                    <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                            <img alt="Bali" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoey0vPnKlafvs4JK6PlRA1IvqqCWWkc7ZxN7fy3OhbjdI7y0N-iSlPoKACLqW6eg3FMJWzR9nwI4fHy7spMUxlI7nxliO5x5YcQ04jPq1M3wMroj-I25JxthlVYvwZoRj9c3A1lcI5cd1Z-8Gik_G_QsOMqHznT3f8W-dHGceEWy2VdiZd2qNwVPzY0F9BPted709UM5A_z-PZg9sZcXGKSjE3tBEjhd-swb3mStPAiNGf3Lpt3taYHRw8EhXQQENGTGQDnDGnQ"/>
                            <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full">
                                <span className="text-secondary font-bold text-sm">From $499</span>
                            </div>
                        </div>
                        <h3 className="font-headline font-bold text-2xl mb-2 text-on-background">Bali: Island of Gods</h3>
                        <p className="text-on-surface-variant mb-4 line-clamp-2">Experience spiritual serenity and world-class surfing in Indonesia's most iconic destination.</p>
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1 text-tertiary text-sm font-semibold">
                                <span className="material-symbols-outlined text-lg">star</span> 4.9 (2k+ Reviews)
                            </span>
                        </div>
                    </div>
                    {/* Raja Ampat */}
                    <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                            <img alt="Raja Ampat" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOGmp4HKjZoa2IYulwdzJWPASLtjmcP-YluIqCdqWBLB0L1w5J_GSmFSEZSITiYQmxBdWiXgIuIjZVkeR7RjS1m_UMTBUy3A0mbyqv2WpjLxmh2UqOe670BuYTB3-hBr19b8h0FJ8jQRN58Q_TXCNnI7x28NBrryP2rj8-NepfMAKWyD_iOvRZ5aLtzTYe217q9_uxzPydgsm3MBQjutbXl-BbJVUq2H7QTPHDMZ2RQh6U2dSEZWNnRwK30DCaJsakmyk0p5uFbQ"/>
                            <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full">
                                <span className="text-secondary font-bold text-sm">From $1,299</span>
                            </div>
                        </div>
                        <h3 className="font-headline font-bold text-2xl mb-2 text-on-background">Raja Ampat: The Last Paradise</h3>
                        <p className="text-on-surface-variant mb-4 line-clamp-2">Dive into the world's most biodiverse marine sanctuary and witness untouched beauty.</p>
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1 text-tertiary text-sm font-semibold">
                                <span className="material-symbols-outlined text-lg">star</span> 5.0 (850 Reviews)
                            </span>
                        </div>
                    </div>
                    {/* Lombok */}
                    <div className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                            <img alt="Lombok" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8YhxqDeGf0NGuSBEHitGAwlsAPo3K-u--qV_r2M55P_JDLhmgx9BtR0xYAdiY4p03e3wU4EE_9JJMPzflu0TEDF-I6FM_bSIdqKCS_Gw0oTZR0Apmh6v2J9SYRUc1nWd2ODHKPWwgdts9w64FyiM8Kepv99YjnkDGnArib0hZ2-oo-TapadDSaSeyn9TcecpC0uedMsYEmMIWk6lWz3ljK2sXOiAqBuvMUQXMSQRoVXJVQgxkPlcDVUdMkzzn5M7teOjHZ6lilg"/>
                            <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full">
                                <span className="text-secondary font-bold text-sm">From $549</span>
                            </div>
                        </div>
                        <h3 className="font-headline font-bold text-2xl mb-2 text-on-background">Lombok: The Unspoiled Charm</h3>
                        <p className="text-on-surface-variant mb-4 line-clamp-2">Explore the majestic Mount Rinjani and the white sands of the Gili Islands.</p>
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1 text-tertiary text-sm font-semibold">
                                <span className="material-symbols-outlined text-lg">star</span> 4.8 (1.2k Reviews)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

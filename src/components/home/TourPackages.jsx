export default function TourPackages() {
    return (
        <section className="py-24 px-8 bg-surface-container-low">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-headline font-bold text-4xl text-on-background mb-4 tracking-tight">Popular Tour Packages</h2>
                    <p className="text-on-surface-variant text-lg">Ready-to-go adventures designed for maximum joy and zero stress.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-full md:h-[700px]">
                    <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm group flex flex-col">
                        <div className="h-1/2 md:h-[60%] overflow-hidden relative">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd9E3s1IcnyljsoDron48NowvjGtfSTntVgNvo4xq7l-JxnLSEawzSUT97siiqjCbGd9qS41hIFe9rMuWVbpbecv6IB1sMHFs9p7DJHSY3mjauYxctUhSZd10BoQvYPGDxk_5mgO4FofmoAACINgHmyasA_1BuYBdqmRyclbXjSKNyGloV6IxxbNP059SUViEbHv1d45ULpWkzL-wLzT7928mQQaWzBEV6kMaMuHmF0fxIPdoPxdSt0iBtpkRtPM7tH0u1Q6d_hA"/>
                            <span className="absolute top-4 left-4 bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
                        </div>
                        <div className="p-8 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="font-headline font-bold text-2xl mb-1">East Java Expedition</h4>
                                        <p className="text-on-surface-variant text-sm flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">schedule</span> 5 Days 4 Nights
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-secondary font-bold text-2xl">$650</span>
                                        <span className="text-xs text-outline tracking-wider uppercase">per person</span>
                                    </div>
                                </div>
                                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Explore the volcanic wonders of Mount Bromo and the majestic Ijen Crater. Includes private transport and professional photography.</p>
                            </div>
                            <button className="w-full py-3 border-2 border-primary/20 rounded-xl text-primary font-bold hover:bg-primary hover:text-on-primary transition-all">View Full Itinerary</button>
                        </div>
                    </div>
                    <div className="md:col-span-2 md:row-span-1 bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex gap-6 group">
                        <div className="w-1/3 overflow-hidden rounded-xl">
                            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzzlf6aQNbzyVowqQ2QjEAuy-wWptUcEwlSgRMXUITor3fYkVQqwQyVeCI6g62mK6DZ8va9DCPTn5vUkl0WniGUj7TS2hasqW-Uyz8jLilZUeI1OKUajc2n4eO_i7Py6Dgegd_0SXbWqMfZWJ7Y8nSUB9zAwDjua8Gu2L1l9VHdAf1fmULzIBijyoaUOV82clJ0ve0BatG804HJb8WCXDDMF_GT9N7IJwwZPGYIldAv3PSqGmSjjPuhos0r1KCfq_kexbGpkXRPQ"/>
                        </div>
                        <div className="w-2/3 flex flex-col justify-between">
                            <div>
                                <h4 className="font-headline font-bold text-xl mb-1">Komodo Island Sailing</h4>
                                <p className="text-on-surface-variant text-sm mb-2">3 Days 2 Nights • All-inclusive</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-secondary font-bold text-xl">$890</span>
                                <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">Details <span className="material-symbols-outlined text-sm">open_in_new</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-1 md:row-span-1 bg-surface-container-lowest rounded-2xl p-6 shadow-sm group flex flex-col justify-between">
                        <div>
                            <div className="h-32 overflow-hidden rounded-xl mb-4">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT7rS_WwLIL5e2-QsMilN6aKlk_hKyqbWlBN3X7Uht-S2li48Qxz8zUDReGp7L0N3Ef2AXzx4oLlQjX_y_RtEtqoiFOjgA_l2InGruk3jjDChQL_XXuQ1ptnqnGUWifFvor3NSs92OyPkv2ZPr4M7M3KVjW_yTIbapILbzL44kaaBz5L5odo4qQCOmTWZgXD2PdEelXOSyDpuUebUFYbMMku91JxpxpR4CWJiAR1tkwxCH8f3smsP1slfI60QXb1XN07_dY0HO0g"/>
                            </div>
                            <h4 className="font-headline font-bold text-lg mb-1">Heritage Jogja</h4>
                            <p className="text-on-surface-variant text-xs mb-3">Cultural &amp; Historical Immersion</p>
                        </div>
                        <span className="text-secondary font-bold text-lg">$320</span>
                    </div>
                    <div className="md:col-span-1 md:row-span-1 bg-surface-container-lowest rounded-2xl p-6 shadow-sm group flex flex-col justify-between">
                        <div>
                            <div className="h-32 overflow-hidden rounded-xl mb-4">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6EA9CAwha_n8jNxvy6hzKOxGJqNtKvkIJPTaG_PUB5_w5GyM3rYfbgJDeVgXrrbp-GZ0F3KMiJn27prPZpiCFH9IwQ6JpYq7eg9OfSmEhouucXJyEn-7x7FcW-urF41H0i8x-MfiZrcPNPYv7t8yAmPzTWgBcSjNEo03uQjgEprv4htwKxk4YlGvWKao5aolH_gkl6q6DivEvcFYZ_fpyp2ZVaNPCC4FAj35dR3gHQwdnFBA1cn9b_dzQyxIxAr953EFh_uQ-dQ"/>
                            </div>
                            <h4 className="font-headline font-bold text-lg mb-1">Jakarta City Break</h4>
                            <p className="text-on-surface-variant text-xs mb-3">Urban Luxury &amp; Dining</p>
                        </div>
                        <span className="text-secondary font-bold text-lg">$280</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

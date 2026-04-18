export default function ContactContentSection() {
    return (
        <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side: Contact Info */}
            <div className="space-y-12">
                <div>
                    <h2 className="font-headline text-3xl font-bold text-primary mb-8">Our Headquarters</h2>
                    <div className="rounded-xl overflow-hidden aspect-video bg-surface-container-highest relative shadow-sm">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD6h7-WG_Xs8fxCnHdbVw7clboICOeJPAuPKm5sZsmJfBNeOnWrzHjc4vfX7oMNbtcnOTbS7rkomxugKIkjuQfqYWDRHqC6OeAgGYNTpsmkKCJu3t0WUJSEV97cGdjH-X__9APbp1QEEb6W_KD0DaYT3g2uF2xUV78ATdV1ZV6ARk3OH7BhYVOPMJJw0-nSUCdl80w9Iv2IjqZNXTNekyGqZNi2-30iudW6NPuQCH6XzyFM4YxdNmPfTn5CyX51y95vEZr4WLPjA" />
                        <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-lg flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary">location_on</span>
                            <p className="text-sm font-medium">Jalan Sudirman No. 45, Jakarta Pusat, Indonesia</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-surface-container-lowest rounded-xl">
                        <span className="material-symbols-outlined text-secondary mb-4 block">call</span>
                        <h4 className="font-headline font-bold text-lg mb-1">Call Us</h4>
                        <p className="text-on-surface-variant">+62 21 555 0123</p>
                        <p className="text-on-surface-variant">+62 811 2345 678</p>
                    </div>
                    <div className="p-6 bg-surface-container-lowest rounded-xl">
                        <span className="material-symbols-outlined text-secondary mb-4 block">mail</span>
                        <h4 className="font-headline font-bold text-lg mb-1">Email Us</h4>
                        <p className="text-on-surface-variant">hello@nusantaratravel.com</p>
                        <p className="text-on-surface-variant">booking@nusantaratravel.com</p>
                    </div>
                </div>
                <div>
                    <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-outline mb-6">Connect With Us</h3>
                    <div className="flex gap-4">
                        <a className="w-12 h-12 flex items-center justify-center bg-surface-container-highest rounded-full text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
                            <span className="material-symbols-outlined">share</span>
                        </a>
                        <a className="w-12 h-12 flex items-center justify-center bg-surface-container-highest rounded-full text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
                            <span className="material-symbols-outlined">public</span>
                        </a>
                        <a className="w-12 h-12 flex items-center justify-center bg-surface-container-highest rounded-full text-primary hover:bg-primary hover:text-on-primary transition-all" href="#">
                            <span className="material-symbols-outlined">camera</span>
                        </a>
                    </div>
                </div>
                {/* Trust Badges */}
                <div className="pt-8 border-t border-outline-variant/20">
                    <div className="flex flex-wrap gap-6 items-center">
                        <div className="flex items-center gap-2 px-4 py-2 bg-tertiary/10 text-tertiary rounded-full text-xs font-bold">
                            <span className="material-symbols-outlined text-sm">verified_user</span>
                            SECURE DATA HANDLING
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-tertiary/10 text-tertiary rounded-full text-xs font-bold">
                            <span className="material-symbols-outlined text-sm">shield</span>
                            ASITA CERTIFIED
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Booking Form */}
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_8px_32px_0_rgba(25,28,30,0.06)] border border-outline-variant/10">
                <div className="mb-10">
                    <h2 className="font-headline text-2xl font-bold text-on-surface mb-2">Request a Quote</h2>
                    <p className="text-on-surface-variant">Fill out the form below and our travel experts will get back to you within 24 hours.</p>
                </div>
                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-outline uppercase tracking-wider ml-1">Full Name</label>
                        <input className="w-full bg-surface-container-highest border-none border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg p-4 transition-all" placeholder="John Doe" type="text" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-outline uppercase tracking-wider ml-1">Preferred Destination</label>
                            <select className="w-full bg-surface-container-highest border-none border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg p-4 transition-all">
                                <option>Bali &amp; Nusa Penida</option>
                                <option>Raja Ampat Islands</option>
                                <option>Komodo National Park</option>
                                <option>Yogyakarta Cultural Tour</option>
                                <option>Mount Bromo Adventure</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-outline uppercase tracking-wider ml-1">Travel Date</label>
                            <input className="w-full bg-surface-container-highest border-none border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg p-4 transition-all" type="date" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-outline uppercase tracking-wider ml-1">Number of People</label>
                            <input className="w-full bg-surface-container-highest border-none border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg p-4 transition-all" min="1" placeholder="2" type="number" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-outline uppercase tracking-wider ml-1">Contact Email</label>
                            <input className="w-full bg-surface-container-highest border-none border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg p-4 transition-all" placeholder="john@example.com" type="email" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-outline uppercase tracking-wider ml-1">Additional Requirements</label>
                        <textarea className="w-full bg-surface-container-highest border-none border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-lg p-4 transition-all" placeholder="Tell us about your dream trip..." rows="4"></textarea>
                    </div>
                    <div className="pt-4">
                        <button className="w-full editorial-gradient text-on-secondary py-5 rounded-lg font-headline font-bold text-lg shadow-lg hover:shadow-xl transition-all scale-[1.01] active:scale-[0.98]" type="button">
                            Request My Custom Itinerary
                        </button>
                    </div>
                    <p className="text-center text-[10px] text-outline leading-relaxed uppercase tracking-widest px-8">
                        By submitting this form, you agree to our privacy policy and terms of service regarding data protection.
                    </p>
                </form>
            </div>
        </section>
    );
}

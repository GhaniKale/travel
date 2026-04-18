export default function ContactHeroSection() {
    return (
        <section className="max-w-7xl mx-auto px-8 mb-16">
            <div className="relative overflow-hidden rounded-xl bg-surface-container-high p-12 md:p-20 flex flex-col items-center text-center">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6ZKnkwTYiSujwU6GgRB5tDcJdod8UP-HM2G_z-eyIcXBXhNMvkEXzF-tt_QLWtdLCEZYNLr0WrbsZ-RMy25MAfVrsJKD0Mf5I9H6SRtEEgBumrelsGpj8N1xC0JNVIi8LfLCIdHqwiqde-h2_5v6OJd1a-bxsrCWGFWNpWXiU2myRkqRF1QnIX_wgOwRwqFKuRlN9QY5VSl2wU_dKu2n3MAW8jykRifoLXwrxc6NX2ok0QQoIptwUMOxIX9_nkDCnnotDpQF9qw" />
                </div>
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary mb-6">Get in Touch</h1>
                <p className="max-w-2xl text-on-surface-variant text-lg md:text-xl font-medium leading-relaxed">
                    Begin your journey across the archipelago. Whether you seek a custom itinerary or have questions about our packages, our travel curators are here to help.
                </p>
            </div>
        </section>
    );
}

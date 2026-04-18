export default function HeroSection() {
    return (
        <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-headline font-bold text-xs tracking-widest uppercase mb-6">Explore the Archipelago</span>
                    <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-on-background tracking-tighter leading-[0.95] mb-8">
                        Explore Indonesia <br/> <span className="text-primary">with Ease</span>
                    </h1>
                    <p className="text-on-surface-variant text-lg md:text-xl max-w-lg leading-relaxed mb-10">
                        Discover hidden gems from the turquoise waters of Raja Ampat to the emerald rice terraces of Bali. Your curated journey starts here.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="cta-gradient text-on-secondary px-8 py-4 rounded-xl font-headline font-bold text-base shadow-lg hover:shadow-secondary/20 transition-all active:scale-95">
                            Book Your Trip
                        </button>
                        <button className="bg-surface-container-lowest text-primary px-8 py-4 rounded-xl font-headline font-bold text-base border-2 border-primary/10 hover:bg-primary/5 transition-all">
                            View Packages
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-6 relative">
                    <div className="perspective-hero-image relative z-10 rounded-xl overflow-hidden shadow-2xl">
                        <img alt="Indonesian Destination" className="w-full aspect-[4/5] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSPw-_xZ0dI3wxf7WSOdS1bg3CoxL3rh31CSUqVSMTbiSxTuOFHHCavW5YBEKQb_Hsj3DOJYevDH3CCjz9t8MF9PSjRfBLe2ARe4wED9N5qHiywxGcRo8cnmlvm2Xo6OzFkC-qLRYDpvGj8qfiNQVtyQ-we-fpOkarBU4gFoeqJfNtAMDhSTg8aKyPVuH0qF52hBrsgWJIqxLEPCuGdwKnvuScuEr0zW3Qq_VzSR-tJLX77-SATslTaOeCZgvLOEgmuJnzDXG-xg"/>
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </header>
    );
}

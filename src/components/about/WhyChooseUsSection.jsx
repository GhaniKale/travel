export default function WhyChooseUsSection() {
    return (
        <section className="py-24 px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4 text-on-surface">Why Explorers Choose Us</h2>
                <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Local Experts */}
                <div className="bg-surface-container-lowest p-8 rounded-xl group hover:bg-primary transition-colors duration-500">
                    <div className="w-14 h-14 rounded-lg bg-primary-fixed flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                        <span className="material-symbols-outlined text-on-primary-fixed text-3xl">travel_explore</span>
                    </div>
                    <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-white">Local Experts</h3>
                    <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed">Our guides are historians, photographers, and naturalists born in the islands they walk with you.</p>
                </div>
                {/* 24/7 Support */}
                <div className="bg-surface-container-lowest p-8 rounded-xl group hover:bg-secondary transition-colors duration-500">
                    <div className="w-14 h-14 rounded-lg bg-secondary-fixed flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                        <span className="material-symbols-outlined text-on-secondary-fixed text-3xl">support_agent</span>
                    </div>
                    <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-white">24/7 Support</h3>
                    <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed">Real-time assistance across all Indonesian time zones, ensuring your peace of mind from Bali to Papua.</p>
                </div>
                {/* Safe Payments */}
                <div className="bg-surface-container-lowest p-8 rounded-xl group hover:bg-tertiary transition-colors duration-500">
                    <div className="w-14 h-14 rounded-lg bg-tertiary-fixed flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                        <span className="material-symbols-outlined text-on-tertiary-fixed text-3xl">verified_user</span>
                    </div>
                    <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-white">Safe Payments</h3>
                    <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed">Fully encrypted, world-class booking systems providing bank-grade security for your travel investment.</p>
                </div>
            </div>
        </section>
    );
}

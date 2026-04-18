export default function AboutHeroSection() {
    return (
        <section className="relative px-8 py-20 max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 z-10">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Our Journey</span>
                    <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tighter mb-6">
                        Curating the <span className="text-primary">Soul</span> of the Archipelago.
                    </h1>
                    <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                        We don't just sell tours; we craft editorial narratives that place you at the heart of Indonesia's most evocative landscapes.
                    </p>
                </div>
                <div className="lg:col-span-7 relative">
                    <div className="bg-surface-container h-[500px] w-full absolute -top-8 -right-8 rounded-xl -z-10"></div>
                    <img className="w-full h-[550px] object-cover rounded-xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxVHItjSCwkZBRwLW4Dgri5yMlq1dPInAFy7QTZ-UKcbhl9Pth80ygUJbSwirty_5rls9G_Oe2KnanH7EzGtwDv1IlxHx0epV-kcOLU5lFZc53cFfYVsrzlKESU7NRISod38124sKqFknzgCFz5FtR3tHX-sOeNBUaXTk1vk74l9ADluRghUw0CZOT61Rx3AUw92yKrMoQyqzxVskm_GrbHenmwYSWdty_pDK-S-_X95yG2P8EuCcEpkhVAAAKzHf3C6TiBLlCqg"/>
                </div>
            </div>
        </section>
    );
}

export default function MissionVisionSection() {
    return (
        <section className="bg-surface-container-low py-24 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20">
                    <div className="bg-surface p-12 lg:p-20">
                        <span className="material-symbols-outlined text-4xl text-primary mb-6">explore</span>
                        <h2 className="font-headline text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-on-surface-variant leading-relaxed text-lg italic">
                            "To transform the standard Indonesian travel experience into an editorial journey of discovery, connecting conscious travelers with the authentic heart of our islands through sustainable and immersive storytelling."
                        </p>
                    </div>
                    <div className="bg-surface p-12 lg:p-20">
                        <span className="material-symbols-outlined text-4xl text-secondary mb-6">visibility</span>
                        <h2 className="font-headline text-3xl font-bold mb-6">Our Vision</h2>
                        <p className="text-on-surface-variant leading-relaxed text-lg">
                            To be the definitive bridge between the modern explorer and the timeless heritage of Nusantara, setting the gold standard for high-end, locally-informed travel curation in Southeast Asia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function TrustSection() {
    return (
        <section className="py-24 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                        <span className="material-symbols-outlined text-4xl">verified_user</span>
                    </div>
                    <h4 className="font-headline font-bold text-xl mb-3">Verified Agency</h4>
                    <p className="text-on-surface-variant text-sm">Official partner of Indonesia Ministry of Tourism with 15+ years experience.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-6">
                        <span className="material-symbols-outlined text-4xl">payments</span>
                    </div>
                    <h4 className="font-headline font-bold text-xl mb-3">Safe Payment</h4>
                    <p className="text-on-surface-variant text-sm">Secure transactions with 256-bit encryption. Multi-currency supported.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                        <span className="material-symbols-outlined text-4xl">support_agent</span>
                    </div>
                    <h4 className="font-headline font-bold text-xl mb-3">Expert Guides</h4>
                    <p className="text-on-surface-variant text-sm">Local certified guides who speak your language and know the heritage.</p>
                </div>
            </div>
        </section>
    );
}

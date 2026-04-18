export default function TeamSection() {
    return (
        <section className="bg-surface-container-highest py-24 px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface">The Curators</h2>
                        <p className="text-on-surface-variant mt-4 text-lg">Meet the minds behind your next great discovery. Each guide is hand-selected for their passion and deep-rooted knowledge.</p>
                    </div>
                    <button className="font-headline font-bold text-primary flex items-center gap-2 group">
                        See All Team <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Team Member 1 */}
                    <div className="group">
                        <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg6w9CV7RMBP4ZzSgmqXAIYurTOFyQyVHhPK3QRpa2XPeTueSdKhwE2e8rIqGkjk12usM8oiTm3wg8A0TGhmstn_a9-zYmKhrTmUNaFaDwbqp4OxRbbds6NjzljTpAF2VCqKNvfw0mb8ShSvZsWmq5IPy1axTQpzdqzBK-FFZOJVOSTa9tdekNkCPNXG0MoIQPGgEnb3OWe-a7dGFUUfTkCK6QvKK78gCjKeRiLkzhtZ_v59LCXfUQbLGPg-19Y1Bxn45WqNL0JA"/>
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold tracking-widest uppercase">Senior Guide</div>
                        </div>
                        <h4 className="font-headline text-xl font-bold">Bagus Satria</h4>
                        <p className="text-primary text-sm font-semibold mb-3">Bali Specialist</p>
                        <p className="text-on-surface-variant text-sm leading-relaxed">A descendant of village elders, Bagus bridges the gap between ancient traditions and modern luxury.</p>
                    </div>
                    {/* Team Member 2 */}
                    <div className="group lg:mt-12">
                        <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnX8EqegzbxuMN7cHGlZW0fB-ZhtHkLUpBie_2HzdhINYgBd4zbZ5fv5QhV1Ccil0Wtsf9CAi7n2u76lQ_VU_Wd7bRnSnAi38vP9vXFP_gmdtS3hpHDDhaU1vXFpSaUpyVymMjb9frqYmwWAD9UnFJKXXOez2uU7EhjD0WxwBS8O65ldETW6iwr28Uwha_9FwCimjZpWGo4EPEMe0g0v6zoPrcKOcR61LlkTNxTiXKXZBz14Z2xZslXKLtrJ2NHM4uHjtg8vQYbw"/>
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold tracking-widest uppercase">Lead Naturalist</div>
                        </div>
                        <h4 className="font-headline text-xl font-bold">Siti Aminah</h4>
                        <p className="text-primary text-sm font-semibold mb-3">Komodo &amp; Flores</p>
                        <p className="text-on-surface-variant text-sm leading-relaxed">Siti is a marine biologist whose passion for conservation makes every trek an educational adventure.</p>
                    </div>
                    {/* Team Member 3 */}
                    <div className="group">
                        <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV4qaWa-WPRAm5iWAELDthcT3PXtgupEu4PgV9RkUVrHS-b7Lo0-t97onVK_3ydC3vh3FMtKRJKXQU8b8oSK_loywsiTmMDyn1F-08DgVnxVBsc2R9-I79n0hMHxM6G-yWeGDUbzF4uDIZlOxd2FqbXLKCJwO4mGAfrWHUrhW7jy58tnlB3oDvxVj_05_fn0uUqWKwOHonSarlzQRTZqKI3t9kZ6wcANthSPYRXaCwUANWE1w54Ld279BSWIbxI9Pfb8tPeJb7pw"/>
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold tracking-widest uppercase">Expedition Head</div>
                        </div>
                        <h4 className="font-headline text-xl font-bold">Rahmat Hidayat</h4>
                        <p className="text-primary text-sm font-semibold mb-3">Java &amp; Sumatra</p>
                        <p className="text-on-surface-variant text-sm leading-relaxed">With 20 years in the field, Rahmat manages our most complex logistics across the volcanic heartland.</p>
                    </div>
                    {/* Team Member 4 */}
                    <div className="group lg:mt-12">
                        <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACvDCG3GZPEV0mBLfyan-wID-HKJ-40t7eSDmCacBnPkBoy-5vtYfEoZKj9LySFnODSV5FR3vX8jimqQP-6qmMe3uDCYLmfCOQlo3ChO-xUmsHBwNMkEmi5OqHdvK0WNyfkHE-hZmzUEthpZqSHpBNlLHTG-IRX1bd2NhILIBspSgDNiFZ9ohd5C9XlnC6nDikbpX_tazFSwbghfzagyPEu4cinbmV6MpEUDnt0Ez3V5JYIZujd3_fCqjvmbtkpp9wAO0gH0cwgw"/>
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold tracking-widest uppercase">Culture Liaison</div>
                        </div>
                        <h4 className="font-headline text-xl font-bold">Laras Putri</h4>
                        <p className="text-primary text-sm font-semibold mb-3">Yogyakarta Arts</p>
                        <p className="text-on-surface-variant text-sm leading-relaxed">Laras curates our artisan workshops, connecting travelers with master craftsmen in secret ateliers.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

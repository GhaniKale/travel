export default function PackagesHero() {
    return (
        <header className="max-w-7xl mx-auto px-8 mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-2xl">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Curated Collections</span>
                    <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
                        Authentic Journeys <br/>Across the Archipelago
                    </h1>
                    <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                        Discover the hidden soul of Indonesia through our meticulously designed tour packages, blending luxury comfort with raw cultural immersion.
                    </p>
                </div>
                <div className="flex items-center gap-4 bg-surface-container-lowest p-2 rounded-xl shadow-sm">
                    <div className="flex -space-x-3">
                        <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBG94l2_QCgTMFps6rGpFqSyLdBgAjWsjE0fWpyDVIC_HqSOdNZstfX2d0FTMXTkXtH2cSGH2LezlGmZploYeBuVa2EZsUBQQ4ypXeAFmfJ6QjENlpqdQnzTpPHvOaIFcgTUUFRyiCi-8iLjDfGbJ5hwN2oYfgzKzxX-Y5i2LUrZjJgG9a2Ph23N5jpy5Bjt6ttJqFMoK7gilyO_F7BiUZksQ9ixFnKQ_DumIChNqI1QND49UgQTFNbd6kDSGZiqI4OwgvVTpF6Q" />
                        <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVX9yGnEOAc_zxOidCKQFlWapz0kRrkZSZBZfGiF6TZNzeyeIYQWmoKgwvIcPswZMp086xQIaKVHfM9p-A8NXV5e0eqKDYlOiPOx54EQWifzK4PVAwC9allf4Y13_pLTjiDXRnnyKJas3oAlvjy-OPcL5vuPdikShpJmyOXGsJuFNhdG5ODuJsqSwKnOTzt95p0dupZWneCwAYTwOBLvKeCyrScrA_XFZIDvQ0ro8_lclzkIb3yAxGc5Xede2ilBBcs4j4LpJqYA" />
                        <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center border-2 border-white text-on-primary-fixed text-xs font-bold">+12k</div>
                    </div>
                    <span className="text-sm font-medium text-on-surface-variant pr-4">Trusted by global explorers</span>
                </div>
            </div>
        </header>
    );
}

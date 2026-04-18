export default function DestinationsHero() {
    return (
        <section className="max-w-7xl mx-auto px-8 mb-16">
            <div className="relative overflow-hidden rounded-xl bg-surface-container-high p-12 md:p-20">
                <div className="relative z-10 max-w-2xl">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Exploration</span>
                    <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-on-surface tracking-tighter mb-6 leading-[1.1]">
                        Unveil the Hidden <br />Gems of <span className="text-primary">Indonesia</span>
                    </h1>
                    <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-lg">
                        Curated escapes from the volcanic peaks of Lombok to the turquoise waters of Raja Ampat. Your next story begins here.
                    </p>
                    
                    {/* Search/Filter Bar */}
                    <div className="flex flex-col md:flex-row gap-4 bg-surface-container-lowest p-3 rounded-xl shadow-sm">
                        <div className="flex-1 flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-outline-variant/20 py-2">
                            <span className="material-symbols-outlined text-primary">explore</span>
                            <input className="w-full bg-transparent border-none focus:ring-0 text-sm font-medium text-on-surface placeholder:text-outline" placeholder="Where do you want to go?" type="text" />
                        </div>
                        <div className="flex-1 flex items-center px-4 gap-3 py-2">
                            <span className="material-symbols-outlined text-primary">calendar_today</span>
                            <select className="w-full bg-transparent border-none focus:ring-0 text-sm font-medium text-on-surface">
                                <option>Select Season</option>
                                <option>Dry Season (Apr-Oct)</option>
                                <option>Green Season (Nov-Mar)</option>
                            </select>
                        </div>
                        <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold text-sm hover:bg-primary-container transition-colors">
                            Search
                        </button>
                    </div>
                </div>
                
                {/* Atmospheric Background Element */}
                <div className="absolute right-[-10%] top-0 w-1/2 h-full hidden lg:block">
                    <img className="w-full h-full object-cover opacity-80 mix-blend-multiply rounded-l-3xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD8b44N35Z43cILVNcuvfjtfhfAyr3eFF0soN4yhEfKUJ-xcgz7iVpQ7asJSgSspmOVYgGu5WiIq2iPSXVpJA51yZ44i05wd1sXaRS8oMlAbth1T3157aU7M1CvYYzcARj6xfZnhW7fV8zBmXaBHogvaV-51K4Bq06yJSMSsUn8bIJuma_KRiiKXGlawHrCFKUFtPanijId0wehEvkseIKeMO2sRup8YNgVwEjZgut9fFNbexhTzuYEsyL5MiULj7JjPBI-oCzag" />
                </div>
            </div>
        </section>
    );
}

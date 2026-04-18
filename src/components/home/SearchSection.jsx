export default function SearchSection() {
    return (
        <section className="relative -mt-16 z-20 px-8">
            <div className="max-w-5xl mx-auto bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-6 items-end">
                <div className="flex-1 space-y-2 w-full">
                    <label className="block text-xs font-bold text-primary tracking-widest uppercase ml-1">Destination</label>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">location_on</span>
                        <input className="w-full pl-12 pr-4 py-3 bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline-variant" placeholder="Where to go?" type="text"/>
                    </div>
                </div>
                <div className="flex-1 space-y-2 w-full">
                    <label className="block text-xs font-bold text-primary tracking-widest uppercase ml-1">Package Type</label>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">travel_explore</span>
                        <select className="w-full pl-12 pr-4 py-3 bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface">
                            <option>Adventure</option>
                            <option>Honeymoon</option>
                            <option>Family Fun</option>
                            <option>Cultural</option>
                        </select>
                    </div>
                </div>
                <div className="flex-1 space-y-2 w-full">
                    <label className="block text-xs font-bold text-primary tracking-widest uppercase ml-1">Date</label>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">calendar_today</span>
                        <input className="w-full pl-12 pr-4 py-3 bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface" type="date"/>
                    </div>
                </div>
                <button className="cta-gradient text-on-secondary h-[52px] px-8 rounded-lg font-headline font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity w-full md:w-auto">
                    <span className="material-symbols-outlined">search</span> Search
                </button>
            </div>
        </section>
    );
}

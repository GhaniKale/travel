export default function PackagesFilter() {
    return (
        <section className="max-w-7xl mx-auto px-8 mb-12">
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Duration */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-primary tracking-widest uppercase ml-1">Duration</label>
                        <div className="relative">
                            <select className="w-full bg-surface-container-highest border-none rounded-lg py-3 pl-4 pr-10 text-on-surface text-sm appearance-none focus:ring-2 focus:ring-primary focus:ring-offset-0">
                                <option>All Durations</option>
                                <option>1-3 Days</option>
                                <option>4-7 Days</option>
                                <option>8+ Days</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant pointer-events-none">expand_more</span>
                        </div>
                    </div>
                    {/* Budget */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-primary tracking-widest uppercase ml-1">Budget Range</label>
                        <div className="relative">
                            <select className="w-full bg-surface-container-highest border-none rounded-lg py-3 pl-4 pr-10 text-on-surface text-sm appearance-none focus:ring-2 focus:ring-primary">
                                <option>Any Budget</option>
                                <option>$500 - $1,500</option>
                                <option>$1,500 - $3,000</option>
                                <option>$3,000+</option>
                            </select>
                            <span class="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant pointer-events-none">payments</span>
                        </div>
                    </div>
                    {/* Difficulty */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-primary tracking-widest uppercase ml-1">Difficulty</label>
                        <div className="relative">
                            <select className="w-full bg-surface-container-highest border-none rounded-lg py-3 pl-4 pr-10 text-on-surface text-sm appearance-none focus:ring-2 focus:ring-primary">
                                <option>All Levels</option>
                                <option>Easy / Relaxing</option>
                                <option>Moderate</option>
                                <option>Challenging</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant pointer-events-none">landscape</span>
                        </div>
                    </div>
                    {/* Category */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-primary tracking-widest uppercase ml-1">Category</label>
                        <div className="relative">
                            <select className="w-full bg-surface-container-highest border-none rounded-lg py-3 pl-4 pr-10 text-on-surface text-sm appearance-none focus:ring-2 focus:ring-primary">
                                <option>All Categories</option>
                                <option>Adventure</option>
                                <option>Relaxation</option>
                                <option>Cultural Heritage</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant pointer-events-none">category</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

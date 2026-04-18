import { Link } from 'react-router-dom';
import { useCurrencyStore } from '../../store/useCurrencyStore';

export default function PackagesGrid() {
    const { formatPrice } = useCurrencyStore();
    return (
        <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Package Card 1 */}
            <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv3onJeMyuraAs6INkRTWwOU-6cGlLMNdyGEtcScpeTUpILzVNvSHpvi9B7jWsZDgmMv6Gu9dekHO81kDc9k8RdvzIx6fTsKMROTZlD87I8nHt5Npev1PTWvlDT_K7m_jGJp0Ineli0roPDNsLd7n_WG5WfFxGmWVenqBSrqVs-UfgDQ22veMqpAq65zwgAObWpm_zp_mFpfUe_vjnTGAp7mR--cDi1q6WPPP-mUVpt3GhhKULW2JG4vDg4bpw-GD-gNYm6k55kg" />
                    <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold tracking-tight">Best Seller</div>
                    <div className="absolute bottom-4 right-4 bg-surface/90 glass-nav px-3 py-1 rounded-lg text-sm font-bold text-primary">5D4N</div>
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-headline text-xl font-bold text-on-surface">Java Volcanic Expedition</h3>
                        <div className="flex items-center text-tertiary">
                            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                            <span className="text-xs font-bold ml-1">4.9</span>
                        </div>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Witness the ethereal beauty of Mount Bromo and Ijen Crater's blue flames.</p>
                    <div className="flex gap-4 mb-8">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-1">
                                <span className="material-symbols-outlined">restaurant</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase text-on-surface-variant tracking-tighter">Meals</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-1">
                                <span className="material-symbols-outlined">hotel</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase text-on-surface-variant tracking-tighter">4-Star</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-1">
                                <span className="material-symbols-outlined">directions_car</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase text-on-surface-variant tracking-tighter">Private</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                        <div>
                            <span className="text-xs text-on-surface-variant">Starts from</span>
                            <p className="text-2xl font-bold text-on-surface">{formatPrice(1250)}</p>
                        </div>
                        <Link to="/packages/java-volcano" className="editorial-gradient text-on-secondary px-6 py-3 rounded-lg font-headline font-bold text-sm">View Details</Link>
                    </div>
                </div>
            </article>

            {/* Package Card 2 */}
            <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKt3M5w73uKGDOs9rfZ7gi-gzkKfoLMVbl8AIdfu6YrppgNT9kOT29dosoUsLwCnJhmknNefJJRhI5cob3VrZwo4pcw8ZQ0SM1y7UgcCqEDzmXeEx6KQ0dx9kt6kOlkpN28srhjLZzUlcSfojMA8ppuvjmogPK6NERFOONwllQZ3nLNeLfcAb161qAD6KTro_Wt0Nc42tFuCakIEwupgS-asSIra3BeM7lnDT4F9ZBYJA5SGnsvvq9EVmhTxffJUEsGwi94kdnBw" />
                    <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-xs font-bold tracking-tight">Luxury</div>
                    <div className="absolute bottom-4 right-4 bg-surface/90 glass-nav px-3 py-1 rounded-lg text-sm font-bold text-primary">7D6N</div>
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-headline text-xl font-bold text-on-surface">Ubud Spiritual Retreat</h3>
                        <div className="flex items-center text-tertiary">
                            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                            <span className="text-xs font-bold ml-1">5.0</span>
                        </div>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">A holistic wellness journey through Bali's emerald rice terraces and ancient temples.</p>
                    <div className="flex gap-4 mb-8">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-1">
                                <span className="material-symbols-outlined">spa</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase text-on-surface-variant tracking-tighter">Spa</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-1">
                                <span className="material-symbols-outlined">king_bed</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase text-on-surface-variant tracking-tighter">Villas</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-1">
                                <span className="material-symbols-outlined">local_dining</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase text-on-surface-variant tracking-tighter">Gourmet</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                        <div>
                            <span className="text-xs text-on-surface-variant">Starts from</span>
                            <p className="text-2xl font-bold text-on-surface">$2,450</p>
                        </div>
                        <button className="editorial-gradient text-on-secondary px-6 py-3 rounded-lg font-headline font-bold text-sm">Book Now</button>
                    </div>
                </div>
            </article>

            {/* Package Card 3 */}
            <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmtUia1aau9ym32cCKw0h8LrnKADXMQEe3H5d4CVsD_t380gOmArsmVVTQ9t6BP6LRoNkk3JgfBFpbjELe5lwiaIT8gbnKo454KIIfL8fjWUa3ofbcetZhw2fn4Qk9IYu7S2eUCOksjVVFrhpPpniE98Mb0Vm8nkvV1eEGPEP_RBmM36cjLodMWmy7kDGZyxOWgo-8tAgAbKCyH0Z5k5tiPGrMz0CUhf9dKzaT_5HEn7v0X3tjHtmBl1fxAV7Y-54CtT4auHYRsg" />
                    <div className="absolute top-4 left-4 bg-on-background text-surface px-3 py-1 rounded-full text-xs font-bold tracking-tight">Rare Experience</div>
                    <div className="absolute bottom-4 right-4 bg-surface/90 glass-nav px-3 py-1 rounded-lg text-sm font-bold text-primary">10D9N</div>
                </div>
                <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-headline text-xl font-bold text-on-surface">Raja Ampat Blue Water</h3>
                        <div className="flex items-center text-tertiary">
                            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                            <span className="text-xs font-bold ml-1">4.8</span>
                        </div>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">The world's most biodiverse marine sanctuary awaits your discovery.</p>
                    <div className="flex gap-4 mb-8">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-1">
                                <span className="material-symbols-outlined">scuba_diving</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase text-on-surface-variant tracking-tighter">Diving</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-1">
                                <span className="material-symbols-outlined">sailing</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase text-on-surface-variant tracking-tighter">Yacht</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-1">
                                <span className="material-symbols-outlined">set_meal</span>
                            </div>
                            <span className="text-[10px] font-bold uppercase text-on-surface-variant tracking-tighter">Seafood</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                        <div>
                            <span className="text-xs text-on-surface-variant">Starts from</span>
                            <p className="text-2xl font-bold text-on-surface">$4,100</p>
                        </div>
                        <button className="editorial-gradient text-on-secondary px-6 py-3 rounded-lg font-headline font-bold text-sm">Book Now</button>
                    </div>
                </div>
            </article>
        </section>
    );
}

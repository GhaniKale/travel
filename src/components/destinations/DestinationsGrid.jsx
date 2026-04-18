import { Link } from 'react-router-dom';
import { useCurrencyStore } from '../../store/useCurrencyStore';

export default function DestinationsGrid({ filters }) {
    const { formatPrice } = useCurrencyStore();
    return (
        <section className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between mb-12">
                <div>
                    <h2 className="font-headline font-bold text-3xl text-on-surface tracking-tight">Handpicked Destinations</h2>
                    <p className="text-on-surface-variant mt-2">Authentic experiences, curated for the modern traveler.</p>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 rounded-full border border-outline-variant text-outline hover:text-primary hover:border-primary transition-all">
                        <span className="material-symbols-outlined">tune</span>
                    </button>
                </div>
            </div>

            {/* Bento-Style Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Bali - Large Card */}
                <div className="md:col-span-8 group cursor-pointer">
                    <div className="relative h-[500px] rounded-xl overflow-hidden shadow-sm">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqPQh5GxlzuauTdIvBlPHFOO8pgPcLfzhDtlHziYYMA2DncHIL5YfH5Sz0JeaLvf32dD28konpU9kbpUAqfHRZsve6hqzKyzcfqIOCPwMBbDuN6UYeNbissWPtJU6qcaHisnqvSBvuBD8U31U-HJ1LR5M0y-ZXO8P8vvItMtQzlGHnT_31q1KSTnTbK1pr7yspqNhdH2SuXj7o5gZipc-Suv62Hf8wsKVBavVuAbi2Yu8vjrX_cBam-Ctm6hiZnEI37sRtirNBwQ" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute top-6 right-6 bg-surface-container-lowest/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-yellow-400 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="text-white text-sm font-bold">4.9</span>
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                            <div className="text-white">
                                <span className="bg-primary/90 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest mb-3 inline-block">Best Seller</span>
                                <h3 className="text-4xl font-headline font-bold tracking-tight">Bali</h3>
                                <p className="text-white/80 mt-2 max-w-md font-body">Immerse yourself in the cultural heartbeat of Indonesia. From Ubud's jungles to Uluwatu's cliffs.</p>
                            </div>
                            <div className="text-right">
                                <p className="text-white/60 text-xs uppercase tracking-widest mb-1">From</p>
                                <p className="text-white text-2xl font-bold font-headline">{formatPrice(549)}</p>
                                <Link to="/destinations/bali" className="inline-block mt-4 bg-white text-primary px-6 py-2 rounded-lg text-sm font-bold hover:bg-primary-fixed transition-colors">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Raja Ampat - Vertical Card */}
                <div className="md:col-span-4 group cursor-pointer">
                    <div className="relative h-[500px] rounded-xl overflow-hidden shadow-sm bg-surface-container-lowest">
                        <img className="w-full h-3/5 object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_RAl4oaGq0TQRPngTTL6qp_bCGBNcZscdBjfP6kVguM4M4y26JEuOk6CN2fZOL7NGqzwW4piEikzKR1HQ9fVTqrVCOQi1OhfHNyket_FQq6Le_AUwrGeCOEsMtJJljAn-3uWriLfbMAI0rXRF8Fl5YOibFdS2lu97OQBhMPbwaao-ydfT8pCqhA7wnp3oxQf2SxQ-exun4blOW2Q7ehWavdpeI93yxEVTfpskT9cBt1s23UugrOQ_JWenyYZC2sfqtDoiFsdHdw" />
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-tertiary text-[10px] font-extrabold uppercase tracking-widest">Diving Paradise</span>
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-yellow-500 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                    <span className="text-on-surface text-sm font-bold">5.0</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">Raja Ampat</h3>
                            <p className="text-on-surface-variant text-sm line-clamp-2 mb-6">Explore the world's most biodiverse marine ecosystem in West Papua.</p>
                            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                                <span className="text-on-surface font-headline font-bold text-lg">{formatPrice(1299)}</span>
                                <Link to="/destinations/raja-ampat" className="text-primary text-sm font-bold hover:underline underline-offset-4">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lombok - Standard Card */}
                <div className="md:col-span-4 group cursor-pointer">
                    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                        <div className="relative h-64 overflow-hidden">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ_RBzZqHGKUbZn_saxPAtc89AGec1Mp47a7bs1Aqf0Ab1V82jxJrxurGz55j79-uU3MlYhQIz8ubhJ-9H2wYGMFnsVlAlF9DJK3C5kbXac10FSNT1XNiLOrnxFNW19YB6wT_qguN2FULTRauMb74ibI1B4TmgJaDmLsO3lSn6KQ9-3jbWVib4RqqOUQSvUAkhbq7kcVD3m9RfSb_oTLOC0nplKr63SYLB3bt2AnZKJLcRBFU2e2nvmAvn68QBhnNAYxfCtV6HXQ" />
                            <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-bold">Adventure</div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-1 mb-2">
                                <span className="material-symbols-outlined text-yellow-500 text-xs" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="text-on-surface-variant text-xs font-bold">4.8 (120 reviews)</span>
                            </div>
                            <h3 className="text-xl font-headline font-bold text-on-surface mb-4">Lombok</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-on-surface font-headline font-bold text-lg">{formatPrice(420)}</span>
                                <Link to="/destinations/lombok" className="editorial-gradient text-white px-5 py-2 rounded-lg text-xs font-bold">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Komodo - Standard Card */}
                <div className="md:col-span-4 group cursor-pointer">
                    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                        <div className="relative h-64 overflow-hidden">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRBBtsE190Gw9xPpa5prr-HGZee798aZiIyQY9oE0hSXEW8wCg6YUCN7dS1oOQlwLEwGegKJfuHjq6IUvpjmj5Ss_L8tm2B5YK-dvjfGZvQybleFDQhkMurgL1FVHCM4yAkq2eM5gkAENjiX_UrrukPbSDjMdoCMqvu6QpAqbFEYGoi0axBSrlvZJhfm4K1aBiSXVTEYknfm6ICHH5IrhEu6s4YA3vSdvXIJfwsgmdo5oh8qObZmJX_pk1wWwkfjYZpa4roqDCNw" />
                            <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-bold">Wildlife</div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-1 mb-2">
                                <span className="material-symbols-outlined text-yellow-500 text-xs" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="text-on-surface-variant text-xs font-bold">4.9 (84 reviews)</span>
                            </div>
                            <h3 className="text-xl font-headline font-bold text-on-surface mb-4">Komodo</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-on-surface font-headline font-bold text-lg">$890.00</span>
                                <button className="editorial-gradient text-white px-5 py-2 rounded-lg text-xs font-bold">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Jogja - Standard Card */}
                <div className="md:col-span-4 group cursor-pointer">
                    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                        <div className="relative h-64 overflow-hidden">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjpXunDIjU58SdImUqIjbt7DfWqd_VgY-ro8_D9OFh2rSjmPJhHY7ccmZmuoPAt6sLIq8s9MwTLs7X39ssjq_BwY2WxgaD2DFm_f42mDHoTI_LSKMNFj2YkXpai6QueNOgfvb7087xCaGIAcviZooRd8j7tZ41HOSOQcFEky2ibE7NRjHCiZGIJ_4TPpufvXH1lWlrTAxji8m_Q2QFjZMcYXhYQL5yxkMpvTr0y2Ml1PQ6Nqd82nYr4EiSgAw1vaRjlhbQkZwOZw" />
                            <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-bold">Heritage</div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-1 mb-2">
                                <span className="material-symbols-outlined text-yellow-500 text-xs" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="text-on-surface-variant text-xs font-bold">4.7 (210 reviews)</span>
                            </div>
                            <h3 className="text-xl font-headline font-bold text-on-surface mb-4">Jogja</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-on-surface font-headline font-bold text-lg">$350.00</span>
                                <button className="editorial-gradient text-white px-5 py-2 rounded-lg text-xs font-bold">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Load More */}
            <div className="mt-20 flex flex-col items-center">
                <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                    <span>Show All Destinations</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <div className="mt-8 flex gap-2">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    <span className="w-2 h-1 bg-outline-variant rounded-full"></span>
                    <span className="w-2 h-1 bg-outline-variant rounded-full"></span>
                </div>
            </div>
        </section>
    );
}

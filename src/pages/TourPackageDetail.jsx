import { useParams, Link } from 'react-router-dom';
import { useCurrencyStore } from '../store/useCurrencyStore';
import InteractiveMap from '../components/map/InteractiveMap';
import ReviewSection from '../components/reviews/ReviewSection';
import WishlistButton from '../components/ui/WishlistButton';

export default function TourPackageDetail() {
    const { id } = useParams();
    const { formatPrice } = useCurrencyStore();

    // Mock data for detail
    const tourPackage = {
        id,
        name: id === 'java-volcano' ? 'Java Volcanic Expedition' : (id === 'ubud-retreat' ? 'Ubud Spiritual Retreat' : (id === 'raja-ampat-dive' ? 'Raja Ampat Blue Water' : id)),
        duration: '5D4N',
        rating: 4.9,
        reviews: 210,
        price: 1250,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv3onJeMyuraAs6INkRTWwOU-6cGlLMNdyGEtcScpeTUpILzVNvSHpvi9B7jWsZDgmMv6Gu9dekHO81kDc9k8RdvzIx6fTsKMROTZlD87I8nHt5Npev1PTWvlDT_K7m_jGJp0Ineli0roPDNsLd7n_WG5WfFxGmWVenqBSrqVs-UfgDQ22veMqpAq65zwgAObWpm_zp_mFpfUe_vjnTGAp7mR--cDi1q6WPPP-mUVpt3GhhKULW2JG4vDg4bpw-GD-gNYm6k55kg",
        description: "Witness the ethereal beauty of Mount Bromo and Ijen Crater's blue flames. A thrilling adventure designed for nature lovers and thrill-seekers looking to conquer the iconic volcanic landscapes of East Java.",
        facilities: [
            { icon: 'restaurant', name: 'Meals Included' },
            { icon: 'hotel', name: '4-Star Accommodation' },
            { icon: 'directions_car', name: 'Private Transport' },
            { icon: 'group', name: 'Local Guide' },
        ],
        itinerary: [
            { day: 1, title: 'Arrival & Transfer to Bromo', desc: 'Pick up from Surabaya or Malang. Transfer to the hotel near Mount Bromo. Free leisure time.' },
            { day: 2, title: 'Bromo Sunrise Tour', desc: 'Early morning jeep ride to Penanjakan viewpoint for sunrise. Continue to Bromo crater. Drive to Banyuwangi.' },
            { day: 3, title: 'Ijen Blue Fire Tour', desc: 'Midnight hike to Ijen Crater to witness the famous blue flames. See the turquoise sulfur lake. Transfer out.' }
        ]
    };

    return (
        <div className="pt-24 pb-16 min-h-screen">
             <div className="max-w-7xl mx-auto px-8">
                {/* Breadcrumb */}
                <div className="text-sm text-on-surface-variant flex gap-2 mb-6">
                    <Link to="/packages" className="hover:text-primary">Tour Packages</Link>
                    <span>/</span>
                    <span className="text-on-surface font-bold capitalize">{tourPackage.name}</span>
                </div>

                 {/* Hero & Top Info */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                     <div className="h-[400px] rounded-3xl overflow-hidden shadow-md">
                         <img src={tourPackage.image} alt={tourPackage.name} className="w-full h-full object-cover" />
                     </div>
                     <div className="flex flex-col justify-center">
                         <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-tight mb-4 w-max">
                             {tourPackage.duration}
                         </div>
                         <h1 className="text-4xl font-headline font-bold mb-4 text-on-surface">{tourPackage.name}</h1>
                         <div className="flex items-center gap-4 text-on-surface-variant mb-6">
                             <div className="flex items-center gap-1">
                                 <span className="material-symbols-outlined text-yellow-500 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                 <span className="font-bold text-on-surface">{tourPackage.rating}</span>
                                 <span className="text-xs">({tourPackage.reviews} reviews)</span>
                             </div>
                             <span className="text-outline-variant">|</span>
                             <span className="text-sm">Excellent Choice</span>
                         </div>
                         <p className="text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
                             {tourPackage.description}
                         </p>
                         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                             {tourPackage.facilities.map((fac, i) => (
                                 <div key={i} className="flex flex-col items-center p-3 bg-surface-container-lowest rounded-xl border border-outline-variant">
                                     <span className="material-symbols-outlined text-primary mb-1">{fac.icon}</span>
                                     <span className="text-[10px] font-bold text-center text-on-surface-variant uppercase tracking-tighter">{fac.name}</span>
                                 </div>
                             ))}
                         </div>
                         <div className="flex items-center justify-between mt-auto border-t border-outline-variant/50 pt-6">
                            <div>
                                <span className="text-xs text-on-surface-variant">Total Price from</span>
                                <p className="text-3xl font-bold text-on-surface">{formatPrice(tourPackage.price)}</p>
                            </div>
                            <div className="flex gap-3">
                                <WishlistButton item={tourPackage} />
                                <Link 
                                    to="/checkout" 
                                    state={{ package: tourPackage }}
                                    className="editorial-gradient flex items-center justify-center text-white px-8 py-3 rounded-xl font-headline font-bold text-sm hover:shadow-lg transition-shadow"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                     </div>
                 </div>

                 {/* Bottom Details grid */}
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                     <div className="lg:col-span-2">
                        {/* Itinerary */}
                         <section className="mb-12 border border-outline-variant rounded-2xl bg-surface-container-lowest p-8 shadow-sm">
                             <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">Itinerary</h2>
                             <div className="space-y-6">
                                 {tourPackage.itinerary.map((item, i) => (
                                     <div key={i} className="flex gap-4">
                                         <div className="flex flex-col items-center">
                                             <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0">
                                                 {item.day}
                                             </div>
                                             {i < tourPackage.itinerary.length - 1 && (
                                                <div className="w-px h-full bg-outline-variant mt-2 mb-1"></div>
                                             )}
                                         </div>
                                         <div className="pb-4">
                                             <h3 className="font-bold text-lg text-on-surface mb-1">{item.title}</h3>
                                             <p className="text-on-surface-variant text-sm">{item.desc}</p>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                         </section>

                         <section className="mb-12">
                             <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">Route Map</h2>
                             <div className="h-[400px] rounded-2xl overflow-hidden shadow-sm bg-surface-container-low border border-outline-variant flex items-center justify-center">
                                  <InteractiveMap location={{ lat: -7.942493, lng: 112.953012, name: "Mount Bromo" }} zoom={8} />
                             </div>
                         </section>

                          <section>
                             <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">Traveler Reviews</h2>
                             <ReviewSection targetId={tourPackage.id} />
                         </section>
                     </div>

                     <div className="hidden lg:block">
                         {/* Sticky right sidebar can contain booking block if we want it scrolling */}
                     </div>
                 </div>

             </div>
        </div>
    );
}

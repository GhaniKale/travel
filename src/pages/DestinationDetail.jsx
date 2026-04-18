import { useParams, Link } from 'react-router-dom';
import { useCurrencyStore } from '../store/useCurrencyStore';
import InteractiveMap from '../components/map/InteractiveMap';
import ReviewSection from '../components/reviews/ReviewSection';
import WishlistButton from '../components/ui/WishlistButton';

export default function DestinationDetail() {
    const { id } = useParams();
    const { formatPrice } = useCurrencyStore();

    // Mock data for detail
    const destination = {
        id,
        name: id === 'bali' ? 'Bali' : (id === 'raja-ampat' ? 'Raja Ampat' : (id === 'lombok' ? 'Lombok' : id)),
        rating: 4.9,
        reviews: 128,
        price: 549,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqPQh5GxlzuauTdIvBlPHFOO8pgPcLfzhDtlHziYYMA2DncHIL5YfH5Sz0JeaLvf32dD28konpU9kbpUAqfHRZsve6hqzKyzcfqIOCPwMBbDuN6UYeNbissWPtJU6qcaHisnqvSBvuBD8U31U-HJ1LR5M0y-ZXO8P8vvItMtQzlGHnT_31q1KSTnTbK1pr7yspqNhdH2SuXj7o5gZipc-Suv62Hf8wsKVBavVuAbi2Yu8vjrX_cBam-Ctm6hiZnEI37sRtirNBwQ",
        description: "Immerse yourself in the cultural heartbeat of Indonesia. From Ubud's lush jungles and ancient temples to Uluwatu's dramatic cliffs and world-class surf breaks. Bali offers an unforgettable blend of spiritual awakening and tropical adventure.",
        highlights: ["Ubud Sacred Monkey Forest", "Uluwatu Temple Sunset", "Tegalalang Rice Terrace", "Seminyak Beach"],
    };

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="max-w-7xl mx-auto px-8">
                {/* Breadcrumb */}
                <div className="text-sm text-on-surface-variant flex gap-2 mb-6">
                    <Link to="/destinations" className="hover:text-primary">Destinations</Link>
                    <span>/</span>
                    <span className="text-on-surface font-bold capitalize">{destination.name}</span>
                </div>

                {/* Hero */}
                <div className="relative h-[60vh] rounded-3xl overflow-hidden mb-12 shadow-md">
                    <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                        <div className="text-white">
                            <h1 className="text-5xl font-headline font-bold mb-4">{destination.name}</h1>
                            <div className="flex items-center gap-4 text-white/90">
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-yellow-400" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                    <span className="font-bold">{destination.rating}</span>
                                    <span className="text-xs">({destination.reviews} reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-white/80 text-sm mb-1 uppercase tracking-widest">Starting from</p>
                            <p className="text-4xl font-headline font-bold text-white mb-4">{formatPrice(destination.price)}</p>
                            <Link 
                                to="/checkout" 
                                state={{ package: destination }} 
                                className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors"
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <section className="mb-12">
                            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">About {destination.name}</h2>
                            <p className="text-on-surface-variant leading-relaxed">{destination.description}</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">Highlights</h2>
                            <ul className="grid grid-cols-2 gap-4">
                                {destination.highlights.map((h, i) => (
                                    <li key={i} className="flex items-center gap-2 text-on-surface-variant">
                                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">Location</h2>
                            <div className="h-80 bg-surface-container-low rounded-xl border border-outline-variant flex items-center justify-center overflow-hidden">
                                <InteractiveMap location={{ lat: -8.409518, lng: 115.188919, name: destination.name }} zoom={9} />
                            </div>
                        </section>

                         <section>
                            <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">User Reviews</h2>
                            <ReviewSection targetId={destination.id} />
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant sticky top-24 shadow-sm">
                            <h3 className="font-headline font-bold text-xl mb-4">Plan Your Trip</h3>
                            <button className="w-full border border-primary text-primary font-bold py-3 rounded-xl mb-3 flex justify-center items-center gap-2 hover:bg-primary/5 transition-colors">
                                <span className="material-symbols-outlined rounded-full border border-primary p-0.5" style={{fontSize: '18px'}}>add</span>
                                Add to Itinerary
                            </button>
                            <WishlistButton item={destination} className="w-full bg-surface-container-low text-on-surface font-bold py-3 rounded-xl hover:bg-surface-container transition-colors !justify-center gap-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

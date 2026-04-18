import HeroSection from '../components/home/HeroSection';
import SearchSection from '../components/home/SearchSection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import TourPackages from '../components/home/TourPackages';
import PromoSection from '../components/home/PromoSection';
import TestimonialSection from '../components/home/TestimonialSection';
import TrustSection from '../components/home/TrustSection';

export default function Home() {
    return (
        <div className="home-page-wrapper">
            <HeroSection />
            <SearchSection />
            <FeaturedDestinations />
            <TourPackages />
            <PromoSection />
            <TestimonialSection />
            <TrustSection />
        </div>
    );
}

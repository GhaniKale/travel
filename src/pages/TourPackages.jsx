import PackagesHero from '../components/packages/PackagesHero';
import PackagesFilter from '../components/packages/PackagesFilter';
import PackagesGrid from '../components/packages/PackagesGrid';
import TrustIndicators from '../components/packages/TrustIndicators';

export default function TourPackages() {
    return (
        <div className="packages-page-wrapper">
            <PackagesHero />
            <PackagesFilter />
            <PackagesGrid />
            <TrustIndicators />
        </div>
    );
}

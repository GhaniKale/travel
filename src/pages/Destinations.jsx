import DestinationsHero from '../components/destinations/DestinationsHero';
import DestinationsGrid from '../components/destinations/DestinationsGrid';
import SearchBar from '../components/search/SearchBar';
import AdvancedFilter from '../components/search/AdvancedFilter';
import { useState } from 'react';

export default function Destinations() {
    const [filters, setFilters] = useState({});

    const handleSearch = (searchData) => {
        console.log("Searching with", searchData);
        // Implement filter logic on mock grid data here
    };

    const handleFilterChange = (filterData) => {
        setFilters(filterData);
        console.log("Filters updated", filterData);
        // Implement filter logic
    };

    return (
        <div className="destinations-page-wrapper bg-background min-h-screen pb-16">
            <DestinationsHero />
            
            <div className="-mt-8 relative z-10 mx-auto px-8 max-w-7xl mb-16">
                <SearchBar onSearch={handleSearch} />
            </div>

            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="hidden lg:block lg:col-span-1">
                    <AdvancedFilter onFilterChange={handleFilterChange} />
                </div>
                <div className="lg:col-span-3">
                    <DestinationsGrid filters={filters} />
                </div>
            </div>
        </div>
    );
}

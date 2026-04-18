import { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("Anywhere");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({ query, location });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row shadow-lg bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant p-2 md:p-3 w-full max-w-4xl mx-auto items-center">
            
            {/* Search Input */}
            <div className="flex-1 flex items-center px-4 py-2 w-full">
                <span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
                <input 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search destinations, packages..."
                    className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant outline-none font-medium"
                />
            </div>
            
            <div className="hidden md:block w-px h-8 bg-outline-variant mx-2"></div>
            
            {/* Location Select */}
            <div className="flex-1 flex items-center px-4 py-2 w-full md:border-t-0 border-t border-outline-variant md:mt-0 mt-2">
                <span className="material-symbols-outlined text-on-surface-variant mr-3">location_on</span>
                <select 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-transparent border-none focus:ring-0 text-on-surface outline-none font-medium appearance-none cursor-pointer"
                >
                    <option value="Anywhere">Anywhere in Indonesia</option>
                    <option value="Bali">Bali & Nusa Tenggara</option>
                    <option value="Java">Java Island</option>
                    <option value="Sumatra">Sumatra</option>
                    <option value="Papua">Papua & Maluku</option>
                </select>
                <span className="material-symbols-outlined text-on-surface-variant pointer-events-none">expand_more</span>
            </div>
            
            {/* Submit Button */}
            <button type="submit" className="md:ml-4 mt-2 md:mt-0 w-full md:w-auto bg-primary text-white font-bold px-8 py-3 rounded-2xl hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors">
                Explore
            </button>
        </form>
    );
}

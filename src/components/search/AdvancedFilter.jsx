import { useState } from 'react';

export default function AdvancedFilter({ onFilterChange }) {
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [rating, setRating] = useState(0);
    const [amenities, setAmenities] = useState([]);

    const handleAmenityChange = (amenity) => {
        const updated = amenities.includes(amenity)
            ? amenities.filter(a => a !== amenity)
            : [...amenities, amenity];
        setAmenities(updated);
        onFilterChange({ priceRange, rating, amenities: updated });
    };

    const handleRatingChange = (val) => {
        setRating(val);
        onFilterChange({ priceRange, rating: val, amenities });
    };

    return (
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant shadow-sm sticky top-24">
            <h3 className="font-headline font-bold text-lg mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">filter_alt</span>
                Filters
            </h3>

            {/* Price Range */}
            <div className="mb-6">
                <label className="block text-sm font-bold text-on-surface mb-3">Max Price: ${priceRange[1]}</label>
                <input 
                    type="range" 
                    min="100" 
                    max="5000" 
                    step="100"
                    value={priceRange[1]} 
                    onChange={(e) => {
                        const val = [0, parseInt(e.target.value)];
                        setPriceRange(val);
                        onFilterChange({ priceRange: val, rating, amenities });
                    }}
                    className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-on-surface-variant mt-2">
                    <span>$100</span>
                    <span>$5000+</span>
                </div>
            </div>

            {/* Rating */}
            <div className="mb-6 border-t border-outline-variant/30 pt-6">
                <label className="block text-sm font-bold text-on-surface mb-3">Minimum Rating</label>
                <div className="space-y-2">
                    {[5, 4, 3].map(star => (
                        <label key={star} className="flex items-center gap-3 cursor-pointer">
                            <input 
                                type="radio" 
                                name="rating" 
                                value={star} 
                                checked={rating === star}
                                onChange={() => handleRatingChange(star)}
                                className="text-primary focus:ring-primary w-4 h-4 border-outline-variant"
                            />
                            <div className="flex items-center">
                                {Array(star).fill(0).map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-yellow-500 text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                ))}
                                <span className="text-sm text-on-surface-variant ml-2">& up</span>
                            </div>
                        </label>
                    ))}
                    <button 
                        onClick={() => handleRatingChange(0)}
                        className="text-xs text-primary hover:underline mt-2 ml-7"
                    >
                        Clear rating
                    </button>
                </div>
            </div>

            {/* Amenities / Themes */}
            <div className="border-t border-outline-variant/30 pt-6">
                <label className="block text-sm font-bold text-on-surface mb-3">Themes & Amenities</label>
                <div className="space-y-3">
                    {['Adventure', 'Relaxation', 'Wildlife', 'Cultural', 'Luxury'].map(amenity => (
                        <label key={amenity} className="flex items-center gap-3 cursor-pointer">
                            <input 
                                type="checkbox" 
                                checked={amenities.includes(amenity)}
                                onChange={() => handleAmenityChange(amenity)}
                                className="rounded text-primary focus:ring-primary w-4 h-4 border-outline-variant"
                            />
                            <span className="text-sm text-on-surface-variant">{amenity}</span>
                        </label>
                    ))}
                </div>
            </div>
            
        </div>
    );
}

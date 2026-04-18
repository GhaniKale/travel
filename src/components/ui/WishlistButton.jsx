import { useWishlistStore } from '../../store/useWishlistStore';

export default function WishlistButton({ item, className = "" }) {
    const { isInWishlist, addItem, removeItem } = useWishlistStore();
    
    // Safety check just in case item doesn't have an id
    const itemId = item?.id;
    if (!itemId) return null;

    const isSaved = isInWishlist(itemId);

    const toggleWishlist = (e) => {
        e.preventDefault(); // Prevent navigating if this is inside a Link
        e.stopPropagation();
        
        if (isSaved) {
            removeItem(itemId);
        } else {
            addItem(item);
        }
    };

    return (
        <button 
            onClick={toggleWishlist}
            className={`w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-primary hover:bg-surface-container transition-colors ${className}`}
            title={isSaved ? "Remove from Wishlist" : "Save to Wishlist"}
        >
            <span 
                className={`material-symbols-outlined rounded-full p-2 ${isSaved ? 'text-red-500' : ''}`}
                style={{fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0"}}
            >
                favorite
            </span>
        </button>
    );
}

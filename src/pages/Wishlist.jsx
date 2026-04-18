import { useWishlistStore } from '../store/useWishlistStore';
import { Link } from 'react-router-dom';

export default function Wishlist() {
    const { items, removeItem, clearWishlist } = useWishlistStore();
    return (
        <div className="pt-24 pb-16 min-h-screen">
             <div className="max-w-7xl mx-auto px-8">
                 <h1 className="text-4xl font-headline font-bold mb-8 text-on-surface">Your Wishlist</h1>
                 <p className="text-on-surface-variant mb-12">Items you've saved for later will appear here.</p>
                 {items.length === 0 ? (
                     <div className="bg-surface-container-low rounded-2xl p-12 flex flex-col items-center justify-center border border-outline-variant/30 border-dashed">
                         <span className="material-symbols-outlined text-outline-variant mb-4" style={{fontSize: '48px'}}>favorite</span>
                         <h3 className="text-xl font-bold font-headline mb-2 text-on-surface-variant">Your wishlist is empty</h3>
                         <p className="text-on-surface-variant text-sm mb-6">Start exploring destinations and packages to save your favorites!</p>
                         <Link to="/destinations" className="bg-primary text-white px-6 py-2 rounded-xl font-bold hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors">Explore Now</Link>
                     </div>
                 ) : (
                     <div>
                         <div className="flex justify-end mb-4">
                             <button onClick={clearWishlist} className="text-red-500 font-bold text-sm hover:underline flex items-center gap-1">
                                 <span className="material-symbols-outlined text-sm">delete</span> Clear All
                             </button>
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                             {items.map(item => (
                                 <div key={item.id} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant group">
                                     <div className="relative h-48">
                                         <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                         <button 
                                            onClick={() => removeItem(item.id)}
                                            className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur text-white flex justify-center items-center rounded-full hover:bg-red-500 transition-colors"
                                            title="Remove"
                                         >
                                             <span className="material-symbols-outlined text-sm">close</span>
                                         </button>
                                     </div>
                                     <div className="p-5">
                                         <h3 className="font-headline font-bold text-lg text-on-surface mb-2">{item.name}</h3>
                                         <div className="flex justify-between items-center mt-4">
                                             <p className="font-bold text-xl">${item.price}</p>
                                             <Link to={`/destinations/${item.id}`} className="text-primary font-bold text-sm hover:underline">View Details</Link>
                                         </div>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </div>
                 )}
             </div>
        </div>
    )
}

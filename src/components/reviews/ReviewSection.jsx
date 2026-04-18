import { useState } from 'react';

export default function ReviewSection({ targetId }) {
    const [reviews, setReviews] = useState([
        { id: 1, author: "Sarah Jenkins", rating: 5, date: "2 days ago", content: "Absolutely breathtaking experience! The guides were incredibly knowledgeable." },
        { id: 2, author: "Michael Chen", rating: 4, date: "1 week ago", content: "Great trip overall. The accommodation was fantastic but the transport could be improved." }
    ]);
    
    const [newReview, setNewReview] = useState({ rating: 5, content: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newReview.content.trim()) return;
        
        setIsSubmitting(true);
        setTimeout(() => {
            setReviews([{
                id: Date.now(),
                author: "You (Guest)",
                rating: newReview.rating,
                date: "Just now",
                content: newReview.content
            }, ...reviews]);
            setNewReview({ rating: 5, content: "" });
            setIsSubmitting(false);
        }, 600);
    };

    return (
        <div className="space-y-8">
            {/* Review Form */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant">
                <h3 className="font-headline font-bold text-lg mb-4">Leave a Review</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-on-surface-variant mb-2">Rating</label>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button 
                                    key={star} 
                                    type="button"
                                    onClick={() => setNewReview({...newReview, rating: star})}
                                    className="p-1 focus:outline-none"
                                >
                                    <span 
                                        className={`material-symbols-outlined ${newReview.rating >= star ? 'text-yellow-500' : 'text-outline-variant'}`}
                                        style={{fontVariationSettings: "'FILL' 1", fontSize: "28px"}}
                                    >
                                        star
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-on-surface-variant mb-2">Your Experience</label>
                        <textarea 
                            value={newReview.content}
                            onChange={(e) => setNewReview({...newReview, content: e.target.value})}
                            className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-4 min-h-[120px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            placeholder="Share details of your own experience..."
                            required
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors disabled:opacity-50"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Review'}
                    </button>
                </form>
            </div>

            {/* Review List */}
            <div className="space-y-6 mt-8">
                <h3 className="font-headline font-bold text-xl">Recent Reviews</h3>
                {reviews.map(review => (
                    <div key={review.id} className="pb-6 border-b border-outline-variant/30 last:border-0">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-bold text-lg">
                                    {review.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-on-surface text-sm">{review.author}</h4>
                                    <span className="text-xs text-on-surface-variant">{review.date}</span>
                                </div>
                            </div>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span 
                                        key={star} 
                                        className={`material-symbols-outlined text-sm ${review.rating >= star ? 'text-yellow-500' : 'text-outline-variant'}`}
                                        style={{fontVariationSettings: "'FILL' 1"}}
                                    >
                                        star
                                    </span>
                                ))}
                            </div>
                        </div>
                        <p className="text-on-surface-variant text-sm pl-13 ml-13">
                            {review.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

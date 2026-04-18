import { Link } from 'react-router-dom';

export default function PromoSection() {
    return (
        <section className="py-24 px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden cta-gradient p-12 md:p-20">
                    <div className="relative z-10 max-w-xl">
                        <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 inline-block tracking-widest uppercase">Limited Time Offer</span>
                        <h2 className="font-headline font-extrabold text-4xl md:text-6xl text-white mb-6 leading-[1.1]">Summer Getaway Deals: Up to 35% Off</h2>
                        <p className="text-white/80 text-lg mb-10 leading-relaxed">Book any tour to Nusa Penida or Gili Islands before the end of the month and receive an exclusive luxury snorkeling kit and private dinner.</p>
                        <Link to="/packages" className="inline-flex justify-center items-center relative z-20 bg-white text-secondary px-10 py-4 md:py-4 rounded-xl font-headline font-bold text-lg shadow-xl shadow-black/10 hover:scale-105 active:scale-95 transition-transform min-h-[48px]">
                            Claim This Offer
                        </Link>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-30 md:opacity-100 mix-blend-overlay pointer-events-none">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjbbLwndOjPB6Pl9GS21AI8JitMUzEhvvcGH9koG4Hz8lQqqlEl5SE0AdZHJUlisVYi8pYj0d52mx040vLhP9paHIjhLXCroxl0_T71aFMy_noIyN3B5g1w7Id_JrR8ViwZ4LRQZzhUKbIJzEbkS_ersmkwDFciO5kRztT5yxv6-jGkydLrPWU6rh-EEKfumw3YnmJIRgiPhuy_jVLFvG-7JUdoQQOh75fe7_Q50nSDFbBhdqNnfnkZorJT6K-kyESvCQQ8TrlAA"/>
                    </div>
                    {/* Decorative Circle */}
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
}

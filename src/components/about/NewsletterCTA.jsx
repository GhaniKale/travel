export default function NewsletterCTA() {
    return (
        <section className="bg-primary py-20 px-8 text-center text-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-headline text-4xl font-bold mb-6">Ready to write your next chapter?</h2>
                <p className="text-primary-fixed-dim text-lg mb-10 opacity-90">Join our inner circle for exclusive editorial travel guides and early access to curated expeditions.</p>
                <form className="flex flex-col sm:flex-row gap-4 justify-center">
                    <input className="px-6 py-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white text-white placeholder:text-white/50 w-full sm:w-80" placeholder="Your email address" type="email"/>
                    <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary-fixed transition-colors" type="submit">Subscribe Now</button>
                </form>
            </div>
        </section>
    );
}

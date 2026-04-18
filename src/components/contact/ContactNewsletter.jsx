export default function ContactNewsletter() {
    return (
        <section className="max-w-7xl mx-auto px-8 mt-24 mb-20">
            <div className="bg-primary-container rounded-xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h3 className="font-headline text-3xl font-bold text-on-primary-container mb-2">Join the Explorer's Club</h3>
                    <p className="text-on-primary-container/80 max-w-md">Get exclusive deals and the latest travel stories delivered straight to your inbox.</p>
                </div>
                <div className="flex w-full md:w-auto gap-4">
                    <input className="flex-1 md:w-80 rounded-lg border-none bg-surface-container-lowest p-4" placeholder="Your email address" type="email" />
                    <button className="bg-on-primary-container text-primary-container px-8 py-4 rounded-lg font-bold">Join</button>
                </div>
            </div>
        </section>
    );
}

export default function TrustIndicators() {
    return (
        <section className="max-w-7xl mx-auto px-8 mt-24 mb-24">
            <div className="bg-surface-container rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-md">
                        <h2 className="font-headline text-3xl font-bold mb-4">Travel with Absolute Peace of Mind</h2>
                        <p className="text-on-surface-variant leading-relaxed mb-6">
                            Our booking system uses military-grade encryption and we offer 24/7 localized support for every traveler on the ground.
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
                                <span className="text-sm font-bold">Secure Payment</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>support_agent</span>
                                <span className="text-sm font-bold">Local Experts</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
                        <img alt="Visa" className="h-8 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCggqxAfavogSuQ6OOWiycnqLvspypyNNwLQmWY_Zs46zwSjpHye_q1hQxp6DDtjz_ZI2WzatWVcbSR_L7mR50wtqFt2nsxWM14UNi6p7utUBhtGBEZ90-EnPiAi64rikvM4jncA2Ijeh3glfMcN6RvAGWOx8wZUPJjbejW7Y22vlxTJM3Oz-j9Q3KPU1XySFxf0bkT5J4OEE4sE3ZeTWyZekZQan8lX7edgUYCLyz66LTa0MTtSrbvTsina7xhb2ekVHIE668HyA" />
                        <img alt="Mastercard" className="h-8 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnNkluHPTCLLX2xEmiMYb7FbLl1KEkWyOvPcUTWdxWtUg8F1MOnLhjuZpBpZxpK7Kirl4CzX8VJ5OejyuhPDuLxtBZ1_EDBYAAJB-uWBml8qVfEUiG6LIBpbjQw2iUmsJAdpb5fzAGUnr-YXaAP_Fij6eEItZ_wH3udNPdNrUSYo-kAwpo607Pc5ZxW9o5IC_pH-dft6eotuFs6cJXCU3ebt4pG_YcGieK0TGr223jjNPRaVtY5Zyy-cFG0T8p-vCdDzu4N0ekjw" />
                        <img alt="PayPal" className="h-8 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPqLWtlgcJSxB48xZ5bA0XKFr_hHeg4y5jDWA62CCvQipNbwjIYdkAs_mgNEJ4zA-Y0TIRg-QSO68viSDLeQfw_SQ9C-isL8JDf5hh5TKAJW9SZnJjnXgOqENzs9WPlB7KcuIWvbpYK77hdDdFBqyUgJmUpTLlzlaiLlnDGmRljYCY2FvfOGPB-jN_9M-qoWpm_7hIb4asilnAu1NYq_ir-M5mwd5FZBMR5wSjmhRsfb1MFCjS6CathOIsNS6zte4pI6Z08DViiA" />
                        <div className="flex items-center gap-2 border-l border-outline-variant pl-8">
                            <span className="material-symbols-outlined text-4xl text-tertiary">lock</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">SSL Encrypted</span>
                                <span className="text-xs font-bold">AES-256 Bit</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

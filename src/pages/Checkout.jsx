import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCurrencyStore } from '../store/useCurrencyStore';
import { useTranslation } from 'react-i18next';

export default function Checkout() {
    const navigate = useNavigate();
    const { formatPrice } = useCurrencyStore();
    const { t } = useTranslation();
    const location = useLocation();

    // Mock order detail
    const orderDetails = location.state?.package || {
        name: "Java Volcanic Expedition",
        price: 1250,
        guests: 1,
        date: "24 Aug 2026",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv3onJeMyuraAs6INkRTWwOU-6cGlLMNdyGEtcScpeTUpILzVNvSHpvi9B7jWsZDgmMv6Gu9dekHO81kDc9k8RdvzIx6fTsKMROTZlD87I8nHt5Npev1PTWvlDT_K7m_jGJp0Ineli0roPDNsLd7n_WG5WfFxGmWVenqBSrqVs-UfgDQ22veMqpAq65zwgAObWpm_zp_mFpfUe_vjnTGAp7mR--cDi1q6WPPP-mUVpt3GhhKULW2JG4vDg4bpw-GD-gNYm6k55kg"
    };

    const [showGatewayMs, setShowGatewayMs] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayNow = (e) => {
        e.preventDefault();
        setShowGatewayMs(true);
    };

    const handleSimulateSuccess = () => {
        setIsProcessing(true);
        setTimeout(() => {
            navigate('/success');
        }, 1500);
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-background">
            <div className="max-w-5xl mx-auto px-8">
                <h1 className="text-4xl font-headline font-bold mb-8">{t('checkout.title')}</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Form */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Guest Details */}
                        <section className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant shadow-sm">
                            <h2 className="text-2xl font-headline font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">person</span>
                                {t('checkout.guest_details')}
                            </h2>
                            <form className="space-y-4" onSubmit={handlePayNow}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-on-surface-variant mb-2">First Name</label>
                                        <input type="text" className="w-full border-b border-outline-variant focus:border-primary pb-2 bg-transparent outline-none" placeholder="John" required />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-on-surface-variant mb-2">Last Name</label>
                                        <input type="text" className="w-full border-b border-outline-variant focus:border-primary pb-2 bg-transparent outline-none" placeholder="Doe" required />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                    <div>
                                        <label className="block text-sm font-bold text-on-surface-variant mb-2">Email Address</label>
                                        <input type="email" className="w-full border-b border-outline-variant focus:border-primary pb-2 bg-transparent outline-none" placeholder="john@example.com" required />
                                        <p className="text-xs text-on-surface-variant mt-1">E-ticket will be sent here.</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-on-surface-variant mb-2">Phone Number (WhatsApp)</label>
                                        <input type="tel" className="w-full border-b border-outline-variant focus:border-primary pb-2 bg-transparent outline-none" placeholder="+62 812 3456 7890" required />
                                        <p className="text-xs text-on-surface-variant mt-1">For trip updates via WhatsApp.</p>
                                    </div>
                                </div>
                            </form>
                        </section>

                        {/* Payment Method */}
                        <section className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant shadow-sm">
                            <h2 className="text-2xl font-headline font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">credit_card</span>
                                {t('checkout.payment')}
                            </h2>
                            <div className="space-y-3">
                                <label className="flex items-center gap-4 p-4 border border-primary bg-primary/5 rounded-xl cursor-pointer">
                                    <input type="radio" name="payment" defaultChecked className="text-primary focus:ring-primary" />
                                    <div>
                                        <p className="font-bold">Virtual Account (Midtrans)</p>
                                        <p className="text-sm text-on-surface-variant">BCA, Mandiri, BNI, BRI</p>
                                    </div>
                                </label>
                                <label className="flex items-center gap-4 p-4 border border-outline-variant rounded-xl cursor-pointer opacity-60">
                                    <input type="radio" name="payment" disabled className="text-primary" />
                                    <div>
                                        <p className="font-bold">Credit Card</p>
                                        <p className="text-sm text-on-surface-variant">Visa, Mastercard (Maintenance)</p>
                                    </div>
                                </label>
                            </div>
                        </section>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div>
                        <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant shadow-sm sticky top-24">
                            <h3 className="font-headline font-bold text-xl mb-6">{t('checkout.summary')}</h3>
                            
                            <div className="flex gap-4 mb-6 pb-6 border-b border-outline-variant/50">
                                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                    <img src={orderDetails.image} alt="Trip" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm leading-tight text-on-surface mb-1">{orderDetails.name}</h4>
                                    <p className="text-xs text-on-surface-variant">{orderDetails.date}</p>
                                    <p className="text-xs text-on-surface-variant">{orderDetails.guests} Guest(s)</p>
                                </div>
                            </div>
                            
                            <div className="space-y-3 mb-6 border-b border-outline-variant/50 pb-6 text-sm">
                                <div className="flex justify-between text-on-surface-variant">
                                    <span>Subtotal</span>
                                    <span>{formatPrice(orderDetails.price)}</span>
                                </div>
                                <div className="flex justify-between text-on-surface-variant">
                                    <span>Service Fee (10%)</span>
                                    <span>{formatPrice(orderDetails.price * 0.1)}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-8">
                                <span className="font-bold">{t('common.total')}</span>
                                <span className="font-headline font-bold text-2xl text-primary">{formatPrice(orderDetails.price * 1.1)}</span>
                            </div>

                            <button onClick={handlePayNow} className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors text-lg shadow-md">
                                {t('checkout.pay_now')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Gateway Modal (Simulator) */}
            {showGatewayMs && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-sm rounded-[24px] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="bg-[#f2f4f8] p-5 text-center px-8 border-b border-gray-200">
                            <h3 className="font-bold text-gray-800 tracking-wide">Nusantara Travel</h3>
                            <p className="text-xs text-gray-500 mt-1">Payment via Midtrans Simulation</p>
                        </div>
                        {/* Body */}
                        <div className="p-8">
                            <div className="text-sm text-gray-500 text-center mb-1">Total Amount</div>
                            <div className="text-3xl font-bold text-center text-gray-900 mb-8">{formatPrice(orderDetails.price * 1.1)}</div>
                            
                            <p className="text-sm font-semibold text-gray-700 mb-4">Select Bank for VA</p>
                            <div className="space-y-3 mb-8">
                                <button className="w-full border border-gray-200 p-3 rounded-lg flex items-center justify-between hover:bg-blue-50 hover:border-blue-500 transition-colors bg-white shadow-sm">
                                    <span className="font-bold text-blue-800">BCA</span>
                                    <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                                </button>
                                <button className="w-full border border-gray-200 p-3 rounded-lg flex items-center justify-between hover:bg-blue-50 hover:border-blue-500 transition-colors bg-white shadow-sm">
                                    <span className="font-bold text-blue-600">Mandiri</span>
                                    <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                                </button>
                            </div>

                            <button 
                                onClick={handleSimulateSuccess}
                                disabled={isProcessing}
                                className="w-full bg-[#00a569] text-white font-bold py-3.5 rounded-lg disabled:opacity-50"
                            >
                                {isProcessing ? 'Processing Payment...' : 'Simulate Success'}
                            </button>
                            <button 
                                onClick={() => setShowGatewayMs(false)}
                                disabled={isProcessing}
                                className="w-full text-gray-500 text-sm font-bold py-3 mt-2 hover:text-gray-800 disabled:opacity-50"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

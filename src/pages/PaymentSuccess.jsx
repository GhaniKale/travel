import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function PaymentSuccess() {
    const { t } = useTranslation();

    return (
        <div className="pt-24 pb-16 min-h-screen bg-background flex items-center justify-center">
            <div className="max-w-md w-full bg-surface-container-lowest p-10 rounded-3xl border border-outline-variant shadow-lg text-center">
                <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined" style={{fontSize: "48px"}}>check_circle</span>
                </div>
                
                <h1 className="text-3xl font-headline font-bold text-on-surface mb-2">{t('common.success')}</h1>
                <p className="text-on-surface-variant mb-8">
                    Your payment was successful. We've sent the e-ticket and invoice to your Email. You will also receive travel updates via our automated WhatsApp bot.
                </p>

                <div className="bg-surface-container-low p-4 rounded-xl mb-8 flex text-left gap-4 items-center border border-outline-variant/50">
                    <span className="material-symbols-outlined text-green-600 p-2 bg-green-100 rounded-full">mark_email_read</span>
                    <div>
                        <p className="font-bold text-sm">Invoice Sent</p>
                        <p className="text-xs text-on-surface-variant">Check your inbox or spam folder.</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <Link to="/itinerary" className="block w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors">
                        Plan My Itinerary Now
                    </Link>
                    <Link to="/" className="block w-full border border-primary text-primary font-bold py-3.5 rounded-xl hover:bg-primary/5 transition-colors">
                        Return to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}

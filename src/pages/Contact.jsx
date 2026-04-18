import ContactHeroSection from '../components/contact/ContactHeroSection';
import ContactContentSection from '../components/contact/ContactContentSection';
import ContactNewsletter from '../components/contact/ContactNewsletter';

export default function Contact() {
    return (
        <div className="contact-page-wrapper">
            <ContactHeroSection />
            <ContactContentSection />
            <ContactNewsletter />
        </div>
    );
}

import AboutHeroSection from '../components/about/AboutHeroSection';
import MissionVisionSection from '../components/about/MissionVisionSection';
import WhyChooseUsSection from '../components/about/WhyChooseUsSection';
import TeamSection from '../components/about/TeamSection';
import ExperienceGallerySection from '../components/about/ExperienceGallerySection';
import NewsletterCTA from '../components/about/NewsletterCTA';

export default function About() {
    return (
        <div className="about-page-wrapper">
            <AboutHeroSection />
            <MissionVisionSection />
            <WhyChooseUsSection />
            <TeamSection />
            <ExperienceGallerySection />
            <NewsletterCTA />
        </div>
    );
}

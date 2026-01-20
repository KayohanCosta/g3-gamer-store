import { Header } from '@/components/Header';
import { HighlightBar } from '@/components/HighlightBar';
import { Hero } from '@/components/Hero';
import { FeaturesSection } from '@/components/FeaturesSection';
import { OffersSection } from '@/components/OffersSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { NewsletterSection } from '@/components/NewsletterSection';
import { BrandsSection } from '@/components/BrandsSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <HighlightBar />
        <OffersSection />
        <CategoriesSection />
        <NewsletterSection />
        <BrandsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

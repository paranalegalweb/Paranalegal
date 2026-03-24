import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <Hero />
      <About />
      <PracticeAreas />
      <Team />
      <Testimonials />
      <FAQ />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
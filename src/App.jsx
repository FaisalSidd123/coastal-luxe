import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showroom from './components/Showroom';
import WhyUs from './components/WhyUs';
import SocialFeed from './components/SocialFeed';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-sand text-charcoal antialiased overflow-x-hidden min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Showroom />
        <WhyUs />
        <SocialFeed />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
}

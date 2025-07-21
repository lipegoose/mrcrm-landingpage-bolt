import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import UseCases from './components/UseCases';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <UseCases />
      <Gallery />
      <Testimonials />
      <Pricing />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import { HeroSection } from './LandingPage/components/HeroSection';
import { KeyFeatures } from './LandingPage/components/KeyFeatures';
import { HowItWorks } from './LandingPage/components/HowItWorks';
import { AboutUs } from './LandingPage/components/About';
import { Experience } from './LandingPage/components/Experience';
import { EarlyAccess } from './LandingPage/components/EarlyAccess';
import { Footer } from './LandingPage/components/Footer';



export default function LandingPage() {
  return (
    <div className="scroll-smooth">
      <main>
       <HeroSection />
       <KeyFeatures />
       <HowItWorks />
       <AboutUs />
       <Experience />
       <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}

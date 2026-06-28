import React, { useCallback, useState } from 'react';
import LogoIntro from './components/LogoIntro.jsx';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import Programs from './components/Programs.jsx';
import Coach from './components/Coach.jsx';
import Dogs from './components/Dogs.jsx';
import Schedule from './components/Schedule.jsx';
import Merch from './components/Merch.jsx';
import Testimonials from './components/Testimonials.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const handleIntroDone = useCallback(() => setIntroDone(true), []);

  return (
    <div className="relative bg-ink text-pearl antialiased">
      <LogoIntro onComplete={handleIntroDone} />
      <Navigation revealed={introDone} />
      <main>
        <Hero revealed={introDone} />
        <Programs />
        <Coach />
        <Dogs />
        <Schedule />
        <Merch />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

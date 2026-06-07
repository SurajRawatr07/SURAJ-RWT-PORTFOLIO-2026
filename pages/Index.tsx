import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/cponents/MarqueeStrip';

const Index = me="relative min-h-screen overflow-x-hidden w-full">
      {/* Shutter Splash */}
      {!splashDone && <ShutterSplash onComplete={handleSplashComplete} />}

      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <Hero />
      <MarqueeStrip />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
importashDone, setSplashDone] = useState(false);
  const handter Splash */}
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

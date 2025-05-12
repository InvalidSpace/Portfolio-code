
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    setTimeout(() => {
      toast({
        title: "> Portfolio loaded",
        description: "Welcome to my digital space. Scroll to explore.",
        className: "font-mono bg-black border border-green-500/20",
      });
    }, 2000);
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative">
      <div className="noise" />
      <div className="scanline" />
      
      <Navbar />
      
      <AnimatePresence>
        {isLoaded && (
          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-grow retro-grid"
          >
            <Hero />
            <About />
            <Projects />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
      
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

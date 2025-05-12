
import React from 'react';
import { motion } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';
import { ArrowRight, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <span className="font-mono text-green-500 text-sm">
              <TypewriterComponent
                options={{
                strings: ['> Hello, World!', '> Welcome to my personal site!', '> thanks for cuming ??','> i know that this is preaty slick','> love the asthetic honestly','> i can write whatever i want honestly '],
                  autoStart: true,
                  loop: true,
                  random: true,
                }}
              />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-mono mb-6 text-green-500"
          >
            Welcome
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-8 font-mono max-w-2xl"
          >
            I'm a student still and this is my personal website.
            It's still simple, but I have plans to expand it over time.
            My GitHub doesn’t have many projects yet,
            but I'm always learning and experimenting — I hope to share more there soon too.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects" className="retro-button inline-flex items-center">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="https://github.com/InvalidSpace" 
              target="_blank" 
              rel="noopener noreferrer"
              className="retro-button inline-flex items-center"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
            <a href="#contact" className="retro-button inline-flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

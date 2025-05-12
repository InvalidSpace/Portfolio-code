
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    'Over 10 years of industry experience',
    'Team of certified business consultants',
    'Tailored solutions for businesses of all sizes',
    'Proven track record of successful client outcomes',
    'Continuous innovation and adaptation to market trends',
    'Commitment to ethical business practices',
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <img  className="rounded-3xl shadow-xl" alt="Business professionals in a meeting" src="https://images.unsplash.com/photo-1590098563652-6066ea95bfa7" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Nexus Solutions</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2013, Nexus Solutions has been at the forefront of business consulting and strategic development. We combine industry expertise with innovative approaches to help businesses navigate challenges and capitalize on opportunities.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our mission is to empower organizations through transformative solutions that drive sustainable growth and operational excellence. We believe in building long-term partnerships with our clients, becoming an extension of their team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

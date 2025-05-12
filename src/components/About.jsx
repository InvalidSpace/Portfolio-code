
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    'Javascript','python(its easy)','C/C++','C#',
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
              <img  className="rounded-3xl shadow-xl" alt="" src="" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              About me
            </h3>
            
            <p className="text-lg text-gray-400 dark:text-gray-300 mb-6">
            Hey! I’m a Computer Science student at the University of Minho. 
            I’m really into cybersecurity, servers, and data structures. 
            I love figuring out how systems work and how to make them faster and safer. 
            Always curious and learning something new!
           
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mb-6">
  
            </h3>
            <p className="text-lg text-gray-400 dark:text-gray-300 mb-8">
              
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

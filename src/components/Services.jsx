
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Lightbulb, 
  Users, 
  Globe, 
  TrendingUp, 
  Shield 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
      title: 'Business Analytics',
      description: 'Gain valuable insights from your data to make informed business decisions and identify growth opportunities.',
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-blue-600" />,
      title: 'Strategic Consulting',
      description: 'Expert guidance to develop effective business strategies that align with your goals and market conditions.',
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: 'Team Development',
      description: 'Build high-performing teams through specialized training programs and leadership development.',
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-600" />,
      title: 'Digital Transformation',
      description: 'Modernize your business operations with cutting-edge digital solutions and automation.',
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
      title: 'Growth Strategy',
      description: 'Develop and implement effective strategies to accelerate business growth and market expansion.',
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: 'Risk Management',
      description: 'Identify potential risks and develop mitigation strategies to protect your business interests.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Professional <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We offer a comprehensive range of business solutions designed to help your organization thrive in today's competitive landscape.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card card-hover"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

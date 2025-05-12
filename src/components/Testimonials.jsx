
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Nexus Solutions transformed our business operations completely. Their strategic insights helped us increase efficiency by 40% and expand into new markets.",
      author: "Sarah Johnson",
      position: "CEO, TechVision Inc.",
      rating: 5,
      image: "executive-woman"
    },
    {
      id: 2,
      content: "Working with the Nexus team was a game-changer for our company. Their data-driven approach to problem-solving delivered measurable results within months.",
      author: "Michael Chen",
      position: "Operations Director, Global Logistics",
      rating: 5,
      image: "business-man"
    },
    {
      id: 3,
      content: "The business analytics solutions provided by Nexus gave us unprecedented visibility into our operations. We've been able to make informed decisions that have significantly improved our bottom line.",
      author: "Amanda Rodriguez",
      position: "CFO, Innovative Retail Group",
      rating: 5,
      image: "finance-executive"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about working with Nexus Solutions.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="testimonial-card"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <img  className="w-full h-full object-cover" alt={`Portrait of ${testimonials[currentIndex].author}`} src="https://images.unsplash.com/photo-1544212408-c711b7c19b92" />
                </div>
                <div className="flex-1">
                  <div className="flex mb-3">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"{testimonials[currentIndex].content}"</p>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonials[currentIndex].author}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

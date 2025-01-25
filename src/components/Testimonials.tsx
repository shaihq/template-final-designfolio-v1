import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Working with Shai was an absolute pleasure. Their attention to detail and innovative approach to design challenges truly set them apart.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupX",
    content: "Shai's ability to balance user needs with business objectives resulted in a product that exceeded our expectations.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "DesignLab",
    content: "The design system Shai created has become the foundation of our product's visual language. Exceptional work!",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Engineering Lead",
    company: "InnovateTech",
    content: "Rare to find a designer who understands both design and development. Shai bridges that gap perfectly.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "UX Research Lead",
    company: "UserFirst",
    content: "Shai's research-driven approach to design challenges helped us create truly user-centered solutions.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Product Owner",
    company: "FinTech Solutions",
    content: "The impact of Shai's work on our user engagement metrics was remarkable. A true professional.",
  },
];

export const Testimonials = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleTestimonials = showMore ? testimonials : testimonials.slice(0, 4);

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">What People Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4 relative">
        <AnimatePresence mode="wait">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotateZ: index % 2 === 0 ? 2 : -2,
                transition: {
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1]
                }
              }}
              exit={{ 
                opacity: 0,
                y: 20,
                transition: {
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1]
                }
              }}
              className="bg-card border border-card-border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                transformOrigin: "center",
              }}
            >
              <p className="text-gray-400 mb-4">{testimonial.content}</p>
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {testimonials.length > 4 && (
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            variant="outline"
            onClick={() => setShowMore(!showMore)}
            className="mx-auto"
          >
            {showMore ? "Show Less" : "View More"}
          </Button>
        </motion.div>
      )}
    </section>
  );
};
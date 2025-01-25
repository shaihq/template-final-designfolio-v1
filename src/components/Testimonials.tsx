import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const visibleTestimonials = showMore ? testimonials : testimonials.slice(0, 4);

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= visibleTestimonials.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? visibleTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">What People Say</h2>
      
      <div className={`relative ${isMobile ? 'px-4' : 'grid grid-cols-2 gap-6 max-w-4xl mx-auto px-4'}`}>
        {isMobile ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-card-border p-6 rounded-lg shadow-lg"
              >
                <p className="text-gray-400 mb-4">{visibleTestimonials[currentIndex].content}</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <h4 className="font-semibold">{visibleTestimonials[currentIndex].name}</h4>
                    <p className="text-sm text-gray-400">
                      {visibleTestimonials[currentIndex].role} at {visibleTestimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20, rotateZ: -2 }}
                animate={{ opacity: 1, y: 0, rotateZ: index % 2 === 0 ? 2 : -2 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
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
        )}
      </div>

      {!isMobile && testimonials.length > 4 && (
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
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  expandedContent?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Working with Shai was an absolute pleasure. Their attention to detail and innovative approach to design challenges truly set them apart.",
    expandedContent: "The project was delivered ahead of schedule and exceeded all our expectations. Shai's ability to understand our business needs and translate them into beautiful, functional designs was remarkable. They brought fresh perspectives and creative solutions to every challenge we faced.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupX",
    content: "Shai's ability to balance user needs with business objectives resulted in a product that exceeded our expectations.",
    expandedContent: "Their strategic thinking and user-centered approach helped us achieve a 40% increase in user engagement. The redesigned interface not only looks beautiful but has significantly improved our conversion rates and user satisfaction scores.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "DesignLab",
    content: "The design system Shai created has become the foundation of our product's visual language. Exceptional work!",
    expandedContent: "The implementation of the design system reduced our design-to-development time by 60% and ensured consistency across all our products. Shai's documentation and training sessions made the adoption process smooth for our entire team.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Engineering Lead",
    company: "InnovateTech",
    content: "Rare to find a designer who understands both design and development. Shai bridges that gap perfectly.",
    expandedContent: "Their technical understanding made collaboration with our development team seamless. The component specifications were precise, and their ability to discuss technical constraints while maintaining design quality was invaluable.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "UX Research Lead",
    company: "UserFirst",
    content: "Shai's research-driven approach to design challenges helped us create truly user-centered solutions.",
    expandedContent: "The depth of user research and analysis they conducted provided invaluable insights that shaped our product strategy. Their ability to synthesize complex user feedback into actionable design decisions was impressive.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Product Owner",
    company: "FinTech Solutions",
    content: "The impact of Shai's work on our user engagement metrics was remarkable. A true professional.",
    expandedContent: "We saw a 45% increase in user retention within the first month after launch. Their understanding of financial products and user behavior in the fintech space brought unique value to our project.",
  },
];

export const Testimonials = () => {
  const [showMore, setShowMore] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
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

  const toggleExpand = (id: number) => {
    setExpandedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0)_100%)]" />
      
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">What People Say</h2>
        
        <div className={`relative ${isMobile ? '' : 'grid grid-cols-2 lg:grid-cols-3 gap-8'}`}>
          {isMobile ? (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-card p-8 rounded-xl shadow-lg"
                >
                  <div className="relative">
                    <p className="text-lg text-gray-400 italic mb-6">
                      "{visibleTestimonials[currentIndex].content}"
                      {!expandedCards.includes(visibleTestimonials[currentIndex].id) && visibleTestimonials[currentIndex].expandedContent && (
                        <button
                          onClick={() => toggleExpand(visibleTestimonials[currentIndex].id)}
                          className="ml-2 text-tertiary hover:text-tertiary/80 inline-flex items-center gap-1"
                        >
                          Read More<ChevronDown className="h-4 w-4" />
                        </button>
                      )}
                    </p>

                    <AnimatePresence>
                      {expandedCards.includes(visibleTestimonials[currentIndex].id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-lg text-gray-400 italic mb-6">
                            "{visibleTestimonials[currentIndex].expandedContent}"
                            <button
                              onClick={() => toggleExpand(visibleTestimonials[currentIndex].id)}
                              className="ml-2 text-tertiary hover:text-tertiary/80 inline-flex items-center gap-1"
                            >
                              Show Less<ChevronUp className="h-4 w-4" />
                            </button>
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center gap-4">
                      <div>
                        <h4 className="font-semibold text-lg">{visibleTestimonials[currentIndex].name}</h4>
                        <p className="text-sm text-gray-400">
                          {visibleTestimonials[currentIndex].role} at {visibleTestimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                  className="rounded-full hover:bg-tertiary hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="rounded-full hover:bg-tertiary hover:text-white transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="bg-card p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="relative">
                    <p className="text-lg text-gray-400 italic mb-6">
                      "{testimonial.content}"
                      {!expandedCards.includes(testimonial.id) && testimonial.expandedContent && (
                        <button
                          onClick={() => toggleExpand(testimonial.id)}
                          className="ml-2 text-tertiary hover:text-tertiary/80 inline-flex items-center gap-1"
                        >
                          Read More<ChevronDown className="h-4 w-4" />
                        </button>
                      )}
                    </p>

                    <AnimatePresence>
                      {expandedCards.includes(testimonial.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-lg text-gray-400 italic mb-6">
                            "{testimonial.expandedContent}"
                            <button
                              onClick={() => toggleExpand(testimonial.id)}
                              className="ml-2 text-tertiary hover:text-tertiary/80 inline-flex items-center gap-1"
                            >
                              Show Less<ChevronUp className="h-4 w-4" />
                            </button>
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center gap-4">
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {!isMobile && testimonials.length > 4 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="outline"
              onClick={() => setShowMore(!showMore)}
              className="hover:bg-tertiary hover:text-white transition-colors"
            >
              {showMore ? "Show Less" : "View More"}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

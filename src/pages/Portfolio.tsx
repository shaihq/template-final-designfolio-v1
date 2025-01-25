import { Mail, Github, Linkedin, Twitter, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [expandedExperiences, setExpandedExperiences] = useState<number[]>([]);

  const experiences = [
    {
      title: "Senior Product Designer",
      company: "Design Studio X",
      date: "Jan 2023 - Present",
      description: "Leading the design team in creating innovative digital products. Collaborated with cross-functional teams to deliver user-centered solutions that increased customer engagement by 45%.",
      expandedContent: "• Implemented design system that reduced design inconsistencies by 60%\n• Led workshops with stakeholders to align on product vision\n• Mentored junior designers and improved team productivity by 30%",
    },
    {
      title: "UX Designer",
      company: "Tech Innovations Inc",
      date: "Mar 2020 - Dec 2022",
      description: "Spearheaded the redesign of core products resulting in a 30% increase in user satisfaction. Mentored junior designers and established design system guidelines.",
      expandedContent: "• Conducted user research with over 200 participants\n• Created and maintained component library used across 5 products\n• Reduced design-to-development handoff time by 40%",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Agency",
      date: "Jun 2018 - Feb 2020",
      description: "Designed and delivered web and mobile applications for various clients across fintech and healthcare sectors. Implemented user research methodologies to inform design decisions.",
      expandedContent: "• Successfully delivered 12+ client projects on time and within budget\n• Increased client satisfaction scores by 25%\n• Introduced usability testing practices to the agency",
    },
  ];

  const testimonials = [
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

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= testimonials.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const toggleExpand = (id: number) => {
    setExpandedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  const toggleExpandExperience = (index: number) => {
    setExpandedExperiences(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-secondary-border py-6">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/lovable-uploads/328f31e4-c27c-4115-b548-fe916713e90a.png"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="text-foreground font-medium">Shai</h2>
                <p className="text-sm text-gray-400">
                  Product Designer
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Mail className="w-4 h-4" />
              E-mail
            </Button>
          </div>
        </div>
      </header>

      <div className="container max-w-3xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Product Designer with over 7+ years of experience.{" "}
            <span className="text-gray-400">
              A unicorn designer who can both design and code.
            </span>
          </h1>
          <p className="text-gray-400 mb-6">
            Designed experiences in sports, medtech, gig economy, fintech, and designed gamified learning experiences.
          </p>
        </section>

        {/* Experience Section */}
        <motion.section 
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-card border border-card-border p-6 rounded-lg hover:bg-card/80 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-tertiary font-medium">{exp.title}</span>
                    <p className="text-sm text-gray-400">{exp.company}</p>
                    <p className="text-gray-400 mt-2">
                      {exp.description}
                      {!expandedExperiences.includes(index) && (
                        <button
                          onClick={() => toggleExpandExperience(index)}
                          className="ml-1 text-foreground/80 hover:text-foreground inline-flex items-center gap-1"
                        >
                          View More<ChevronDown className="h-3 w-3" />
                        </button>
                      )}
                    </p>

                    <AnimatePresence>
                      {expandedExperiences.includes(index) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-400 mt-4 whitespace-pre-line">
                            {exp.expandedContent}
                            <button
                              onClick={() => toggleExpandExperience(index)}
                              className="ml-1 block mt-2 text-foreground/80 hover:text-foreground inline-flex items-center gap-1"
                            >
                              Show Less<ChevronUp className="h-3 w-3" />
                            </button>
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <span className="text-sm text-gray-400">{exp.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          className="mb-16 relative py-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">What People Say</h3>
          
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="min-h-[200px] mb-16">
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) => {
                  const isActive = index === currentIndex;
                  const zIndex = testimonials.length - Math.abs(currentIndex - index);
                  
                  return (
                    <motion.div
                      key={testimonial.id}
                      initial={{ 
                        scale: 0.9, 
                        opacity: 0,
                        y: 50,
                        rotateX: -15
                      }}
                      animate={{ 
                        scale: isActive ? 1 : 0.9,
                        opacity: isActive ? 1 : 0.5,
                        y: isActive ? 0 : 25,
                        rotateX: isActive ? 0 : -15,
                        zIndex: zIndex
                      }}
                      exit={{ 
                        scale: 0.9, 
                        opacity: 0,
                        y: -50,
                        rotateX: 15
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="absolute top-0 left-0 w-full perspective-1000"
                      style={{
                        zIndex: zIndex,
                        pointerEvents: isActive ? "auto" : "none",
                        transformStyle: "preserve-3d"
                      }}
                    >
                      <div className="bg-card border border-card-border p-6 rounded-lg shadow-lg">
                        <p className="text-gray-400">
                          {testimonial.content}
                          {!expandedCards.includes(testimonial.id) && (
                            <button
                              onClick={() => toggleExpand(testimonial.id)}
                              className="ml-1 text-foreground/80 hover:text-foreground inline-flex items-center gap-1"
                            >
                              View More<ChevronDown className="h-3 w-3" />
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
                              <p className="text-gray-400 mt-4">
                                {testimonial.expandedContent}
                                <button
                                  onClick={() => toggleExpand(testimonial.id)}
                                  className="ml-1 block mt-2 text-foreground/80 hover:text-foreground inline-flex items-center gap-1"
                                >
                                  Show Less<ChevronUp className="h-3 w-3" />
                                </button>
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className="flex items-center gap-2 mt-4">
                          <div className="flex-1">
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-gray-400">
                              {testimonial.role} at {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 absolute bottom-0 left-1/2 -translate-x-1/2">
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
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="pt-8 border-t border-secondary-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Chennai, IN</span>
              <span className="w-1 h-1 rounded-full bg-gray-400"></span>
              <span>3:30 AM</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;

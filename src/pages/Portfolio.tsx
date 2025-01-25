import { Mail, Github, Linkedin, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
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
  }
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      }
    },
  };

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
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
        {/* Hero Section */}
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
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          <div className="space-y-4">
            {[
              {
                role: "Senior Product Designer",
                company: "Design Studio X",
                period: "2023 - Present",
                description: "Leading the design team in creating innovative digital products. Collaborated with cross-functional teams to deliver user-centered solutions."
              },
              {
                role: "UX Designer",
                company: "Tech Innovations Inc",
                period: "2020 - 2022",
                description: "Spearheaded the redesign of core products resulting in a 30% increase in user satisfaction."
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-card border border-card-border p-6 rounded-lg hover:bg-card/80 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-tertiary font-medium">{exp.role}</span>
                    <p className="text-sm text-gray-400">{exp.company}</p>
                    <p className="text-gray-400 mt-2">{exp.description}</p>
                  </div>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "MyCaptain Course Platform",
                description: "Designed and developed the course overview page with interactive calendar and progress tracking features",
                image: "/lovable-uploads/583822bc-e5e5-4852-ac18-b8b612b58f88.png"
              },
              {
                title: "MyCaptain Profile Builder",
                description: "Built a responsive profile creation flow with multi-step form validation and real-time preview",
                image: "/lovable-uploads/a74665b6-a9d5-449a-8d53-68ecf5d99e46.png"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-card border border-card-border rounded-lg overflow-hidden hover:bg-card/80 transition-colors"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-medium mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-400">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-16 relative py-12"
        >
          <h3 className="text-2xl font-bold mb-12 text-center">What People Say</h3>
          
          <div className="relative h-[300px] w-full max-w-2xl mx-auto">
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
                      y: 50 
                    }}
                    animate={{ 
                      scale: isActive ? 1 : 0.9,
                      opacity: isActive ? 1 : 0.5,
                      y: isActive ? 0 : 25,
                      zIndex: zIndex
                    }}
                    exit={{ 
                      scale: 0.9, 
                      opacity: 0,
                      y: -50 
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    className="absolute top-0 left-0 w-full"
                    style={{
                      zIndex: zIndex,
                      pointerEvents: isActive ? "auto" : "none"
                    }}
                  >
                    <div className="bg-card border border-card-border p-6 rounded-lg shadow-lg">
                      <p className="text-gray-400 mb-4">{testimonial.content}</p>
                      <div className="flex items-center gap-2">
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

          <div className="flex justify-center gap-4 mt-8">
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
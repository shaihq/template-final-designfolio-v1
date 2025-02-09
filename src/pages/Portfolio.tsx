import { Mail, Github, Linkedin, Twitter, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Testimonials } from "@/components/Testimonials";
import { useRef, useState } from "react";
import { Figma, FileCode, Laptop } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Portfolio = () => {
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

  const textReveal = {
    initial: { y: 100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]  // Custom cubic-bezier for smooth reveal
      }
    }
  };

  const tools = [
    {
      name: "Figma",
      icon: Figma,
      link: "#"
    },
    {
      name: "VS Code",
      icon: FileCode,
      link: "#"
    },
    {
      name: "Mockup",
      icon: Laptop,
      link: "#"
    },
    {
      name: "Github",
      icon: Github,
      link: "#"
    }
  ];

  const skills = [
    "Product Design",
    "UI/UX",
    "Design Systems",
    "Prototyping",
    "User Research",
    "Frontend Development",
    "React",
    "TypeScript",
    "Figma",
    "Design Thinking",
  ];

  // Duplicate skills for smooth infinite scroll
  const scrollSkills = [...skills, ...skills];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 dark:block hidden">
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
        <div className="stars-large"></div>
      </div>
      <header className="border-b border-secondary-border py-6 bg-background transition-colors duration-300">
        <div className="container max-w-3xl mx-auto px-4">
          <motion.div 
            className="flex items-center justify-between"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div 
              className="flex items-center gap-3"
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }
                }
              }}
            >
              <img
                src="/lovable-uploads/328f31e4-c27c-4115-b548-fe916713e90a.png"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="text-foreground font-medium">Shai</h2>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }
                }
              }}
            >
              <ThemeToggle />
              <Button variant="outline" size="sm" className="gap-2">
                <Mail className="w-4 h-4" />
                E-mail
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </header>
      
      <div className="container max-w-3xl mx-auto px-4 relative">
        <div className="absolute left-0 top-0 w-px h-full bg-secondary-border" />
        <div className="absolute right-0 top-0 w-px h-full bg-secondary-border" />
        
        {/* Hero Section with Text Reveal */}
        <section className="py-12 border-b border-secondary-border overflow-hidden">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h1 
              className="text-4xl font-bold mb-4"
              variants={textReveal}
            >
              Product Designer with over 7+ years of experience.{" "}
              <span className="dark:text-gray-400 text-gray-600">
                A unicorn designer who can both design and code.
              </span>
            </motion.h1>
            <motion.p 
              className="dark:text-gray-400 text-gray-600 mb-6"
              variants={textReveal}
            >
              Designed experiences in sports, medtech, gig economy, fintech, and designed gamified learning experiences.
            </motion.p>

            {/* Skills Infinite Scroll */}
            <div className="w-full overflow-hidden relative py-4 before:absolute before:left-0 before:top-0 before:z-10 before:w-20 before:h-full before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-20 after:h-full after:bg-gradient-to-l after:from-background after:to-transparent">
              <motion.div 
                className="flex gap-4 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {scrollSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-card px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <motion.section 
          variants={container}
          initial="hidden"
          animate="show"
          className="py-12 border-b border-secondary-border"
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
                    <span className="text-primary-foreground dark:text-white font-medium">{exp.role}</span>
                    <p className="text-sm dark:text-gray-400 text-gray-600">{exp.company}</p>
                    <p className="dark:text-gray-400 text-gray-600 mt-2">{exp.description}</p>
                  </div>
                  <span className="text-sm dark:text-gray-400 text-gray-600">{exp.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          variants={container}
          initial="hidden"
          animate="show"
          className="py-12 border-b border-secondary-border"
        >
          <h3 className="text-2xl font-bold mb-8">Tools I Use</h3>
          <div className="grid grid-cols-2 gap-4">
            {tools.map((tool, index) => (
              <motion.a
                key={index}
                href={tool.link}
                variants={item}
                className="group bg-card border border-card-border p-6 rounded-lg hover:bg-card/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary rounded-lg">
                    <tool.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm">{tool.name}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          variants={container}
          initial="hidden"
          animate="show"
          className="py-12 border-b border-secondary-border"
        >
          <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
          <div className="flex flex-col gap-6">
            {[
              {
                title: "MyCaptain Course Platform",
                description: "Designed and developed the course overview page with interactive calendar and progress tracking features",
                image: "/lovable-uploads/583822bc-e5e5-4852-ac18-b8b612b58f88.png",
                link: "#"
              },
              {
                title: "MyCaptain Profile Builder",
                description: "Built a responsive profile creation flow with multi-step form validation and real-time preview",
                image: "/lovable-uploads/a74665b6-a9d5-449a-8d53-68ecf5d99e46.png",
                link: "#"
              }
            ].map((project, index) => {
              const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
              const cardRef = useRef<HTMLDivElement>(null);

              const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                if (!cardRef.current) return;
                const rect = cardRef.current.getBoundingClientRect();
                setMousePosition({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              };

              return (
                <motion.div
                  key={index}
                  variants={item}
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  className="group bg-card border border-card-border rounded-lg overflow-hidden hover:bg-card/80 transition-colors relative"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="w-[320px] h-[240px] shrink-0 overflow-hidden bg-secondary/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-between flex-grow">
                      <div>
                        <h4 className="text-2xl font-semibold mb-3">{project.title}</h4>
                        <p className="dark:text-gray-400 text-gray-600">{project.description}</p>
                      </div>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="self-start mt-6 group/btn relative overflow-hidden"
                        asChild
                      >
                        <a href={project.link} className="relative z-10">
                          <span className="absolute inset-0 group-hover/btn:bg-white/10 transition-colors duration-300" />
                          View Project
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,.1), transparent 40%)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;

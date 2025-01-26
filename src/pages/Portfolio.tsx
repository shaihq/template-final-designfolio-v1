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
    <div className="template-ds-min-h-screen template-ds-bg-background template-ds-text-foreground template-ds-transition-colors template-ds-duration-300">
      <header className="template-ds-border-b template-ds-border-secondary-border template-ds-py-6 template-ds-bg-background template-ds-transition-colors template-ds-duration-300">
        <div className="template-ds-container template-ds-max-w-3xl template-ds-mx-auto template-ds-px-4">
          <motion.div 
            className="template-ds-flex template-ds-items-center template-ds-justify-between"
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
              className="template-ds-flex template-ds-items-center template-ds-gap-3"
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
                className="template-ds-w-10 template-ds-h-10 template-ds-rounded-full"
              />
              <div>
                <h2 className="template-ds-text-foreground template-ds-font-medium">Shai</h2>
              </div>
            </motion.div>
            <motion.div
              className="template-ds-flex template-ds-items-center template-ds-gap-3"
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
              <Button variant="outline" size="sm" className="template-ds-gap-2">
                <Mail className="template-ds-w-4 template-ds-h-4" />
                E-mail
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </header>
      
      <div className="template-ds-container template-ds-max-w-3xl template-ds-mx-auto template-ds-px-4 template-ds-relative">
        <div className="template-ds-absolute template-ds-left-0 template-ds-top-0 template-ds-w-px template-ds-h-full template-ds-bg-secondary-border" />
        <div className="template-ds-absolute template-ds-right-0 template-ds-top-0 template-ds-w-px template-ds-h-full template-ds-bg-secondary-border" />
        
        {/* Hero Section with Text Reveal */}
        <section className="template-ds-py-12 template-ds-border-b template-ds-border-secondary-border template-ds-overflow-hidden">
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
              className="template-ds-text-4xl template-ds-font-bold template-ds-mb-4"
              variants={textReveal}
            >
              Product Designer with over 7+ years of experience.{" "}
              <span className="template-ds-dark:text-gray-400 template-ds-text-gray-600">
                A unicorn designer who can both design and code.
              </span>
            </motion.h1>
            <motion.p 
              className="template-ds-dark:text-gray-400 template-ds-text-gray-600 template-ds-mb-6"
              variants={textReveal}
            >
              Designed experiences in sports, medtech, gig economy, fintech, and designed gamified learning experiences.
            </motion.p>

            {/* Skills Infinite Scroll */}
            <div className="template-ds-w-full template-ds-overflow-hidden template-ds-relative template-ds-py-4 template-ds-before:template-ds-absolute template-ds-before:left-0 template-ds-before:top-0 template-ds-before:z-10 template-ds-before:w-20 template-ds-before:h-full template-ds-before:bg-gradient-to-r template-ds-before:from-background template-ds-before:to-transparent template-ds-after:template-ds-absolute template-ds-after:right-0 template-ds-after:top-0 template-ds-after:z-10 template-ds-after:w-20 template-ds-after:h-full template-ds-after:bg-gradient-to-l template-ds-after:from-background template-ds-after:to-transparent">
              <motion.div 
                className="template-ds-flex template-ds-gap-4 template-ds-whitespace-nowrap"
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
                    className="template-ds-bg-card template-ds-px-4 template-ds-py-2 template-ds-rounded-full template-ds-text-sm"
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
          className="template-ds-py-12 template-ds-border-b template-ds-border-secondary-border"
        >
          <h3 className="template-ds-text-2xl template-ds-font-bold template-ds-mb-6">Experience</h3>
          <div className="template-ds-space-y-4">
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
                className="template-ds-bg-card template-ds-border template-ds-border-card-border template-ds-p-6 template-ds-rounded-lg template-ds-hover:bg-card/80 template-ds-transition-colors"
              >
                <div className="template-ds-flex template-ds-justify-between template-ds-items-start">
                  <div>
                    <span className="template-ds-text-primary-foreground template-ds-dark:text-white template-ds-font-medium">{exp.role}</span>
                    <p className="template-ds-text-sm template-ds-dark:text-gray-400 template-ds-text-gray-600">{exp.company}</p>
                    <p className="template-ds-dark:text-gray-400 template-ds-text-gray-600 template-ds-mt-2">{exp.description}</p>
                  </div>
                  <span className="template-ds-text-sm template-ds-dark:text-gray-400 template-ds-text-gray-600">{exp.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          variants={container}
          initial="hidden"
          animate="show"
          className="template-ds-py-12 template-ds-border-b template-ds-border-secondary-border"
        >
          <h3 className="template-ds-text-2xl template-ds-font-bold template-ds-mb-8">Tools I Use</h3>
          <div className="template-ds-grid template-ds-grid-cols-2 template-ds-gap-4">
            {tools.map((tool, index) => (
              <motion.a
                key={index}
                href={tool.link}
                variants={item}
                className="template-ds-group template-ds-bg-card template-ds-border template-ds-border-card-border template-ds-p-6 template-ds-rounded-lg template-ds-hover:bg-card/80 template-ds-transition-colors"
              >
                <div className="template-ds-flex template-ds-items-center template-ds-gap-3">
                  <div className="template-ds-p-2 template-ds-bg-secondary template-ds-rounded-lg">
                    <tool.icon className="template-ds-w-5 template-ds-h-5" />
                  </div>
                  <span className="template-ds-text-sm">{tool.name}</span>
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
          className="template-ds-py-12 template-ds-border-b template-ds-border-secondary-border"
        >
          <h3 className="template-ds-text-3xl template-ds-font-bold template-ds-mb-12">Featured Projects</h3>
          <div className="template-ds-flex template-ds-flex-col template-ds-gap-6">
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
                  className="template-ds-group template-ds-bg-card template-ds-border template-ds-border-card-border template-ds-rounded-lg template-ds-overflow-hidden template-ds-hover:bg-card/80 template-ds-transition-colors template-ds-relative"
                >
                  <div className="template-ds-flex template-ds-flex-col template-ds-md:flex-row">
                    <div className="template-ds-w-[320px] template-ds-h-[240px] template-ds-shrink-0 template-ds-overflow-hidden template-ds-bg-secondary/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="template-ds-w-full template-ds-h-full template-ds-object-cover template-ds-group-hover:scale-105 template-ds-transition-transform template-ds-duration-300"
                      />
                    </div>
                    <div className="template-ds-p-8 template-ds-flex template-ds-flex-col template-ds-justify-between template-ds-flex-grow">
                      <div>
                        <h4 className="template-ds-text-2xl template-ds-font-semibold template-ds-mb-3">{project.title}</h4>
                        <p className="template-ds-dark:text-gray-400 template-ds-text-gray-600">{project.description}</p>
                      </div>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="template-ds-self-start template-ds-mt-6 template-ds-group/btn template-ds-relative template-ds-overflow-hidden"
                        asChild
                      >
                        <a href={project.link} className="template-ds-relative template-ds-z-10">
                          <span className="template-ds-absolute template-ds-inset-0 template-ds-group-hover/btn:bg-white/10 template-ds-transition-colors template-ds-duration-300" />
                          View Project
                          <ArrowRight className="template-ds-w-4 template-ds-h-4 template-ds-ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div
                    className="template-ds-pointer-events-none template-ds-absolute template-ds--inset-px template-ds-opacity-0 template-ds-group-hover:opacity-100 template-ds-transition-opacity template-ds-duration-300"
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

import { Mail, Github, Linkedin, Twitter, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { Testimonials } from "@/components/Testimonials";
import { useRef } from "react";
import { Figma, FileCode, Laptop } from "lucide-react";
import { Footer } from "@/components/Footer";

const Portfolio = () => {
  const headerRef = useRef(null);
  const experienceRef = useRef(null);
  const toolsRef = useRef(null);
  const projectsRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true });
  const experienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  const toolsInView = useInView(toolsRef, { once: true, margin: "-100px" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-secondary-border py-6">
        <div className="container max-w-3xl mx-auto px-4">
          <motion.div 
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex items-center justify-between"
          >
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-3"
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
            <motion.div variants={fadeInUp}>
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
        
        {/* Experience Section */}
        <motion.section 
          ref={experienceRef}
          initial="hidden"
          animate={experienceInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="py-12 border-b border-secondary-border"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-bold mb-6"
          >
            Experience
          </motion.h3>
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
                variants={fadeInUp}
                className="bg-card border border-card-border p-6 rounded-lg hover:bg-card/80 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-white font-medium">{exp.role}</span>
                    <p className="text-sm text-gray-400">{exp.company}</p>
                    <p className="text-gray-400 mt-2">{exp.description}</p>
                  </div>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tools Section */}
        <motion.section 
          ref={toolsRef}
          initial="hidden"
          animate={toolsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="py-12 border-b border-secondary-border"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-bold mb-8"
          >
            Tools I Use
          </motion.h3>
          <div className="grid grid-cols-2 gap-4">
            {[
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
            ].map((tool, index) => (
              <motion.a
                key={index}
                variants={fadeInUp}
                href={tool.link}
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
          ref={projectsRef}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="py-12 border-b border-secondary-border"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-3xl font-bold mb-12"
          >
            Featured Projects
          </motion.h3>
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
                  variants={fadeInUp}
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
                        <p className="text-gray-400">{project.description}</p>
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

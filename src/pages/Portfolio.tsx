import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section with Border */}
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

      {/* Main Content with Side Borders and Section Dividers */}
      <div className="container max-w-3xl mx-auto px-4">
        <div className="relative">
          {/* Left Border */}
          <div className="absolute left-0 top-0 w-px h-full bg-secondary-border" />
          {/* Right Border */}
          <div className="absolute right-0 top-0 w-px h-full bg-secondary-border" />
          
          {/* Content Sections */}
          <div className="relative">
            {/* Hero Section */}
            <section className="py-12 border-b border-secondary-border">
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
              className="py-12 border-b border-secondary-border"
            >
              <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
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
                    className="bg-card border border-card-border rounded-lg overflow-hidden"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-secondary/50">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                      <p className="text-gray-400">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Footer */}
            <footer className="py-8">
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
      </div>
    </div>
  );
};

export default Portfolio;
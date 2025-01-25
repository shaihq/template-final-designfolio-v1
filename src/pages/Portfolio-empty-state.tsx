import { Mail, Github, Linkedin, Twitter, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

const PortfolioEmptyState = () => {
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
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-secondary-border py-6">
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
              <div className="w-10 h-10 rounded-full bg-secondary animate-pulse" />
              <div>
                <h2 className="text-foreground font-medium">Your Name</h2>
              </div>
            </motion.div>
            <motion.div
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
              Add your headline here.{" "}
              <span className="text-gray-400">
                And a brief description of what you do.
              </span>
            </motion.h1>
            <motion.p 
              className="text-gray-400 mb-6"
              variants={textReveal}
            >
              This is where you can add more details about your experience and expertise.
            </motion.p>
          </motion.div>
        </section>

        <motion.section 
          variants={container}
          initial="hidden"
          animate="show"
          className="py-12 border-b border-secondary-border"
        >
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          <div className="space-y-4">
            {[1, 2].map((_, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-card border border-card-border p-6 rounded-lg hover:bg-card/80 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="h-6 w-32 bg-secondary rounded animate-pulse mb-2" />
                    <div className="h-4 w-24 bg-secondary/50 rounded animate-pulse mb-4" />
                    <div className="h-4 w-64 bg-secondary/30 rounded animate-pulse" />
                  </div>
                  <div className="h-4 w-20 bg-secondary/30 rounded animate-pulse" />
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
          <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
          <div className="flex flex-col gap-6">
            {[1, 2].map((_, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-card border border-card-border rounded-lg overflow-hidden hover:bg-card/80 transition-colors"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-[320px] h-[240px] bg-secondary animate-pulse" />
                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="h-8 w-48 bg-secondary rounded animate-pulse mb-4" />
                      <div className="h-4 w-64 bg-secondary/50 rounded animate-pulse" />
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="self-start mt-6"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <Footer />
      </div>
    </div>
  );
};

export default PortfolioEmptyState;
import { Button } from "@/components/ui/button";
import { Download, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <footer className="py-16 border-t border-secondary-border">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center gap-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground max-w-2xl text-center leading-tight">
            Let's work together
          </h2>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Download className="mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex items-center gap-8 text-gray-400">
            <a
              href="https://instagram.com"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
              <span className="sr-only">Github</span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
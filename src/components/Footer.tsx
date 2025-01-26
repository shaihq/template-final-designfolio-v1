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
    <footer className="template-ds-py-16 template-ds-border-t template-ds-border-secondary-border">
      <div className="template-ds-container template-ds-max-w-3xl template-ds-mx-auto template-ds-px-4">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="template-ds-flex template-ds-flex-col template-ds-items-center template-ds-gap-8"
        >
          <h2 className="template-ds-text-4xl sm:template-ds-text-5xl template-ds-font-bold template-ds-text-foreground template-ds-max-w-2xl template-ds-text-center template-ds-leading-tight">
            Let's work together
          </h2>
          
          <div className="template-ds-flex template-ds-flex-wrap template-ds-gap-4 template-ds-justify-center">
            <Button size="lg" variant="outline" className="template-ds-text-lg template-ds-px-8">
              <Download className="template-ds-mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="template-ds-flex template-ds-items-center template-ds-gap-8 template-ds-text-foreground/60 dark:template-ds-text-gray-400">
            <a
              href="https://instagram.com"
              className="hover:template-ds-text-foreground dark:hover:template-ds-text-white template-ds-transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} />
              <span className="template-ds-sr-only">Instagram</span>
            </a>
            <a
              href="https://twitter.com"
              className="hover:template-ds-text-foreground dark:hover:template-ds-text-white template-ds-transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={24} />
              <span className="template-ds-sr-only">Twitter</span>
            </a>
            <a
              href="https://linkedin.com"
              className="hover:template-ds-text-foreground dark:hover:template-ds-text-white template-ds-transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
              <span className="template-ds-sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              className="hover:template-ds-text-foreground dark:hover:template-ds-text-white template-ds-transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
              <span className="template-ds-sr-only">Github</span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
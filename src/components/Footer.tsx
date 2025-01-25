import { Button } from "@/components/ui/button";
import { Download, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

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
    <motion.footer 
      ref={footerRef}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="py-16 border-t border-gray-800"
    >
      <div className="container max-w-3xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <motion.h2 
            variants={item}
            className="text-4xl sm:text-5xl font-bold text-foreground max-w-2xl text-center leading-tight"
          >
            Let's work together
          </motion.h2>
          
          <motion.div 
            variants={item}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Download className="mr-2" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div 
            variants={item}
            className="flex items-center gap-8 text-gray-400"
          >
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
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};
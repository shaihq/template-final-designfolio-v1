import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const SideProjects = () => {
  const projects = [
    { name: "White Illustration Pack", icon: "🎨" },
    { name: "500+ Gradient Pack", icon: "🎯" },
    { name: "Case Study Template", icon: "📝" },
    { name: "Clean Portfolio Template", icon: "🎨" },
  ];

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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="template-ds-py-16">
      <h2 className="template-ds-text-2xl template-ds-font-bold template-ds-mb-8">Side Projects</h2>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="template-ds-space-y-4"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="template-ds-bg-card template-ds-p-4 template-ds-rounded-lg template-ds-flex template-ds-items-center template-ds-justify-between hover:template-ds-bg-card/80 template-ds-transition-colors template-ds-cursor-pointer template-ds-shadow-[0px_0px_16.4px_0px_rgba(0,0,0,0.02)]"
          >
            <div className="template-ds-flex template-ds-items-center template-ds-gap-3">
              <span className="template-ds-text-2xl">{project.icon}</span>
              <span>{project.name}</span>
            </div>
            <span className="template-ds-text-gray-400">→</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
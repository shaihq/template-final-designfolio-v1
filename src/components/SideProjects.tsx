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
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Side Projects</h2>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="space-y-4"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-card p-4 rounded-lg flex items-center justify-between hover:bg-card/80 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{project.icon}</span>
              <span>{project.name}</span>
            </div>
            <span className="text-gray-400">→</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
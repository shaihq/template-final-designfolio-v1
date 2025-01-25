import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const ToolStack = () => {
  const tools = [
    { name: "Mockup (iPad)", icon: "📱" },
    { name: "Arc Browser", icon: "🌐" },
    { name: "Notion", icon: "📝" },
    { name: "Framer", icon: "🎨" },
    { name: "Figma", icon: "✏️" },
    { name: "Midbin", icon: "🤖" },
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
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Tool Stack</h2>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-2 gap-4"
      >
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-card p-4 rounded-lg flex items-center gap-3 hover:bg-card/80 transition-colors"
          >
            <span className="text-2xl">{tool.icon}</span>
            <span>{tool.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
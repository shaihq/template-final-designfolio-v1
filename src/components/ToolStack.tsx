import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Figma, Framer, Slack, Layout } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const ToolStack = () => {
  const isMobile = useIsMobile();
  
  const tools = [
    { 
      name: "Figma", 
      icon: Figma, 
      description: "Design Tool",
      link: "#" 
    },
    { 
      name: "Framer", 
      icon: Framer, 
      description: "No-code Development",
      link: "#" 
    },
    { 
      name: "Slack", 
      icon: Slack, 
      description: "Communication",
      link: "#" 
    },
    { 
      name: "Miro", 
      icon: Layout, 
      description: "Workshops",
      link: "#" 
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
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
      <h2 className="text-2xl font-bold mb-8">Stack</h2>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
      >
        {tools.map((Tool, index) => (
          <motion.a
            key={index}
            href={Tool.link}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="group block"
          >
            <div className="bg-card border border-card-border p-6 rounded-lg flex items-start gap-4 transition-colors hover:bg-card/80 h-full">
              <div className="bg-secondary p-3 rounded-lg shrink-0">
                <Tool.icon className="size-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <h3 className="font-medium text-foreground break-words">{Tool.name}</h3>
                <p className="text-sm text-gray-400 mt-1 break-words">{Tool.description}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};
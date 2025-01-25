import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Figma, Laptop, Globe, FileCode, Pencil } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const ToolStack = () => {
  const isMobile = useIsMobile();
  
  const tools = [
    { name: "Github", icon: Github, link: "#" },
    { name: "Figma", icon: Figma, link: "#" },
    { name: "Mockup", icon: Laptop, link: "#" },
    { name: "Arc Browser", icon: Globe, link: "#" },
    { name: "Code Editor", icon: FileCode, link: "#" },
    { name: "Design", icon: Pencil, link: "#" },
  ];

  const scrollTools = [...tools, ...tools, ...tools];

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

  const scrollAnimation = {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Tool Stack</h2>
      </div>
      {isMobile ? (
        <div className="relative w-full overflow-hidden">
          <motion.div 
            className="flex gap-4"
            animate={scrollAnimation}
          >
            {scrollTools.map((Tool, index) => (
              <a
                key={index}
                href={Tool.link}
                className="flex flex-col items-center gap-2 min-w-[100px] first:ml-4 last:mr-4"
              >
                <div className="bg-card p-4 rounded-2xl flex items-center justify-center transition-colors hover:bg-card/80">
                  <Tool.icon className="size-8" />
                </div>
                <span className="text-sm whitespace-nowrap">
                  {Tool.name}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      ) : (
        <div className="container max-w-3xl mx-auto px-4">
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="flex justify-center gap-4"
          >
            {tools.map((Tool, index) => (
              <motion.a
                key={index}
                href={Tool.link}
                variants={item}
                whileHover={{ scale: 1.2, y: -8 }}
                className="relative group"
              >
                <div className="bg-card p-4 rounded-2xl flex items-center justify-center transition-colors hover:bg-card/80">
                  <Tool.icon className="size-8" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm whitespace-nowrap">
                  {Tool.name}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
};
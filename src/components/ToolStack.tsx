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

  // Duplicate tools multiple times for smoother infinite scroll
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
    <section className="template-ds-py-16 template-ds-overflow-hidden">
      <h2 className="template-ds-text-2xl template-ds-font-bold template-ds-mb-8 template-ds-text-center">Tool Stack</h2>
      {isMobile ? (
        <div className="template-ds-relative template-ds-w-full">
          <motion.div 
            className="template-ds-flex template-ds-gap-4 template-ds-px-4"
            animate={scrollAnimation}
          >
            {scrollTools.map((Tool, index) => (
              <a
                key={index}
                href={Tool.link}
                className="template-ds-flex template-ds-flex-col template-ds-items-center template-ds-gap-2 template-ds-min-w-[100px]"
              >
                <div className="template-ds-bg-card template-ds-p-4 template-ds-rounded-2xl template-ds-flex template-ds-items-center template-ds-justify-center template-ds-transition-colors hover:template-ds-bg-card/80">
                  <Tool.icon className="template-ds-size-8" />
                </div>
                <span className="template-ds-text-sm template-ds-whitespace-nowrap">
                  {Tool.name}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      ) : (
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="template-ds-flex template-ds-justify-center template-ds-gap-4"
        >
          {tools.map((Tool, index) => (
            <motion.a
              key={index}
              href={Tool.link}
              variants={item}
              whileHover={{ scale: 1.2, y: -8 }}
              className="template-ds-relative template-ds-group"
            >
              <div className="template-ds-bg-card template-ds-p-4 template-ds-rounded-2xl template-ds-flex template-ds-items-center template-ds-justify-center template-ds-transition-colors hover:template-ds-bg-card/80">
                <Tool.icon className="template-ds-size-8" />
              </div>
              <div className="template-ds-absolute template-ds--bottom-6 template-ds-left-1/2 template-ds--translate-x-1/2 template-ds-opacity-0 group-hover:template-ds-opacity-100 template-ds-transition-opacity template-ds-text-sm template-ds-whitespace-nowrap">
                {Tool.name}
              </div>
            </motion.a>
          ))}
        </motion.div>
      )}
    </section>
  );
};
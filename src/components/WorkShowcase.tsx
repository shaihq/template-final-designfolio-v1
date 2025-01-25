import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

export const WorkShowcase = () => {
  const projects = [
    {
      title: "MyCaptain Course Platform",
      description: "Designed and developed the course overview page with interactive calendar, project submission, and progress tracking features",
      image: "/lovable-uploads/583822bc-e5e5-4852-ac18-b8b612b58f88.png",
      link: "#",
      badge: "NEW",
      status: "SOON",
    },
    {
      title: "MyCaptain Profile Builder",
      description: "Built a responsive profile creation flow with multi-step form validation and real-time preview",
      image: "/lovable-uploads/a74665b6-a9d5-449a-8d53-68ecf5d99e46.png",
      link: "#",
      badge: "NEW",
      status: "LIVE",
    },
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

  const ImageWithPreload = ({ src, alt }: { src: string; alt: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          {!isLoaded && (
            <motion.div
              key="loading"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-secondary/50"
            />
          )}
        </AnimatePresence>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center rounded-lg group-hover:scale-105 transition-transform duration-300"
          loading="eager"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    );
  };

  return (
    <section className="pt-0 pb-16">
      <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group relative bg-card hover:bg-card/80 border border-card-border rounded-lg overflow-hidden transition-colors"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-medium">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-yellow-400/80">
                    {project.status}
                  </span>
                  {project.badge && (
                    <span className="bg-red-500/20 text-red-500 text-[10px] px-2 py-0.5 rounded-full font-mono">
                      {project.badge}
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="aspect-video rounded-lg overflow-hidden">
                <ImageWithPreload src={project.image} alt={project.title} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
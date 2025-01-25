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
    },
    {
      title: "MyCaptain Profile Builder",
      description: "Built a responsive profile creation flow with multi-step form validation and real-time preview",
      image: "/lovable-uploads/a74665b6-a9d5-449a-8d53-68ecf5d99e46.png",
      link: "#",
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
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="eager"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    );
  };

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group rounded-3xl bg-card overflow-hidden relative before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-transparent before:via-foreground/10 before:to-transparent before:rounded-3xl before:opacity-0 before:transition-opacity hover:before:opacity-100"
          >
            <div className="aspect-[4/3] overflow-hidden bg-secondary/50">
              <ImageWithPreload src={project.image} alt={project.title} />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3 leading-tight">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-flex items-center text-lg text-muted-foreground hover:text-primary transition-colors"
              >
                View project <ArrowUpRight className="ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
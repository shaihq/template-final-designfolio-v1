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
              className="absolute inset-0 bg-secondary/50 animate-pulse"
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

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    return (
      <motion.div
        variants={item}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group rounded-3xl bg-card overflow-hidden relative"
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,.1), transparent 40%)`,
          }}
        />
        <div className="aspect-[4/3] overflow-hidden bg-secondary/50 relative">
          <ImageWithPreload src={project.image} alt={project.title} />
          <a
            href={project.link}
            className="absolute top-6 right-6 size-14 rounded-full bg-tertiary flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 hover:bg-tertiary-hover"
          >
            <ArrowUpRight className="size-6 text-white" />
          </a>
        </div>
        <div className="p-8 pb-10">
          <h3 className="text-2xl font-semibold mb-3 leading-tight">
            {project.title}
          </h3>
          <p className="text-gray-400 line-clamp-2">
            {project.description}
          </p>
        </div>
      </motion.div>
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
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
};
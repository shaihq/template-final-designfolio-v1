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
      <div className="template-ds-relative template-ds-w-full template-ds-h-full">
        <AnimatePresence mode="wait">
          {!isLoaded && (
            <motion.div
              key="loading"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="template-ds-absolute template-ds-inset-0 template-ds-bg-secondary/50"
            />
          )}
        </AnimatePresence>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          src={src}
          alt={alt}
          className="template-ds-w-full template-ds-h-full template-ds-object-cover template-ds-object-center template-ds-group-hover:template-ds-scale-105 template-ds-transition-transform template-ds-duration-300"
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
        className="template-ds-group template-ds-rounded-3xl template-ds-bg-card template-ds-overflow-hidden template-ds-relative template-ds-shadow-[0px_0px_16.4px_0px_rgba(0,0,0,0.02)]"
      >
        <div
          className="template-ds-pointer-events-none template-ds-absolute template-ds--inset-px template-ds-opacity-0 template-ds-group-hover:template-ds-opacity-100 template-ds-transition-opacity template-ds-duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,.1), transparent 40%)`,
          }}
        />
        <div className="template-ds-aspect-[4/3] template-ds-overflow-hidden template-ds-bg-secondary/50 template-ds-relative">
          <ImageWithPreload src={project.image} alt={project.title} />
          <a
            href={project.link}
            className="template-ds-absolute template-ds-top-6 template-ds-right-6 template-ds-size-14 template-ds-rounded-full template-ds-bg-tertiary template-ds-flex template-ds-items-center template-ds-justify-center template-ds-opacity-0 template-ds-scale-75 template-ds-group-hover:template-ds-opacity-100 template-ds-group-hover:template-ds-scale-100 template-ds-transition-all template-ds-duration-300 hover:template-ds-bg-tertiary-hover"
          >
            <ArrowUpRight className="template-ds-size-6 template-ds-text-white" />
          </a>
        </div>
        <div className="template-ds-p-8 template-ds-pb-10">
          <h3 className="template-ds-text-2xl template-ds-font-semibold template-ds-mb-3">
            {project.title}
          </h3>
          <p className="template-ds-text-gray-400 template-ds-line-clamp-2">
            {project.description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="template-ds-pt-0 template-ds-pb-16">
      <h2 className="template-ds-text-2xl template-ds-font-bold template-ds-mb-8">Featured Projects</h2>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="template-ds-grid template-ds-grid-cols-1 md:template-ds-grid-cols-2 template-ds-gap-6"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

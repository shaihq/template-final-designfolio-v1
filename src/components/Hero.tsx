import { Avatar } from "@/components/ui/avatar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const skills = [
    "Product Design",
    "UI/UX",
    "Design Systems",
    "Prototyping",
    "User Research",
    "Frontend Development",
    "React",
    "TypeScript",
    "Figma",
    "Design Thinking",
  ];

  // Duplicate skills for smooth infinite scroll
  const scrollSkills = [...skills, ...skills];

  return (
    <section className="template-ds-flex template-ds-flex-col template-ds-items-center template-ds-text-center template-ds-py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar className="template-ds-w-24 template-ds-h-24 template-ds-mb-6 template-ds-relative template-ds-rounded-2xl">
          <div className="template-ds-relative template-ds-w-full template-ds-h-full">
            <AnimatePresence mode="wait">
              {!isLoaded && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="template-ds-absolute template-ds-inset-0 template-ds-bg-secondary/50 template-ds-animate-pulse template-ds-rounded-2xl"
                />
              )}
            </AnimatePresence>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              src="/lovable-uploads/328f31e4-c27c-4115-b548-fe916713e90a.png"
              alt="Profile"
              className="template-ds-rounded-2xl template-ds-w-full template-ds-h-full template-ds-object-cover"
              loading="eager"
              decoding="async"
              onLoad={() => setIsLoaded(true)}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            />
          </div>
        </Avatar>
      </motion.div>
      
      <motion.h1 
        className="template-ds-text-4xl template-ds-font-bold template-ds-mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Hey there! I'm Shai
      </motion.h1>
      
      <motion.p 
        className="dark:template-ds-text-gray-400 template-ds-text-gray-600 template-ds-max-w-xl template-ds-mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Product Designer with over 7+ years of experience. A unicorn designer who can both design and code. Designed experiences in sports, medtech, gig economy, fintech, and designed gamified learning experiences.
      </motion.p>
      
      <div className="template-ds-w-full template-ds-overflow-hidden template-ds-relative template-ds-py-4 template-ds-before:template-ds-absolute template-ds-before:left-0 template-ds-before:top-0 template-ds-before:z-10 template-ds-before:w-20 template-ds-before:h-full template-ds-before:bg-gradient-to-r template-ds-before:from-background template-ds-before:to-transparent template-ds-after:template-ds-absolute template-ds-after:right-0 template-ds-after:top-0 template-ds-after:z-10 template-ds-after:w-20 template-ds-after:h-full template-ds-after:bg-gradient-to-l template-ds-after:from-background template-ds-after:to-transparent">
        <motion.div 
          className="template-ds-flex template-ds-gap-4 template-ds-whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {scrollSkills.map((skill, index) => (
            <span
              key={index}
              className="template-ds-bg-card template-ds-px-4 template-ds-py-2 template-ds-rounded-full template-ds-text-sm"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

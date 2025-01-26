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
    <section className="flex flex-col items-center text-center py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar className="w-24 h-24 mb-6 relative rounded-2xl">
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              {!isLoaded && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-secondary/50 animate-pulse rounded-2xl"
                />
              )}
            </AnimatePresence>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              src="/lovable-uploads/328f31e4-c27c-4115-b548-fe916713e90a.png"
              alt="Profile"
              className="rounded-2xl w-full h-full object-cover"
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
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Hey there! I'm Shai
      </motion.h1>
      
      <motion.p 
        className="dark:text-gray-400 text-gray-600 max-w-xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Product Designer with over 7+ years of experience. A unicorn designer who can both design and code. Designed experiences in sports, medtech, gig economy, fintech, and designed gamified learning experiences.
      </motion.p>
      
      {/* Skills Infinite Scroll */}
      <div className="w-full overflow-hidden relative py-4 before:absolute before:left-0 before:top-0 before:z-10 before:w-20 before:h-full before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-20 after:h-full after:bg-gradient-to-l after:from-background after:to-transparent">
        <motion.div 
          className="flex gap-4 whitespace-nowrap"
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
              className="bg-card px-4 py-2 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
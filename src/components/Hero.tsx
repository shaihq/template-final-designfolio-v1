import { Avatar } from "@/components/ui/avatar";
import { useState } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="flex flex-col items-center text-center py-20 animate-fade-in">
      <Avatar className="w-24 h-24 mb-6 relative">
        <div className="relative w-full h-full">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            src="/lovable-uploads/328f31e4-c27c-4115-b548-fe916713e90a.png"
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
            loading="eager"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-secondary/50 animate-pulse rounded-full" />
          )}
        </div>
      </Avatar>
      <h1 className="text-4xl font-bold mb-4">Howdy, Ronnie here</h1>
      <p className="text-gray-400 max-w-xl mb-8">
        I'm Ron, a senior UX product designer based out of New York, specialized in
        launching high-delivery prototypes for in-progress websites. Building this
        into a refined design.
      </p>
    </section>
  );
};
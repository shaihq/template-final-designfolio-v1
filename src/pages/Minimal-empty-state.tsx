import { Hero } from "@/components/Hero";
import { WorkShowcase } from "@/components/WorkShowcase";
import { Spotlight } from "@/components/Spotlight";
import { SideProjects } from "@/components/SideProjects";
import { ToolStack } from "@/components/ToolStack";
import { Footer } from "@/components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import { Testimonials } from "@/components/Testimonials";
import { motion } from "framer-motion";

const MinimalEmptyState = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl mx-auto px-4">
        <section id="hero" className="py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-2xl bg-secondary animate-pulse mb-6" />
            <div className="h-8 w-48 bg-secondary rounded animate-pulse mb-4" />
            <div className="h-4 w-64 bg-secondary/50 rounded animate-pulse mb-8" />
            
            <div className="w-full overflow-hidden relative py-4">
              <div className="flex gap-4 overflow-x-auto pb-4">
                {Array(6).fill(null).map((_, index) => (
                  <div
                    key={index}
                    className="h-8 w-24 bg-card rounded-full animate-pulse"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="work" className="py-12">
          <div className="h-8 w-48 bg-secondary rounded animate-pulse mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array(2).fill(null).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-card rounded-3xl overflow-hidden"
              >
                <div className="aspect-[4/3] bg-secondary animate-pulse" />
                <div className="p-8">
                  <div className="h-6 w-48 bg-secondary rounded animate-pulse mb-4" />
                  <div className="h-4 w-64 bg-secondary/50 rounded animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="tools" className="py-12">
          <div className="h-8 w-48 bg-secondary rounded animate-pulse mb-8" />
          <div className="flex justify-center gap-4">
            {Array(6).fill(null).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-16 h-16 bg-card rounded-2xl animate-pulse"
              />
            ))}
          </div>
        </section>

        <section id="spotlight" className="py-12">
          <div className="h-8 w-48 bg-secondary rounded animate-pulse mb-8" />
          <div className="space-y-6">
            {Array(3).fill(null).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-card p-6 rounded-lg"
              >
                <div className="h-6 w-48 bg-secondary rounded animate-pulse mb-2" />
                <div className="h-4 w-32 bg-secondary/50 rounded animate-pulse mb-4" />
                <div className="h-4 w-64 bg-secondary/30 rounded animate-pulse" />
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
      <FloatingNav />
    </div>
  );
};

export default MinimalEmptyState;
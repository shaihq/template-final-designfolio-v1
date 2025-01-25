import { Mail, Github, Linkedin, Twitter, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const PortfolioEmpty = () => {
  const textReveal = {
    initial: { y: 100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  const tools = Array(4).fill({
    name: "Empty Tool",
    icon: Github,
    link: "#"
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-secondary-border py-6">
        <div className="container max-w-3xl mx-auto px-4">
          <motion.div 
            className="flex items-center justify-between"
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary animate-pulse" />
              <div className="h-6 w-24 bg-secondary animate-pulse rounded" />
            </motion.div>
            <Button variant="outline" size="sm" className="gap-2 opacity-50" disabled>
              <Mail className="w-4 h-4" />
              E-mail
            </Button>
          </motion.div>
        </div>
      </header>
      
      <div className="container max-w-3xl mx-auto px-4 relative">
        <div className="absolute left-0 top-0 w-px h-full bg-secondary-border" />
        <div className="absolute right-0 top-0 w-px h-full bg-secondary-border" />
        
        {/* Hero Section with Empty State */}
        <section className="py-12 border-b border-secondary-border overflow-hidden">
          <motion.div
            initial="initial"
            animate="animate"
          >
            <div className="h-8 w-3/4 bg-secondary animate-pulse rounded mb-4" />
            <div className="h-6 w-1/2 bg-secondary animate-pulse rounded mb-6" />
          </motion.div>
        </section>

        {/* Experience Section Empty State */}
        <section className="py-12 border-b border-secondary-border">
          <h3 className="text-2xl font-bold mb-6">Experience</h3>
          <div className="space-y-4">
            {Array(2).fill(null).map((_, index) => (
              <div
                key={index}
                className="bg-card border border-card-border p-6 rounded-lg"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="h-6 w-48 bg-secondary animate-pulse rounded" />
                    <div className="h-4 w-32 bg-secondary animate-pulse rounded" />
                    <div className="h-4 w-64 bg-secondary animate-pulse rounded mt-4" />
                  </div>
                  <div className="h-4 w-20 bg-secondary animate-pulse rounded" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section Empty State */}
        <section className="py-12 border-b border-secondary-border">
          <h3 className="text-2xl font-bold mb-8">Tools I Use</h3>
          <div className="grid grid-cols-2 gap-4">
            {Array(4).fill(null).map((_, index) => (
              <div
                key={index}
                className="bg-card border border-card-border p-6 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary rounded-lg animate-pulse">
                    <div className="w-5 h-5" />
                  </div>
                  <div className="h-4 w-24 bg-secondary animate-pulse rounded" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section Empty State */}
        <section className="py-12 border-b border-secondary-border">
          <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
          <div className="flex flex-col gap-6">
            {Array(2).fill(null).map((_, index) => (
              <div
                key={index}
                className="bg-card border border-card-border rounded-lg overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-[320px] h-[240px] bg-secondary animate-pulse" />
                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="h-8 w-48 bg-secondary animate-pulse rounded mb-4" />
                      <div className="h-4 w-64 bg-secondary animate-pulse rounded" />
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="self-start mt-6 opacity-50"
                      disabled
                    >
                      View Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Empty State */}
        <section className="py-12 border-b border-secondary-border">
          <h3 className="text-3xl font-bold mb-12 text-center">What People Say</h3>
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {Array(4).fill(null).map((_, index) => (
              <div
                key={index}
                className="bg-card border border-card-border p-6 rounded-lg"
              >
                <div className="h-4 w-full bg-secondary animate-pulse rounded mb-4" />
                <div className="h-4 w-3/4 bg-secondary animate-pulse rounded mb-6" />
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <div className="h-5 w-32 bg-secondary animate-pulse rounded mb-2" />
                    <div className="h-4 w-48 bg-secondary animate-pulse rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioEmpty;
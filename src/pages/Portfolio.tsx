import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { WorkShowcase } from "@/components/WorkShowcase";
import { Spotlight } from "@/components/Spotlight";
import { ToolStack } from "@/components/ToolStack";
import { SideProjects } from "@/components/SideProjects";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Portfolio = () => {
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <header className="border-b border-secondary-border py-6">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/lovable-uploads/328f31e4-c27c-4115-b548-fe916713e90a.png"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="text-foreground font-medium">Shai</h2>
                <p className="text-sm text-gray-400">
                  Product Designer
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Mail className="w-4 h-4" />
              E-mail
            </Button>
          </div>
        </div>
      </header>

      <div className="container max-w-3xl mx-auto px-4">
        {/* Hero Section */}
        <Hero />

        {/* Work Experience */}
        <Spotlight />

        {/* Projects */}
        <WorkShowcase />

        {/* Tool Stack */}
        <ToolStack />

        {/* Side Projects */}
        <SideProjects />

        {/* Testimonials */}
        <Testimonials />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
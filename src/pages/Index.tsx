import { Hero } from "@/components/Hero";
import { WorkShowcase } from "@/components/WorkShowcase";
import { Spotlight } from "@/components/Spotlight";
import { SideProjects } from "@/components/SideProjects";
import { ToolStack } from "@/components/ToolStack";
import { Footer } from "@/components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import { Testimonials } from "@/components/Testimonials";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="lg:hidden flex justify-center py-4">
          <ThemeToggle />
        </div>
        <ThemeToggle />
        <section id="hero">
          <Hero />
        </section>
        <section id="work">
          <WorkShowcase />
        </section>
        <section id="tools">
          <ToolStack />
        </section>
        <section id="spotlight">
          <Spotlight />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="projects">
          <SideProjects />
        </section>
        <Footer />
      </div>
      <FloatingNav />
    </div>
  );
};

export default Index;
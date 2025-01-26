import { Hero } from "@/components/Hero";
import { WorkShowcase } from "@/components/WorkShowcase";
import { Spotlight } from "@/components/Spotlight";
import { ToolStack } from "@/components/ToolStack";
import { Footer } from "@/components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import { Testimonials } from "@/components/Testimonials";
import { ThemeToggle } from "@/components/ThemeToggle";

const Minimal = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-8 left-8 z-50">
        <ThemeToggle />
      </div>
      <div className="container max-w-3xl mx-auto px-4">
        <section id="hero">
          <Hero />
        </section>
        <section id="featured-projects">
          <WorkShowcase />
        </section>
        <section id="tools">
          <ToolStack />
        </section>
        <section id="work-experience">
          <Spotlight />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <Footer />
      </div>
      <FloatingNav />
    </div>
  );
};

export default Minimal;
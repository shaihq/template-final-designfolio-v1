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
    <div className="template-ds-min-h-screen template-ds-bg-background template-ds-text-foreground">
      <div className="template-ds-fixed template-ds-top-8 template-ds-left-8 template-ds-z-50">
        <ThemeToggle />
      </div>
      <div className="template-ds-container template-ds-max-w-3xl template-ds-mx-auto template-ds-px-4">
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
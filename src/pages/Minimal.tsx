import { Hero } from "@/components/Hero";
import { WorkShowcase } from "@/components/WorkShowcase";
import { Spotlight } from "@/components/Spotlight";
import { SideProjects } from "@/components/SideProjects";
import { ToolStack } from "@/components/ToolStack";
import { Footer } from "@/components/Footer";
import { FloatingNav } from "@/components/FloatingNav";
import { Testimonials } from "@/components/Testimonials";

const Minimal = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Stars container */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-white ${
              i % 2 === 0 ? 'w-0.5 h-0.5' : 'w-1 h-1'
            } animate-twinkle`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>
      <div className="container max-w-3xl mx-auto px-4 relative z-10">
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

export default Minimal;
import { Hero } from "@/components/Hero";
import { WorkShowcase } from "@/components/WorkShowcase";
import { Spotlight } from "@/components/Spotlight";
import { SideProjects } from "@/components/SideProjects";
import { ToolStack } from "@/components/ToolStack";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl mx-auto px-4">
        <Hero />
        <WorkShowcase />
        <Spotlight />
        <SideProjects />
        <ToolStack />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
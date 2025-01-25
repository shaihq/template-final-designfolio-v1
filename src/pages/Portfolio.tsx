import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 max-w-3xl mx-auto">
      {/* Header Section */}
      <header className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-foreground font-medium">James Safford</h2>
            <p className="text-sm text-[var(--landing-description-text-color)]">
              Product Designer
            </p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Mail className="w-4 h-4" />
          E-mail
        </Button>
      </header>

      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-2 text-foreground">
          I will turn your vision into a real digital product.{" "}
          <span className="text-[var(--landing-description-text-color)]">
            I'm open to collaboration.
          </span>
        </h1>
        <p className="text-[var(--landing-description-text-color)] mb-6">
          I'm James, a Product Designer currently based in Krakow. I specialize in creating and managing digital products, with a focus on clean design that emphasizes functionality and user needs.
        </p>
        <p className="text-[var(--landing-description-text-color)]">
          My career in design began during my time at Stanford Law School in Ohio. I graduated with a master's degree from Lancaster University in the UK, achieving top marks. I continuously hone my skills through industry networking events, professional courses, and my current internship at Apple.
        </p>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h3 className="text-xl font-semibold mb-6">Experience</h3>
        <div className="grid gap-4">
          <div className="p-4 rounded-lg border border-[var(--project-card-border-color)] bg-[var(--project-card-bg-color)]">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[var(--df-orange-color)] font-medium">Lead Product Designer</span>
                <p className="text-sm text-[var(--landing-description-text-color)]">Crunch Energy</p>
              </div>
              <span className="text-sm text-[var(--landing-description-text-color)]">2018 - Currently</span>
            </div>
          </div>
          <div className="p-4 rounded-lg border border-[var(--project-card-border-color)] bg-[var(--project-card-bg-color)]">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[var(--df-orange-color)] font-medium">Junior UI/UX Designer</span>
                <p className="text-sm text-[var(--landing-description-text-color)]">XYZ Studios</p>
              </div>
              <span className="text-sm text-[var(--landing-description-text-color)]">2014 - 2018</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h3 className="text-xl font-semibold mb-6">Projects</h3>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="aspect-video rounded-lg border border-[var(--project-card-border-color)] bg-[var(--project-card-bg-color)] p-4"
            >
              <div className="h-full flex flex-col justify-between">
                <h4 className="font-medium">Project Name</h4>
                <p className="text-sm text-[var(--landing-description-text-color)]">
                  Brief description
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h3 className="text-xl font-semibold mb-6">Education</h3>
        <div className="space-y-6">
          <div className="p-4 rounded-lg border border-[var(--project-card-border-color)] bg-[var(--project-card-bg-color)]">
            <h4 className="font-medium mb-1">Master in Product Design</h4>
            <p className="text-sm text-[var(--landing-description-text-color)] mb-3">
              University of Lancaster, United Kingdom
            </p>
            <p className="text-sm text-[var(--landing-description-text-color)]">
              I gained comprehensive knowledge in product design, focusing on innovative digital solutions, user experience, and project management. Enhanced skills through real-world design challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="mb-16">
        <h3 className="text-xl font-semibold mb-6">Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {['Figma', 'Framer', 'Miro', 'Slack'].map((tool) => (
            <div
              key={tool}
              className="p-4 rounded-lg border border-[var(--project-card-border-color)] bg-[var(--project-card-bg-color)] flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded bg-primary/10" />
              <div>
                <p className="font-medium">{tool}</p>
                <p className="text-sm text-[var(--landing-description-text-color)]">
                  Design Tool
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="mb-16">
        <h3 className="text-xl font-semibold mb-6">Awards</h3>
        <div className="space-y-4">
          {[
            { award: "Framer Awards", type: "Site Of The Year", year: "2023" },
            { award: "Awwwards", type: "Site Of The Month", year: "2022" },
            { award: "CSSem", type: "Product Of The Year", year: "2022" },
          ].map((item) => (
            <div
              key={item.award}
              className="flex justify-between items-center p-4 rounded-lg border border-[var(--project-card-border-color)] bg-[var(--project-card-bg-color)]"
            >
              <div>
                <span className="font-medium">{item.award}</span>
                <p className="text-sm text-[var(--landing-description-text-color)]">
                  {item.type}
                </p>
              </div>
              <span className="text-sm text-[var(--landing-description-text-color)]">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Summary Section */}
      <section className="mb-16">
        <h3 className="text-xl font-semibold mb-6">Summary</h3>
        <div className="space-y-4">
          <p className="text-[var(--landing-description-text-color)]">
            As a product-focused Product Designer, I thrive on transforming ideas into impactful digital products that solve real-world user needs. With a comprehensive understanding of product management and design processes, I focus on building clean, intuitive solutions that solve real problems.
          </p>
          <p className="text-[var(--landing-description-text-color)]">
            I'm always eager to evolve and learn fresh perspectives to the table, constantly refining my skills through hands-on experience, ongoing learning, and active participation in industry events. If you're looking for someone who's not only technically skilled but also dedicated to crafting products that truly make a difference, I'd love to connect and discuss how I can contribute to your team.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-between items-center pt-8 border-t border-[var(--project-card-border-color)]">
        <div className="flex gap-4">
          <Button variant="outline" size="sm">
            Email
          </Button>
          <Button variant="outline" size="sm">
            LinkedIn
          </Button>
          <Button variant="outline" size="sm">
            Twitter
          </Button>
        </div>
        <div className="flex items-center gap-2 text-sm text-[var(--landing-description-text-color)]">
          <span>Built in</span>
          <span className="font-medium">Framer</span>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
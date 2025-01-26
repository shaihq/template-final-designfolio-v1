import { useState, useEffect } from "react";
import { Home, Briefcase, Award, Wrench } from "lucide-react";

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Home", icon: Home },
    { id: "spotlight", label: "Projects", icon: Award },
    { id: "tools", label: "Tools", icon: Wrench },
    { id: "work", label: "Work", icon: Briefcase },
  ];

  // Filter sections for mobile view (excluding tools)
  const mobileSections = sections.filter(section => section.id !== "tools");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = [
        document.getElementById("hero"),
        document.getElementById("featured-projects"),
        document.getElementById("tools"),
        document.getElementById("work-experience"),
      ];

      const currentSection = sectionElements.find((element) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        // Map section IDs back to nav IDs
        const sectionToNavMapping: { [key: string]: string } = {
          "hero": "hero",
          "featured-projects": "spotlight",
          "tools": "tools",
          "work-experience": "work"
        };
        setActiveSection(sectionToNavMapping[currentSection.id] || currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Map the navigation IDs to their corresponding section IDs
    const sectionMapping: { [key: string]: string } = {
      "hero": "hero",
      "spotlight": "featured-projects",
      "tools": "tools",
      "work": "work-experience"
    };

    // Use the mapped ID if it exists, otherwise use the original ID
    const targetId = sectionMapping[id] || id;
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="template-ds-fixed template-ds-left-8 template-ds-top-1/2 template-ds--translate-y-1/2 template-ds-z-50 template-ds-hidden lg:template-ds-block">
        <div className="template-ds-bg-card dark:template-ds-bg-secondary template-ds-border template-ds-border-card-border dark:template-ds-border-secondary-border template-ds-rounded-xl template-ds-p-3 template-ds-shadow-[0px_0px_16.4px_0px_rgba(0,0,0,0.02)]">
          <div className="template-ds-flex template-ds-flex-col template-ds-gap-4">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`template-ds-group template-ds-flex template-ds-items-center template-ds-gap-4 template-ds-transition-all ${
                  activeSection === id ? "template-ds-opacity-100" : "template-ds-opacity-50 hover:template-ds-opacity-100"
                }`}
              >
                <div 
                  className={`template-ds-flex template-ds-items-center template-ds-justify-center template-ds-w-10 template-ds-h-10 template-ds-rounded-full template-ds-transition-colors ${
                    activeSection === id 
                      ? "template-ds-bg-foreground dark:template-ds-bg-[#2A2D37]" 
                      : "template-ds-bg-[#e5e5e7] dark:template-ds-bg-secondary-hover hover:template-ds-bg-primary-hover dark:hover:template-ds-bg-primary-hover"
                  }`}
                >
                  <Icon 
                    className={`template-ds-w-5 template-ds-h-5 ${
                      activeSection === id 
                        ? "template-ds-text-background dark:template-ds-text-white" 
                        : "template-ds-text-foreground dark:template-ds-text-foreground-dark"
                    }`}
                  />
                </div>
                <span className="template-ds-text-sm template-ds-opacity-0 group-hover:template-ds-opacity-100 template-ds-transition-opacity template-ds-absolute template-ds-left-full template-ds-pl-4 template-ds-whitespace-nowrap">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile and Tablet Navigation */}
      <nav className="template-ds-fixed template-ds-bottom-8 template-ds-left-1/2 template-ds--translate-x-1/2 template-ds-z-50 lg:template-ds-hidden">
        <div className="template-ds-bg-card dark:template-ds-bg-secondary template-ds-border template-ds-border-card-border dark:template-ds-border-secondary-border template-ds-rounded-xl template-ds-p-3 template-ds-shadow-[0px_0px_16.4px_0px_rgba(0,0,0,0.02)]">
          <div className="template-ds-flex template-ds-items-center template-ds-gap-4">
            {mobileSections.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`template-ds-group template-ds-flex template-ds-flex-col template-ds-items-center template-ds-transition-all ${
                  activeSection === id ? "template-ds-opacity-100" : "template-ds-opacity-50 hover:template-ds-opacity-100"
                }`}
              >
                <div 
                  className={`template-ds-flex template-ds-items-center template-ds-justify-center template-ds-w-10 template-ds-h-10 template-ds-rounded-full template-ds-transition-colors ${
                    activeSection === id 
                      ? "template-ds-bg-foreground dark:template-ds-bg-[#2A2D37]" 
                      : "template-ds-bg-[#e5e5e7] dark:template-ds-bg-secondary-hover hover:template-ds-bg-primary-hover dark:hover:template-ds-bg-primary-hover"
                  }`}
                >
                  <Icon 
                    className={`template-ds-w-5 template-ds-h-5 ${
                      activeSection === id 
                        ? "template-ds-text-background dark:template-ds-text-white" 
                        : "template-ds-text-foreground dark:template-ds-text-foreground-dark"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
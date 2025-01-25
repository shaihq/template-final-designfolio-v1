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
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-card border border-card-border rounded-xl p-3 shadow-lg">
          <div className="flex flex-col gap-4">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`group flex items-center gap-4 transition-all ${
                  activeSection === id ? "opacity-100" : "opacity-50 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary/10 transition-colors">
                  <Icon 
                    className={`w-5 h-5 ${
                      activeSection === id ? "text-white" : "text-foreground"
                    }`}
                  />
                </div>
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity absolute left-full pl-4 whitespace-nowrap">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile and Tablet Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <div className="bg-card border border-card-border rounded-xl p-3 shadow-lg">
          <div className="flex items-center gap-4">
            {mobileSections.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`group flex flex-col items-center transition-all ${
                  activeSection === id ? "opacity-100" : "opacity-50 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary/10 transition-colors">
                  <Icon 
                    className={`w-5 h-5 ${
                      activeSection === id ? "text-white" : "text-foreground"
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
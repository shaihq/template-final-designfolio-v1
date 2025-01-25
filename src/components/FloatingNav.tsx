import { useState, useEffect } from "react";
import { Home, Briefcase, Award, Code, Wrench } from "lucide-react";

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Home", icon: Home },
    { id: "work", label: "Work", icon: Briefcase },
    { id: "spotlight", label: "Spotlight", icon: Award },
    { id: "projects", label: "Projects", icon: Code },
    { id: "tools", label: "Tools", icon: Wrench },
  ];

  // Filter sections for mobile view (excluding tools)
  const mobileSections = sections.filter(section => section.id !== "tools");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(({ id }) => 
        document.getElementById(id)
      );

      const currentSection = sectionElements.find((element) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-primary/10 transition-colors">
                  <Icon 
                    className={`w-6 h-6 ${
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
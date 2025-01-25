import { useState, useEffect } from "react";
import { Home, Briefcase, Award, Code, Wrench, Mail } from "lucide-react";

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Home", icon: Home },
    { id: "work", label: "Work", icon: Briefcase },
    { id: "spotlight", label: "Spotlight", icon: Award },
    { id: "projects", label: "Projects", icon: Code },
    { id: "tools", label: "Tools", icon: Wrench },
    { id: "newsletter", label: "Newsletter", icon: Mail },
  ];

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
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`group flex items-center gap-4 transition-all ${
              activeSection === id ? "opacity-100" : "opacity-50 hover:opacity-100"
            }`}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-card hover:bg-primary/10 transition-colors">
              <Icon 
                className={`w-5 h-5 ${
                  activeSection === id ? "text-primary" : "text-foreground"
                }`}
              />
            </div>
            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity absolute left-full pl-4 whitespace-nowrap">
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};
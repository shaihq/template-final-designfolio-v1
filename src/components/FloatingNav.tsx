import { useState, useEffect } from "react";

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "Home" },
    { id: "work", label: "Work" },
    { id: "spotlight", label: "Spotlight" },
    { id: "projects", label: "Projects" },
    { id: "tools", label: "Tools" },
    { id: "newsletter", label: "Newsletter" },
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
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`group flex items-center gap-4 transition-all ${
              activeSection === id ? "opacity-100" : "opacity-50 hover:opacity-100"
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};
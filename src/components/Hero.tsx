import { Avatar } from "@/components/ui/avatar";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const skills = [
    "Product Design",
    "UI/UX",
    "Prototyping",
    "Web Design",
    "Mobile Design",
    "User Research",
    "Design Systems",
    "Figma",
    "Adobe XD",
    "Sketch",
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollContent = scrollContainer.firstElementChild;
    if (!scrollContent) return;

    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollContainer.scrollLeft += 1;
      
      // Reset scroll position when reaching the end
      if (scrollContainer.scrollLeft >= (scrollContent.scrollWidth - scrollContainer.offsetWidth) / 2) {
        scrollContainer.scrollLeft = 0;
      }
    };

    const scrollInterval = setInterval(scroll, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="flex flex-col items-center text-center py-20 animate-fade-in">
      <Avatar className="w-24 h-24 mb-6">
        <img
          src="/lovable-uploads/84412779-0539-4904-9377-f71b15d378f7.png"
          alt="Profile"
          className="rounded-full"
        />
      </Avatar>
      <h1 className="text-4xl font-bold mb-4">Howdy, Ronnie here</h1>
      <p className="text-gray-400 max-w-xl mb-8">
        I'm Ron, a senior UX product designer based out of New York, specialized in
        launching high-delivery prototypes for in-progress websites. Building this
        into a refined design.
      </p>
      
      {/* Scrolling Skills with gradient overlay */}
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
        <div className="w-full overflow-hidden" ref={scrollRef}>
          <div className="flex gap-8 whitespace-nowrap">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-primary px-4 py-2 rounded-full border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const Spotlight = () => {
  const experiences = [
    {
      title: "Senior Product Designer",
      company: "Design Studio X",
      date: "Jan 2023 - Present",
      description: "Leading the design team in creating innovative digital products. Collaborated with cross-functional teams to deliver user-centered solutions that increased customer engagement by 45%.",
      expandedContent: "• Implemented design system that reduced design inconsistencies by 60%\n• Led workshops with stakeholders to align on product vision\n• Mentored junior designers and improved team productivity by 30%",
    },
    {
      title: "UX Designer",
      company: "Tech Innovations Inc",
      date: "Mar 2020 - Dec 2022",
      description: "Spearheaded the redesign of core products resulting in a 30% increase in user satisfaction. Mentored junior designers and established design system guidelines.",
      expandedContent: "• Conducted user research with over 200 participants\n• Created and maintained component library used across 5 products\n• Reduced design-to-development handoff time by 40%",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Agency",
      date: "Jun 2018 - Feb 2020",
      description: "Designed and delivered web and mobile applications for various clients across fintech and healthcare sectors. Implemented user research methodologies to inform design decisions.",
      expandedContent: "• Successfully delivered 12+ client projects on time and within budget\n• Increased client satisfaction scores by 25%\n• Introduced usability testing practices to the agency",
    },
  ];

  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      }
    },
  };

  const expandContent = {
    hidden: { height: 0, opacity: 0 },
    show: { 
      height: "auto", 
      opacity: 1,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
          delay: 0.1,
        },
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleExpand = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="space-y-6"
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group bg-card p-6 rounded-lg hover:bg-card/80 transition-colors relative overflow-hidden shadow-[0px_0px_16.4px_0px_rgba(0,0,0,0.02)]"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full" />
            </div>
            <div className="relative z-10">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg">{experience.title}</h3>
                  <span className="text-sm text-foreground/40">{experience.date}</span>
                </div>
                <div className="text-base text-foreground/80">{experience.company}</div>
                <p className="text-sm text-foreground/40 mt-2">
                  {experience.description}
                  {!expandedCards.includes(index) && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="ml-1 text-foreground hover:text-foreground/80 inline-flex items-center gap-1"
                    >
                      View More<ChevronDown className="h-3 w-3" />
                    </button>
                  )}
                </p>
                
                <motion.div
                  variants={expandContent}
                  initial="hidden"
                  animate={expandedCards.includes(index) ? "show" : "hidden"}
                  className="overflow-hidden"
                >
                  <div className="mt-4 text-sm text-foreground/40 whitespace-pre-line">
                    {experience.expandedContent}
                    {expandedCards.includes(index) && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="ml-1 block mt-2 text-foreground hover:text-foreground/80 inline-flex items-center gap-1"
                      >
                        Show Less<ChevronUp className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
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
    <section className="template-ds-py-16">
      <h2 className="template-ds-text-2xl template-ds-font-bold template-ds-mb-8">Work Experience</h2>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="template-ds-space-y-6"
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={item}
            className="template-ds-group template-ds-bg-card template-ds-p-6 template-ds-rounded-lg hover:template-ds-bg-card/80 template-ds-transition-colors template-ds-relative template-ds-overflow-hidden template-ds-shadow-[0px_0px_16.4px_0px_rgba(0,0,0,0.02)]"
          >
            <div className="template-ds-absolute template-ds-inset-0 template-ds-overflow-hidden">
              <div className="template-ds-absolute template-ds-inset-0 group-hover:template-ds-animate-shimmer template-ds-bg-gradient-to-r template-ds-from-transparent template-ds-via-white/10 template-ds-to-transparent template-ds--translate-x-full" />
            </div>
            <div className="template-ds-relative template-ds-z-10">
              <div className="template-ds-flex template-ds-flex-col template-ds-gap-1">
                <div className="template-ds-flex template-ds-justify-between template-ds-items-start">
                  <h3 className="template-ds-font-semibold template-ds-text-lg">{experience.title}</h3>
                  <span className="template-ds-text-sm template-ds-text-foreground/60">{experience.date}</span>
                </div>
                <div className="template-ds-text-base template-ds-text-foreground/80">{experience.company}</div>
                <p className="template-ds-text-sm template-ds-text-foreground/60 template-ds-mt-2">
                  {experience.description}
                  {!expandedCards.includes(index) && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="template-ds-ml-1 template-ds-text-foreground hover:template-ds-text-foreground/80 template-ds-inline-flex template-ds-items-center template-ds-gap-1"
                    >
                      View More<ChevronDown className="template-ds-h-3 template-ds-w-3" />
                    </button>
                  )}
                </p>
                
                <motion.div
                  variants={expandContent}
                  initial="hidden"
                  animate={expandedCards.includes(index) ? "show" : "hidden"}
                  className="template-ds-overflow-hidden"
                >
                  <div className="template-ds-mt-4 template-ds-text-sm template-ds-text-foreground/60 template-ds-whitespace-pre-line">
                    {experience.expandedContent}
                    {expandedCards.includes(index) && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="template-ds-ml-1 template-ds-block template-ds-mt-2 template-ds-text-foreground hover:template-ds-text-foreground/80 template-ds-inline-flex template-ds-items-center template-ds-gap-1"
                      >
                        Show Less<ChevronUp className="template-ds-h-3 template-ds-w-3" />
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
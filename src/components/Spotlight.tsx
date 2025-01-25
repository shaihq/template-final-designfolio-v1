import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";

export const Spotlight = () => {
  const experiences = [
    {
      company: "Athon",
      logo: "/lovable-uploads/39d21fd8-9ce5-4f07-9db6-5d89fead0e4f.png",
      website: "athon.com",
      role: "UI/UX Designer",
      type: "Tech Start-up",
      date: "2020 - 2022",
      description: "Led UI/UX design projects from concept to delivery, conducted user testing, and iterated designs for optimal user experience.",
    },
    {
      company: "Design Studio X",
      logo: "/placeholder.svg",
      website: "designstudiox.com",
      role: "Senior Product Designer",
      type: "Design Agency",
      date: "2022 - 2023",
      description: "Leading the design team in creating innovative digital products. Collaborated with cross-functional teams to deliver user-centered solutions that increased customer engagement by 45%.",
    },
    {
      company: "Tech Innovations Inc",
      logo: "/placeholder.svg",
      website: "techinnovations.com",
      role: "UX Designer",
      type: "Technology",
      date: "2019 - 2020",
      description: "Spearheaded the redesign of core products resulting in a 30% increase in user satisfaction. Mentored junior designers and established design system guidelines.",
    },
  ];

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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            className="relative"
          >
            <Card className="group bg-secondary hover:bg-secondary/80 transition-colors duration-300 border-secondary-border hover:border-secondary-border-hover overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full" />
              </div>
              <div className="relative z-10 p-8 space-y-8">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-lg bg-background/50 p-2 flex items-center justify-center">
                      <img 
                        src={experience.logo} 
                        alt={`${experience.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold">{experience.company}</h3>
                        <span className="text-sm text-foreground/60">{experience.website}</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-lg text-foreground/80">{experience.type}</p>
                      </div>
                    </div>
                  </div>
                  <span className="text-lg font-medium">{experience.date}</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">{experience.role}</h4>
                  <p className="text-foreground/60 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
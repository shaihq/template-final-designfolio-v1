export const Spotlight = () => {
  const experiences = [
    {
      title: "Senior Product Designer",
      company: "Design Studio X",
      date: "Jan 2023 - Present",
      location: "San Francisco, CA",
      description: "Leading the design team in creating innovative digital products. Collaborated with cross-functional teams to deliver user-centered solutions that increased customer engagement by 45%.",
    },
    {
      title: "UX Designer",
      company: "Tech Innovations Inc",
      date: "Mar 2020 - Dec 2022",
      location: "New York, NY",
      description: "Spearheaded the redesign of core products resulting in a 30% increase in user satisfaction. Mentored junior designers and established design system guidelines.",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Agency",
      date: "Jun 2018 - Feb 2020",
      location: "Boston, MA",
      description: "Designed and delivered web and mobile applications for various clients across fintech and healthcare sectors. Implemented user research methodologies to inform design decisions.",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-lg hover:bg-card/80 transition-colors"
          >
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg">{experience.title}</h3>
                <span className="text-sm text-muted-foreground">{experience.date}</span>
              </div>
              <div className="text-base text-primary">{experience.company}</div>
              <div className="text-sm text-muted-foreground mb-2">{experience.location}</div>
              <p className="text-sm text-muted-foreground">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
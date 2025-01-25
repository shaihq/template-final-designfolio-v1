import { ArrowUpRight } from "lucide-react";

export const WorkShowcase = () => {
  const projects = [
    {
      title: "Improved Onboarding, reducing drop-off by 30% for 1M learners",
      image: "/lovable-uploads/811e1aed-257a-4113-b174-22ade0f7dfc8.png",
      link: "#",
    },
    {
      title: "Designing a scalable Design System to reduce development time by 40%",
      image: "/lovable-uploads/811e1aed-257a-4113-b174-22ade0f7dfc8.png",
      link: "#",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12">My works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-3xl bg-card overflow-hidden relative before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-r before:from-transparent before:via-foreground/10 before:to-transparent before:rounded-3xl before:opacity-0 before:transition-opacity hover:before:opacity-100"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6 leading-tight">
                {project.title}
              </h3>
              <a
                href={project.link}
                className="inline-flex items-center text-lg text-muted-foreground hover:text-primary transition-colors"
              >
                View project <ArrowUpRight className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export const SideProjects = () => {
  const projects = [
    { name: "White Illustration Pack", icon: "🎨" },
    { name: "500+ Gradient Pack", icon: "🎯" },
    { name: "Case Study Template", icon: "📝" },
    { name: "Clean Portfolio Template", icon: "🎨" },
  ];

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Side Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card p-4 rounded-lg flex items-center justify-between hover:bg-card/80 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{project.icon}</span>
              <span>{project.name}</span>
            </div>
            <span className="text-gray-400">→</span>
          </div>
        ))}
      </div>
    </section>
  );
};
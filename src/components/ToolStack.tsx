export const ToolStack = () => {
  const tools = [
    { name: "Mockup (iPad)", icon: "📱" },
    { name: "Arc Browser", icon: "🌐" },
    { name: "Notion", icon: "📝" },
    { name: "Framer", icon: "🎨" },
    { name: "Figma", icon: "✏️" },
    { name: "Midbin", icon: "🤖" },
  ];

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Tool Stack</h2>
      <div className="grid grid-cols-2 gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-card p-4 rounded-lg flex items-center gap-3 hover:bg-card/80 transition-colors"
          >
            <span className="text-2xl">{tool.icon}</span>
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
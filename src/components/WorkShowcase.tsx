export const WorkShowcase = () => {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Work</h2>
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-1">
        <div className="bg-card rounded-lg p-8">
          <h3 className="text-xl mb-4">Your Canvas</h3>
          <p className="text-gray-400 mb-4">Design Lead, Framer</p>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-background/20">←</button>
            <button className="p-2 rounded-full bg-background/20">→</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export const Spotlight = () => {
  const awards = [
    {
      title: "Winner, UX Design Awards",
      date: "Feb 2024",
      description: "Won first prize at the 'Best UX Design 2024' awards in the UI/UX category.",
    },
    {
      title: "Young Jury, Awwwards",
      date: "Jan 2024",
      description: "Selected to serve as a young jury member for the Awwwards.",
    },
    {
      title: "Top Upcoming Influencer of 2023",
      date: "Dec 2023",
      description: "Featured as one of the top 50 emerging influencers to watch in 2023.",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-8">Spotlight</h2>
      <div className="space-y-4">
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-card p-6 rounded-lg hover:bg-card/80 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">{award.title}</h3>
              <span className="text-gray-400 text-sm">{award.date}</span>
            </div>
            <p className="text-gray-400">{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
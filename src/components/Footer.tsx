export const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="flex justify-center gap-6 mb-8">
        {["instagram", "linkedin", "twitter", "github"].map((social) => (
          <a
            key={social}
            href={`https://${social}.com`}
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.charAt(0).toUpperCase() + social.slice(1)}
          </a>
        ))}
      </div>
      <div className="text-center text-gray-400">
        <p>Thanks for visiting</p>
        <p className="text-sm">Handcrafted by me</p>
      </div>
    </footer>
  );
};
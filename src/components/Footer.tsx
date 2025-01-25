import { Button } from "@/components/ui/button";
import { Download, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-800">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground max-w-2xl text-center leading-tight">
            Let's work together
          </h2>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-lg px-8">
              Say Hi
            </Button>
            <Button size="lg" className="text-lg px-8">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Download className="mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex flex-col items-center gap-8 mt-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">Connect with me</h3>
              <div className="flex items-center gap-8 text-gray-400">
                <a
                  href="https://instagram.com"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={24} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://twitter.com"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={24} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://linkedin.com"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">Other portfolio</h3>
              <div className="flex items-center gap-8 text-gray-400">
                <a
                  href="https://github.com"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                  <span className="sr-only">Github</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Chennai, IN</span>
            <span className="w-1 h-1 rounded-full bg-gray-400"></span>
            <span>3:30 AM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
import { Avatar } from "@/components/ui/avatar";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center py-20 animate-fade-in">
      <Avatar className="w-24 h-24 mb-6">
        <img
          src="/lovable-uploads/328f31e4-c27c-4115-b548-fe916713e90a.png"
          alt="Profile"
          className="rounded-full"
        />
      </Avatar>
      <h1 className="text-4xl font-bold mb-4">Howdy, Ronnie here</h1>
      <p className="text-gray-400 max-w-xl mb-8">
        I'm Ron, a senior UX product designer based out of New York, specialized in
        launching high-delivery prototypes for in-progress websites. Building this
        into a refined design.
      </p>
    </section>
  );
};
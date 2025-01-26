import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Newsletter = () => {
  return (
    <section className="template-ds-py-16">
      <h2 className="template-ds-text-2xl template-ds-font-bold template-ds-mb-8">Newsletter</h2>
      <p className="dark:template-ds-text-gray-400 template-ds-text-gray-600 template-ds-mb-6">
        I share clean dev tips once a month & I would love to share them with you. Give me a
        try - No spam, I promise.
      </p>
      <div className="template-ds-flex template-ds-gap-4">
        <Input
          type="email"
          placeholder="your@email.com"
          className="template-ds-bg-card template-ds-border-none"
        />
        <Button>Subscribe</Button>
      </div>
    </section>
  );
};
import heroImage from "@/assets/hero-computational-biology.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--spotlight-x", `${x}%`);
    e.currentTarget.style.setProperty("--spotlight-y", `${y}%`);
  };

  return (
    <section id="top" onMouseMove={onMove} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Abstract computational biology hero background with DNA helix and data networks" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-spotlight pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background/70" />
      </div>
      <div className="relative container flex min-h-[72vh] md:min-h-[80vh] items-center">
        <div className="max-w-2xl">
          <h1 className="font-bold text-4xl md:text-6xl tracking-tight leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Your Name
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            PhD Candidate in Computational Biology — genomics, machine learning, and systems biology. I build methods to decode biological data.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#publications" aria-label="View selected publications">View publications</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#research" aria-label="Learn about my research">Learn more</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

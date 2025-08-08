const Hero = () => {
  return (
    <section id="top" className="relative bg-hero">
      <div className="container flex min-h-[40vh] md:min-h-[48vh] items-center">
        <div className="max-w-2xl">
          <h1 className="font-bold text-4xl md:text-6xl tracking-tight leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Lior Greenspoon
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            PhD Candidate in Computational Biology — genomics, machine learning, and systems biology. I build methods to decode biological data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const Hero = () => {
  return (
    <section id="top" className="relative bg-hero text-hero-foreground">
      <div className="container flex min-h-[40vh] md:min-h-[48vh] items-center">
        <div className="max-w-2xl">
          <h1 className="font-bold text-xl md:text-3xl tracking-tight leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Lior Greenspoon
          </h1>
          <p className="mt-4 text-base md:text-lg">
            PhD Candidate | Computational Ecology | Weizmann Institute of Science
          </p>
          <p className="mt-3 text-sm md:text-base">
            I'm a PhD candidate in the <a href="https://www.weizmann.ac.il/plants/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-90">Department of Plant and Environmental Sciences</a> at&nbsp;the&nbsp;Weizmann&nbsp;Institute&nbsp;of&nbsp;Science and an <a href="http://www.luc.edu/sustainability/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-90">Institute for Environmental Sustainability (IES)</a> Fellow, working with <a href="https://www.weizmann.ac.il/plants/milo/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-90">Professor Ron Milo</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

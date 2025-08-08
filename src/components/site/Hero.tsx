export const Hero = () => {
  return (
    <section id="top" className="relative bg-content text-surface">
      <div className="container flex min-h-[40vh] md:min-h-[48vh] items-center">
        <div className="max-w-2xl">
          <h1
            className="font-bold text-title tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lior Greenspoon
          </h1>
          <p className="mt-4 text-base md:text-lg">
            PhD Candidate | Computational Ecology | Weizmann Institute of
            Science
          </p>
          <p className="mt-3 text-sm md:text-base">
            I'm a PhD candidate in the{" "}
            <a
              href="https://www.weizmann.ac.il/plants/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-90 whitespace-nowrap"
            >
              Department of Plant and Environmental Sciences
            </a>{" "}
            at the Weizmann Institute of Science and an{" "}
            <a
              href="http://www.luc.edu/sustainability/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-90 whitespace-nowrap"
            >
              Institute for Environmental Sustainability (IES)
            </a>{" "}
            Fellow, working with{" "}
            <a
              href="https://www.weizmann.ac.il/plants/milo/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-90 whitespace-nowrap"
            >
              Professor Ron Milo
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

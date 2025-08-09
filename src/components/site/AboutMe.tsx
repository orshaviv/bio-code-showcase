export const AboutMe = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="text-heading font-semibold text-secondary">About me</h2>
        <div className="mt-6 flex flex-wrap items-start gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border border-secondary shrink-0">
            <img
              src="8856ad5a-e62c-49e9-8927-c04283af4956.png"
              alt="Profile picture of Lior Greenspoon"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <p className="text-secondary/70 max-w-2xl">
            I use data-driven, computational methods to answer key quantitative
            questions about our biosphere. <br />
            <br /> My current focus is on quantifying wildlife in an the age of
            intense human-driven pressures on our planet's ecosystems. Following
            our estimate of the current-day global biomass composition of all
            mammals, we are tackling questions like - what was the temporal
            dynamics of mammalian biomass over the past two centuries? What is
            the current global biomass of all birds, and how does it distribute
            between various groups?
            <br />
            <br />I hold a dual BSc, in computer science and geology, from Ben
            Ben Gurion University of the Negev, and an MSc in global ecology
            from the Weizmann Institute of Science.
          </p>
        </div>
      </div>
    </section>
  );
};

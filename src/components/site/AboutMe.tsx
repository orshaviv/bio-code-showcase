const AboutMe = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">About me</h2>
        <div className="mt-6 flex items-start gap-6">
          <div className="w-40 h-40 rounded-full overflow-hidden border border-border shrink-0">
            <img
              src="/lovable-uploads/9f18f4a9-eb2a-4a1a-8e5b-08938f946dca.png"
              alt="Profile picture of Lior Greenspoon"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-muted-foreground max-w-2xl">
            I'm a PhD candidate passionate about computational biology. This is placeholder text; we can replace it with your
            real bio, interests, and current projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

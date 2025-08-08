const AboutMe = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container grid gap-8 md:grid-cols-[160px,1fr] items-start">
        <img
          src="/placeholder.svg"
          alt="Profile picture of Lior Greenspoon (placeholder)"
          className="w-40 h-40 rounded-full object-cover border border-border"
          loading="lazy"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">About me</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            I'm a PhD candidate passionate about computational biology. This is placeholder text; we can replace it with your
            real bio, interests, and current projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

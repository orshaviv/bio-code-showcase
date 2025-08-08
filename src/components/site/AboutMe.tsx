export const AboutMe = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-heading font-semibold text-secondary">About me</h2>
        <div className="mt-6 flex items-start gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border border-secondary shrink-0">
            <img
              src="/lovable-uploads/8856ad5a-e62c-49e9-8927-c04283af4956.png"
              alt="Profile picture of Lior Greenspoon"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <p className="text-secondary/70 max-w-2xl">
            I'm a PhD candidate passionate about computational biology. This is
            placeholder text; we can replace it with your real bio, interests,
            and current projects.
          </p>
        </div>
      </div>
    </section>
  );
};

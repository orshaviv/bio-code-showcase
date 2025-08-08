export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-surface border-b border-secondary">
      <nav className="container flex h-14 items-center justify-center">
        <div className="flex items-center gap-6 text-sm">
          <a
            href="#publications"
            className="hover:text-secondary/80 transition-colors"
          >
            Publications
          </a>
          <a
            href="#about"
            className="hover:text-secondary/80 transition-colors"
          >
            About me
          </a>
          <a
            href="#contact"
            className="hover:text-secondary/80 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

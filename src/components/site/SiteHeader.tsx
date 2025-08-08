export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container flex h-14 items-center justify-center">
        <div className="flex items-center gap-6 text-sm">
          <a href="#publications" className="hover:text-foreground/80 transition-colors">Publications</a>
          <a href="#about" className="hover:text-foreground/80 transition-colors">About me</a>
          <a href="#contact" className="hover:text-foreground/80 transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
};


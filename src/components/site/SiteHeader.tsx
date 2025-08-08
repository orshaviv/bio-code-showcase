import { Button } from "@/components/ui/button";
import { Mail, BookOpen, FileText } from "lucide-react";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container flex h-14 items-center justify-between">
        <a href="#top" className="inline-flex items-center gap-2 font-semibold">
          <span className="text-gradient">Computational Biology</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#research" className="hover:text-foreground/80 transition-colors">Research</a>
          <a href="#publications" className="hover:text-foreground/80 transition-colors">Publications</a>
          <a href="#contact" className="hover:text-foreground/80 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <a href="#publications" aria-label="View publications">
              <BookOpen className="mr-2" /> Publications
            </a>
          </Button>
          <Button asChild variant="brand">
            <a href="mailto:you@example.com" aria-label="Email me">
              <Mail className="mr-2" /> Email
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;

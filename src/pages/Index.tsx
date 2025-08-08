import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { AboutMe } from "@/components/site/AboutMe";
import { PublicationsPreview } from "@/components/site/PublicationsPreview";
import { ContactSection } from "@/components/site/ContactSection";
import { Seo } from "@/components/site/Seo";

export const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo />
      <SiteHeader />
      <main>
        <Hero />
        <PublicationsPreview />
        <AboutMe />
        <ContactSection />
      </main>
      <footer className="border-t border-border py-8">
        <div className="container text-sm text-muted-foreground flex flex-col sm:flex-row gap-2 items-center justify-between">
          <p>&copy; {new Date().getFullYear()} Lior Greenspoon</p>
          <nav className="flex items-center gap-4">
            <a href="#publications" className="hover:text-foreground/80">Publications</a>
            <a href="#about" className="hover:text-foreground/80">About me</a>
            <a href="#contact" className="hover:text-foreground/80">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};


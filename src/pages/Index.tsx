import { AboutMe } from "@/components/site/AboutMe";
import { ContactSection } from "@/components/site/ContactSection";
import { Hero } from "@/components/site/Hero";
import { PublicationsPreview } from "@/components/site/PublicationsPreview";
import { Seo } from "@/components/site/Seo";
import { SiteHeader } from "@/components/site/SiteHeader";

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
        </div>
      </footer>
    </div>
  );
};

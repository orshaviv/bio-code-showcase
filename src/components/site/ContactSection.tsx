import { Mail, Linkedin, Globe } from "lucide-react";


const ContactSection = () => {
  const email = "lior.greenspoon@gmail.com";
  const blueskyHandle = "@liorgreenspoon.bsky.social";
  const blueskyUrl = "https://bsky.app/profile/liorgreenspoon.bsky.social";
  const linkedinUrl = "https://www.linkedin.com/in/lior-greenspoon";

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <address className="mt-8 not-italic">
          <ul className="space-y-3">
            <li>
              <a href={`mailto:${email}`} className="inline-flex items-center gap-2 hover:text-foreground/80">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span className="font-medium">Email:</span>
                <span className="text-muted-foreground">{email}</span>
              </a>
            </li>
            <li>
              <a
                href={blueskyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground/80"
                aria-label={`Bluesky profile ${blueskyHandle}`}
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span className="font-medium">Bluesky:</span>
                <span className="text-muted-foreground">{blueskyHandle}</span>
              </a>
            </li>
            <li>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground/80"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                <span className="font-medium">LinkedIn:</span>
                <span className="text-muted-foreground">linkedin.com/in/lior-greenspoon</span>
              </a>
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
};

export default ContactSection;

import { Mail } from "lucide-react";

export const ContactSection = () => {
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
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 hover:text-foreground/80"
                aria-label={`Email ${email}`}
              >
                <Mail
                  className="w-5 h-5"
                  color="var(--content)"
                  aria-hidden="true"
                />
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
                <img
                  src="/icons/bluesky.svg"
                  alt=""
                  className="w-5 h-5"
                  loading="lazy"
                  aria-hidden="true"
                />
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
                <img
                  src="/icons/linkedin.svg"
                  alt=""
                  className="w-5 h-5"
                  loading="lazy"
                  aria-hidden="true"
                />
                <span className="text-muted-foreground">
                  linkedin.com/in/lior-greenspoon
                </span>
              </a>
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
};

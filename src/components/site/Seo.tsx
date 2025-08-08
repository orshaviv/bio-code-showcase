export const Seo = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lior Greenspoon",
    jobTitle:
      "PhD Candidate | Computational Ecology | Weizmann Institute of Science",
    affiliation: {
      "@type": "Organization",
      name: "Weizmann Institute of Science",
    },
    url: typeof window !== "undefined" ? window.location.origin : "",
    email: "mailto:lior.greenspoon@gmail.com",
    sameAs: ["#"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};


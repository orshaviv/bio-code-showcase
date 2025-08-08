import React from "react";

const Seo = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Your Name",
    jobTitle: "PhD Candidate in Computational Biology",
    affiliation: {
      "@type": "Organization",
      name: "Your Institution",
    },
    url: typeof window !== 'undefined' ? window.location.origin : "",
    email: "mailto:you@example.com",
    sameAs: [
      "#"
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default Seo;

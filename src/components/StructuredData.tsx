export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Luis Fernando Fernández Cruz",
    "jobTitle": "Software Engineer",
    "url": "https://luisfer.vercel.app",
    "sameAs": [
      "https://github.com/luisfer",
      "https://linkedin.com/in/luisfer",
      "https://twitter.com/luisfer"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "MaxiSend"
    },
    "knowsAbout": [
      "React",
      "Angular",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "Web Development",
      "Frontend Development",
      "Software Engineering"
    ],
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "Uber"
      },
      {
        "@type": "Organization",
        "name": "Cornershop"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

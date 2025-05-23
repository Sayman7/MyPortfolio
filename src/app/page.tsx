import { MacbookScroll } from "@/components/MacbookScroll";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sayman Lal - Portfolio</title>
        <meta name="description" content="Sayman Lal, CodeChemist & Hackathon Winner x 1 👾 Developer | Author | Entrepreneur Always exploring, always creating" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sayman Lal" />
        <meta property="og:description" content="Author | Developer | Entrepreneur" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sayman-lal.vercel.app/" />
        <meta property="og:image" content="https://sayman-lal.vercel.app/Sayman-Lal.jpg" />
        <link rel="canonical" href="https://sayman-lal.vercel.app/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sayman Lal",
              "url": "https://sayman-lal.vercel.app",
              "image": "https://sayman-lal.vercel.app/Sayman-Lal.jpg",
              "jobTitle": "President",
              "worksFor": {
                "@type": "Organization",
                "name": "AIALCHEMIST"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Gyan Ganga Institute of Technology and Sciences (GGITS), Batch AIML2028"
              },
              "description": "CodeChemist & Hackathon Winner x1 👾 | Author | Developer | Entrepreneur Always exploring, always creating",
              "sameAs": [
                "https://www.instagram.com/sayman._.here/",
                "https://www.linkedin.com/in/sayman-lal-30ba65306/",
                "https://github.com/Sayman7"
              ]
            })
          }}
        />
      </Head>

      <main>
        <MacbookScroll />
      </main>
    </>
  );
}

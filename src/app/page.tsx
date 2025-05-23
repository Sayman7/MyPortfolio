import { MacbookScroll } from "@/components/MacbookScroll";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sayman Lal - Portfolio</title>
        <meta name="description" content="Sayman Lal, CodeChemist & Hackathon Winner x1 👾 Developer | Author | Entrepreneur. Always exploring, always creating." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sayman Lal" />
        <meta property="og:description" content="Author | Developer | Entrepreneur" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sayman-lal.vercel.app/" />
        <meta property="og:image" content="https://sayman-lal.vercel.app/Sayman-Lal.jpg" />
        <meta name="google-site-verification" content="GtDRX3ONvRXYgr6Gxfgy4zf1Cml79WpXWbHNIvIoTwE" />
        <link rel="canonical" href="https://sayman-lal.vercel.app/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://sayman-lal.vercel.app/#person",
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
              "description": "CodeChemist & Hackathon Winner x1 👾 | Author | Developer | Entrepreneur. Always exploring, always creating.",
              "sameAs": [
                "https://www.instagram.com/sayman._.here/",
                "https://www.linkedin.com/in/sayman-lal-30ba65306/",
                "https://github.com/Sayman7"
              ],
              "birthPlace": {
                "@type": "Place",
                "name": "Jabalpur, Madhya Pradesh, India - 482001"
              },
              "knowsAbout": [
                "Web Development",
                "Hackathons",
                "Startup Innovation",
                "AI, Machine Learning, Web3, Blockchain, MERN Stack, AWS Cloud",
                "Book & Article Writing"
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

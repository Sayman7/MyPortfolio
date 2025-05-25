import { MacbookScroll } from "@/components/MacbookScroll";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sayman Lal - Portfolio</title>
        <meta name="description" content="Hello I am Sayman Lal, CodeChemist & Hackathon Winner x1 Developer | Author | Entrepreneur Always exploring, always creating" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sayman Lal" />
        <meta property="og:description" content="Author | Developer | Entrepreneur" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://worksofsayman.vercel.app/" />
        <meta property="og:image" content="https://worksofsayman.vercel.app/Sayman-Lal.jpg" />
        <meta name="google-site-verification" content="GtDRX3ONvRXYgr6Gxfgy4zf1Cml79WpXWbHNIvIoTwE" />
        <link rel="canonical" href="https://worksofsayman.vercel.app/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://worksofsayman.vercel.app/#person",
              "name": "Sayman Lal",
              "url": "https://worksofsayman.vercel.app",
              "image": "https://worksofsayman.vercel.app/Sayman-Lal.jpg",
              "jobTitle": "Developer, Author, Entrepreneur",
              "worksFor": {
                "@type": "Organization",
                "name": "AIALCHEMIST"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Gyan Ganga Institute of Technology and Sciences (GGITS), Batch AIML2028"
              },
              "description": "CodeChemist & Hackathon Winner x1 Developer | Author | Entrepreneur Always exploring, always creating",
              "sameAs": [
                "https://www.wikidata.org/wiki/Q134550711",
                "https://github.com/worksofsayman",
                "https://instagram.com/worksofsayman",
                "https://www.linkedin.com/in/worksofsayman",
                "https://www.goodreads.com/author/show/56423682.Sayman_Lal",
                "https://www.amazon.in/dp/B0F8D7PHL2"
              ],
              "birthPlace": {
                "@type": "Place",
                "name": "Jabalpur, Madhya Pradesh, India - 482001"
              },
              "birthDate": "2007-01-07",
              "knowsLanguage": ["English", "Hindi"],
              "knowsAbout": [
                "Web Development",
                "Hackathons",
                "Startup Innovation",
                "AI, Machine Learning, Web3, Blockchain, MERN Stack, AWS Cloud",
                "Book & Article Writing"
              ],
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://worksofsayman.vercel.app/"
              }
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

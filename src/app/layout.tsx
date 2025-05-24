import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sayman Lal | Portfolio",
  description:
    "Sayman Lal, CodeChemist & Hackathon Winner x 1  Developer | Author | Entrepreneur Always exploring, always creating",
  metadataBase: new URL("https://worksofsayman.vercel.app"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "GtDRX3ONvRXYgr6Gxfgy4zf1Cml79WpXWbHNIvIoTwE",
  },
  openGraph: {
    title: "Sayman Lal",
    description: "Author | Developer | Entrepreneur",
    url: "https://worksofsayman.vercel.app",
    type: "website",
    images: [
      {
        url: "https://worksofsayman.vercel.app/Sayman-Lal.jpg",
        width: 1200,
        height: 630,
        alt: "Sayman Lal",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
              "jobTitle": "President",
              "worksFor": {
                "@type": "Organization",
                "name": "AIALCHEMIST",
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Gyan Ganga Institute of Technology and Sciences (GGITS), Batch AIML2028",
              },
              "description":
                "CodeChemist & Hackathon Winner x1 | Author | Developer | Entrepreneur Always exploring, always creating",
              "sameAs": [
                "https://www.instagram.com/worksofsayman/",
                "https://www.linkedin.com/in/worksofsayman",
                "https://github.com/worksofsayman",
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
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

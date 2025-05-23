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
  title: "Sayman Lal - Portfolio",
  description:
    "Sayman Lal, CodeChemist & Hackathon Winner x 1 👾 Developer | Author | Entrepreneur. Full Stack Developer at AIALCHEMIST. GGITS AIML’28. Always exploring, always creating.",
  metadataBase: new URL("https://sayman-lal.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sayman Lal",
    description: "Author | Developer | Entrepreneur",
    url: "https://sayman-lal.vercel.app",
    type: "website",
    images: [
      {
        url: "https://sayman-lal.vercel.app/Sayman-Lal.jpg",
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
  other: {
    // Custom JSON-LD Schema added here
    "ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sayman Lal",
      "url": "https://sayman-lal.vercel.app",
      "image": "https://sayman-lal.vercel.app/Sayman-Lal.jpg",
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
        "CodeChemist & Hackathon Winner x1 👾 | Author | Developer | Entrepreneur. Always exploring, always creating.",
      "sameAs": [
        "https://www.instagram.com/sayman._.here/",
        "https://www.linkedin.com/in/sayman-lal-30ba65306/",
        "https://github.com/Sayman7",
      ],
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

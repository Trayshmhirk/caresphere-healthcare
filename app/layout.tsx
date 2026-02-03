import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Caresphere Healthcare LLC",
    template: "%s | Caresphere Healthcare LLC",
  },
  description:
    "Licensed non-medical home care in Los Angeles. Professional caregivers providing senior companionship, meal prep, and Alzheimer's support. Dedicated to dignity and safety at home.",
  keywords: [
    "Home care Los Angeles",
    "Senior care services CA",
    "Non-medical home care",
    "In-home caregivers Los Angeles",
    "Alzheimer's care at home",
    "Elderly companionship services",
    "Caresphere Healthcare",
  ],
  authors: [{ name: "Caresphere Healthcare LLC" }],
  creator: "Caresphere Healthcare LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.caresphereservices.com/", // Update with your actual domain
    siteName: "Caresphere Healthcare LLC",
    title: "Compassionate & Reliable Home Care | Caresphere Healthcare LLC",
    description:
      "Supporting seniors and adults to live safely and comfortably at home across Los Angeles. Fully licensed and insured.",
    images: [
      {
        url: "https://i.postimg.cc/HxbmYnzT/Caresphere-Healthcare-LLC.jpg",
        width: 1200,
        height: 630,
        alt: "Caresphere Healthcare Home Care Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caresphere Healthcare | Home Care Services in LA",
    description: "Licensed non-medical home care supporting independence and dignity for seniors.",
    images: ["https://i.postimg.cc/HxbmYnzT/Caresphere-Healthcare-LLC.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans text-gray-700 antialiased`}
      >
        {children}
        <Toaster
          position="top-right"
          visibleToasts={2}
          closeButton={true}
          theme="light"
          richColors
        />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndCommunityCare",
              name: "Caresphere Healthcare LLC",
              image: "https://i.postimg.cc/gJdnvCnQ/caresphere-image5.jpg",
              "@id": "https://www.caresphereservices.com",
              url: "https://www.caresphereservices.com",
              telephone: "(123) 456-7890", // Update with real number
              address: {
                "@type": "PostalAddress",
                streetAddress: "YOUR_STREET_ADDRESS",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                postalCode: "YOUR_ZIP",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.0522,
                longitude: -118.2437,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              areaServed: "Los Angeles & Surrounding Areas",
              description: "Licensed non-medical home care services supporting seniors and adults.",
            }),
          }}
        /> */}
      </body>
    </html>
  );
}

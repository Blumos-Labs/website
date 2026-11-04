import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, LEGAL_NAME, CONTACT_EMAIL, CONTACT_PHONE, sameAs } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const description =
  "Blumos Labs (Blumos) builds BMS software and BMS IoT for EV batteries: a white-label Bluetooth BMS app for JBD, JK and Daly smart BMS, and the Blu-400 telematics device with GPS, CAN and BLE.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Blumos Labs: BMS Software, BMS IoT & JBD / JK / Daly BMS App",
    template: "%s | Blumos Labs",
  },
  description,
  applicationName: SITE_NAME,
  keywords: [
    "BMS software", "BMS app", "BMS IoT", "BMS GPS tracker", "battery monitoring IoT", "EV telematics",
    "JBD BMS app", "JK BMS app", "Daly BMS app", "JBD software", "JK software", "Daly software",
    "smart BMS Bluetooth app", "white label BMS app", "OEM battery app", "EV battery monitoring", "Blumos", "Blumos Labs", "Blumos BMS",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/",
    title: "Blumos Labs: BMS Software, BMS IoT & JBD / JK / Daly BMS App",
    description,
  },
  twitter: { card: "summary_large_image", title: "Blumos Labs: BMS Software, BMS IoT & JBD / JK / Daly BMS App", description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

export const viewport: Viewport = { themeColor: "#2D7AFD" };

const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["Blumos", "Blumos Labs Pvt Ltd", "Blumos Labs Private Limited"],
    legalName: LEGAL_NAME,
    sameAs: sameAs(),
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    areaServed: "Worldwide",
    knowsAbout: ["Battery management systems", "BMS software", "EV telematics", "IoT", "JBD BMS", "JK BMS", "Daly BMS"],
    contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: CONTACT_EMAIL, telephone: CONTACT_PHONE, availableLanguage: ["English", "Hindi"] }],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: "Blumos",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <JsonLd data={siteJsonLd} />
        {children}
      </body>
    </html>
  );
}

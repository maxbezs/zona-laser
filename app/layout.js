import Footer from "./components/Footer";
import "./globals.css";
import localFont from "next/font/local";
import { Montserrat, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./components/GoogleAnalytics";
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "Depilacja laserowa, masaż , SPA, Zona Laser Kraków",
    image: "https://zona-laser.pl/depilacja-mezczyzn.jpg",
    telephone: "+48 732 653 479",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Marszałka Józefa Piłsudskiego 19",
      addressLocality: "Kraków",
      addressRegion: "MA",
      postalCode: "31-110",
      addressCountry: "PL",
    },
    url: "https://zona-laser.pl/",
    description:
      "Odkryj wyjątkowe usługi w Zona Laser: specjalistyczna depilacja męska i unikalny masaż kosmetyczny.",
  };
  return (
    <html lang="pl" className={`${openSans.variable} ${montserrat.variable}`}>
      <GoogleAnalytics />
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://zona-laser.pl/" />
        <title>
          Profesjonalna Depilacja Męska i Unikalny Masaż Kosmetyczny | Zona
          Laser
        </title>
        <meta
          name="description"
          content="Odkryj wyjątkowe usługi w Zona Laser: specjalistyczna depilacja męska i unikalny masaż kosmetyczny. Nasze ekskluzywne techniki zapewniają maksymalny komfort i znakomite efekty. Zarezerwuj wizytę już dziś i doświadcz różnicy!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:url" content="https://zona-laser.pl/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Profesjonalna Depilacja Męska i Unikalny Masaż Kosmetyczny | Zona Laser"
        />
        <meta
          property="og:description"
          content="Odkryj wyjątkowe usługi w Zona Laser: specjalistyczna depilacja męska i unikalny masaż kosmetyczny. Nasze ekskluzywne techniki zapewniają maksymalny komfort i znakomite efekty. Zarezerwuj wizytę już dziś i doświadcz różnicy!"
        />
        <meta
          property="og:image"
          content="https://zona-laser.pl/depilacja-mezczyzn.jpg"
        />
        <meta property="og:site_name" content="Zona Laser" />
        <meta property="og:locale" content="pl_PL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="zona-laser.pl" />
        <meta property="twitter:url" content="https://zona-laser.pl/" />
        <meta
          name="twitter:title"
          content="Profesjonalna Depilacja Męska i Unikalny Masaż Kosmetyczny | Zona Laser"
        />
        <meta
          name="twitter:description"
          content="Odkryj wyjątkowe usługi w Zona Laser: specjalistyczna depilacja męska i unikalny masaż kosmetyczny. Nasze ekskluzywne techniki zapewniają maksymalny komfort i znakomite efekty. Zarezerwuj wizytę już dziś i doświadcz różnicy!"
        />
        <meta
          name="twitter:image"
          content="https://zona-laser.pl/depilacja-mezczyzn.jpg"
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Footer /> <Analytics />
      </body>
    </html>
  );
}

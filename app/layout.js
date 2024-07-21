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
  return (
    <html lang="en" className={`${openSans.variable} ${montserrat.variable}`}>
      <GoogleAnalytics />
      <head>
        <title>
          Profesjonalna Depilacja Męska i Unikalny Masaż Kosmetyczny | Zona
          Laser
        </title>
        <meta
          name="description"
          content=" Odkryj wyjątkowe usługi w Zona Laser: specjalistyczna depilacja męska i unikalny masaż kosmetyczny. Nasze ekskluzywne techniki zapewniają maksymalny komfort i znakomite efekty. Zarezerwuj wizytę już dziś i doświadcz różnicy!"
        />
        <link rel="icon" href="/favicon.ico"></link>
        <meta property="og:url" content="https://zona-laser.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Profesjonalna Depilacja Męska i Unikalny Masaż Kosmetyczny | Zona Laser"
        />
        <meta
          property="og:description"
          content=" Odkryj wyjątkowe usługi w Zona Laser: specjalistyczna depilacja męska i unikalny masaż kosmetyczny. Nasze ekskluzywne techniki zapewniają maksymalny komfort i znakomite efekty. Zarezerwuj wizytę już dziś i doświadcz różnicy!"
        />
        <meta
          property="og:image"
          content="https://zona-laser.vercel.app/depilacja-mezczyzn.jpg"
        />
        <meta property="og:site_name" content="Zona Laser"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="zona-laser.vercel.app" />
        <meta property="twitter:url" content="https://zona-laser.vercel.app/" />
        <meta
          name="twitter:title"
          content="Profesjonalna Depilacja Męska i Unikalny Masaż Kosmetyczny | Zona
          Laser"
        />
        <meta
          name="twitter:description"
          content=" Odkryj wyjątkowe usługi w Zona Laser: specjalistyczna depilacja męska i unikalny masaż kosmetyczny. Nasze ekskluzywne techniki zapewniają maksymalny komfort i znakomite efekty. Zarezerwuj wizytę już dziś i doświadcz różnicy!"
        />
        <meta
          name="twitter:image"
          content="https://zona-laser.vercel.app/depilacja-mezczyzn.jpg"
        />
      </head>
      <body>
        {children}
        <Footer /> <Analytics />
      </body>
    </html>
  );
}

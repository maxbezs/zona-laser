import Footer from "./components/Footer";
import "./globals.css";
import localFont from "next/font/local";
import { Montserrat, Open_Sans } from "next/font/google";

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
      <head>
        <title>
          Profesjonalna Depilacja Męska i Unikalny Masaż Kosmetyczny | Zona
          Laser
        </title>
        <meta
          name="description"
          content=" Odkryj wyjątkowe usługi w Zona Laser: specjalistyczna depilacja męska i unikalny masaż kosmetyczny. Nasze ekskluzywne techniki zapewniają maksymalny komfort i znakomite efekty. Zarezerwuj wizytę już dziś i doświadcz różnicy!"
        />

        <meta property="og:url" content="https://zona-laser.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Nowoczesny Salon Urody: Profesjonalna Depilacja Laserowa -30%"
        />
        <meta
          property="og:description"
          content=" Skorzystaj z wyjątkowej oferty i ciesz się gładką skórą z 30% rabatem na pierwszą wizytę! Odwiedź nas już dziś i odkryj skuteczność naszych zaawansowanych technologii w usuwaniu zbędnego owłosienia."
        />
        <meta
          property="og:image"
          content="https://zona-laser.vercel.app/logo.png"
        />

        <meta
          name="twitter:card"
          content="https://zona-laser.vercel.app/banner-bg.jpg"
        />
        <meta property="twitter:domain" content="zona-laser.vercel.app" />
        <meta property="twitter:url" content="https://zona-laser.vercel.app/" />
        <meta
          name="twitter:title"
          content="Nowoczesny Salon Urody: Profesjonalna Depilacja Laserowa -30%"
        />
        <meta
          name="twitter:description"
          content=" Skorzystaj z wyjątkowej oferty i ciesz się gładką skórą z 30% rabatem na pierwszą wizytę! Odwiedź nas już dziś i odkryj skuteczność naszych zaawansowanych technologii w usuwaniu zbędnego owłosienia."
        />
        <meta
          name="twitter:image"
          content="https://zona-laser.vercel.app/logo.png"
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

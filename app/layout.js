import Footer from "./components/Footer";
import "./globals.css";
import localFont from "next/font/local";
import { Montserrat, Open_Sans } from "next/font/google";

export const metadata = {
  title: "Nowoczesny Salon Urody: Profesjonalna Depilacja Laserowa -30%",
  description:
    " Skorzystaj z wyjątkowej oferty i ciesz się gładką skórą z 30% rabatem na pierwszą wizytę! Odwiedź nas już dziś i odkryj skuteczność naszych zaawansowanych technologii w usuwaniu zbędnego owłosienia.",
};

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
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

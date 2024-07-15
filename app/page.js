import Image from "next/image";
import Header from "./components/Header";
import { Suspense } from "react";
import { Video } from "./components/Video";
import Section from "./components/Section";
import { depilationInfo, massageInfo } from "./data";
import Button from "./components/Button";
import H2 from "./components/H2";
import H3 from "./components/H3";
export const metadata = {
  title: "Nowoczesny Salon Urody: Profesjonalna Depilacja Laserowa -30%",
  description:
    " Skorzystaj z wyjątkowej oferty i ciesz się gładką skórą z 30% rabatem na pierwszą wizytę! Odwiedź nas już dziś i odkryj skuteczność naszych zaawansowanych technologii w usuwaniu zbędnego owłosienia.",
};
export default function Home() {
  return (
    <div className="flex flex-col  ">
      <Header />
      <div className="mt-[185px]">
        <div className="flex flex-col gap-4 relative p-6">
          <h1 className="text-3xl font-montserrat font-bold text-[#ECDAC9] ">
            Doświadcz profesjonalnej depilacji męskiej i unikalnego masażu
            kosmetycznego
          </h1>
          <p className="font-opensans text-white">
            Specjalistyczne usługi dla mężczyzn | Innowacyjne techniki masażu
          </p>

          <Button
            href={
              "https://booksy.com/pl-pl/226699_zona-laser_depilacja_8820_krakow"
            }
          >
            Zarezerwuj wizytę teraz
          </Button>
          <Image
            alt="lady"
            src="/banner-bg.jpg"
            fill
            className="w-full object-cover relative -z-10"
          />
        </div>
        <div className="px-2">
          <H2>Specjalne oferty!</H2>
          <div className="flex flex-col gap-6">
            <div className="rounded-xl bg-[#ECDAC9] p-4">
              <H3>Profesjonalna Depilacja Męska</H3>
              <p className="font-opensans">
              Oferujemy specjalistyczną depilację dla mężczyzn, zapewniając maksymalny komfort i doskonałe rezultaty. Oferujemy specjalną propozycję: 30% zniżki na każdą pierwszą wizytę.
              </p>
              <Image
                alt="depilacja mezczyzn"
                src="/depilacja-mezczyzn.jpg"
                width="160"
                height="160"
                className="rounded-2xl w-full h-auto my-4"
              />
              <a
                href={
                  "https://booksy.com/pl-pl/226699_zona-laser_depilacja_8820_krakow"
                }
                className="text-white bg-[#8B5132] py-3 px-4 flex rounded-lg justify-center  align-baseline cursor-pointer select-none no-underline font-opensans"
              >
                Zarezerwuj wizytę teraz
              </a>
            </div>
            <div className="rounded-xl bg-[#ECDAC9] p-4">
              <H3>Unikalny Masaż Kosmetyczny</H3>
              <p className="font-opensans">
                Odkryj naszą ekskluzywną technikę masażu, łączącą tradycyjne i
                innowacyjne metody dla doskonałych efektów na skórze i relaksu.
              </p>
              <Image
                alt="massage"
                src="/massage.jpg"
                width="160"
                height="160"
                className="rounded-2xl w-full h-auto my-4"
              />
              <a
                href={
                  "https://booksy.com/pl-pl/226699_zona-laser_depilacja_8820_krakow"
                }
                className="text-white bg-[#8B5132] py-3 px-4 flex rounded-lg justify-center  align-baseline cursor-pointer select-none no-underline font-opensans"
              >
                Zarezerwuj wizytę teraz
              </a>
            </div>
          </div>
        </div>
        <div id="laser"></div>
        <div className="px-2">
          <H2>Depilacja Laserowa</H2>
          <Suspense fallback={"Loading..."}>
            <Video url="/laser-video.mp4" />
          </Suspense>
          {depilationInfo.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
        <div id="masaz"></div>
        <div className="p-2">
          <H2>Masaz</H2>
          <Suspense fallback={"Loading..."}>
            <Video url="/laser-video.mp4" />
          </Suspense>
          {massageInfo.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
        <div className="my-6 p-2">
          <H2>Nasz zespół</H2>
          <div className="grid grid-cols-2 gap-2 ">
            <div className="flex flex-col items-center">
              <Image
                alt="zona laser logo"
                src="/masazz.jpg"
                width="160"
                height="160"
                className="rounded-2xl w-40 h-40 bg-[#faf1ea] object-contain"
              />
              <H3 className="font-montserrat text-xl  text-center text-[#8B5132]">
                Kateryna
              </H3>
              <p className="font-opensans">Masażysta</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt="zona laser logo"
                src="/laser.jpg"
                width="160"
                height="160"
                className="rounded-2xl w-40 h-40 bg-[#faf1ea] object-contain"
              />
              <H3 className="font-montserrat text-xl  text-center text-[#8B5132]">
                Yanita
              </H3>
              <p className="font-opensans text-center">
                Specjalista depilacji laserowej
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

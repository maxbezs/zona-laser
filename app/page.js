import Image from "next/image";
import Header from "./components/Header";
import { Suspense } from "react";
import { Video } from "./components/Video";
import Section from "./components/Section";
import { depilationInfo, massageInfo, cosmeticInfo } from "./data";
import Button from "./components/Button";
import H2 from "./components/H2";
import H3 from "./components/H3";
import ServiceCard from "./components/ServiceCard";

export default function Home() {
  return (
    <div className="flex flex-col  ">
      <Header />
      <div className="mt-[185px]">
        <div className="flex flex-col gap-4 relative p-6 sm:p-64">
          <h1 className="text-3xl font-montserrat font-bold text-[#ECDAC9] sm:max-w-2xl">
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
          <div className="flex flex-col sm:flex-row sm:max-w-7xl mx-auto gap-6">
            <ServiceCard
              heading="Profesjonalna Depilacja Męska"
              paragraph="Oferujemy specjalistyczną depilację dla mężczyzn, zapewniając maksymalny komfort i doskonałe rezultaty. Oferujemy specjalną propozycję: 30% zniżki na pierwszą wizytę."
              imageUrl="/depilacja-mezczyzn.jpg"
              linkUrl="https://booksy.com/pl-pl/226699_zona-laser_depilacja_8820_krakow"
            />
            <ServiceCard
              heading="Unikalny Masaż Kosmetyczny"
              paragraph="Odkryj naszą ekskluzywną technikę masażu, łączącą tradycyjne i innowacyjne metody dla doskonałych efektów na skórze i relaksu. Oferujemy unikalny masaż, który łączy w sobie dwie techniki: masaż miofascialny i transbukalny oraz odmładzającą maskę – potrójny efekt w cenie jednego tylko 220 zł!"
              imageUrl="/face-massage.jpg"
              linkUrl="https://booksy.com/pl-pl/226699_zona-laser_depilacja_8820_krakow"
            />
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
          <div className="flex w-full flex-col sm:flex-row sm:flex-wrap sm:max-w-6xl sm:mx-auto">
            {massageInfo.map((section, index) => (
              <Section
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>
        </div>
        <div id="cosmetic"></div>
        <div className="p-2">
          <H2>Kosmetologia</H2>
          <Suspense fallback={"Loading..."}>
            <Video url="/cosmetics.mp4" />
          </Suspense>
          <div className="flex w-full flex-col sm:flex-row sm:flex-wrap sm:max-w-6xl sm:mx-auto">
            {cosmeticInfo.map((section, index) => (
              <Section
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>
        </div>
        <div className="my-6 p-2">
          <H2>Nasz zespół</H2>
          <div className="grid grid-cols-2 gap-2 sm:max-w-2xl sm:mx-auto">
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
                Mistrz depilacji laserowej
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

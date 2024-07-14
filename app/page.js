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
          <h1 className="text-2xl font-montserrat font-bold text-[#ECDAC9] ">
            Depilacja laserowa w Krakowie
          </h1>
          <p className="font-opensans text-white">DLA NOWYCH KLIENTÓW!</p>
          <p className="font-opensans text-[#ECDAC9]">
            <span className="text-white">Zniżka -30%</span> na depilację
            laserową dla nowych klientów na pierwszą wizytę
          </p>
          <Button
            href={
              "https://booksy.com/pl-pl/226699_zona-laser_depilacja_8820_krakow"
            }
          >
            Uzyskać zniżkę
          </Button>
          <Image
            alt="lady"
            src="/banner-bg.jpg"
            fill
            className="w-full object-cover relative -z-10"
          />
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
              <p className="font-opensans">Laser</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

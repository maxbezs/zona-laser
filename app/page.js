import Image from "next/image";
import Header from "./components/Header";
import { Suspense } from "react";
import { Video } from "./components/Video";
import Section from "./components/Section";
import { depilationInfo, massageInfo } from "./data";
import Button from "./components/Button";
export const metadata = {
  title: "Nowoczesny Salon Urody: Profesjonalna Depilacja Laserowa -30%",
  description:
    " Skorzystaj z wyjątkowej oferty i ciesz się gładką skórą z 30% rabatem na pierwszą wizytę! Odwiedź nas już dziś i odkryj skuteczność naszych zaawansowanych technologii w usuwaniu zbędnego owłosienia.",
};
export default function Home() {
  return (
    <div className="flex flex-col p-4">
      <Header />
      <div className="mt-48">
        <div className="flex flex-col gap-4 relative p-6">
          <h1 className="text-2xl ">Depilacja laserowa w Krakowie</h1>
          <p>
            DLA NOWYCH KLIENTÓW! Zniżka -30% na depilację laserową dla nowych
            klientów na pierwszą wizytę
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
            src="/bg-lady.jpg"
            fill
            className="w-full object-cover relative -z-10"
          />
        </div>

        <div>
          <h2
            id="laser"
            className="text-center text-4xl uppercase font-cfont bg-[#faf1ea] py-4 rounded-xl my-4"
          >
            Depilacja laserowa
          </h2>
          <Suspense fallback={"Loading..."}>
            <Video url="https://videos.pexels.com/video-files/855029/855029-hd_1920_1080_30fps.mp4" />
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
        <div>
          <h2 className="text-center text-4xl uppercase font-cfont bg-[#faf1ea] py-4 rounded-xl my-4">
            Masaz
          </h2>
          <Suspense fallback={"Loading..."}>
            <Video url="https://videos.pexels.com/video-files/855401/855401-uhd_2560_1440_25fps.mp4" />
          </Suspense>
          {massageInfo.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
        <div>
          <h2 className="text-center text-4xl uppercase font-cfont bg-[#faf1ea] py-4 rounded-xl my-4">
            Nasz zespół
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <Image
                alt="zona laser logo"
                src="/logo.png"
                width="160"
                height="160"
                className="rounded-2xl w-40 h-40 bg-[#faf1ea] object-contain"
              />
              <h4 className="font-cfont text-xl tracking-wider text-center text-orange-700">
                John Smith
              </h4>
              <p>Laser</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt="zona laser logo"
                src="/logo.png"
                width="160"
                height="160"
                className="rounded-2xl w-40 h-40 bg-[#faf1ea] object-contain"
              />
              <h4 className="font-cfont text-xl tracking-wider text-center text-orange-700">
                John Smith
              </h4>
              <p>Laser</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt="zona laser logo"
                src="/logo.png"
                width="160"
                height="160"
                className="rounded-2xl w-40 h-40 bg-[#faf1ea] object-contain"
              />
              <h4 className="font-cfont text-xl tracking-wider text-center text-orange-700">
                John Smith
              </h4>
              <p>Laser</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                alt="zona laser logo"
                src="/logo.png"
                width="160"
                height="160"
                className="rounded-2xl w-40 h-40 bg-[#faf1ea] object-contain	"
              />
              <h4 className="font-cfont text-xl tracking-wider text-center text-orange-700">
                John Smith
              </h4>
              <p>Laser</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

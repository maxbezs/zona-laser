import Image from "next/image";
import Header from "./components/Header";
import { Suspense } from "react";
import { Video } from "./components/Video";
import Section from "./components/Section";
import { depilationInfo, massageInfo } from "./data";
import Button from "./components/Button";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col p-2">
      <Header />
      <div className="mt-56">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Depilacja laserowa w Krakowie</h1>
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
        </div>

        <div>
          <h2 id="laser" className="text-center text-2xl">
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
          <h2 className=" text-center text-2xl">Masaz</h2>
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
          <h2 className="text-center text-2xl">Nasz zespół</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Image
                alt="zona laser logo"
                src="/logo.png"
                width="160"
                height="160"
              />
              <h4>John Smith</h4>
              <p>Laser</p>
            </div>
            <div>
              <Image
                alt="zona laser logo"
                src="/logo.png"
                width="160"
                height="160"
              />
              <h4>John Smith</h4>
              <p>Laser</p>
            </div>
            <div>
              <Image
                alt="zona laser logo"
                src="/logo.png"
                width="160"
                height="160"
              />
              <h4>John Smith</h4>
              <p>Laser</p>
            </div>
            <div>
              <Image
                alt="zona laser logo"
                src="/logo.png"
                width="160"
                height="160"
              />
              <h4>John Smith</h4>
              <p>Laser</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

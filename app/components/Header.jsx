"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { FaViber, FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Define a threshold width for non-mobile devices
    const thresholdWidth = 768;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setVisible(!isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    let prevScrollPos = window.pageYOffset;

    // Check if the device is not mobile based on screen width
    if (window.innerWidth > thresholdWidth) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-[#faf1ea] border-b-[1px] border-white fixed top-0 left-0 w-full transition-transform duration-300 filter z-50 px-6 transform ${
        visible ? "translate-y-0 " : "-translate-y-full "
      } `}
    >
      <div className="container max-w-6xl mx-auto flex justify-between items-center  h-24">
        <Link href="/" className="h-full">
          <Image
            alt="zona laser logo"
            src="/logo.png"
            width="96"
            height="96"
            priority={true}
          />
        </Link>

        <Button href="https://booksy.com/pl-pl/226699_zona-laser_depilacja_8820_krakow">
          Booksy
        </Button>
      </div>
      <div className="flex  justify-between">
        <p> Piłsudskiego 19, 31-110, Kraków</p>
        <div>
          <p className="w-40 text-right">+48123456789</p>
          <div className="flex justify-end">
            <FaInstagram size={"24"} />
            <p>@zona__laser</p>
          </div>

          <div className=" hidden">
            <FaViber size={"24"} /> <FaWhatsapp size={"24"} />
            <FaTelegram size={"24"} />
          </div>
        </div>
      </div>
      <div className="flex justify-evenly py-4">
        <Button variant={"outline"} href={"#laser"}>
          Laser
        </Button>
        <Button variant={"outline"} href={"#masaz"}>
          Masaz
        </Button>
        <Button
          variant={"outline"}
          href={
            "https://booksy.com/pl-pl/226699_zona-laser_depilacja_8820_krakow"
          }
        >
          Ceny
        </Button>
      </div>
    </header>
  );
};

export default Header;

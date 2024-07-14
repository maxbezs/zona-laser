import Image from "next/image";
import React from "react";
import Button from "./Button";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-6 py-12 bg-[#B28363] border-t-4 border-[#ECDAC9] 	">
      <div className="sm:flex space-y-8 sm:space-y-0 max-w-6xl mx-auto">
        <div className="flex-1 grid grid-cols-2 gap-8 sm:flex sm:flex-col">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                alt="zona laser logo"
                src="/logo.svg"
                width="140"
                height="120"
                priority={true}
              />
            </Link>
            <div className="flex gap-1 ">
              <FaInstagram size={"24"} color="white" />
              <p className=" text-white font-opensans">@zona__laser</p>
            </div>{" "}
            <p className=" text-white font-opensans underline">
              {" "}
              Piłsudskiego 19, 31-110, Kraków
            </p>
          </div>

          <div className="flex flex-col items-center my-auto gap-4">
            <Button href="https://booksy.com/pl-pl/226699_zona-laser_depilacja_8820_krakow">
              Booksy
            </Button>
            <a href="/" className="font-opensans text-white">
              +48731588515
            </a>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-8">
          <div>
            <p className="text-[#ECDAC9] font-montserrat">Serwisy</p>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a className="text-white font-opensans" href="#laser">
                  Laser
                </a>
              </li>
              <li>
                <a className="text-white font-opensans" href="#masaz">
                  Masaz
                </a>
              </li>
            </ul>
          </div>
          <div>
            <label className="text-[#ECDAC9] font-montserrat">Kontakt</label>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a className="text-white font-opensans" href="/blog">
                  Booksy
                </a>
              </li>
              <li>
                <a className="text-white font-opensans" href="/blog">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

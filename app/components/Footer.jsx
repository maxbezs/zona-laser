import Image from "next/image";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="px-6 py-12 bg-[#faf1ea] border-t-[1px] 	">
      <div className="sm:flex space-y-8 sm:space-y-0 max-w-6xl mx-auto">
        <div className="flex-1 grid grid-cols-2 gap-8 sm:flex sm:flex-col">
          <div className="flex flex-col">
            <a href="/">
              <Image
                alt="zona laser logo"
                src="/logo.png"
                width="96"
                height="96"
                priority={true}
              />
            </a>
            <p> Piłsudskiego 19, 31-110, Kraków</p>
            <p>@zona__laser</p>
          </div>

          <div className="flex flex-col">
            <a href="/">+48123456789</a>
            <Button href="https://booksy.com/pl-pl/226699_zona-laser_depilacja_8820_krakow">
              Booksy
            </Button>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-8">
          <div>
            <label className="text-gray-800 dark:text-gray-300 text-sm">
              Services
            </label>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  href="/"
                >
                  Laser
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  href="/contact-us"
                >
                  Masaz
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  href="/pricing"
                >
                  Example
                </a>
              </li>
            </ul>
          </div>
          <div>
            <label className="text-gray-800 dark:text-gray-300 text-sm">
              Kontakt
            </label>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  href="/blog"
                >
                  Booksy
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  href="/blog"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  href="/blog"
                >
                  Tiktok
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

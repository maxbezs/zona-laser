"use client";
import { useState } from "react";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="m-full my-5">
      <div>
        <button
          id="faq__question"
          className={` focus:outline-none  flex w-full items-center justify-between first:rounded-t-md last:rounded-b-md py-5 px-5 text-left font-medium  ${
            isOpen ? "bg-[#B28363] " : "bg-[#D9B493] rounded-b-md "
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <h4 className=" font-montserrat ">{title}</h4>
          <span>
            {isOpen ? (
              <svg
                stroke="currentColor"
                fill="#ECDAC9 "
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-6 w-6 shrink-0 rotate-180"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="#8B5132"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-6 w-6 shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </span>
        </button>
        <div id="faq__answer" className={` ${isOpen ? "visible" : "hidden"}`}>
          <div className=" rounded-b-md p-5  bg-[#D9B493] ">
            <p className="mb-2 font-opensans ">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;

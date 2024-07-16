import Image from "next/image";
import H3 from "./H3";

const ServiceCard = ({ heading, paragraph, imageUrl, linkUrl }) => {
  return (
    <>
      <div className="rounded-xl flex flex-col w-full bg-[#ECDAC9] p-4 sm:hidden">
        <div>
          <H3>{heading}</H3>
          <p className="font-opensans">{paragraph}</p>
        </div>
        <Image
          alt={heading}
          src={imageUrl}
          width={1080}
          height={1350}
          className="rounded-2xl w-full h-auto my-4"
        />
        <a
          href={linkUrl}
          className="text-white bg-[#8B5132] py-3 px-4 flex rounded-lg justify-center cursor-pointer select-none no-underline font-opensans"
        >
          Zarezerwuj wizytę teraz
        </a>
      </div>
      <div className="hidden sm:flex rounded-xl bg-[#ECDAC9] p-4 sm:w-1/2">
        <Image
          alt={heading}
          src={imageUrl}
          width={1080}
          height={1350}
          className="rounded-2xl w-1/2 h-auto my-4"
        />
        <div className="flex flex-col ml-4 items-center justify-center">
          <H3>{heading}</H3>
          <p className="font-opensans">{paragraph}</p>
          <a
            href={linkUrl}
            className="text-white bg-[#8B5132] py-3 px-4 flex rounded-lg justify-center cursor-pointer select-none no-underline font-opensans mt-4"
          >
            Zarezerwuj wizytę teraz
          </a>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;

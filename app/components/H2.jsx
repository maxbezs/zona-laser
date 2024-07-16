import React from "react";

const H2 = ({ children }) => {
  return (
    <h2 className="text-center text-2xl font-semibold font-montserrat bg-[#ECDAC9] py-4 rounded-xl my-4 sm:max-w-2xl sm:mx-auto">
      {children}
    </h2>
  );
};

export default H2;

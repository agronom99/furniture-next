import React from "react";
import Image from "next/image";
import Rectangle from "../../public/Rectangle_1441_h.jpg";

const Footer = () => {
  return (
    <div className=" relative w-11/12 mx-auto ">
      <Image
        className="absolute z-0 rounded-xl w-full h-full "
        alt="Rectangle"
        src={Rectangle}
        priority
      />
      <div className="text-white relative text-center p-5">
        <h3>Footer</h3>
        <h3>Footer</h3>
        <h3>Footer</h3>
      </div>
    </div>
  );
};

export default Footer;

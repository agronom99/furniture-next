import React from "react";
import Image from "next/image";
import Rectangle from "../../public/Rectangle_1441_h.jpg";

const Footer = () => {
  return (
    <div className=" rounded-xl">
      <Image
        className="absolute z-0 rounded-xl w-full"
        alt="Rectangle"
        src={Rectangle}
        // height={200}
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

"use client";

import React from "react";
import Image from "next/image";
import Rectangle from "../../public/Rectangle_1441_h.jpg";
import Navigation from './Navigation'

const Footer = () => {
  const [navigationId, setNavigationId] = React.useState();

  return (
    <div className=" flex flex-col-reverse lg:flex-row-reverse justify-around relative w-11/12 mx-auto ">
    <Image
      className="absolute z-0 rounded-xl w-full h-full   "
      alt="Rectangle"
      src={Rectangle}
      priority
    />
    <div className="z-10 flex justify-between flex-row-reverse  ">
      <a
        className=""
        href="/"
        // target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/furniture_sofa.svg"
          alt="Logo"
          className=" h-24 md:h-52 w-auto hover:bg-darken-7e rounded-xl"
          width={200}
          height={200}
          priority
        />
      </a>
    
    
     
       <Navigation value={navigationId}
        onClickNavigation={(i) => setNavigationId(i)}/>
     </div>

    </div>
  );
};

export default Footer;

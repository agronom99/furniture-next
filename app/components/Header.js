"use client";
import React from "react";
import Image from "next/image";
import Rectangle from "../../public/Rectangle_1441_h.jpg";
import Navigation from './Navigation'
import Link from "next/link";

const Header = () => {
  const [navigationId, setNavigationId] = React.useState();
  return (
    <div className=" sticky top-0  w-11/12 mx-auto ">
      <Image
        className="absolute z-0 rounded-xl w-full h-full   "
        alt="Rectangle"
        src={Rectangle}
        priority
      />
      <div className=" relative flex justify-between">
        <div className="z-10 ">
          <Link
            className=""
            href="/"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/furniture_sofa.svg"
              alt="Logo"
              className=" h-52 md:h-52 hover:bg-darken-7e rounded-xl"
              width={200}
              height={200}
              priority
            />
          </Link>
        </div>
        
         <Navigation  value={navigationId}
          onClickNavigation={(i) => setNavigationId(i)}/>
      </div>

      </div>
  );
};

export default Header;

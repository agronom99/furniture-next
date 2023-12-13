"use client";
import React from "react";
import Image from "next/image";
import Rectangle from "../../public/Rectangle_1441_h.jpg";
import Navigation from "./Navigation";
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
      <div className=" relative flex flex-col lg:flex-row justify-between items-center">
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
              className=" h-24 w-auto md:h-52 hover:bg-darken-7e rounded-xl"
              width={200}
              height={200}
              priority
            />
          </Link>
        </div>

        <Navigation
          value={navigationId}
          onClickNavigation={(i) => setNavigationId(i)}
        />

        <div className=" lg:mb-28 ">
          <Link href="/cart" className=" flex flex-row text-white my-5 mr-7">
            <div className=" border-solid w-24 pl-5 lg:py-2 rounded-l-2xl bg-tomato border-2">
              <span className="">10 грн.</span>
            </div>
            <div className=" flex border-solid w-20 px-3 lg:py-2 items-center rounded-r-2xl bg-tomato border-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className=" px-3 lg:text-lg">1</span>
            </div>
          </Link>
        </div>
      </div>
      {/* <Search /> */}
    </div>
  );
};

export default Header;

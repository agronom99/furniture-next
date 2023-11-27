"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-around ">
      <div className="">
        <a
          className=""
          href="/"
          // target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/furniture_sofa.svg"
            alt="Logo"
            className=" "
            width={200}
            height={200}
            priority
          />
        </a>
      </div>
      <div className="flex flex-col sm:flex-row text-center items-center ">
        
        <Link href="/about_us" className="" rel="noopener noreferrer">
          <h2
            className={`text-sm md:text-xl font-semibold m-1 md:m-3 p-3 border-2 rounded-xl hover:bg-slate-400`}
          >
            Про нас{" "}
          </h2>
        </Link>

        <Link href="/furniture" className="" rel="noopener noreferrer">
          <h2
            className={`text-sm md:text-xl font-semibold m-1 md:m-3 p-3 border-2 rounded-xl hover:bg-slate-400`}
          >
            Фурнітура{" "}
          </h2>
        </Link>

        <Link href="/delivery_and_payment" className=" " rel="noopener noreferrer">
          <h2
            className={`text-sm md:text-xl font-semibold m-1 md:m-3 p-3 border-2 rounded-xl hover:bg-slate-400 active:bg-slate-400`}
          >
            Доставка та оплата{" "}
          </h2>
        </Link>

        <Link href="/contacts" className="" rel="noopener noreferrer">
          <h2
            className={`text-sm md:text-xl font-semibold m-1 md:m-3 p-3 border-2 rounded-xl hover:bg-slate-400`}
          >
            Контакти{" "}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;

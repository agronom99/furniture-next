import React from "react";
import Link from "next/link";

const Navigation = ({value,onClickNavigation}) => {
  const navigations = [
    {
      name: "Про нас",
      path: "/about_us",
    },
    {
      name: "Каталог",
      path: "/catalogue",
    },
    {
      name: "Доставка та оплата",
      path: "/delivery",
    },
    {
      name: "Контакти",
      path: "/contacts",
    },
  ];

  return (
    <div className="navigation flex flex-col sm:flex-row text-center items-center z-10 text-white ">
      {navigations.map((navigationName, i) =>(
      <Link href={navigationName.path}
       key={i}
       onClick={() => onClickNavigation(i)} rel="noopener noreferrer"
       className={value === i ? "active" : ""}>
         
        <h2
          className={` text-sm md:text-xl font-semibold m-1 md:m-3 hover:bg-slate-400 `}
        >
          {navigationName.name}
        </h2>
      </Link>
      ))}
      {/* <Link href="/catalogue" className="" rel="noopener noreferrer">
        <h2
          className={`text-sm md:text-xl font-semibold m-1 md:m-3 p-3 border-2 rounded-xl hover:bg-slate-400`}
        >
          Каталог <span>&#128071;</span>{" "}
        </h2>
      </Link>
      <Link
        href="/delivery_and_payment"
        className=" "
        rel="noopener noreferrer"
      >
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
      </Link> */}
    </div>
  );
};

export default Navigation;

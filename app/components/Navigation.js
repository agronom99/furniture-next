import React from "react";
import Link from "next/link";

const Navigation = ({ value, onClickNavigation }) => {
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
    <div className="navigation h-40 flex flex-col mx-10 md:flex-row md:items-center z-10 ">
      {navigations.map((navigationName, i) => (
        <Link
          href={navigationName.path}
          key={i}
          onClick={() => onClickNavigation(i)}
          rel="noopener noreferrer"
          className={value === i ? "active" : ""}
        >
          <div className="hover:bg-darken-7e rounded-xl text-white">
            <h2 className={` text-xs lg:text-xl  `}>
              {navigationName.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;

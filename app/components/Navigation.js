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
         
       <div className="hover:bg-darken-7e rounded-xl">
          <h2
            className={` text-sm md:text-xl font-semibold m-1 md:m-3 `}
          >
            {navigationName.name}
          </h2>
       </div>
      </Link>
      ))}
    </div>
  );
};

export default Navigation;

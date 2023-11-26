import Image from "next/image";

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
      <div className=" flex flex-col sm:flex-row text-center items-center  ">
        <a href="/about_us" className="" rel="noopener noreferrer">
          <h2
            className={`text-sm md:text-xl font-semibold m-1 md:m-3 p-3 border-2 rounded-xl hover:bg-slate-400`}
          >
            Про нас{" "}
          </h2>
        </a>

        <a href="" className="" rel="noopener noreferrer">
          <h2
            className={`text-sm md:text-xl font-semibold m-1 md:m-3 p-3 border-2 rounded-xl hover:bg-slate-400`}
          >
            Фурнітура{" "}
          </h2>
        </a>

        <a href="" className="" rel="noopener noreferrer">
          <h2
            className={`text-sm md:text-xl font-semibold m-1 md:m-3 p-3 border-2 rounded-xl hover:bg-slate-400`}
          >
            Доставка та оплата{" "}
          </h2>
        </a>

        <a href="" className="" rel="noopener noreferrer">
          <h2
            className={`text-sm md:text-xl font-semibold m-1 md:m-3 p-3 border-2 rounded-xl hover:bg-slate-400`}
          >
            Контакти{" "}
          </h2>
        </a>
      </div>
    </div>
  );
};

export default Header;

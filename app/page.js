import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

import Image from "next/image";
import Rectangle1441 from "../public/Rectangle 1441.jpg";

async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.from("comments").select("*");
  return (
    <div className=" w-11/12 mx-auto relative ">
      <Image
        className=" rounded-xl w-full "
        alt="Rectangle"
        src={Rectangle1441}
        // height={200}
        priority
      />

      <div className="absolute top-40 left-40">
        <h1 className="  text-5xl font-bold text-white flex  ">
          <FaAnglesLeft />
          Фурнітура для мебeлі
          <FaAnglesRight />
        </h1>
      </div>
      
    </div>
  );
}

export default Home;

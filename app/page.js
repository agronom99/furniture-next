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
      {/* <pre>{JSON.stringify(furniture, null, 2)}</pre> */}

      <div className="absolute top-10 left-10 md:top-20 md:left-16">
        <h1 className="  text-xl md:text-5xl font-bold text-white flex ">
          <div className=" mr-5"><FaAnglesLeft /></div>
          Зробіть Ваш простір особливим:<br/> Вибір Вишуканої Меблевої Фурнітури
          <div className=" ml-5"><FaAnglesRight /></div>
        </h1>
      </div>
      
    </div>
  );
}

export default Home;

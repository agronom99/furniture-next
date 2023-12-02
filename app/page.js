import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
// import AuthButton from "./components/auth-button";


import Image from "next/image";
import Rectangle1441 from "../public/Rectangle 1441.jpg";

async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.from("comments").select("*");
  return (
    <main className="">
      <div className=" w-11/12 mx-auto">
      <Image
        className=" z-0 rounded-xl w-full"
        alt="Rectangle"
        src={Rectangle1441}
        // height={200}
        priority
      />
      {/* <AuthButton /> */}
      <pre> {JSON.stringify(data, null, 2)}</pre>
      {data.map(el => (
      <div key={el.id}>
      <p>{el.title}</p>
      <p>{el.price}</p>
      <p>{el.imageURL}</p>
      
      </div>
      ))}
      </div>
    </main>
  );
}

export default Home;

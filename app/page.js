import React from "react";

import Image from "next/image";
import Rectangle1441 from "../public/Rectangle 1441.jpg";

export default function Home() {
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
      </div>
    </main>
  );
}

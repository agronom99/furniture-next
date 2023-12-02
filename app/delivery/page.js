// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
// import AuthButton from "../components/auth-button";

// async
 function Delivery() {
  // const supabase = createServerComponentClient({ cookies });

  // const { data } = await supabase.from("comments").select("*");
  return (
    <div className=" flex w-11/12 mx-auto  border-neutral-800 border-solid rounded-xl">
      {/* <AuthButton />
      <pre> {JSON.stringify(data, null, 2)}</pre> */}
      Delivery
    </div>
  );
}

export default Delivery;

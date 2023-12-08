// "use client";
// import {useState} from "react";
import { supabase } from "../../supabaseClient";
import Link from "next/link";

// import Category from "../components/catalog/Category.js";
// import Sort from "../components/catalog/Sort.js";
// import Pagination from "../components/Pagination/index";
import FurnitureBlock from "../components/FurnitureBlock/index.jsx";
// import Skeleton from "../components/FurnitureBlock/Skeleton.jsx";

async function CatalogueFurniture() {
  const { data } = await supabase.from("accessories_table").select("*");
  const furniture = data.map((obj) => (
    <Link key={obj.id} href={`/catalogue/${obj.id}`}>
    <FurnitureBlock key={obj.id} {...obj} />
    </Link>
  ));

  // const skeletons = [...new Array(10)].map((_, index) => (
  //   <Skeleton key={index} />
  // ));

  return (
    <div className="grid grid-rows-1 grid-flow-col gap-3 w-11/12 mx-auto justify-items-center  border-neutral-800 border-solid rounded-xl">
      {/* <Category
          // value={categoryId}
          // onClickCategory={(i) => setCategoryId(i)}
        /> */}
      <div className="row-span-1 col-span-2 w-10/12 h-auto">
        <div className=" flex flex-wrap ">
          {
            // isLoading ? skeletons :
            furniture
          }
        </div>
       
      </div>
      {/* <div className="row-span-1 col-span-2 w-4/12 h-auto my-5">
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div> */}
    </div>
  );
}

export default CatalogueFurniture;

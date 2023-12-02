// "use client";
import Category from "../components/catalog/Category.js";
import Sort from "../components/catalog/Sort.js";
// import Pagination from "../components/Pagination/index";
import FurnitureBlock from "../components/FurnitureBlock/index.jsx";
import Skeleton from "../components/FurnitureBlock/Skeleton.jsx";

import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

async function CatalogueFurniture() {
  const supabase = createServerComponentClient({ cookies });

  const {data}  = await supabase.from("comments").select("*");

  if(!data) {
    return {
      notFound: true,
    }
  }


  // const [items, setItems] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [currentPage, setCurrentPage] = React.useState(1);

  // const [categoryId, setCategoryId] = React.useState(0);
  // const [sortType, setSortType] = React.useState({
  //   name: "виберіть",
  //   sortProperty: "rating",
  // });

  // React.useEffect(() => {
  // setIsLoading(true);

  // const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
  // const sortBy = sortType.sortProperty.replace("-", "");
  // const category = categoryId > 0 ? `category=${categoryId}` : "";
  // const search = searchValue ? `&search=${searchValue}` : "";

  //   fetch(
  //     `https://6457ce9b0c15cb1482118f8f.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}`
  //   )
  //     .then((res) => res.json())
  //     .then((arr) => {
  //       setItems(arr);
  //       setIsLoading(false);
  //       // setTimeout(() => {.........}, 1000);
  //     });
  //   window.scroll(0, 0);
  // }, [ currentPage]);
  // });

  const furniture = data.map((obj) => <FurnitureBlock key={obj.id} {...obj} />);
  // price={obj.price}
  // title={obj.title}
  // image={obj.imageUrl}
  // sizes={obj.sizes}
  // types={obj.types}
  const skeletons = [...new Array(10)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="grid grid-rows-1 grid-flow-col gap-3 w-11/12 mx-auto justify-items-center  border-neutral-800 border-solid rounded-xl">
      {/* <div className="row-span-3 w-1/5 mx-auto my-auto">
        <Category
          // value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
      </div> */}
      {/* <div className="col-span-2 h-16">
        <Sort 
        // value={sortType} 
        onChangeSort={(i) => setSortType(i)} />
      </div> */}
      <div className="row-span-1 col-span-2 w-10/12 h-auto">
        <div className=" flex flex-wrap ">
          {
          // isLoading ? skeletons : 
          furniture}
        </div>
      </div>
      {/* <div className="row-span-1 col-span-2 w-4/12 h-auto my-5">
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div> */}
    </div>
  );
}

export default CatalogueFurniture;

"use client";
import React from "react";
import Category from "../components/catalog/Category";
import Sort from "../components/catalog/Sort";

const CatalogueFurniture = () => {
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "виберіть",
    sortProperty: "rating",
  });
  return (
    <div className="grid grid-rows-1 grid-flow-col gap-3 w-11/12 mx-auto justify-items-center  border-neutral-800 border-solid rounded-xl">
      <div className="row-span-3 w-1/5 mx-auto my-auto">
        <Category
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
      </div>
      <div className="col-span-2 h-16">
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <div className="row-span-2 col-span-2 w-10/12 h-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel deserunt
        dicta magnam consequuntur sequi quae hic repellat, ut quasi doloremque
        ipsa architecto repudiandae! Consequatur odio dolore illo, tenetur sit
        sunt voluptate omnis. Corrupti, tenetur, suscipit molestiae distinctio
        maxime excepturi quae quod nihil quo incidunt id eligendi necessitatibus
        assumenda quos aut praesentium voluptates. Perspiciatis odit illum
        voluptatibus, debitis vitae dolore sapiente maiores earum vel, sequi
        architecto obcaecati facere natus! Vitae obcaecati ipsa atque aperiam,
        at, itaque, in illo cupiditate quia ea praesentium. Ipsam cum possimus
        consectetur praesentium. Consequatur veniam magnam odio praesentium,
        architecto officia quisquam dignissimos quos? Maiores optio voluptas et.
      </div>
    </div>
  );
};

export default CatalogueFurniture;

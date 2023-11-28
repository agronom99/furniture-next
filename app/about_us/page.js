"use client";
import React from "react";
import Categories from "../components/Categories";

const AboutUs = () => {
  const [categoryId, setCategoryId] = React.useState(0);

  return (
    <div className=" h-auto w-11/12 mx-auto">
      <Categories
        value={categoryId}
        onClickCategory={(i) => setCategoryId(i)}
      />
    </div>
  );
};

export default AboutUs;

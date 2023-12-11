"use client";
import React, { useEffect } from "react";
import Categories from "../components/Categories";

const AboutUs = () => {
  const [categoryId, setCategoryId] = React.useState(0);

  // useEffect(() => {
  //   // Встановлюємо позицію прокрутки на верх сторінки при завантаженні компонента
  //   window.scrollTo(0, 0);
  // }, []); // Порожній масив вказує, що ефект викликається тільки при монтажі та демонтажі компонента

  return (
    <div className=" h-auto w-11/12 mx-auto border-neutral-800 border-solid rounded-xl ">
      <Categories
        value={categoryId}
        onClickCategory={(i) => setCategoryId(i)}
      />
    </div>
  );
};

export default AboutUs;

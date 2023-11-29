import React from "react";

const Category = ({ value, onClickCategory }) => {
  const category = ["<Всі_катекгорії>","Петлі", "Направляючі", "Ручки"];

  return (
    <div>
      {" "}
      <ul className="category w-1/5">
        {category.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

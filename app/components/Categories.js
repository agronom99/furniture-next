function Categories({ value, onClickCategory }) {
  const categories = ["Інформація", "Бренди", "Види фурнітури", "Співпраця з Клієнтами", "Партнери та Постачальники", "Якість та Гарантії"];

  const categoriesText = require("./ProNas.json")

  return (
    <div className="categories flex  ">
      <ul className=" w-1/5">
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
      <ul className="ul-text ml-10 w-4/5">
        {categoriesText.map((categoryText, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryText}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

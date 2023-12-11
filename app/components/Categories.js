function Categories({ value, onClickCategory }) {
  const categories = ["Інформація", "Бренди", "Види фурнітури", "Співпраця з Клієнтами", "Партнери та Постачальники", "Якість та Гарантії"];

  const categoriesText = require("../about_us/ProNas.json")

  return (
    <div className="categories flex flex-col sm:flex-row items-center justify-center  ">
      <ul className=" w-9/12 sm:w-4/12">
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
      <ul className="ul-text ml-10 w-full ">
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

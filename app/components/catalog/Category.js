
const Category = () => {
  const category = ["<Всі_категорії>","Петлі", "Направляючі", "Ручки"];

  return (
    <div>
      <ul className="category w-1/5">
        {category.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className=
            {value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

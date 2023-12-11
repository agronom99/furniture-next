// Filter.js
import React from "react";

const Filter = ({
  selectedCategory,
  onCategoryClick,
  handleAllCategoriesClick,
  handlePriceChange,
  handleTitleChange,
  handleSortByChange,
  handleSortOrderChange,
  sortBy,
  sortOrder,
  categories,
}) => {
  return (
    <div className="flex items-center justify-end flex-col h-32 sm:h-16 sm:flex-row border-neutral-800 border-solid rounded-xl h-14 mx-5 p-5">
      <h2 className=" my-3">Фільтрувати</h2>
      <div className="mx-3">
        <label>
          за:
          <select
            id="sortBy"
            name="sortBy"
            value={sortBy}
            onChange={handleSortByChange}
          >
            <option value="price">Вартістю</option>
            <option value="title">Заголовком</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          <select
            id="sortOrder"
            name="sortOrder"
            value={sortOrder}
            onChange={handleSortOrderChange}
          >
            <option value="asc">за зростанням</option>
            <option value="desc">за зниженням</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Filter;

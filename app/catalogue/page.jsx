"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../supabaseClient";
import FurnitureBlock from "../components/FurnitureBlock/index";
import Category from "../components/Category";
import Pagination from "../components/Pagination/index";
import Filter from "../components/Filter/Filter"; // Додайте імпорт Filter
import "./styles.scss";

const CatalogueFurniture = () => {
  const [furniture, setFurniture] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filterByPrice, setFilterByPrice] = useState(null);
  const [filterByTitle, setFilterByTitle] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("price");
  const [currentPage, setCurrentPage] = useState(1); // Поточна сторінка
  const itemsPerPage = 9; // Кількість елементів на сторінці

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data: furnitureData } = await supabase
        .from("accessories_table")
        .select("*");
      const { data: categoriesData } = await supabase
        .from("your_categories_table")
        .select("category");

      setFurniture(furnitureData);
      setCategories(categoriesData.map((item) => item.category));
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleAllCategoriesClick = () => {
    setSelectedCategory(null);
  };

  const handlePriceChange = (e) => {
    const price = parseFloat(e.target.value);
    setFilterByPrice(!isNaN(price) ? price : null);
  };

  const handleTitleChange = (e) => {
    setFilterByTitle(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handlePageChange = (selectedPage) => {
    // Додайте функціонал прокрутки вверх перед зміною сторінки
    scrollToTop();

    // Змінюємо поточну сторінку
    setCurrentPage(selectedPage + 1);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const sortFurniture = (a, b) => {
    if (sortBy === "price") {
      if (a.price !== b.price) {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      }
    } else if (sortBy === "title") {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return sortOrder === "asc"
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    }
    return 0;
  };

  const filteredFurniture = furniture
    .filter((item) => {
      const categoryFilter =
        selectedCategory === null || item.category === selectedCategory;
      const priceFilter = filterByPrice === null || item.price <= filterByPrice;
      const titleFilter = item.title
        .toLowerCase()
        .includes(filterByTitle.toLowerCase());

      return categoryFilter && priceFilter && titleFilter;
    })
    .sort(sortFurniture);

  const totalPages = Math.ceil(filteredFurniture.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredFurniture.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const furnitureElements = currentItems.map((obj) => (
    <div key={obj.id}>
      <Link href={`/catalogue/${obj.id}`} key={obj.id}>
        <div>
          <FurnitureBlock key={obj.id} {...obj} />
        </div>
      </Link>
      <button className=" ml-7 mb-5 w-60 bg-tomato p-2 rounded-b-xl text-white">Додати до корзини</button>
    </div>
  ));

  const categoriesList = (
    <ul className="mt-5">
      <Category
        categoryName="Уся фурнітура"
        onCategoryClick={handleAllCategoriesClick}
        selected={selectedCategory === null}
      />
      {categories.map((category) => (
        <Category
          key={category}
          categoryName={category}
          onCategoryClick={handleCategoryClick}
          selected={category === selectedCategory}
        />
      ))}
    </ul>
  );

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-row flex-wrap m-10">
        <div className="order-1 flex justify-center my-16 border-neutral-800 border-solid rounded-xl">
          <div className="flex flex-wrap md:flex-col items-center">
            <h2 className="mt-4 text-sm sm:text-2xl sm:font-bold sm:w-48 text-center">
              Сортувати <br /> за категорією:
            </h2>
            {categoriesList}
          </div>
        </div>
        <div className="order-2 w-4/5">
          <Filter
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
            handleAllCategoriesClick={handleAllCategoriesClick}
            handlePriceChange={handlePriceChange}
            handleTitleChange={handleTitleChange}
            handleSortByChange={handleSortByChange}
            handleSortOrderChange={handleSortOrderChange}
            sortBy={sortBy}
            sortOrder={sortOrder}
            categories={categories}
          />
          <div className="flex flex-wrap">{furnitureElements}</div>
          
        </div>
      </div>
      <div className="text-center m-5">
        <Pagination pageCount={totalPages} onChangePage={handlePageChange} />
      </div>
    </div>
  );
};

export default CatalogueFurniture;

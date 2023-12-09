"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '../../supabaseClient';
import FurnitureBlock from '../components/FurnitureBlock/index';
import Category from '../components/Category';

// Решта імпортів залишаються незмінними

function CatalogueFurniture() {
  const [furniture, setFurniture] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filterByPrice, setFilterByPrice] = useState(null);
  const [filterByTitle, setFilterByTitle] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('price');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data: furnitureData } = await supabase.from('accessories_table').select('*');
      const { data: categoriesData } = await supabase.from('your_categories_table').select('category');

      setFurniture(furnitureData);
      setCategories(categoriesData.map(item => item.category));
    } catch (error) {
      console.error('Error fetching data:', error.message);
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

  const sortFurniture = (a, b) => {
    // Сортування за вибраним параметром
    if (sortBy === 'price') {
      // Сортування за ціною
      if (a.price !== b.price) {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      }
    } else if (sortBy === 'title') {
      // Сортування за заголовком
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA !== titleB) {
        return sortOrder === 'asc' ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
      }
    }
    return 0;
  };

  const filteredFurniture = furniture
    .filter((item) => {
      // Фільтрація за категорією
      const categoryFilter = selectedCategory === null || item.category === selectedCategory;

      // Фільтрація за ціною
      const priceFilter = filterByPrice === null || item.price <= filterByPrice;

      // Фільтрація за заголовком
      const titleFilter = item.title.toLowerCase().includes(filterByTitle.toLowerCase());

      return categoryFilter && priceFilter && titleFilter;
    })
    .sort(sortFurniture);

  const furnitureElements = filteredFurniture.map((obj) => (
    <div key={obj.id}>
      <Link href={`/catalogue/${obj.id}`} key={obj.id}>
        <div>
          <FurnitureBlock key={obj.id} {...obj} />
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-row flex-wrap m-10">
        {/* Блок сортування за 'category' */}
        <div className="order-1 w-1/4">
          <div>
            <h2>Сортувати за категорією</h2>
            <ul>
              <Category
                categoryName="Уся фурнітура"
                onCategoryClick={handleAllCategoriesClick}
              />
              {categories.map((category) => (
                <Category
                  key={category}
                  categoryName={category}
                  onCategoryClick={handleCategoryClick}
                />
              ))}
            </ul>
          </div>
        </div>
        {/* Фільтри за ціною, заголовком та сортування */}
        <div className="order-2 w-3/4">
          <div className=' flex items-center justify-end'>
            <h2 className=''>Фільтрувати</h2>
            <div className=' mx-3'>
              <label>
                 за:
                <select value={sortBy} onChange={handleSortByChange}>
                  <option value="price">Вартістю</option>
                  <option value="title">Заголовком</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                {/* Сортування: */}
                <select value={sortOrder} onChange={handleSortChange}>
                  <option value="asc">за зростанням</option>
                  <option value="desc">за зниженням</option>
                </select>
              </label>
            </div>
            
          </div>
          {/* Кінцевий блок елементів каталогу */}
          <div className=' flex flex-wrap'>{furnitureElements}</div>
        </div>
      </div>
    </div>
  );
}

export default CatalogueFurniture;





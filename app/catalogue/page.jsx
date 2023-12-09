"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '../../supabaseClient';
import FurnitureBlock from '../components/FurnitureBlock/index';
import Category from '../components/Category';

function CatalogueFurniture() {
  const [furniture, setFurniture] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
    console.log('Selected Category:', category);
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleAllCategoriesClick = () => {
    console.log('Selected Category: All Categories');
    setSelectedCategory(null);
  };

  const filteredFurniture = selectedCategory !== null
    ? furniture.filter(item => item.category === selectedCategory)
    : furniture;

  const furnitureElements = filteredFurniture.map(obj => (
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
              {categories.map(category => (
                <Category
                  key={category}
                  categoryName={category}
                  onCategoryClick={handleCategoryClick}
                />
              ))}
            </ul>
          </div>
        </div>
        {/* Кінцевий блок елементів каталогу */}
        <div className="order-2 w-3/4">{furnitureElements}</div>
      </div>
    </div>
  );
}

export default CatalogueFurniture;

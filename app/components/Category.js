// components/Category.js

import { useEffect, useState } from 'react';
// import { supabase } from '../supabaseClient';

function Category({ categoryName, onCategoryClick, selected }) {
  return (
    <div className={`category ${selected ? 'active' : ''}`} onClick={() => onCategoryClick(categoryName)}>
      <h2 className=' m-2.5'>{categoryName}</h2>
    </div>
  );
}

export default Category;

// components/CategoryButton.js
import React from 'react';

function CategoryButton({ categoryName, onCategoryClick, isActive }) {
  return (
    <div
      className={`category ${isActive ? 'active' : ''}`}
      onClick={() => onCategoryClick(categoryName)}
    >
      <h2>{categoryName}</h2>
    </div>
  );
}

export default CategoryButton;

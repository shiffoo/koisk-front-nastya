import React from 'react';
import './CategoriesSidebar.scss';

const CategoriesSidebar = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="categories-sidebar">
      <h2>Категории</h2>
      <div className="categories-list">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategorySelect(category.id)}
          >
            <span className="category-name">{category.name}</span>
            <span className="category-count">{category.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSidebar; 
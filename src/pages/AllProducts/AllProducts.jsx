import React, { useState } from 'react';
import './AllProducts.scss';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Временные данные для категорий
const categories = [
  { id: 1, name: 'Все товары', count: 150 },
  { id: 2, name: 'Выпечка', count: 45 },
  { id: 3, name: 'Напитки', count: 30 },
  { id: 4, name: 'Сладости', count: 25 },
  { id: 5, name: 'Снеки', count: 20 },
  { id: 6, name: 'Здоровое питание', count: 15 },
  { id: 7, name: 'Заморозка', count: 15 },
];

// Временные данные для товаров (можно будет заменить на API)
const products = [
  { id: 1, title: "Булочки с кремом", price: 500, image: "/assets/images/product.png", discount: 50 },
  { id: 2, title: "Натуральный мед", price: 700, image: "/assets/images/product.png" },
  { id: 3, title: "Ореховая паста", price: 450, image: "/assets/images/product.png" },
  { id: 4, title: "Фруктовый джем", price: 300, image: "/assets/images/product.png" },
  { id: 5, title: "Шоколадный крем", price: 600, image: "/assets/images/product.png", discount: 30 },
  { id: 6, title: "Печенье с орехами", price: 350, image: "/assets/images/product.png" },
  { id: 7, title: "Йогуртовый десерт", price: 550, image: "/assets/images/product.png" },
  { id: 8, title: "Карамельный сироп", price: 250, image: "/assets/images/product.png" },
  { id: 9, title: "Миндальное молоко", price: 750, image: "/assets/images/product.png" },
  { id: 10, title: "Гречишный мед", price: 800, image: "/assets/images/product.png", discount: 70 },
];

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <div className="all-products-wrapper">
      <Header />
      
      <div className="all-products-content">
        {/* Левая колонка с категориями */}
        <div className="categories-sidebar">
          <h2>Категории</h2>
          <div className="categories-list">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-name">{category.name}</span>
                <span className="category-count">{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Правая колонка с товарами */}
        <div className="products-grid">
          <div className="products-header">
            <h1>{categories.find(c => c.id === selectedCategory)?.name}</h1>
            <div className="products-filters">
              <select className="sort-select">
                <option value="popular">По популярности</option>
                <option value="price-asc">По возрастанию цены</option>
                <option value="price-desc">По убыванию цены</option>
                <option value="new">Сначала новые</option>
              </select>
            </div>
          </div>

          <div className="products-list">
            {products.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                discount={product.discount}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllProducts; 
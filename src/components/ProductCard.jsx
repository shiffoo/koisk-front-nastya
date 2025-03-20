import React from "react";
import "./ProductCard.scss";
import defaultImage from "/assets/images/product.png"; // Заглушка, если нет фото

const ProductCard = ({ image, price, title, discount }) => {
  return (
    <div className="product-card">
      {/* Блок изображения + скидка */}
      <div 
        className="product-image"
        style={{ backgroundImage: `url(${image || defaultImage})` }} // Если нет картинки — заглушка
      >
        {discount && <span className="discount-badge">-{discount}%</span>}
      </div>

      {/* Цена и название */}
      <div className="product-info">
        <p className="price">{price} руб</p>
        <p className="title">{title}</p>
      </div>

      {/* Блок кнопок */}
      <div className="product-buttons">
        <button className="favorite-btn">❤️</button>
        <button className="cart-btn">В корзину</button>
      </div>
    </div>
  );
};

export default ProductCard;

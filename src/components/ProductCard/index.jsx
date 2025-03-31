import React, { useState } from "react";
import "./ProductCard.scss";

import defaultImage from "/assets/images/product.png";
import FavoriteButton from "../FavoriteButton";
import { addToFavorites, removeFromFavorites } from "../../services/api";

const ProductCard = ({ id, image, price, title, discount }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // 📌 Переключатель "Избранное"
  const handleToggleFavorite = () => {
    const payload = {
      userId: 1,             // 🔧 временно захардкожено (позже возьмём из auth)
      resourceId: id,        // id товара
      type: "product",       // тип сущности
    };

    if (!isFavorite) {
      addToFavorites(payload)
        .then(() => {
          setIsFavorite(true);
          console.log("❤️ Добавлено в избранное");
        })
        .catch((err) => {
          console.error("Ошибка добавления в избранное:", err);
        });
    } else {
      removeFromFavorites(payload)
        .then(() => {
          setIsFavorite(false);
          console.log("💔 Удалено из избранного");
        })
        .catch((err) => {
          console.error("Ошибка удаления из избранного:", err);
        });
    }
  };

  return (
    <div className="product-card">
      {/* 📷 Картинка и скидка */}
      <div
        className="product-image"
        style={{ backgroundImage: `url(${image || defaultImage})` }}
      >
        {discount && <span className="discount-badge">-{discount}%</span>}
      </div>

      {/* 💸 Информация */}
      <div className="product-info">
        <p className="price">{price} руб</p>
        <p className="title">{title}</p>
      </div>

      {/* 🔘 Кнопки */}
      <div className="product-buttons">
        <FavoriteButton isFavorite={isFavorite} onClick={handleToggleFavorite} />
        <button className="cart-btn">В корзину</button>
      </div>
    </div>
  );
};

export default ProductCard;

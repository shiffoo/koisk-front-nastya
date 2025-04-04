import React, { useState } from "react";
import "./FavoriteButton.scss";
import { addToFavorites, removeFromFavorites } from "../../services/api";

const FavoriteButton = ({ productId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    const payload = {
      userId: 0,              // 🔧 захардкоженный id — заменить позже на реальный
      resourceId: 0,  // 🆔 ID продукта ЗАГЛУШКА
      type: "product",        // 🏷 тип сущности
    };

    if (!isFavorite) {
      addToFavorites(payload)
        .then(() => {
          setIsFavorite(true);
          console.log("✅ Добавлено в избранное");
        })
        .catch((err) => console.error("Ошибка при добавлении:", err));
    } else {
      removeFromFavorites(payload)
        .then(() => {
          setIsFavorite(false);
          console.log("🗑️ Удалено из избранного");
        })
        .catch((err) => console.error("Ошибка при удалении:", err));
    }
  };

  return (
    <button className={`favorite-button ${isFavorite ? "active" : ""}`} onClick={handleClick}>
      <img
        src={
          isFavorite
            ? "/assets/images/heart-hover.png"
            : "/assets/images/heart.png"
        }
        alt={isFavorite ? "В избранном" : "Добавить в избранное"}
      />
    </button>
  );
};

export default FavoriteButton;

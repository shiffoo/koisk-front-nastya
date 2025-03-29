import React, { useState } from "react";
import "./FavoriteButton.scss";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <button className="favorite-button" onClick={toggleFavorite}>
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
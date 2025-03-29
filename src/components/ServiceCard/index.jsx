import React from "react";
import "./ServiceCard.scss";
import FavoriteButton from "../FavoriteButton";

const ServiceCard = ({ image, title, price }) => {
  return (
    <div className="service-card">
      
      {/* Блок изображения */}
      <div className="service-image">
        <img src={image} alt={title} />
      </div>

      {/* Информация об услуге */}
      <div className="service-info">
        <div className="service-text">
          <p className="service-title">{title}</p>
          <p className="service-subtitle">Бизнес тарелка</p>
          <p className="service-price">{price} руб</p>
        </div>

        {/* Кнопка "избранное" */}
        <div className="service-buttons">
          <button className="favorite-btn">
            <FavoriteButton />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ServiceCard;

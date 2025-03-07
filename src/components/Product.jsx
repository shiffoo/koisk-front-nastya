import React from "react";
import "./Product.scss";

const Product = ({ title, imageUrl, price }) => {
  return (
    <div className="product-card">
      <img src={imageUrl || "/assets/images/product.png"} alt={title} />
      <h3>{title}</h3>
      <p>{price} руб</p>
      <button className="btn">
        <img src="/assets/images/heart.png" alt="Лайк" className="heart-icon" />
        В корзину
      </button>
    </div>
  );
};

export default Product;

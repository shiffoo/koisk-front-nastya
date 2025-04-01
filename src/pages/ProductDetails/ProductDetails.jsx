import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './ProductDetails.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Временные данные о товаре (потом заменим на получение с бэкенда)
  const product = {
    id: id,
    name: "ТАРЕЛКА",
    price: 35,
    rating: 4,
    reviewsCount: 5,
    description: "Тарелка прикольного вида, в ней еда круто лежит, вам точно она понравится",
    images: [
      "/assets/images/plate1.jpg",
      "/assets/images/plate2.jpg",
      "/assets/images/plate3.jpg",
      "/assets/images/plate4.jpg"
    ],
    reviews: [
      {
        id: 1,
        author: "Олег",
        rating: 4,
        text: "Прикольно конечно, но как ей пользоваться я так и не понял"
      },
      {
        id: 2,
        author: "Олег",
        rating: 4,
        text: "Прикольно конечно, но как ей пользоваться я так и не понял"
      }
    ]
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="product-details-wrapper">
      <Header />
      
      <div className="product-details-content">
        <div className="breadcrumbs">
          <span>Главная</span>
          <span>/</span>
          <span>Дом</span>
          <span>/</span>
          <span>Тарелка</span>
        </div>

        <div className="product-main">
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.images[selectedImage]} alt={product.name} />
            </div>
            <div className="thumbnail-list">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="product-info">
            <h1>{product.name}</h1>
            
            <div className="rating">
              {renderStars(product.rating)}
              <span className="reviews-count">({product.reviewsCount} отзывов)</span>
            </div>

            <div className="price">{product.price} РУБ</div>

            <div className="description">
              <h3>Описание:</h3>
              <p>{product.description}</p>
            </div>

            <div className="purchase-controls">
              <div className="quantity-controls">
                <button onClick={handleDecreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncreaseQuantity}>+</button>
              </div>

              <button className="add-to-cart">ДОБАВИТЬ В КОРЗИНУ</button>
              <button className="buy-now">КУПИТЬ СЕЙЧАС</button>
              <button className="add-to-favorites">
                <span className="heart-icon">♡</span>
              </button>
            </div>
          </div>
        </div>

        <div className="reviews-section">
          <h2>Отзывы:</h2>
          <div className="reviews-list">
            {product.reviews.map(review => (
              <div key={review.id} className="review-item">
                <div className="review-header">
                  <span className="author">{review.author}</span>
                  <div className="rating">{renderStars(review.rating)}</div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails; 
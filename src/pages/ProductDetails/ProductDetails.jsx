import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import './ProductDetails.scss';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Временные данные для левого меню
  const sidebarItems = Array(10).fill({
    image: "/assets/images/product.png",
    title: "Еда всякая"
  });

  // Временные данные о товаре
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

  // Временные данные для похожих товаров
  const similarProducts = [
    { id: 1, title: "Продукт высокого качества", price: 500, image: "/assets/images/product.png", discount: 50 },
    { id: 2, title: "Продукт высокого качества", price: 500, image: "/assets/images/product.png", discount: 50 },
    { id: 3, title: "Продукт высокого качества", price: 500, image: "/assets/images/product.png", discount: 50 },
    { id: 4, title: "Продукт высокого качества", price: 500, image: "/assets/images/product.png", discount: 50 },
    { id: 5, title: "Продукт высокого качества", price: 500, image: "/assets/images/product.png", discount: 50 }
  ];

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
        {/* Левая колонка */}
        <div className="sidebar">
          {sidebarItems.map((item, index) => (
            <div key={index} className="sidebar-item">
              <img 
                src={item.image} 
                alt={item.title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.parentElement.classList.add('placeholder');
                }}
              />
              <span>{item.title}</span>
            </div>
          ))}
        </div>

        {/* Правая колонка */}
        <div className="main-content">
          <div className="breadcrumbs">
            <Link to="/">Главная</Link>
            <span>/</span>
            <Link to="/products">Дом</Link>
            <span>/</span>
            <span>Тарелка</span>
          </div>

          <div className="product-main">
            <button className="add-to-favorites">
              <span className="heart-icon">♡</span>
            </button>

            <div className="product-gallery">
              <div className="main-image">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.classList.add('placeholder');
                  }}
                />
              </div>
              <div className="thumbnail-list">
                {product.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.parentElement.classList.add('placeholder');
                      }}
                    />
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
              </div>

              <button className="buy-now">КУПИТЬ СЕЙЧАС</button>
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

          <div className="similar-products">
            <h2>Похожие товары</h2>
            <div className="products-grid">
              {similarProducts.map(product => (
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
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails; 
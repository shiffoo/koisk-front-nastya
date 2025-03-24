import React from "react";
import "./MainContent.scss";
import ProductCard from "./ProductCard";

// 📌 Добавлено: Импорт Swiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Заглушки (в будущем заменим на API)
import defaultImage from "/assets/images/advertisment.png"; // Заглушка

const recommendations = [
    { id: 1, text: "Лучшие мандарины в городе", image: "" },
    { id: 2, text: "Самый желтый апельсиновый сок", image: "" },
    { id: 3, text: "Топ 5 рецептов булочек с корицей", image: "" },
    { id: 4, text: "Где найти вкусное манго?", image: "" },
    { id: 5, text: "Рейтинг лучших фруктовых рынков", image: "" },
    { id: 6, text: "Готовим смузи из тропических фруктов", image: "" },
    { id: 7, text: "Мармелад: секреты приготовления", image: "" },
];

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

const services = [
  { id: 1, title: "ПОМЫТЬ ТАРЕЛКУ", price: 200, image: "/assets/plate.jpg" },
  { id: 2, title: "ДОСТАВКА ДОМОЙ", price: 300, image: "/assets/delivery.jpg" },
];

const MainContent = () => {
  return (
    <>
      <div className="main-content">
        {/* Левая колонка */}
        <div className="left-content">
          <div className="content-wrapper">

            {/* Блок рекомендаций */}
            <section className="recommendations">
              <button className="expand-btn">Все &gt;</button>
              <h2>Рекомендации <span>на районе</span></h2>
              <div className="cards">
                {recommendations.map((item) => (
                  <div 
                    className="card" 
                    key={item.id}
                    style={{ backgroundImage: `url(${item.image || defaultImage})` }}
                  >
                      <div className="card-text">
                          <p>{item.text}</p>
                      </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 📌 Блок товаров (теперь с каруселью) */}
            <section className="products">
              <button className="expand-btn">Все &gt;</button>
              <h2>Товары</h2>
              
              {/* 📌 Добавлено: Карусель Swiper */}
              <Swiper
                spaceBetween={10}  // Расстояние между карточками
                slidesPerView={"auto"}  // Авторазмер карточек
                navigation={true}  // Включаем стрелки
                modules={[Navigation]}  // Подключаем модуль навигации
                className="product-carousel"
                breakpoints={{
                  320: { slidesPerView: 1 }, // На маленьких экранах 1 карточка
                  768: { slidesPerView: 2 }, // На планшетах 2 карточки
                  1024: { slidesPerView: 3 }, // На десктопах 3 карточки
                }}
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductCard 
                      image={product.image} 
                      price={product.price} 
                      title={product.title} 
                      discount={product.discount}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>

            {/* Блок услуг */}
            <section className="services">
              <button className="expand-btn">Все &gt;</button>
              <h2>Услуги</h2>
              <div className="cards">
                {services.map((service) => (
                  <div className="card" key={service.id}>
                    <img src={service.image} alt={service.title} />
                    <p>{service.price} руб</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* Правая колонка (Яндекс.Карта) */}
        <div className="map-section">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a3b06c76f3c48745e99b0b45f5b97c6cb5c34959fc81e01dd5b5d1f707fba5b&amp;source=constructor"
            frameBorder="0"
            title="Карта"
          ></iframe>
        </div>
      </div>

      {/* Футер */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Koisk. Все права защищены.</p>
          <nav className="footer-nav">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Условия использования</a>
            <a href="#">Контакты</a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default MainContent;

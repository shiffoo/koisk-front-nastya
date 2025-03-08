import React from "react";
import "./MainContent.scss";

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
  { id: 1, title: "Снэк", price: 500, image: "/assets/snack.jpg" },
  { id: 2, title: "Снэк", price: 500, image: "/assets/snack.jpg" },
];

const services = [
  { id: 1, title: "ПОМЫТЬ ТАРЕЛКУ", price: 200, image: "/assets/plate.jpg" },
  { id: 2, title: "ПОМЫТЬ ТАРЕЛКУ", price: 200, image: "/assets/plate.jpg" },
];

const MainContent = () => {
  return (
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
                  style={{ backgroundImage: `url(${item.image || defaultImage})` }} // Если нет картинки — ставим заглушку
                >
                    <div className="card-text">
                        <p>{item.text}</p>
                    </div>
                </div>
              ))}
            </div>
          </section>

          {/* Блок товаров */}
          <section className="products">
            <button className="expand-btn">Все &gt;</button>
            <h2>Товары</h2>
            <div className="cards">
              {products.map((product) => (
                <div className="card" key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <p>{product.price} руб</p>
                  <button className="btn_add-to-cart">В корзину</button>
                </div>
              ))}
            </div>
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
          width="100%"
          height="100%"
          frameBorder="0"
          title="Карта"
        ></iframe>
      </div>
    </div>
  );
};

export default MainContent;

import React from "react";
import "./MainContent.scss";

// Заглушки (в будущем заменим на API)
const recommendations = [
  { id: 1, title: "Манго", price: 500, image: "/assets/images/advert.jpg" },
  { id: 2, title: "Манго", price: 500, image: "/assets/images/advert.jpg" },
  { id: 3, title: "Манго", price: 500, image: "/assets/images/advert.jpg" },
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
      {/* Левая колонка (Большой светлый блок) */}
      <div className="left-content">
        <div className="content-wrapper">
          {/* Блок рекомендаций */}
          <section className="recommendations">
            <h2>Рекомендации <span>на районе</span></h2>
            <div className="cards">
              {recommendations.map((item) => (
                <div className="card" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <p>{item.price} руб</p>
                </div>
              ))}
            </div>
          </section>

          {/* Блок товаров */}
          <section className="products">
            <h2>Товары</h2>
            <div className="cards">
              {products.map((product) => (
                <div className="card" key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <p>{product.price} руб</p>
                  <button className="btn">В корзину</button>
                </div>
              ))}
            </div>
          </section>

          {/* Блок услуг */}
          <section className="services">
            <h2>Услуги</h2>
            <div className="cards">
              {services.map((service) => (
                <div className="card" key={service.id}>
                  <img src={service.image} alt={service.title} />
                  <p>{service.title}</p>
                  <p>{service.price} руб</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Правая колонка (Карта) */}
      <div className="map-section">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c695123..."
          style={{ border: 0 }}
        />
      </div>
    </div>
  );
};

export default MainContent;

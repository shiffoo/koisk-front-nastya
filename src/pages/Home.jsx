import React, { useEffect, useState } from "react";
import "./Home.scss";
import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServiceCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import defaultImage from "/assets/images/advertisment.png";
import defaultProductImage from "/assets/images/product.png";
import defaultServiceImage from "/assets/images/service.png";

const Home = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Используем относительный путь, чтобы proxy из package.json перенаправил запрос на backend.
    fetch("/business/page")
      .then((res) => res.json())
      .then((data) => {
        setRecommendations(data.recommendations || []);
        setProducts(data.products || []);
        setServices(data.services || []);
      })
      .catch((err) => console.error("Ошибка при загрузке данных:", err));
  }, []);

  return (
    <div className="home-wrapper">
      <Header />

      <div className="main-content">
        <div className="left-content">
          <div className="content-wrapper">

            {/* 📌 РЕКОМЕНДАЦИИ */}
            <section className="recommendations">
              <button className="expand-btn">все &gt;</button>
              <h2>
                Рекомендации <span>на районе</span>
              </h2>
              <Swiper
                spaceBetween={10}
                slidesPerView={"auto"}
                navigation={true}
                modules={[Navigation]}
                className="recommendation-carousel"
                breakpoints={{
                  320: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {recommendations.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className="card"
                      style={{
                        backgroundImage: `url(${item.imageUrl || defaultImage})`,
                      }}
                    >
                      <div className="card-text">
                        <p>{item.title}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>

            {/* 📌 ТОВАРЫ */}
            <section className="products">
              <button className="expand-btn">все &gt;</button>
              <h2>Товары</h2>
              <Swiper
                spaceBetween={10}
                slidesPerView={"auto"}
                navigation={true}
                modules={[Navigation]}
                className="product-carousel"
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductCard
                      image={defaultProductImage}
                      price={product.price}
                      title={product.name}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>

            {/* 📌 УСЛУГИ */}
            <section className="services">
              <button className="expand-btn">все &gt;</button>
              <h2>Услуги</h2>
              <Swiper
                spaceBetween={10}
                slidesPerView={"auto"}
                navigation={true}
                modules={[Navigation]}
                className="service-carousel"
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {services.map((service) => (
                  <SwiperSlide key={service.id} className="service-slide">
                    <ServiceCard
                      image={defaultServiceImage}
                      title={service.name}
                      price={service.price}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          </div>
        </div>

        {/* 📌 ПРАВАЯ КАРТА */}
        <div className="map-section">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a3b06c76f3c48745e99b0b45f5b97c6cb5c34959fc81e01dd5b5d1f707fba5b&amp;source=constructor"
            frameBorder="0"
            title="Карта"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

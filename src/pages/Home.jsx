import { useEffect, useState } from 'react';
import { getBusinessPage } from '../services/api'; // или другой метод, например getRecommendations


import React from "react";
import "./Home.scss";
import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServiceCard";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import defaultImage from "/assets/images/advertisment.png";
import serviceImage from "/assets/images/service.png";
import { Link } from "react-router-dom";

// Данные для блоков
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
  { id: 1, title: "ПОМЫТЬ ТАРЕЛКУ", price: 200, image: serviceImage },
  { id: 2, title: "ДОСТАВКА ДОМОЙ", price: 300, image: serviceImage },
  { id: 3, title: "УПАКОВКА В ПОДАРОК", price: 150, image: serviceImage },
  { id: 4, title: "ПОМОЩЬ С ВЫБОРОМ", price: 100, image: serviceImage },
  { id: 5, title: "ЭКСПРЕСС-ДОСТАВКА", price: 500, image: serviceImage },
  { id: 6, title: "ГАРАНТИЯ НА ПРОДУКТЫ", price: 250, image: serviceImage },
  { id: 7, title: "ПЕРСОНАЛИЗАЦИЯ УПАКОВКИ", price: 350, image: serviceImage },
  { id: 8, title: "СПЕЦИАЛЬНАЯ УПАКОВКА ДЛЯ ПЕРЕВОЗКИ", price: 400, image: serviceImage },
  { id: 9, title: "КОНСУЛЬТАЦИЯ ПО ПОДАРКАМ", price: 200, image: serviceImage },
  { id: 10, title: "ИНДИВИДУАЛЬНЫЙ РЕЦЕПТ ОТ ШЕФА", price: 600, image: serviceImage },
];

const Home = () => {
  return (
    <div className="home-wrapper">
      <Header />
      <div className="main-content">
        <div className="left-content">
          <div className="content-wrapper">

            {/* 📌 БЛОК РЕКОМЕНДАЦИЙ */}
            <section className="recommendations">
              <Link to="/recommendations" className="expand-btn">все &gt;</Link>
              <h2>Рекомендации <span>на районе</span></h2>
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
                      style={{ backgroundImage: `url(${item.image || defaultImage})` }}
                    >
                      <div className="card-text">
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </section>

            {/* 📌 БЛОК ТОВАРОВ */}
            <section className="products">
              <Link to="/products" className="expand-btn">все &gt;</Link>
              <h2>Товары</h2>

              {/* 📌 КАРУСЕЛЬ ТОВАРОВ */}
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
                      image={product.image} 
                      price={product.price} 
                      title={product.title} 
                      discount={product.discount}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>

            {/* 📌 БЛОК УСЛУГ */}
            <section className="services">
              <Link to="/services" className="expand-btn">все &gt;</Link>
              <h2>Услуги</h2>

              {/* 📌 КАРУСЕЛЬ УСЛУГ */}
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
                      image={service.image}
                      title={service.title}
                      price={service.price}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>

          </div>
        </div>

        {/* 📌 ПРАВАЯ КОЛОНКА (КАРТА) */}
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
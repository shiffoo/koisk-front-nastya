import React from "react";
import "./Home.scss";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

const Home = () => {
  return (
    <div className="home">
      {/* Шапка */}
      <Header />

      {/* Основной контент */}
      <MainContent />
    </div>
  );
};

export default Home;

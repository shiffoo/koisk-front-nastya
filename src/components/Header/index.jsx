import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import AuthModal from "../AuthModal";

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <>
      <header className="header">
        {/* Левый блок: логотип + поиск */}
        <div className="header-left">
          <Link to="/" className="logo">
            <img src="/assets/images/logo.png" alt="Логотип" />
          </Link>

          <div className="search-box">
            <input
              type="text"
              className="search"
              placeholder="Search"
            />
            <img
              src="/assets/images/search-button.svg"
              alt="Поиск"
              className="search-icon"
            />
          </div>
        </div>

        {/* Правый блок: Услуги, Корзина, Войти */}
        <div className="header-right">
          {/* Группа кнопок "Услуги" + "Корзина" */}
          <div className="header-buttons">
            <button className="btn">Услуги</button>

            <button className="btn cart">
              <img src="/assets/images/cart.png" alt="Корзина" />
              <span className="cart-count">0</span>
            </button>
          </div>

          {/* Кнопка "Войти" справа */}
          <button className="btn btn-login" onClick={handleOpenAuthModal}>
            Войти
          </button>
        </div>
      </header>

      <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} />
    </>
  );
};

export default Header;

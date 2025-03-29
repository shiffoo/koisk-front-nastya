import React from "react";
import "./Footer.scss"; // Если у тебя есть стили — подключим их

const Footer = () => {
  return (
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
  );
};

export default Footer;
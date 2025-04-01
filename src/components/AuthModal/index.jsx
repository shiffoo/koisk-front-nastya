import React, { useState } from 'react';
import './AuthModal.scss';

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Вход:', { email, password });
    } else {
      console.log('Регистрация:', { name, email, username, password });
    }
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="auth-title">{isLogin ? 'Вход' : 'Регистрация'}</h2>
        
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label>Имя Фамилия</label>
              <input
                type="text"
                placeholder="Jiangyu"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div className="form-group">
            <label>Почта</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Пользователь</label>
              <input
                type="text"
                placeholder="johnkevine4362"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          
          <div className="form-group">
            <label>Пароль</label>
            <input
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            {isLogin ? 'Log in' : 'Создать аккаунт'}
          </button>
        </form>

        <div className="auth-footer">
          {isLogin ? (
            <p>Еще нет аккаунта? <button className="switch-auth-mode" onClick={() => setIsLogin(false)}>Создать</button></p>
          ) : (
            <p>Уже есть аккаунт? <button className="switch-auth-mode" onClick={() => setIsLogin(true)}>Вход</button></p>
          )}
        </div>
      </div>
    </div>
  );
}

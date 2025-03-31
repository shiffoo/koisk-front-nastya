import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.scss";
import "./styles/font.scss";

// ❌ Временно убираем Redux
// import { Provider } from "react-redux";
// import store from "./store";

// ✅ Один корректный вызов createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

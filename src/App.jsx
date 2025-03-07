import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Здесь можно добавить другие страницы */}
      </Routes>
    </Router>
  );
}

export default App;

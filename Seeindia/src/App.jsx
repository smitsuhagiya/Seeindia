import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import London from "./london.jsx";
import Switzerland from "./switzerland.jsx";
import Dubai from "./dubai.jsx";
import India from "./india.jsx";
import Navbar from "./Navbar.jsx";
import Cart from "./Cart.jsx";
import Login from "./Login.jsx";
import Signup from "./Register.jsx";
import Favorite from "./Favorite.jsx";
/*import Home from "./images/logo.png";*/

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/switzerland" element={<Switzerland />} />
          <Route path="/london" element={<London />} />
          <Route path="/india" element={<India />} />
          <Route path="/dubai" element={<Dubai />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logo" element={<home1 />} />
          <Route path="/favorite" element={<Favorite/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

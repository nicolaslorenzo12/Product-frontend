import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/Products";
import Layout from "./pages/Layout";
import Welcome from "./pages/Welcome";
import SupermarketList from "./pages/Supermarkets";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="products" element={<ProductList/>} />
          <Route path="supermarkets" element={<SupermarketList/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/Products";
import Layout from "./pages/Layout";
import Welcome from "./pages/Welcome";
import Supermarkets from "./pages/Supermarkets";
import SupermarketInfo from "./pages/SupermarketInfo";
import Error from "./pages/Error";

const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Welcome />} />
              <Route path="products" element={<ProductList/>} />
              <Route path="supermarkets" element={<Supermarkets/>} />
              <Route path="productsofasupermarket/:supermarketId" element={<SupermarketInfo/>} />
              <Route path="error" element={<Error/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
  };
  
  export default App;
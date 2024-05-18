import React, { useState, useEffect } from 'react';
import { fetchProducts } from './FetchProducts';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.productName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

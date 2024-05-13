import React, { useState, useEffect } from 'react';

const SupermarketList = () => {
  const [supermarkets, setSupermarkets] = useState([]);

  useEffect(() => {
    fetchSupermarkets();
  }, []);

  const fetchSupermarkets = async () => {
    try {
      const response = await fetch('https://localhost:7152/api/SuperMarket');
      if (!response.ok) {
        throw new Error('Failed to fetch supermarkets');
      }
      const data = await response.json();
      setSupermarkets(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {supermarkets.map(supermarket => (
          <li key={supermarket.id}>
            {supermarket.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupermarketList;

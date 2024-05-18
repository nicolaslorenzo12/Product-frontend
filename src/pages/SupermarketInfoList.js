import { React, useEffect, useState } from "react";

const SupermarketInfoList = ({ supermarketProducts, supermarketName, updatePrice }) => {
  const [prices, setPrices] = useState({});
  console.log(prices)
  

  useEffect(() => {
    const initialPrices = supermarketProducts.reduce((acc, product) => {
      acc[product.prdtId] = [product.prdtId, product.price];
      return acc;
    }, {});
    setPrices(initialPrices); // Set prices to initialPrices
  }, [supermarketProducts]);


  const handleInputChange = (e, productId) => {
    const value  = e.target.value;
    setPrices(prevPrices => ({ ...prevPrices, [productId]: [productId, value] }));
  };
  

  const handleUpdateClick = (productId) => {
    const newPrice = prices[productId][1];
    updatePrice(productId, newPrice);
  };

  return (
    <div className="info">
      <h1>{supermarketName}</h1>
      {supermarketProducts.map((supermarketProduct) => (
        <div className="info-div" key={supermarketProduct.prdtId}>
          <p>{supermarketProduct.prdtName}</p>
          <input
            className="input-info"
            type="text"
            value={prices[supermarketProduct.prdtId] && prices[supermarketProduct.prdtId][1]}
            onChange={(e) => handleInputChange(e, supermarketProduct.prdtId)}
          />
          <button onClick={() => handleUpdateClick(supermarketProduct.prdtId)}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default SupermarketInfoList;
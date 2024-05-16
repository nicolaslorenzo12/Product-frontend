import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

async function fetchSupermarketsProductsInfo(setSupermarketProducts, supermarketId, setSupermarketName) {
    try {
        const response = await fetch(`https://localhost:7152/api/SuperMarketProduct/${supermarketId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch supermarkets');
      }
      const data = await response.json();
      setSupermarketProducts(data);
      setSupermarketName(data[0].spmName)
    } catch (error) {
      console.error(error);
    }
  }

  async function updatePriceOfAProductOfASupermarket(setSupermarketProducts, supermarketId, productId,price){

    try{
      const response = await fetch("https://localhost:7152/api/SuperMarketProduct", {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          spmktId: supermarketId,
          prdtId: productId,
          price: price
        })
      });

      if(!response.ok){
        throw new Error("Failed to change price");
      }
      setSupermarketProducts(prevSupermarketProducts => prevSupermarketProducts.map(supermarketProduct => {
        if (supermarketProduct.prdtId === productId) {
          return { ...supermarketProduct, price: price };
        }
        return supermarketProduct;
      }));
    }catch(error){
      console.error(error)
    }
  }

const SupermarketInfo = () => {
    
    let { supermarketId } = useParams();
    const [supermarketProducts, setSupermarketProducts] = useState([]);
    const [supermarketName, setSupermarketName]  = useState([])


    useEffect(() => {
        const fetchData = async () => {
          await fetchSupermarketsProductsInfo(setSupermarketProducts, supermarketId, setSupermarketName);
        };
    
        fetchData();
      }, [supermarketId]);


      const updatePrice = async (productId, price) => {
        await updatePriceOfAProductOfASupermarket(setSupermarketProducts, supermarketId, productId,price);
      };

      
    
      return <SupermarketInfoList supermarketProducts={supermarketProducts} supermarketName={supermarketName} updatePrice={updatePrice} />;
};

  
  export default SupermarketInfo;
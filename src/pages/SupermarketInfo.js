import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SupermarketInfoList = ({ supermarketProducts, supermarketName }) => (
    <div className="info">    
    <h1>{supermarketName}</h1>   
    {supermarketProducts.map((supermarketProduct) => (     
        <div className="info-div" key={supermarketProduct.prtId}>       
            <p>{supermarketProduct.prdtName}</p>
            <input
            className="input-info"
            type="text"
            value={supermarketProduct.price}
            // onChange={(e) => handleUpdate(index, e.target.value)}
            />
            <button>Update</button>
        </div>
    ))}
  </div>
);

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
    
      return <SupermarketInfoList supermarketProducts={supermarketProducts} supermarketName={supermarketName} />;
};

  
  export default SupermarketInfo;
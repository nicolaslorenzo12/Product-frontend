import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SupermarketInfoList from "./SupermarketInfoList";
import { fetchSupermarketsProductsInfo } from "./api/FetchSupermarketsProductsInfo";
import { updatePriceOfAProductOfASupermarket } from "./api/UpdatePriceOfAProductOfASupermarket";

const SupermarketInfo = () => {
    
    let { supermarketId } = useParams();
    const [supermarketProducts, setSupermarketProducts] = useState([]);
    const [supermarketName, setSupermarketName]  = useState([])


    useEffect(() => {
        const fetchData = async () => {
          const supermarketProductsData = await fetchSupermarketsProductsInfo(supermarketId);
          setSupermarketProducts(supermarketProductsData);
          if (supermarketProductsData.length > 0) {
            setSupermarketName(supermarketProductsData[0].spmName);
        } else {
            setSupermarketName('');
        }
        };
    
        fetchData();
      }, []);


      const updatePrice = async (productId, price) => {
        await updatePriceOfAProductOfASupermarket(supermarketId, productId,price);
        
        setSupermarketProducts(prevSupermarketProducts => prevSupermarketProducts.map(supermarketProduct => {
          if (supermarketProduct.prdtId === productId) {
            return { ...supermarketProduct, price: price };
          }
          return supermarketProduct;
        }));
      };

      return <SupermarketInfoList supermarketProducts={supermarketProducts} supermarketName={supermarketName} updatePrice={updatePrice} />;
};

  
  export default SupermarketInfo;
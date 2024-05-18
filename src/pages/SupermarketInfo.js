import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SupermarketInfoList from "./SupermarketInfoList";
import { fetchSupermarketsProductsInfo } from "./FetchSupermarketsProductsInfo";
import { updatePriceOfAProductOfASupermarket } from "./UpdatePriceOfAProductOfASupermarket";

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
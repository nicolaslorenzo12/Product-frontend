import React, { useState, useEffect} from 'react';
import Error from './Error';
import SupermarketList from "./SupermarketList"
import '../style/style.css'
import { fetchSupermarkets } from './FetchSupermarkets';
import { deleteSupermarket } from './DeleteSupermarket';

const Supermarkets = () => {
  const [supermarkets, setSupermarkets] = useState([]);
  const [errorFetchingSupermarkets, setErrorFetchingSupermarkets] = useState(true);

  useEffect(() => { 
    const fetchData = async () => {
      const { dataWasNotCorrectlyFetched, fetchedData } = await fetchSupermarkets();
      setErrorFetchingSupermarkets(dataWasNotCorrectlyFetched)

      if(dataWasNotCorrectlyFetched){
        setSupermarkets(fetchedData)
      }
    };

    fetchData();
  }, []);

  const deleteData = async (supermarketId) => {
    await deleteSupermarket(setSupermarkets, supermarketId);
  };

  if (!errorFetchingSupermarkets) {
    return <Error message={"There was an error fetching the supermarkets"} />;
  }else{
    return <SupermarketList supermarkets={supermarkets} deleteSupermarket={deleteData} />;
  }
};

export default Supermarkets;

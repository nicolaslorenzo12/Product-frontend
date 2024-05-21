import config from "../../../config";


export async function updatePriceOfAProductOfASupermarket(supermarketId, productId,price){

    try{
      const response = await fetch(`${config.apiBaseUrl}/SuperMarketProduct`, {
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
    }catch(error){
      console.error(error)
    }
  }

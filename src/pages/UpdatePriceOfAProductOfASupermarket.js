export async function updatePriceOfAProductOfASupermarket(setSupermarketProducts, supermarketId, productId,price){

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

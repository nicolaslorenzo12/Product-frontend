export async function deleteSupermarket(setSupermarkets, supermarketId){

    try {
      const response = await fetch(`https://localhost:7152/api/SuperMarket?supermarketId=${supermarketId}`,{
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete supermarkets');
      }
      setSupermarkets(prevSupermarkets => prevSupermarkets.filter(supermarket => supermarket.id !== supermarketId));
    } catch (error) {
      console.error(error);
    }
  }
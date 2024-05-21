import config from "../../../config";

export async function deleteSupermarket(supermarketId){

    try {
      const response = await fetch(`${config.apiBaseUrl}/SuperMarket?supermarketId=${supermarketId}`,{
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete supermarkets');
      }
    } catch (error) {
      console.error(error);
    }
  }
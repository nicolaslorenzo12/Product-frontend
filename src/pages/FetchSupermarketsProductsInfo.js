export async function fetchSupermarketsProductsInfo(setSupermarketProducts, supermarketId, setSupermarketName) {
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
import config from "../../../config";

export async function fetchSupermarketsProductsInfo(supermarketId) {

    let data = null;
    try {
        const response = await fetch(`${config.apiBaseUrl}/SuperMarketProduct/${supermarketId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch supermarkets');
      }
      data = await response.json();
    } catch (error) {
      console.error(error);
    }

    return data;
}
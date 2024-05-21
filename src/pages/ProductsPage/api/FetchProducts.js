import config from "../../../config";
export async function fetchProducts()  {

  let data = null;
    try {
      const response = await fetch(`${config.apiBaseUrl}/Product`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      data = await response.json();
    } catch (error) {
      console.error(error);
    }

    return data;
  };
  
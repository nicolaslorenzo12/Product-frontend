export async function fetchProducts(setProducts)  {
    try {
      const response = await fetch('https://localhost:7152/api/Product');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };
  
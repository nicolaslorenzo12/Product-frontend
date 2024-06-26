import config from "../../../config";

export async function fetchSupermarkets() {
    let dataWasNotCorrectlyFetched = true;
    let fetchedData = null;

    try {
      const response = await fetch(`${config.apiBaseUrl}/SuperMarket`,{
        method: 'GET',
      });
  
      if (!response.ok) {
        dataWasNotCorrectlyFetched = false
        console.log("Something went wrong when fetching data")
      }
      else{
            fetchedData = await response.json();
        }
    } catch (error) {
        dataWasNotCorrectlyFetched = false
        console.log(error)
    }

    return { dataWasNotCorrectlyFetched, fetchedData  };
  }
import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../style/style.css'

const SupermarketList = ({ supermarkets }) => (
  <div>
      <div>
        <h1>Supermarkets</h1>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {supermarkets.map(supermarket => (
                <tr key={supermarket.id}>
                  <td>
                    <Link to={`/productsofasupermarket/${supermarket.id}`}>
                      {supermarket.name}
                    </Link>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  </div>
);

async function fetchSupermarkets(setSupermarkets) {
  try {
    const response = await fetch('https://localhost:7152/api/SuperMarket');
    if (!response.ok) {
      throw new Error('Failed to fetch supermarkets');
    }
    const data = await response.json();
    setSupermarkets(data);
  } catch (error) {
    console.error(error);
  }
}

const Supermarkets = () => {
  const [supermarkets, setSupermarkets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchSupermarkets(setSupermarkets);
    };

    fetchData();
  }, [supermarkets]);

  return <SupermarketList supermarkets={supermarkets} />;
};

export default Supermarkets;
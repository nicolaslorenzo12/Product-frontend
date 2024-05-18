import { Link } from "react-router-dom";

const SupermarketList = ({ supermarkets, deleteSupermarket }) => (
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
                      <button onClick={() => deleteSupermarket(supermarket.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );

  export default SupermarketList;
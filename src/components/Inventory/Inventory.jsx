import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Inventory/Inventory.scss'


export default function Inventory() {


  const [inventoryItems, setInventoryItems] = useState([ 

    { id: 1, name: 'Television', category: 'Electronics', status: 'IN STOCK', quantity: 500 },
    { id: 2, name: 'Gym Bag', category: 'Gear', status: 'OUT OF STOCK', quantity: 0 },
    { id: 3, name: 'Hoodie', category: 'Apparel', status: 'IN STOCK', quantity: 0 },

  ]);

  useEffect(() => {
    fetch('http://localhost:8080/api/inventories') 
      .then((response) => response.json())
      .then((data) => setInventoryItems(data))
      .catch((error) => console.log(error));
  }, []);


  return (
    <div>
      <table className="inventory__table">
        <thead>
          <tr>
            <th className="inventory__table--header">INVENTORY ITEM</th>
            <th className="inventory__table--header">CATEGORY</th>
            <th className="inventory__table--header">STATUS</th>
            <th className="inventory__table--header">QUANTITY</th>
            <th className="inventory__table--header">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map((item) => (
            <tr key={item.id} className="table__row">
              <td className="table__row--name">
                <Link to={`/item/${item.id}`}>{item.name}</Link></td>
              <td className="table__row--category">{item.category} </td>
              <td className="table__row--status">{item.status} </td>
              <td className="table__row--quantity">{item.quantity} </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}
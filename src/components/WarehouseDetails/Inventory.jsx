import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Inventory.scss";
import delete_icon from "../../assets/Icons/delete_outline-24px.svg";
import edit_icon from "../../assets/Icons/edit-24px.svg";
import chevron_right from "../../assets/Icons/chevron_right-24px.svg";


export default function Inventory() {
  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: 'Television', category: 'Electronics', status: 'IN STOCK', quantity: 500 },
    { id: 2, name: 'Gym Bag', category: 'Gear', status: 'OUT OF STOCK', quantity: 0 },
    // { id: 3, name: 'Hoodie', category: 'Apparel', status: 'IN STOCK', quantity: 0 },
  ]);

  useEffect(() => {
    fetch('http://localhost:8080/api/inventories')
      .then((response) => response.json())
      .then((data) => setInventoryItems(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {inventoryItems.map((item) => (
        <div key={item.id} className="inventory__group">
          <h4 className="inventory__line"></h4>
          <div className="table__mastersection">
            <div className="table__divsection">
              <div className="table__section">
                <div className="table__header">Inventory Item</div>
                <button className="table__row--name">{item.name} 
                <img src={chevron_right} />
                </button>               
              </div>
              <div className="table__section">
                <div className="table__header">Category</div>
                <div className="table__row--category">{item.category}</div>
              </div>
            </div>
            <div className="table__divsection">
              <div className="table__section">
                <div className="table__header">Status</div>
                <div className="table__row--status">{item.status}</div>
              </div>
              <div className="table__section">
                <div className="table__header">Quantity</div>
                <div className="table__row--qty">{item.quantity}</div>
              </div>
            </div>
            <div className="table__divsection--actions">
              <div className="table__section">
                <div className="table__header">Actions</div>
                <img src={delete_icon} />
                <img src={edit_icon} />
              </div>
            </div>
            </div>
          <div className="table__mastersection--icons">
            <div className="table__divsection--rows">
              <img src={delete_icon} />
              <img src={edit_icon} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

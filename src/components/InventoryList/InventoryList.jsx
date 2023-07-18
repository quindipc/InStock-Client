import "./InventoryList.scss";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import trash from "../../assets/Icons/delete_outline-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SortFilterWarehouse from "../SortFilterWarehouse/SortFilterWarehouse";

import DeleteInventory from "../DeleteInventory/DeleteInventory";

export default function InventoryList({ setOpenModal }) {
  let [inventoryList, setInventoryList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/inventories")
      .then((response) => {
        setInventoryList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const inventoryItems = inventoryList.map((item) => {
    return (
      <li className="warehouse__item">
        <div className="warehouse__text">
          <div className="warehouse__left">
            <div className="warehouse__left-name">
              <h4 className="warehouse__titles">INVENTORY ITEM</h4>
              <button className="warehouse__left-name-button">
                <Link to={`/inventory/${item.id}`} className="no_underline">
                  <h3 className="warehouse__text-blue no_underline">
                    {item.item_name}
                  </h3>
                </Link>
                <img
                  src={chevron}
                  className="grow no_underline"
                  alt="chevron arrow right"
                />
              </button>
            </div>
            <div className="warehouse__left-category">
              <h4 className="warehouse__titles">CATEGORY</h4>
              <p>{item.category}</p>
            </div>
          </div>
          <div className="warehouse__right">
            <div className="warehouse__right-contact">
              <h4 className="warehouse__titles">STATUS</h4>
              <p>{item.status}</p>
            </div>
            <div className="warehouse__right-info">
              <h4 className="warehouse__titles">QTY</h4>
              <p>{item.quantity}</p>
            </div>
          </div>
        </div>
        <div className="warehouse__icons">
          <button
            id="delete__button"
            className="warehouse__icons-delete grow"
            onClick={() => handleDelete(item)}
          >
            <img src={trash} alt="delete trash can" />
          </button>
          <button id="edit__button" className="warehouse__icons-edit grow">
            <Link to={`/edit-inventory-item/${item.id}`}>
              <img src={edit} alt="edit pencil" />
            </Link>
          </button>
        </div>
      </li>
    );
  });

  return (
    <div className="warehouses">
      <div className="warehouses__header">
        <h1 className="warehouses__title">Inventory</h1>
        <input
          type="text"
          id="searchbar"
          className="warehouses__searchbar"
          placeholder="Search..."
        ></input>
        <button className="warehouses__button">
          {" "}
          <Link
            to="/add-new-inventory-item"
            className="no_underline warehouses__button"
          >
            {" "}
            <h3>+ Add New Item</h3>{" "}
          </Link>
        </button>
      </div>
      {/* add in the single warehouse componets here  */}
      <SortFilterWarehouse />
      <ul>{inventoryItems}</ul>

      {isModalOpen && (
        <DeleteInventory
          setOpenModal={handleCloseModal}
          inventoryList={selectedItem}
        />
      )}
    </div>
  );
}
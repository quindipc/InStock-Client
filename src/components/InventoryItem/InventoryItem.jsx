import "./InventoryItem.scss";

// Dependancies
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Assets
import arrowback from "../../assets/Icons/arrow_back-24px.svg";
import editicon from "../../assets/Icons/edit-24px.svg";
import editiconwhite from "../../assets/Icons/edit-24px-white.svg";

export default function InventoryItem() {

  // To define later
  const INVENTORY_ID = 1

  const navigate = useNavigate();
  const BASE_URL = "http://localhost:8080/";
  const [inventoryDetail, setInventoryDetail] = useState({
  });


  async function fetchInventory() {

    try {

      const response = await axios.get(`${BASE_URL}api/inventories/${INVENTORY_ID}`)
      console.log(response.data);
      setInventoryDetail(response.data)

    } catch (error) {
      console.error(error);
    }

  }  // Call the fetchInventory function when the component mounts
  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <>
      <section className="inventoryItem">
        <div className="inventoryItem__container">
          <div className="inventoryItem__header">
            {/* ADD NEW WAREHOUSE HEADER */}
            <Link to="/inventory" className="inventoryItem__back">
              <img
                className="inventoryItem__arrowback"
                src={arrowback}
                alt="Arrow back icon"
              />
            </Link>
            <h1 className="inventoryItem__title">{inventoryDetail.item_name}</h1>
            
            <Link to="/edit-inventory=item" className="inventoryItem__editicon--framelink">
            <div className="inventoryItem__editicon--frame">
              <img
                className="inventoryItem__editicon--picture"
                src={editiconwhite}
                alt="edit icon"
              />
            </div>
            </Link>

          </div>
          <hr className="inventoryItem__divider" />
        </div>
      </section>

      <section className="inventoryItemInfo">
        <div className="inventoryItemInfo__mastercontainer">
          <div className="inventoryItemInfo__leftcontainer">
            <div className="inventoryItemInfo__subcontainer">
              <h4 className="inventoryItemInfo__leftcontainer--subheader">ITEM DESCRIPTION:</h4>
              <p>{inventoryDetail.description}</p>
            </div>
            <div className="inventoryItemInfo__subcontainer">
              <h4 className="inventoryItemInfo__leftcontainer--subheader">CATEGORY:</h4>
              <p>{inventoryDetail.category}</p>
            </div>
          </div>
          <hr className="inventoryItem__divider--vertical" />
          <div className="inventoryItemInfo__rightcontainer">
            <div className="inventoryItemInfo__quantitycontainer">
              <div className="inventoryItemInfo__quantitycontainer--status">
                <h4 className="inventoryItemInfo__rightcontainer--subheader">STATUS:</h4>
                <p className={inventoryDetail.status === 'In Stock' ? 'in-stock' : 'out-of-stock'}> {inventoryDetail.status} </p>
              </div>
              <div className="inventoryItemInfo__quantitycontainer--quantity">
                <h4 className="inventoryItemInfo__rightcontainer--subheader">QUANTITY:</h4>
                <p>{inventoryDetail.quantity}</p>
              </div>
            </div>
            <div className="inventoryItemInfo__subcontainer">
              <h4 className="inventoryItemInfo__rightcontainer--subheader">WAREHOUSE:</h4>
              <p>{inventoryDetail.warehouse_name}</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

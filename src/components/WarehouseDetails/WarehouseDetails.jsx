import "./WarehouseDetails.scss";

// Dependancies
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Assets
import arrowback from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px-white.svg";
import delete_icon from "../../assets/Icons/delete_outline-24px.svg";
import edit_icon from "../../assets/Icons/edit-24px.svg";
import chevron_right from "../../assets/Icons/chevron_right-24px.svg";

export default function WarehouseDetails() {
  const BASE_URL = "http://localhost:8080";

  const { warehouse_id } = useParams();
  const [selectedWarehouseDetails, setSelectedWarehouseDetails] = useState({});
  const [selectedWarehouse, setSelectedWarehouse] = useState({});
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {

    // Grabs the warehouse id from list of warehouses
    const fetchWarehouseDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/warehouses/${warehouse_id}`);
        setSelectedWarehouseDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching warehouse details:", error);
      }
    };

    // Grabs the inventory list from the specific warehouse selected
    const fetchInventoryItems = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/warehouses/${warehouse_id}/inventories`,
        );
        setInventoryItems(response.data);
      } catch (error) {
        console.log("Error fetching inventory items:", error);
      }
    };

    fetchWarehouseDetails();
    fetchInventoryItems();
  }, [warehouse_id]);

  const {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = selectedWarehouseDetails;

  const { item_name, category, status, total_quantity } = selectedWarehouse;

  return (
    <>
      {/* SELECTED WAREHOUSE */}
      <section className="whdetails">
        <div className="whdetails__container">
          <div className="whdetails__container-title">
            <Link to="/" className="whdetails__back">
              <img
                className="whdetails__arrowback"
                src={arrowback}
                alt="Arrow back icon"
              />
            </Link>
            <h1 className="whdetails__name">{warehouse_name}</h1>
            <Link to="/" className="whdetails__edit">
              Edit
            </Link>
            <Link to="/" className="whdetails__edit-icon">
              <img src={edit} alt="Edit icon" />
            </Link>
          </div>
          <hr className="whdetails__divider" />
          <div className="whdetails__container-info">
            <div className="whdetails__subcontainer--address">
              <h4 className="whdetails__subheader">Warehouse Address:</h4>
              <p className="whdetails__details">
                {address}, {city}, {country}
              </p>
            </div>
            <hr className="whdetails__divider--vertical" />
            <div className="whdetails__container-contact">
              <div className="whdetails__subcontainer--name">
                <h4 className="whdetails__subheader">Contact Name:</h4>
                <p className="whdetails__details">{contact_name}</p>
                <p className="whdetails__details">{contact_position}</p>
              </div>
              <div className="whdetails__subcontainer--info">
                <h4 className="whdetails__subheader">Contact Information</h4>
                <p className="whdetails__details">{contact_phone}</p>
                <p className="whdetails__details">{contact_email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WAREHOUSE INVENTORY LIST */}
      <section className="whdetails__inventory">
        <div className="whdetails__inventory-container">
          {inventoryItems.map((item) => (
            <div key={item.id} className="whdetails__inventory-group">
              <hr className="whdetails__divider" />
              <div className="whdetails__inventory-tablesection">
                <div className="whdetails__inventory-divsection">
                  <div className="whdetails__inventory-section">
                    <h3 className="whdetails__inventory-header">
                      Inventory Item
                    </h3>
                    <button className="whdetails__inventory-row-name">
                      {item_name}
                      <img src={chevron_right} alt="Right Chevron" />
                    </button>
                  </div>
                  <div className="whdetails__inventory-section">
                    <h3 className="whdetails__inventory-header">Category</h3>
                    <p className="whdetails__inventory-row-category">
                      {category}
                    </p>
                  </div>
                </div>
                <div className="whdetails__inventory-divsection">
                  <div className="whdetails__inventory-section">
                    <h3 className="whdetails__inventory-header">Status</h3>
                    <p className="whdetails__inventory-row-status">
                      {status}
                    </p>
                  </div>
                  <div className="whdetails__inventory-section">
                    <h3 className="whdetails__inventory-header">Quantity</h3>
                    <p className="whdetails__inventory-row-qty">
                      {total_quantity}
                    </p>
                  </div>
                </div>
                <div className="whdetails__inventory-divsection--actions">
                  <div className="whdetails__inventory-section">
                    <h3 className="whdetails__inventory-header">Actions</h3>
                    <img src={delete_icon} alt="Delete Icon" />
                    <img src={edit_icon} alt="Edit Icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

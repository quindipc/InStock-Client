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
  const BASE_URL = "http://localhost:8080/api";

  const { id } = useParams();
  const [selectedWarehouseDetails, setSelectedWarehouseDetails] = useState({});
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    // Grabs the warehouse details
    const fetchWarehouseDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/warehouses/${id}`);
        setSelectedWarehouseDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching warehouse details:", error);
      }
    };

    // Grabs the inventory list from the specific warehouse selected
    const fetchInventoryItems = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/warehouses/${id}/inventories`);
        setInventoryItems(response.data);
      } catch (error) {
        console.log("Error fetching inventory items:", error);
      }
    };

    fetchWarehouseDetails();
    fetchInventoryItems();
  }, [id]);

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
          <Link to={`/edit-warehouse/${id}`} className="whdetails__edit">
            Edit
          </Link>
          <Link to={`/edit-warehouse/${id}`} className="whdetails__edit-icon">
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
                  <Link to={`/inventory-item/${item.id}`}>
                    <button className="whdetails__inventory-row-name">
                      {item.item_name}
                      <img src={chevron_right} alt="Right Chevron" />
                    </button>
                  </Link>
                </div>
                <div className="whdetails__inventory-section">
                  <h3 className="whdetails__inventory-header">Category</h3>
                  <p className="whdetails__inventory-row-category">
                    {item.category}
                  </p>
                </div>
              </div>
              <div className="whdetails__inventory-divsection">
                <div className="whdetails__inventory-section">
                  <h3 className="whdetails__inventory-header">Status</h3>
                  <p className="whdetails__inventory-row-status">
                    {item.status}
                  </p>
                </div>
                <div className="whdetails__inventory-section">
                  <h3 className="whdetails__inventory-header">Quantity</h3>
                  <p className="whdetails__inventory-row-qty">
                    {item.total_quantity}
                  </p>
                </div>
              </div>
              <div className="whdetails__inventory-divsection--actions">
                <div className="whdetails__inventory-section">
                  <h3 className="whdetails__inventory-header">Actions</h3>

                  <Link to={`/delete-inventory-item/${item.id}`}>
                    <img src={delete_icon} alt="Delete Icon" />
                  </Link>

                  <Link to={`/edit-inventory-item/${item.id}`}>
                    <img src={edit_icon} alt="Edit Icon" />
                  </Link>
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
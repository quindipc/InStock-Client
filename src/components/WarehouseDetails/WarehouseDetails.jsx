import "./WarehouseDetails.scss";

// Dependancies
import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// Assets
import arrowback from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px-white.svg";
// import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";

export default function WarehouseDetails() {
  // const BASE_URL = "http://localhost:8000/";

  // const { id } = useParams();
  // const [selectedWarehouseDetails, setSelectedWarehouseDetails] = useState([]);

  // const getWarehouseDetails = (id) => {
  //   axios
  //     .get(`${BASE_URL}`)
  //     .then((response) => {
  //       setSelectedWarehouseDetails(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching video details:", error);
  //     });
  // };

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}`)
  //     .then((response) => {
  //       setSelectedWarehouseDetails(response.data);
  //       if (id) {
  //         getWarehouseDetails(id);
  //       } else {
  //         getWarehouseDetails(response.data?.[0]?.id);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching video details:", error);
  //     });
  // }, [id]);

  // const {
  //   // id,
  //   warehouse_name,
  //   address,
  //   city,
  //   country,
  //   contact_name,
  //   contact_position,
  //   contact_phone,
  //   contact_email,
  // } = getWarehouseDetails;

  // // This may need to be changed -- check inventory item component
  // const {
  //   // id,
  //   item_name,
  //   category,
  //   status,
  //   quantity
  // } = getInventoryItemDetails;

  return (
    <section className="whdetails">
      <div className="whdetails__container">
        <div className="whdetails__container-title">
          {/* Link to Warehouse List Page -- need to add */}
          <Link to="/" className="whdetails__back">
            <img
              className="whdetails__arrowback"
              src={arrowback}
              alt="Arrow back icon"
            />
          </Link>
          {/* <h1 className="whdetails__name">{warehouse_name}</h1> */}
          <h1 className="whdetails__name">Washington</h1>
          {/* Link to Warehouse Edit Page -- need to add */}
          <Link to="/" className="whdetails__edit">
            Edit
            <img className="whdetails__edit-icon" src={edit} alt="Edit icon" />
          </Link>
        </div>

        <hr className="whdetails__divider" />
        <div className="whdetails__container-info">
          <div className="whdetails__subcontainer--address">
            <h4 className="whdetails__subheader">Warehouse Address:</h4>
            {/* <p className="whdetails__details">{address}, {city}, {country}</p> */}
            <p className="whdetails__details">
              1234 Address Street, Toronto, Canada
            </p>
          </div>
          <hr className="whdetails__divider--vertical" />
          <div className="whdetails__container-contact">
            <div className="whdetails__subcontainer--name">
              <h4 className="whdetails__subheader">Contact Name:</h4>
              {/* <p className="whdetails__details">{contact_name}</p> */}
              <p className="whdetails__details">Name Name</p>
              {/* <p className="whdetails__details">{contact_position}</p> */}
              <p className="whdetails__details">Warehouse Manager</p>
            </div>
            <div className="whdetails__subcontainer--info">
              <h4 className="whdetails__subheader">Contact Information</h4>
              {/* <p className="whdetails__details">{contact_phone}</p> */}
              <p className="whdetails__details">+1 (647)-123-4567 </p>
              {/* <p className="whdetails__details">{contact_email}</p> */}
              <p className="whdetails__details">email@email.com</p>
            </div>
          </div>
        </div>
        <hr className="whdetails__divider" />

        {/* INVENTORY LIST ITEMS */}
        {/* Need to map this over the API */}
        {/* <div className="warehousedetails__container-item"> */}
        {/* <hr className="warehousedetails__divider" /> */}
        {/* <h4 className="warehousedetails__subheader">Inventory Item</h4> */}
        {/* Link to the Inventory Item -- need to add */}
        {/* <Link to="/" className="warehousedetails__inventory-item"> */}
        {/* <p className="warehousedetails__details">{item_name}</p>  */}
        {/* <p className="warehousedetails__details">Item Name</p> */}
        {/* </Link> */}
        {/* <h4 className="warehousedetails__subheader">Status</h4> */}
        {/* <p className="warehousedetails__details">{status}</p> */}
        {/* <p className="warehousedetails__details">Status</p> */}
        {/* <h4 className="warehousedetails__subheader">QTY</h4> */}
        {/* <p className="warehousedetails__details">{quantity}</p> */}
        {/* <p className="warehousedetails__details">Quantity</p> */}
        {/* <h4 className="warehousedetails__subheader">Category</h4> */}
        {/* <p className="warehousedetails__details">{category}</p> */}
        {/* <p className="warehousedetails__details">Category</p> */}

        {/* DELETE -- may need to change this */}
        {/* <Link to="/" className="warehousedetails__delete"> */}
        {/* <img */}
        {/* className="warehousedetails__delete-icon" */}
        {/* /      src={deleteIcon} */}
        {/* alt="delete icon" */}
        {/* /> */}
        {/* </Link> */}

        {/* Link to Invnetory Item Edit Page -- need to add */}
        {/* <Link to="/" className="warehousedetails__edit-item"> */}
        {/* <img */}
        {/* className="warehousedetails__edit-icon" */}
        {/* src={edit} */}
        {/* alt="Edit icon" */}
        {/* /> */}
        {/* </Link> */}
        {/* </div> */}
      </div>
    </section>
  );
}

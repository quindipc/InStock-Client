import "./WarehouseDetails.scss";

// Dependancies
import { Link } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// Assets
import arrowback from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
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
    <section className="warehousedetails">
      <div className="warehousedetails__container">
        <div className="warehousedetails__container-title">
          {/* Link to Warehouse List Page -- need to add */}
          <Link to="/" className="warehousedetails__back">
            <img
              className="warehousedetails__arrowback"
              src={arrowback}
              alt="Arrow back icon"
            />
          </Link>
          {/* <h1 className="warehousedetails__name">{warehouse_name}</h1> */}
          <h1 className="warehousedetails__name">Washington</h1>
          {/* Link to Warehouse Edit Page -- need to add */}
          <Link to="/" className="warehousedetails__edit-details">
            <img
              className="warehousedetails__edit-icon"
              src={edit}
              alt="Edit icon"
            />
          </Link>
        </div>

        <div className="warehousedetails__container-info">
          <hr className="warehousedetails__divider" />
          <h4 className="warehousedetails__subheader">Warehouse Address:</h4>
          {/* <p className="warehousedetails__details">{address}, {city}, {country}</p> */}
          <p className="warehousedetails__details">address, city, country</p>
          <h4 className="warehousedetails__subheader">Contact Name:</h4>
          {/* <p className="warehousedetails__details">{contact_name}</p> */}
          <p className="warehousedetails__details">contact name</p>
          {/* <p className="warehousedetails__details">{contact_position}</p> */}
          <p className="warehousedetails__details">contact position</p>
          <h4 className="warehousedetails__subheader">Contact Information</h4>
          {/* <p className="warehousedetails__details">{contact_phone}</p> */}
          <p className="warehousedetails__details">contact phone</p>
          {/* <p className="warehousedetails__details">{contact_email}</p> */}
          <p className="warehousedetails__details">contact email</p>
          <hr className="warehousedetails__divider" />
        </div>

        
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

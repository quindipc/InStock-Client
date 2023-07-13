import "./AddNewWarehouse.scss";

// Dependancies
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

// Assets
import arrowback from "../../assets/Icons/arrow_back-24px.svg";

export default function AddNewWarehouse() {
  // const [showSuccess, setSuccess] = useState(false);
  // const [showError, setError] = useState(false);
  const navigate = useNavigate();
  // const BASE_URL = "http://localhost:8000/";

  const [formData, setFormData] = useState({
    wh__name: "",
    wh__address: "",
    wh__city: "",
    wh__country: "",
    wh__contactname: "",
    wh__contactnumber: "",
    wh__contactposition: "",
    wh__contactemail: "",
  });

//   //POST request to server
//   axios
//   .post(`${BASE_URL}warehouses`, formData)
//   .then(() => {
//     // Return to homepage
//     setTimeout(() => {
//       setSuccess(true);
//       navigate("/");
//     }, 3000);
//   })
//   .catch((error) => {
//     setError(true);
//   });

// setSuccess(true);



  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TESTING -- please delete
    alert(
      `Name: ${formData.wh__name}, Email: ${formData.wh__contactemail}`,
    );
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    const confirmCancel = window.confirm(
      "Are you sure you would like to cancel?",
    );
    if (confirmCancel) {
      navigate("/");
    }
  };

  return (
    <section className="newwh">
      <div className="newwh__container">
        <Link to="/" className="newwh__back">
          <img
            className="newwh__arrowback"
            src={arrowback}
            alt="Arrow back icon"
          />
        </Link>
        <h1 className="newwh__title">Add New Warehouse</h1>
        <hr className="newwh__divider" />

        <form onSubmit={handleSubmit}>
          <div className="newwh__warehousedetails">
            <h2 className="newwh__title">Warehouse Details</h2>
            <label htmlFor="wh__name" className="newwh__subheader">
              Warehouse Name
            </label>
            <input
              className="newwh__input"
              id="wh__name"
              name="wh__name"
              value={formData.wh__name}
              type="text"
              placeholder="Toronto"
              onChange={handleChange}
            />

            <label htmlFor="wh__address" className="newwh__subheader">
              Street Address
            </label>
            <input
              className="newwh__input"
              id="wh__address"
              name="wh__address"
              value={formData.wh__address}
              type="text"
              placeholder="123 Pearl Street SW"
              onChange={handleChange}
            />

            <label htmlFor="wh__city" className="newwh__subheader">
              City
            </label>
            <input
              className="newwh__input"
              id="wh__city"
              name="wh__city"
              value={formData.wh__city}
              type="text"
              placeholder="Toronto"
              onChange={handleChange}
            />
            <label htmlFor="wh__country">Country</label>
            <input
              className="newwh__input"
              id="wh__country"
              name="wh__country"
              value={formData.wh__country}
              type="text"
              placeholder="Canada"
              onChange={handleChange}
            />
          </div>
          <hr className="newwh__divider" />
          <div className="newwh__subheader">
            <h2 className="newwh__title">Contact Details</h2>

            <label
              htmlFor="wh__contactname"
              className="newwh__subheader"
            >
              Contact Name
            </label>
            <input
              className="newwh__input"
              id="wh__contactname"
              name="wh__contactname"
              value={formData.wh__contactname}
              type="text"
              placeholder="Graeme Lyon"
              onChange={handleChange}
            />

            <label
              htmlFor="wh__contactposition"
              className="newwh__subheader"
            >
              Position
            </label>
            <input
              className="newwh__input"
              id="wh__contactposition"
              name="wh__contactposition"
              value={formData.wh__contactposition}
              type="text"
              placeholder="Warehouse Manager"
              onChange={handleChange}
            />

            <label
              htmlFor="wh__contactnumber"
              className="newwh__subheader"
            >
              Phone Number
            </label>
            <input
              className="newwh__input"
              id="wh__contactnumber"
              name="wh__contactnumber"
              value={formData.wh__contactnumber}
              type="text"
              placeholder="+1 (647) 504-0911"
              onChange={handleChange}
            />

            <label htmlFor="wh__contactemail">Email</label>
            <input
              className="newwh__input"
              id="wh__contactemail"
              name="wh__contactemail"
              value={formData.wh__contactemail}
              type="text"
              placeholder="glyon@instock.com"
              onChange={handleChange}
            />
          </div>

          {/* Error handling
          {showError && (
              <div className="upload__error">
                Please fill out all the fields.
              </div>
          )} */}
          
          <button
            onClick={cancelHandler}
            className="newwh__button newwh__button--cancel"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="newwh__button newwh__button--add"
          >
            + Add Warehouse
          </button>
        </form>
{/* 
        Success handling
        {showSuccess && (
            <div className="newwh__success">Upload successful!</div>
          )} */}
        </div>
    </section>
  );
};

import "./AddNewWarehouse.scss";


// Dependancies
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// Assets
import arrowback from "../../assets/Icons/arrow_back-24px.svg";

export default function AddNewWarehouse() {
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:8080/api/warehouses";

  const initialFormData = {
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccess, setSuccess] = useState(false);
  const [showError, setError] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // delete after testing

    setError(false);

    axios
      .post(`${BASE_URL}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          navigate("/");
          setFormData(initialFormData); // Reset form data
          setError(false);
        }, 3000);
      })
      .catch((error) => {
        setError(true);
      });

    const allFieldsFilled = Object.values(formData).every(
      (value) => value !== "",
    );
    if (!allFieldsFilled) {
      setError(true);
      return;
    }
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

  const inputClassName = showError
    ? "newwh__input newwh__input--error"
    : "newwh__input";

  return (
    <section className="newwh">
      <div className="newwh__container">
        <div className="newwh__header">
          {/* ADD NEW WAREHOUSE HEADER */}
          <Link to="/" className="newwh__back">
            <img
              className="newwh__arrowback grow"
              src={arrowback}
              alt="Arrow back icon"
            />
          </Link>
          <h1 className="newwh__title">Add New Warehouse</h1>
        </div>

        <hr className="newwh__divider newwh__divider--top" />

        <form className="newwh__form" onSubmit={handleSubmit}>
          {/* WAREHOUSE DETAILS */}
          <div className="newwh__container-form">
            <div className="newwh__warehousedetails">
              <h2 className="newwh__subtitle">Warehouse Details</h2>
              <div className="newwh__container-input">
                <label htmlFor="name" className="newwh__subheader">
                  Warehouse Name
                </label>
                <input
                  className={inputClassName}
                  id="name"
                  name="warehouse_name"
                  value={formData.warehouse_name}
                  type="text"
                  placeholder="Toronto"
                  onChange={handleChange}
                />
              </div>

              <div className="newwh__container-input">
                <label htmlFor="address" className="newwh__subheader">
                  Street Address
                </label>
                <input
                  className={inputClassName}
                  id="address"
                  name="address"
                  value={formData.address}
                  type="text"
                  placeholder="123 Pearl Street SW"
                  onChange={handleChange}
                />
              </div>

              <div className="newwh__container-input">
                <label htmlFor="city" className="newwh__subheader">
                  City
                </label>
                <input
                  className={inputClassName}
                  id="city"
                  name="city"
                  value={formData.city}
                  type="text"
                  placeholder="Toronto"
                  onChange={handleChange}
                />
              </div>

              <div className="newwh__container-input">
                <label htmlFor="country">Country</label>
                <input
                  className={inputClassName}
                  id="country"
                  name="country"
                  value={formData.country}
                  type="text"
                  placeholder="Canada"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <hr className="newwh__divider newwh__divider--tablet" />
            <div className="newwh__contactdetails">
              <h2 className="newwh__subtitle">Contact Details</h2>

              <div className="newwh__container-input">
                <label htmlFor="contactname" className="newwh__subheader">
                  Contact Name
                </label>
                <input
                  className={inputClassName}
                  id="contactname"
                  name="contact_name"
                  value={formData.contact_name}
                  type="text"
                  placeholder="Graeme Lyon"
                  onChange={handleChange}
                />
              </div>

              <div className="newwh__container-input">
                <label htmlFor="contactposition" className="newwh__subheader">
                  Position
                </label>
                <input
                  className={inputClassName}
                  id="contactposition"
                  name="contact_position"
                  value={formData.contact_position}
                  type="text"
                  placeholder="Warehouse Manager"
                  onChange={handleChange}
                />
              </div>

              <div className="newwh__container-input">
                <label htmlFor="contactnumber" className="newwh__subheader">
                  Phone Number
                </label>
                <input
                  className={inputClassName}
                  id="contactnumber"
                  name="contact_phone"
                  value={formData.contact_phone || ""}
                  type="tel"
                  placeholder="+1 (647) 504-0911"
                  onChange={handleChange}
                />
              </div>

              <div className="newwh__container-input">
                <label htmlFor="contactemail">Email</label>
                <input
                  className={inputClassName}
                  id="contactemail"
                  name="contact_email"
                  value={formData.contact_email}
                  type="text"
                  placeholder="glyon@instock.com"
                  onChange={handleChange}
                />
              </div>

              {/* Error handling */}
              {showError && (
                <div className="newwh__error">
                  Please fill out all the fields.
                </div>
              )}
            </div>
          </div>
          <div className="newwh__action">
            <div className="newwh__buttons">
              <button
                onClick={cancelHandler}
                className="newwh__button newwh__button--cancel"
              >
                Cancel
              </button>
              <button
                onSubmit={handleSubmit}
                className="newwh__button newwh__button--add"
              >
                + Add Warehouse
              </button>
            </div>
          </div>
        </form>

        {/* Success handling */}
        {showSuccess && (
          <div className="newwh__success">Upload successful!</div>
        )}
      </div>
    </section>
  );
}

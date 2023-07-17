import "./EditWarehouse.scss";

// Dependancies
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Assets
import arrowback from "../../assets/Icons/arrow_back-24px.svg";

export default function EditWarehouse(selectedWarehouse) {
  const navigate = useNavigate();
  const location = useLocation();
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
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (location.state && location.state.selectedWarehouse) {
      const { selectedWarehouse } = location.state;
      setFormData(selectedWarehouse);
    }
  }, [location.state]);

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


    axios
      .put(`${BASE_URL}/${formData.id}`, formData) // Send update request with the warehouse ID
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          navigate("/");
          setSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        setError(true);
      });
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };

  const inputClassName = showError
    ? "editwh__input editwh__input--error"
    : "editwh__input";

  return (
    <section className="editwh">
      <div className="editwh__container">
        <div className="editwh__header">
          <Link to="/" className="editwh__back">
            <img
              className="editwh__arrowback"
              src={arrowback}
              alt="Arrow back icon"
            />
          </Link>
          <h1 className="editwh__title">Edit Warehouse</h1>
        </div>

        <hr className="editwh__divider editwh__divider--top" />

        <form className="editwh__form" onSubmit={handleSubmit}>
          <div className="editwh__container-form">
            <div className="editwh__warehousedetails">
              <h2 className="editwh__subtitle">Warehouse Details</h2>
              <div className="editwh__container-input">
                <label htmlFor="name" className="editwh__subheader">
                  Warehouse Name
                </label>
                <input
                  className={inputClassName}
                  id="name"
                  name="warehouse_name"
                  value={formData.warehouse_name}
                  type="text"
                  placeholder="Warehouse Name"
                  onChange={handleChange}
                />
              </div>

              <div className="editwh__container-input">
                <label htmlFor="address" className="editwh__subheader">
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

              <div className="editwh__container-input">
                <label htmlFor="city" className="editwh__subheader">
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

              <div className="editwh__container-input">
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

            <hr className="editwh__divider editwh__divider--tablet" />
            <div className="editwh__contactdetails">
              <h2 className="editwh__subtitle">Contact Details</h2>

              <div className="editwh__container-input">
                <label htmlFor="contactname" className="editwh__subheader">
                  Contact Name
                </label>
                <input
                  className={inputClassName}
                  id="contactname"
                  name="contactname"
                  value={formData.contact_name}
                  type="text"
                  placeholder="Graeme Lyon"
                  onChange={handleChange}
                />
              </div>

              <div className="editwh__container-input">
                <label htmlFor="contactposition" className="editwh__subheader">
                  Position
                </label>
                <input
                  className={inputClassName}
                  id="contactposition"
                  name="contactposition"
                  value={formData.contact_position}
                  type="text"
                  placeholder="Warehouse Manager"
                  onChange={handleChange}
                />
              </div>

              <div className="editwh__container-input">
                <label htmlFor="contactnumber" className="editwh__subheader">
                  Phone Number
                </label>
                <input
                  className={inputClassName}
                  id="contactnumber"
                  name="contactphone"
                  value={formData.contact_phone}
                  type="text"
                  placeholder="+1 (647) 504-0911"
                  onChange={handleChange}
                />
              </div>

              <div className="editwh__container-input">
                <label htmlFor="contactemail">Email</label>
                <input
                  className={inputClassName}
                  id="contactemail"
                  name="contactemail"
                  value={formData.contact_email}
                  type="text"
                  placeholder="glyon@instock.com"
                  onChange={handleChange}
                />
              </div>

              {showError && (
                <div className="editwh__error">
                  Please fill out all the fields.
                </div>
              )}
            </div>
          </div>

          <div className="editwh__action">
            <div className="editwh__buttons">
              <button
                onClick={cancelHandler}
                className="editwh__button editwh__button--cancel"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="editwh__button editwh__button--add"
              >
              Save
              </button>
            </div>
          </div>
        </form>

        {showSuccess && (
          <div className="editwh__success">Upload successful!</div>
        )}

        {showConfirmation && (
          <div className="editwh__confirmation">
            <p>Are you sure you would like to cancel?</p>
            <button onClick={() => navigate("/")}>Yes</button>
            <button onClick={() => setShowConfirmation(false)}>No</button>
          </div>
        )}
      </div>
    </section>
  );
}

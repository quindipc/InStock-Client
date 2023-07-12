import "./AddNewWarehouse.scss";

// Dependancies
import { Link } from "react-router-dom";

// Assets
import arrowback from "../assets/Icons/arrow_back-24px.svg";

export default function AddNewWarehouse() {
  return (
    <section className="newwarehouse">
      <div className="newwarehouse__container">
        {/* Link to Warehouse List Page -- need to add */}
        <Link to="/" className="newwarehouse__back">
          <img
            className="ewwarehouse__arrowback"
            src={arrowback}
            alt="Arrow back icon"
          />
        </Link>
        <h1 className="newwarehouse__title">Add New Warehouse</h1>
        <hr className="newwarehouse__divider" />

        <form action="">
          <div className="newwarehouse__warehousedetails">
            <h2 className="newwarehouse__title">Warehouse Details</h2>
            <label className="newwarehouse__subheader">Warehouse Name</label>
            <input className="newwarehouse__input" type="text" placeholder="Toronto"/>
            <label className="newwarehouse__subheader">Street Address</label>
            <input className="newwarehouse__input" type="text"placeholder="123 Pearl Street SW" />
            <label className="newwarehouse__subheader">City</label>
            <input className="newwarehouse__input" type="text" placeholder="Toronto"/>
            <label htmlFor="">Country</label>
            <input className="newwarehouse__input" type="text" placeholder="Canada" />
          </div>
          <hr className="newwarehouse__divider" />
          <div clasclassName="newwarehouse__subheader">
            <h2 className="newwarehouse__title">Contact Details</h2>
            <label className="newwarehouse__subheader">Contact Name</label>
            <input className="newwarehouse__input" type="text" placeholder="Graeme Lyon"/>
            <label className="newwarehouse__subheader">Position</label>
            <input className="newwarehouse__input" type="text" placeholder="Warehouse Manager"/>
            <label className="newwarehouse__subheader">Phone Number</label>
            <input className="newwarehouse__input" type="text" placeholder="+1 (647) 504-0911" />
            <label htmlFor="">Email</label>
            <input className="newwarehouse__input" type="text" placeholder="glyon@instock.com" />
          </div>
          <button className="newwarehouse__button">Cancel</button>
          <button className="newwarehouse__button newwarehouse__button--add">+ Add Warehouse</button>
        </form>
      </div>
    </section>
  );
}

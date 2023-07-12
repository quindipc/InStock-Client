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
        <h1 className="ewwarehouse__title">Add New Warehouse</h1>

        <div className="newwarehouse__warehousedetails">
          <form action=""></form>
        </div>
        <div className="newwarehouse__contactdetails">
          <form action=""></form>
        </div>
      </div>
    </section>
  );
}

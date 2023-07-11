import "./WarehouseDetails.scss";

// Dependancies
import { Link } from "react-router-dom";

// Assets
import arrowback from "../assets/Icons/arrow_back-24px.svg";
import edit from "../assets/Icons/edit-24px.svg";

export default function WarehouseDetails(getWarehouseDetails) {

    
  return (
    <section className="warehousedetails">
      <div className="warehousedetails__container">
        {/* Link to Warehouse List Page -- need to add */}
        <Link to="/" className="warehousedetails__back">
          <img
            className="warehousedetails__arrowback"
            src={arrowback}
            alt="Arrow back icon"
          />
        </Link>
        <h1 className="warehousedetails__header">Washington</h1>

        {/* Link to Warehouse Edit Page -- need to add */}
        <Link to="/" className="warehousedetails__edit">
          <img
            className="warehousedetails__arrowback"
            src={edit}
            alt="Edit icon"
          />
        </Link>

        <hr className="warehousedetails__divider" />
        <h4 className="warehousedetails__address"></h4>
        <p className="warehousedetails"></p>
        <h4 className="warehousedetails__name"></h4>
      </div>
    </section>
  );
}

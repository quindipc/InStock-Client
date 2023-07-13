import "./EditWarehouse.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";

export default function EditWarehouse() {
  return (
    <div className="edit-warehouse">
      <div className="edit-warehouse__top">
        <img src={backArrow} />
        <h1 className="edit-warehouse__title">Edit Warehouse</h1>
      </div>

      <form className="edit-warehouse__form">
        <div className="edit-warehouse__sections">
          <div className="edit-warehouse__form-section edit-warehouse__form-section--left">
            <h2 className="edit-warehouse__form-section-title">
              Warehouse Details
            </h2>
            <label className="edit-warehouse__input-container">
              Warehouse Name
              <input className="edit-warehouse__input"></input>
            </label>
            <label className="edit-warehouse__input-container">
              Street Address
              <input className="edit-warehouse__input"></input>
            </label>
            <label className="edit-warehouse__input-container">
              City
              <input className="edit-warehouse__input"></input>
            </label>
            <label className="edit-warehouse__input-container">
              Country
              <input className="edit-warehouse__input"></input>
            </label>
          </div>
          <div className="edit-warehouse__form-section">
            <h2 className="edit-warehouse__form-section-title">
              Contact Details
            </h2>
            <label className="edit-warehouse__input-container">
              Contact Name
              <input className="edit-warehouse__input"></input>
            </label>
            <label className="edit-warehouse__input-container">
              Position
              <input className="edit-warehouse__input"></input>
            </label>
            <label className="edit-warehouse__input-container">
              Phone Number
              <input className="edit-warehouse__input"></input>
            </label>
            <label className="edit-warehouse__input-container">
              Email
              <input className="edit-warehouse__input"></input>
            </label>
          </div>
        </div>
        <div className="edit-warehouse__buttons">
          <button className="edit-warehouse__button edit-warehouse__button--cancel">
            Cancel
          </button>
          <button className="edit-warehouse__button edit-warehouse__button--save">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

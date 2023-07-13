import "./AddInventory.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";

export default function AddInventory() {
    let [instock, setInstock] = useState(false)
    let clickHandler = (e) => {
        if(e.target.id === "instock") {
            setInstock(true)
        } else {
            setInstock(false)
        }
    }
  return (
    <div className="add-inventory">
      <div className="add-inventory__top">
        <img src={backArrow} />
        <h1 className="add-inventory__title">Add New Inventory Item</h1>
      </div>

      <form className="add-inventory__form">
        <div className="add-inventory__sections">
          <div className="add-inventory__form-section add-inventory__form-section--left">
            <h2 className="add-inventory__form-section-title">
              Item Details
            </h2>
            <label className="add-inventory__input-container">
              Item Name
              <input className="add-inventory__input" placeholder="Item Name"></input>
            </label>
            <label className="add-inventory__input-container">
              Description
              <input className="add-inventory__input add-inventory__input--description" placeholder="Please enter a brief description..."></input>
            </label>
            <label className="add-inventory__input-container">
              Category
              <select className="add-inventory__input add-inventory__input--select" required>
                <option value={""} disabled selected hidden>Please Select</option>
              </select>
            </label>
          </div>
          <div className="add-inventory__form-section">
            <h2 className="add-inventory__form-section-title">
              Item Availability
            </h2>
            <label className="add-inventory__input-container">
              Status
              <div className="add-inventory__radio">
                <div className="add-inventory__radio-option"><input type="radio" id="instock" name="status" onClick={clickHandler}></input> <label for="instock">In Stock</label></div>
                <div className="add-inventory__radio-option"><input type="radio" id="outstock" name="status" onClick={clickHandler}></input> <label for="outstock">Out of Stock</label></div>
              </div>
            </label>
            {instock ? <label className="add-inventory__input-container">
              Quantity
              <input className="add-inventory__input" value="0"></input>
            </label> : null}
            <label className="add-inventory__input-container">
              Warehouse
              <select className="add-inventory__input add-inventory__input--select" required>
              <option value={""} disabled selected hidden>Please Select</option>
              </select>
            </label>
          </div>
        </div>
        <div className="add-inventory__buttons">
          <button className="add-inventory__button add-inventory__button--cancel">
            Cancel
          </button>
          <button className="add-inventory__button add-inventory__button--save">
            + Add Item
          </button>
        </div>
      </form>
    </div>
  );
}

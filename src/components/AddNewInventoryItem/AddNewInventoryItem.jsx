import "./AddNewInventoryItem.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddInventory() {
  let [instock, setInstock] = useState(false);
  let [warehouses, setWarehouses] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/warehouses")
      .then((r) => {
        let newObj = {};
        for (let warehouse of r.data) {
          newObj[warehouse.warehouse_name] = warehouse.id;
          setWarehouses(newObj);
          console.log(newObj);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);



  let clickInStock = () => {
    setInstock(true);
    console.log(instock)
}
  let clickOutStock = () => {
    setInstock(false);
    console.log(instock)
}

  let submitHandler = (e) => {
    e.preventDefault();
    let obj = {};
    obj.warehouse_id = warehouses[e.target.warehouse_name.value];
    obj.item_name = e.target.name.value;
    obj.description = e.target.description.value;
    obj.category = e.target.category.value;
    obj.status = e.target.status.value;
    e.target.status.value === "In Stock"
      ? (obj.quantity = e.target.quantity.value)
      : (obj.quantity = 0);

    console.log(obj);
    axios
      .post("http://localhost:8080/api/inventories", obj)
      .then((r) => {
        navigate("../");
      })
      .catch((e) => {
        console.log(e);
      });

  };
  return (
    <div className="add-inventory">
      <div className="add-inventory__top">
        <Link to="/inventory">
          <img src={backArrow} />
        </Link>
        <h1 className="add-inventory__title">Add New Inventory Item</h1>
      </div>

      <form className="add-inventory__form" onSubmit={submitHandler}>
        <div className="add-inventory__sections">
          <div className="add-inventory__form-section add-inventory__form-section--left">
            <h2 className="add-inventory__form-section-title">Item Details</h2>
            <label className="add-inventory__input-container">
              Item Name
              <input
                className="add-inventory__input"
                placeholder="Item Name"
                name="name"
              ></input>
            </label>
            <label className="add-inventory__input-container">
              Description
              <input
                className="add-inventory__input add-inventory__input--description"
                placeholder="Please enter a brief description..."
                name="description"
              ></input>
            </label>
            <label className="add-inventory__input-container">
              Category
              <select
                className="add-inventory__input add-inventory__input--select"
                required
                name="category"
              >
                <option value={""} disabled selected hidden>
                  Please Select
                </option>
                <option value={"electronics"}>Electronics</option>
                <option value={"gear"}>Gear</option>
                <option value={"apparel"}>Apparel</option>
                <option value={"accessories"}>Accessories</option>
                <option value={"health"}>Health</option>
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
                <div className="add-inventory__radio-option">
                  <input
                    type="radio"
                    id="instock"
                    value="In Stock"
                    name="status"
                    onClick={clickInStock}
                  ></input>{" "}
                  <label for="instock">In Stock</label>
                </div>
                <div className="add-inventory__radio-option">
                  <input
                    type="radio"
                    id="outstock"
                    value="Out of Stock"
                    name="status"
                    onClick={clickOutStock}
                  ></input>{" "}
                  <label for="outstock">Out of Stock</label>
                </div>
              </div>
            </label>
            {instock ? (
              <label className="add-inventory__input-container">
                Quantity
                <input
                  className="add-inventory__input"
                  defaultValue="0"
                  name="quantity"
                ></input>
              </label>
            ) : null}
            <label className="add-inventory__input-container">
              Warehouse
              <input
                className="add-inventory__input add-inventory__input--description"
                placeholder="Enter warehouse name"
                name="warehouse_name"
              ></input>
            </label>
          </div>
        </div>
        <div className="add-inventory__buttons">
          <button
            className="add-inventory__button add-inventory__button--cancel"
            type="button"
          >
            <Link to="/inventory">Cancel</Link>
          </button>
          <button
            className="add-inventory__button add-inventory__button--save"
            type="submit"
          >
            + Add Item
          </button>
        </div>
      </form>
    </div>
  );
}

import "./EditInventoryItem.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function EditInventoryItem() {
  let params = useParams();
  let [currItem, setCurrItem] = useState({});
  let [instock, setInstock] = useState(false);
  let [warehouses, setWarehouses] = useState([]);
  let navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/inventories/${params.id}`)
      .then((r) => {
        setCurrItem(r.data);
        return axios.get("http://localhost:8080/api/warehouses");
      })
      .then((r) => {
        let newArr = [];
        for (let warehouse of r.data) {
          newArr.push(warehouse.warehouse_name);
          console.log(newArr);
          setWarehouses(newArr);
          console.log(newArr)
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  let clickHandler = (e) => {
    if (e.target.id === "instock") {
      setInstock(true);
    } else {
      setInstock(false);
    }
  };

  let submitHandler = (e) => {
    e.preventDefault()
    let obj = {};

    obj.item_name = e.target.name.value;
    obj.description = e.target.description.value;
    obj.category = e.target.category.value;
    obj.status = e.target.status.value;
   /* e.target.status.value === "instock"
      ? (obj.quantity = e.target.quantity.value)
      : (obj.quantity = 0);*/

    axios.put(`http://localhost:8080/api/inventories/${params.id}`, obj).then((r) => {
      navigate("../")
    });
  };

 

  return (
    <div className="add-inventory">
      <div className="add-inventory__top">
        <Link to="/inventory">
          <img src={backArrow} />
        </Link>
        <h1 className="add-inventory__title">Edit Inventory Item</h1>
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
                defaultValue={currItem.item_name}
              ></input>
            </label>
            <label className="add-inventory__input-container">
              Description
              <input
                className="add-inventory__input add-inventory__input--description"
                placeholder="Please enter a brief description..."
                name="description"
                defaultValue={currItem.description}
              ></input>
            </label>
            <label className="add-inventory__input-container">
              Category
              <select
                className="add-inventory__input add-inventory__input--select"
                required
                name="category"
              >
                {currItem.category === "electronics" ? (
                  <option value={"electronics"} selected>
                    Electronics
                  </option>
                ) : (
                  <option value={"electronics"}>Electronics</option>
                )}
                {currItem.category === "gear" ? (
                  <option value={"gear"} selected>
                    Gear
                  </option>
                ) : (
                  <option value={"gear"}>Gear</option>
                )}
                {currItem.category === "apparel" ? (
                  <option value={"apparel"} selected>
                    Apparel
                  </option>
                ) : (
                  <option value={"apparel"}>Apparel</option>
                )}
                {currItem.category === "accessories" ? (
                  <option value={"accessories"} selected>
                    Accessories
                  </option>
                ) : (
                  <option value={"accessories"}>Accessories</option>
                )}
                {currItem.category === "health" ? (
                  <option value={"health"} selected>
                    Health
                  </option>
                ) : (
                  <option value={"health"}>Health</option>
                )}
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
                  {currItem.status === "In Stock" ? ((instock = true) &&
                    <input
                      type="radio"
                      id="instock"
                      name="status"
                      onClick={clickHandler}
                      value="In Stock"
                      checked
                    ></input>
                  ) : (
                    <input
                      type="radio"
                      id="instock"
                      name="status"
                      onClick={clickHandler}
                      value="In Stock"
                    ></input>
                  )}{" "}
                  <label for="instock">In Stock</label>
                </div>
                <div className="add-inventory__radio-option">
                  {currItem.status === "Out of Stock" ? (
                    <input
                      type="radio"
                      id="outstock"
                      name="status"
                      onClick={clickHandler}
                      value="Out of Stock"
                      checked
                    ></input>
                  ) : (
                    <input
                      type="radio"
                      id="outstock"
                      name="status"
                      onClick={clickHandler}
                      value="Out of Stock"
                    ></input>
                  )}{" "}
                  <label for="outstock">Out of Stock</label>
                </div>
              </div>
            </label>
            {instock ? (
              <label className="add-inventory__input-container">
                Quantity
                <input
                  className="add-inventory__input"
                  defaultValue={currItem.quantity}
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
                defaultValue={currItem.warehouse_name}
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

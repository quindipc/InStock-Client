import "EditWarehouse.scss";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";

export default function EditWarehouse() {
  return (
    <div>
      <div>
        <img src={backArrow} />
        <h1>Edit Warehouse</h1>
      </div>

      <form>
        <div>
          <h2>Warehouse Details</h2>
          <label>
            Warehouse Name
            <input></input>
          </label>
          <label>
            Street Address
            <input></input>
          </label>
          <label>
            City
            <input></input>
          </label>
          <label>
            Country
            <input></input>
          </label>
        </div>
        <div>
          <h2>Contact Details</h2>
          <label>
            Contact Name
            <input></input>
          </label>
          <label>
            Position
            <input></input>
          </label>
          <label>
            Phone Number
            <input></input>
          </label>
          <label>
            Email
            <input></input>
          </label>
        </div>
        <div>
            <button>Cancel</button>
            <button>Save</button>
        </div>
      </form>
    </div>
  );
}

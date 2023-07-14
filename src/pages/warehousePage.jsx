// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import WarehouseList from "../components/WarehouseList/WarehouseList"
import WarehouseDetails from "../components/WarehouseDetails/WarehouseDetails";
import EditWarehouse from "../components/EditWarehouse/EditWarehouse";
import AddInventory from "../components/AddInventory/AddInventory";
import InventoryList from "../components/InventoryList/InventoryList";

export default function WarehousePage () {
    return (
        <div>
            <InventoryList/>
            {/* TODO: Change to state later */}
           { /* {/* <WarehouseDetails /> */}
           {/*<AddInventory /> */}
            <Footer />
        </div>
    )
}


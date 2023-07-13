// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import WarehouseList from "../components/WarehouseList/WarehouseList"
import WarehouseDetails from "../components/WarehouseDetails/WarehouseDetails";
import AddNewWarehouse from "../components/AddNewWarehouse/AddNewWarehouse"

export default function WarehousePage () {
    return (
        <div>
            <Header />
            <WarehouseList/>
            {/* TODO: Change to state later */}
            <WarehouseDetails />
            <AddNewWarehouse />
            <Footer />
        </div>
    )
}


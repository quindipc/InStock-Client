// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import WarehouseList from "../components/WarehouseList/WarehouseList"
import WarehouseDetails from "../components/WarehouseDetails/WarehouseDetails";

export default function WarehousePage () {
    return (
        <div>
            <WarehouseList/>
            {/* TODO: Change to state later */}
            {/* <WarehouseDetails /> */}
            <Footer />
        </div>
    )
}


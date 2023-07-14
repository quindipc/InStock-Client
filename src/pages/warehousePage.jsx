// Components
// import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"
import WarehouseList from "../components/WarehouseList/WarehouseList"
import WarehouseDetails from "../components/WarehouseDetails/WarehouseDetails";
import AddNewWarehouse from "../components/AddNewWarehouse/AddNewWarehouse"
import EditWarehouse from "../components/EditWarehouse/EditWarehouse";
import DeleteWarehouse from "../components/DeleteWarehouse/DeleteWarehouse";
import { useState } from "react";

export default function WarehousePage () {

    const [openModal, setOpenModal] = useState(false)



    return (
        <div>
            <WarehouseList setOpenModal={setOpenModal}/>
            {openModal && <DeleteWarehouse setOpenModal={setOpenModal}/>}
            {/* TODO: Change to state later */}
            {/* <WarehouseDetails />
            <AddNewWarehouse />
            <EditWarehouse /> */}
            {/* <Footer /> */}
        </div>
    )
}

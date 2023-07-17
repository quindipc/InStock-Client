// Dependancies
import { useState } from "react";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import DeleteWarehouse from "../../components/DeleteWarehouse/DeleteWarehouse";

export default function WarehousePage () {

    const [openModal, setOpenModal] = useState(false)
    const [warehouse, setWarehouse] = useState(null)

    return (
        <div>
            <Header />
            <WarehouseList setOpenModal={setOpenModal} setWarehouse={setWarehouse}/>
            {openModal && <DeleteWarehouse warehouse={warehouse} setOpenModal={setOpenModal}/>}
            <Footer />
        </div>
    )
}

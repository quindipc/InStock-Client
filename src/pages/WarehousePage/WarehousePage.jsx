// Dependancies
import { useState } from "react";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WarehouseList from "../../components/WarehouseList/WarehouseList"
import DeleteWarehouse from "../../components/DeleteWarehouse/DeleteWarehouse";

export default function WarehousePage () {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div>
            <Header />
            <WarehouseList setOpenModal={setOpenModal}/>
            {openModal && <DeleteWarehouse setOpenModal={setOpenModal}/>}
            <Footer />
        </div>
    )
}

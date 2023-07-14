import ViewInventory from "../components/ViewInventory/ViewInventory"
import { useState } from "react";


function InventoryPage() {

    const [openInventoryEdit, setopenInventoryEdit] = useState(false)


    return (

        <>
            <h1>Inventory Page</h1>

            {openInventoryEdit && <ViewInventory setopenInventoryEdit={setopenInventoryEdit} />}

        </>
    )
}

export default InventoryPage
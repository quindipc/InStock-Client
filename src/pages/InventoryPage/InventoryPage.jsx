// Dependancies
import React, { useState } from "react";

// // Pages
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InventoryList from "../../components/InventoryList/InventoryList"
import DeleteInventory from "../../components/DeleteInventory/DeleteInventory";

export default function InventoryPage() {
  const [openModal, setOpenModal] = useState(false);
  const [inventory, setInventory] = useState(null);
  return (
    <>
      <Header />
      <InventoryList setOpenModal={setOpenModal} setInventory={setInventory}/>
      {openModal && (
        <DeleteInventory inventory={inventory} setOpenModal={setOpenModal} />
      )}
      <Footer />
    </>
  );
}

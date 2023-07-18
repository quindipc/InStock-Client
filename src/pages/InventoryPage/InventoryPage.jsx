// Dependancies
import React, { useState } from "react";

// // Pages
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InventoryList from "../../components/InventoryList/InventoryList"
import DeleteInventory from "../../components/DeleteInventory/DeleteInventory";

export default function InventoryPage() {
  const [openModal, setOpenModal] = useState(false);
  const [inventoryList, setInventoryList] = useState(null);
  return (
    <>
      <Header />
      <InventoryList setOpenModal={setOpenModal} setInventoryList={setInventoryList}/>
      {openModal && (
        <DeleteInventory inventoryList={inventoryList} setOpenModal={setOpenModal} />
      )}
      <Footer />
    </>
  );
}

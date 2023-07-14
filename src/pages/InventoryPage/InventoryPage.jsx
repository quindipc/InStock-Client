// Dependancies
import React from "react";

// // Pages
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InventoryList from "../../components/InventoryList/InventoryList"

export default function InventoryPage() {
  return (
    <>
      <Header />
      <InventoryList />
      <Footer />
    </>
  );
}

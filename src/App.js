import "./App.scss";

// Dependencies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Pages
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Header /> */}
        {/* <main className="main"> */}
          <Route path="/" element={<WarehousePage />} />
          <Route path="/warehouses" element={<WarehousePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        {/* </main> */}
        {/* <Footer /> */}
      </Routes>
    </BrowserRouter>
  );
}

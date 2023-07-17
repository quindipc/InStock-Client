import "./App.scss";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import WarehousePage from './pages/warehousePage';
// import InventoryPage from './pages/inventoryPage';
// import ViewInventoryPage from './pages/ViewInventoryPage';
// import Header from './components/Header/Header';

// Pages
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AddNewWarehousePage from "./pages/WarehousePage/AddNewWarehousePage/AddNewWarehousePage";
import DeleteWarehousePage from "./pages/WarehousePage/DeleteWarehousePage/DeleteWarehousePage";
import WarehouseDetailsPage from "./pages/WarehousePage/WarehouseDetailsPage/WarehouseDetailsPage";
import EditWarehousePage from "./pages/WarehousePage/EditWarehousePage/EditWarehousePage";
import AddNewInventoryPage from "./pages/InventoryPage/AddNewInventoryItemPage/AddNewInventoryItemPage";
import DeleteInventoryItemPage from "./pages/InventoryPage/DeleteInventoryItemPage/DeleteInventoryItemPage";
import EditInventoryItemPage from "./pages/InventoryPage/EditInventoryItemPage/EditInventoryItem";

import InventoryItemPage from "./pages/InventoryPage/InventoryItemPage/InventoryItemPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WarehousePage />} />
        <Route path="/warehouses" element={<WarehousePage />} />
        <Route path="/add-new-warehouse" element={<AddNewWarehousePage />} />
        <Route path="/warehouse/:id" element={<WarehouseDetailsPage />} />
        <Route path="/edit-warehouse/:id" element={<EditWarehousePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventory/:id" element={<InventoryItemPage />} />
        <Route path="/add-new-inventory-item" element={<AddNewInventoryPage />} />
        <Route path="/delete-inventory-item" element={<DeleteInventoryItemPage />} />
        <Route path="/edit-inventory=item" element={<EditInventoryItemPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

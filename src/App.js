import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';

import './App.scss';
import WarehousePage from './pages/warehousePage';
import InventoryPage from './pages/inventoryPage';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory'


function App() {
  return (
   <BrowserRouter>
   <Header />
   <Inventory />
    <Routes>
    
      <Route path="/" element={<WarehousePage />}/>
      <Route path="/warehouse" element={<WarehousePage />}/>
      <Route path="/inventory" element={<InventoryPage />}/>
      
{/* this is part of the footer component edit later */}
      {/* <main className='main'></main> */}

    </Routes>
    <Footer />
   </BrowserRouter>
  );
}

export default App;

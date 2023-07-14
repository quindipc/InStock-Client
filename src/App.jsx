import './App.scss';

// Dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components & Pages
import Header from "./components/Header";
import Footer from './components/Footer/Footer';
import WarehousePage from './pages/warehousePage';
import InventoryPage from './pages/InventoryPage';

export default function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Header />
        <main className='main'>
      <Route path="/" element={<WarehousePage />}/>
      <Route path="/warehouses" element={<WarehousePage/>}/>
      <Route path="/inventory" element={<InventoryPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
        </main>
          <Footer /> 
    </Routes>
   </BrowserRouter>
  );
}

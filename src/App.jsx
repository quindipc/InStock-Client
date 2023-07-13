import './App.scss';

// Dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components & Pages
// import Footer from './components/Footer/Footer';
import WarehousePage from './pages/WarehousePage';
import InventoryPage from './pages/InventoryPage';

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<WarehousePage />}/>
      <Route path="/warehouse" element={<WarehousePage/>}/>
      <Route path="/inventory" element={<InventoryPage/>}/>
    {/* this is part of the footer component edit later
          {/* <main className='main'></main> */}
          {/* <Footer /> */} 
    </Routes>
   </BrowserRouter>
  );
}

import './App.scss';

// Dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components & Pages
// import Footer from './components/Footer/Footer';
import WarehousePage from './pages/warehousePage';
import InventoryPage from './pages/InventoryPage';
import TestPage from './pages/TextPage';

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<WarehousePage />}/>
      <Route path="/warehouse" element={<WarehousePage/>}/>
      <Route path="/inventory" element={<InventoryPage/>}/>
      <Route path='/test' element={<TestPage/>}/>
    {/* this is part of the footer component edit later
          {/* <main className='main'></main> */}
          {/* <Footer /> */} 
    </Routes>
   </BrowserRouter>
  );
}
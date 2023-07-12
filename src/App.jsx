import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import WarehousePage from './pages/WarehousePage';
import InventoryPage from './pages/InventoryPage';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<WarehousePage/>}/>
      <Route path="/warehouse" element={<WarehousePage/>}/>
      <Route path="/inventory" element={<InventoryPage/>}/>
      
{/* this is part of the footer component edit later */}
      {/* <main className='main'></main> */}

    </Routes>
   </BrowserRouter>
  );
}

export default App;

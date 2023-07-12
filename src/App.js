import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import './App.css';
import warehousePage from './pages/warehousePage';
import inventoryPage from './pages/inventoryPage';

function App() {
  return (
   <BrowserRouter>
    <Router>
      <Route path="/" element={warehousePage}/>
      <Route path="/warehouse" element={warehousePage}/>
      <Route path="/Inventory" element={inventoryPage}/>
    </Router>
   </BrowserRouter>
  );
}

export default App;

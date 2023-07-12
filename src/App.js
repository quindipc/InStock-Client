import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import './App.scss';
import WarehousePage from './pages/WarehousePage';
import InventoryPage from './pages/InventoryPage';

function App() {
  return (
   <BrowserRouter>
    <Router>
      <Route path="/" element={WarehousePage}/>
      <Route path="/warehouse" element={WarehousePage}/>
      <Route path="/inventory" element={InventoryPage}/>
      <Footer />
{/* this is part of the footer component edit later */}
      {/* <main className='main'></main> */}

    </Router>
   </BrowserRouter>
  );
}

export default App;

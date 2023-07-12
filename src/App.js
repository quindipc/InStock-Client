import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import './App.scss';
import warehousePage from './pages/warehousePage';
import inventoryPage from './pages/inventoryPage';

function App() {
  return (
   <BrowserRouter>
    <Router>
      <Route path="/" element={warehousePage}/>
      <Route path="/warehouse" element={warehousePage}/>
      <Route path="/inventory" element={inventoryPage}/>
      <Footer />
{/* this is part of the footer component edit later */}
      {/* <main className='main'></main> */}

    </Router>
   </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import './App.css';

const Home = () => <h1>Home</h1>;
const Warehouse = () => <h1>Warehouse</h1>;
const Inventory = () => <h1>Inventory</h1>;


function App() {
  return (
   <BrowserRouter>
    <Router>
      <Route path="/" element={Home}/>
      <Route path="/warehouse" element={Warehouse}/>
      <Route path="/Inventory" element={Inventory}/>
    </Router>
   </BrowserRouter>
  );
}

export default App;

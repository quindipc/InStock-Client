// Dependencies
import './WarehouseList.scss';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Assets
import chevron from '../../assets/Icons/chevron_right-24px.svg';
import trash from '../../assets/Icons/delete_outline-24px.svg';
import edit from '../../assets/Icons/edit-24px.svg';

export default function WarehouseList({ setOpenModal, setWarehouse }) {
    const BASE_URL = "http://localhost:8080"; 

    const [warehouses, setWarehouses] = useState([]);
  
    useEffect(() => {
      // Fetch the list of warehouses
      axios.get(`${BASE_URL}/api/warehouses`)
        .then(response => {
          setWarehouses(response.data);
        })
        .catch(error => {
          console.error('Error fetching warehouses:', error);
        });
    }, []);

  return (
    <div className='warehouses'>
      <div className='warehouses__header'>
        <h1 className='warehouses__title'>Warehouses</h1>
        <input type="text" id="searchbar" className='warehouses__searchbar' placeholder="Search..." />
        <Link to="/add-new-warehouse">
          <button className='warehouses__button'> <h3>+ Add New Warehouse</h3></button>
        </Link>
      </div>
      {/* add in the single warehouse components here */}
      {warehouses.map(warehouse => (
        <div className='warehouse__item' key={warehouse.id}>
          <div className='warehouse__text'>
            <div className='warehouse__left'>
              <div className='warehouse__left-name'>
                <h4 className='warehouse__titles'>WAREHOUSE</h4>
                <button className='warehouse__left-name-button'>
                  <Link to={`/warehouse/${warehouse.id}`}>
                    <h3 className='warehouse__text-blue'>{warehouse.warehouse_name}</h3>
                    <img src={chevron} alt="chevron arrow right" />
                  </Link>
                </button>
              </div>
              <div className='warehouse__left-address'>
                <h4 className='warehouse__titles'>ADDRESS</h4>
                <p>{warehouse.address}</p>
                <p>{warehouse.city}, {warehouse.country}</p>
              </div>
            </div>
            <div className='warehouse__right'>
              <div className='warehouse__right-contact'>
                <h4 className='warehouse__titles'>CONTACT NAME</h4>
                <p>{warehouse.contact_name}</p>
              </div>
              <div className='warehouse__right-info'>
                <h4 className='warehouse__titles'>CONTACT INFORMATION</h4>
                <p>{warehouse.contact_phone}</p>
                <p>{warehouse.contact_email}</p>
              </div>
            </div>
          </div>
          <div className='warehouse__icons'>
            <button id='delete__button' className='warehouse__icons-delete' onClick={() => { setWarehouse(warehouse); setOpenModal(true) }}>
              {/* <Link to={`/delete-warehouse/${warehouse.id}`}>  */}
                <img src={trash} alt="delete trash can" />
              {/* </Link> */}
            </button>

            <button id='edit__button' className='warehouse__icons-edit'>
              <Link to={`/edit-warehouse/${warehouse.id}`}>
                <img src={edit} alt="edit pencil" />
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
import './DeleteWarehouse.scss';
import x_button from "../../assets/Icons/close-24px.svg";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function DeleteWarehouse({ setOpenModal }) {

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


    return(
        <div className='delete__container' id='overlay'>
            <div className='delete active' id='modal'>
                <button className='delete__close' onClick={()=> setOpenModal(false)}> <img className='delete__close' src={x_button} alt="close button which is on the top right of the popup modal" /> </button>
                <h1 className='delete__title'>Delete {warehouses.warehouse_name} warehouse? </h1>
                <p className='delete__subtext'>Please confirm that you’d like to delete the {warehouses.warehouse_name} from the list of warehouses. You won’t be able to undo this action.</p>
                <div className='delete__buttons'>
                    <button className='delete__buttons-cancel' onClick={()=> setOpenModal(false)}> <h3>Cancel</h3></button>
                    <button className='delete__buttons-delete' type='submit'> <h3>Delete</h3></button>
                </div>
            </div>
        </div>
    )
}

// to do :
//     once the back end is build 
//     add in a warehouse prop and replace washigtion with that
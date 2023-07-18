import './DeleteWarehouse.scss';
import x_button from "../../assets/Icons/close-24px.svg";
import React from 'react';
import axios from 'axios';

export default function DeleteWarehouse({ setOpenModal, warehouse }) {
    const BASE_URL = "http://localhost:8080/api/warehouses";

    const handleDelete = () => {
        axios.delete(`${BASE_URL}/${warehouse.id}`)
        .then(()=> {
            console.log('successfully deleted warehouse');
            setOpenModal(false);
        })
        .catch((error)=> {
            console.error("Error deleting warehouse:", error);
        });
    };

    return(
        <div className='delete__container' id='overlay'>
            <div className='delete active' id='modal'>
                <button className='delete__close' onClick={()=> {setOpenModal(false)}}> <img className='delete__close' src={x_button} alt="close button which is on the top right of the popup modal" /> </button>
                <h1 className='delete__title'>Delete {warehouse.warehouse_name} warehouse? </h1>
                <p className='delete__subtext'>Please confirm that you’d like to delete the {warehouse.warehouse_name} from the list of warehouses. You won’t be able to undo this action.</p>
                <div className='delete__buttons'>
                    <button className='delete__buttons-cancel' onClick={()=> setOpenModal(false)}> <h3>Cancel</h3></button>
                    <button className='delete__buttons-delete' onClick={handleDelete}> <h3>Delete</h3></button>
                </div>
            </div>
        </div>
    )
}

import './DeleteWarehouse.scss';
import x_button from "../../assets/Icons/close-24px.svg";
import axios from 'axios';

export default function DeleteWarehouse({setOpenModal}) {

    return(
        <div className='delete__container' id='overlay'>
            <div className='delete active' id='modal'>
                <button className='delete__close' onClick={()=> setOpenModal(false)}> <img className='delete__close' src={x_button} alt="close button which is on the top right of the popup modal" /> </button>
                <h1 className='delete__title'>Delete Washington warehouse? </h1>
                <p className='delete__subtext'>Please confirm that you’d like to delete the Washington from the list of warehouses. You won’t be able to undo this action.</p>
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
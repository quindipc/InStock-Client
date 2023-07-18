import './DeleteInventory.scss';
import x_button from "../../assets/Icons/close-24px.svg";
import axios from 'axios';

export default function DeleteInventory({setOpenModal}) {

    const BASE_URL = "http://localhost:8080/api/inventories";


    // const handleDelete = () => {
    //     axios.delete(`${BASE_URL}/${inventoryList.id}`)
    //     .then(()=> {
    //         console.log('successfully deleted Inventory Item');
    //         setOpenModal(false);
    //     })
    //     .catch((error)=> {
    //         console.error("Error deleting Inventory Item:", error);
    //     });
    // };

    return(
        <div className='delete__container' id='overlay'>
            <div className='delete active' id='modal'>
                <button className='delete__close' onClick={()=> setOpenModal(false)}> <img className='delete__close' src={x_button} alt="close button outline" /> </button>
                <h1 className='delete__title'>Delete Inventory Item? </h1>
                <p className='delete__subtext'>Please confirm that you’d like to delete the from the Inventory List. You won’t be able to undo this action.</p>
                <div className='delete__buttons'>
                    <button className='delete__buttons-cancel' onClick={()=> setOpenModal(false)}> <h3>Cancel</h3></button>
                    <button className='delete__buttons-delete' type='submit'> <h3>Delete</h3></button>
                </div>
            </div>
        </div>
    )
}
import './DeleteWarehouse.scss';
import x_button from "../../assets/Icons/close-24px.svg";

export default function DeleteWarehouse() {
    return(
        <div className='delete'>
            <img className='delete__close' src={x_button} alt="close button outline" />
            <h1 className='delete__title'>Delete Washington warehouse? </h1>
            <p className='delete__subtext'>Please confirm that you’d like to delete the Washington from the list of warehouses. You won’t be able to undo this action.</p>
            <div className='delete__buttons'>
                <button className='delete__buttons-cancel'> <h3>Cancel</h3></button>
                <button className='delete__buttons-delete'> <h3>Delete</h3></button>
            </div>
        </div>
    )
}

// to do :
//     once the back end is build 
//     add in a warehouse prop and replace washigtion with that
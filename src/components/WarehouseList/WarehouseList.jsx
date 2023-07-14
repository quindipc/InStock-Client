import './WarehouseList.scss';
import chevron from '../../assets/Icons/chevron_right-24px.svg'; 
import trash from '../../assets/Icons/delete_outline-24px.svg'; 
import edit from '../../assets/Icons/edit-24px.svg'; 
import axios from 'axios';

export default function WarehouseList({setOpenModal}) {

    axios.get('/api/warehouses')
        .then(response => {
            const data = response.data;
            const warehouses = data.map(()=> {
                
            })
        })


    return(
        <div className='warehouses'>
            <div className='warehouses__header'>
                <h1 className='warehouses__title'>Warehouses</h1>
                <input type="text" id="searchbar" className='warehouses__searchbar' placeholder="Search..."></input>
                <button className='warehouses__button'> <h3>+ Add New Warehouse</h3></button>
            </div>
            {/* add in the single warehouse componets here  */}
            <div className='warehouse__item'>
                <div className='warehouse__text'>
                    <div className='warehouse__left'>
                        <div className='warehouse__left-name'> 
                            <h4 className='warehouse__titles'>WAREHOUSE</h4>
                            <button className='warehouse__left-name-button'>
                                <h3 className='warehouse__text-blue'> wh name</h3>
                                <img src={chevron} alt="chevron arrow right" />
                            </button>
                        </div>
                        <div className='warehouse__left-address'> 
                            <h4 className='warehouse__titles'>ADDRESS</h4>
                            <p>the warehouse ADDRESS</p>
                        </div>
                    </div>
                    <div className='warehouse__right'>
                        <div className='warehouse__right-contact'> 
                            <h4 className='warehouse__titles'>CONTACT NAME</h4>
                            <p>their name here</p>
                        </div>
                        <div className='warehouse__right-info'> 
                            <h4 className='warehouse__titles'>CONTACT INFORMATION</h4>
                            <p>their # here</p>
                            <p>their email here</p>
                        </div>
                    </div>
                </div>
                <div className='warehouse__icons'>
                    <button id='delete__button' className='warehouse__icons-delete' onClick={()=>{setOpenModal(true)}}><img src={trash} alt="delete trash can" /></button>
                    <button id='edit__button' className='warehouse__icons-edit'><img src={edit} alt="edit pencil" /></button>
                </div>
            </div>
        </div>
    )
}


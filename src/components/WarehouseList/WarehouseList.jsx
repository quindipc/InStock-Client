import './WarehouseList.scss';

export default function WarehouseList() {
    return(
        <div className='warehouses'>
            <div className='warehouses__header'>
                <h1 className='warehouses__title'>Warehouses</h1>
                <input type="text" id="searchbar" className='warehouses__searchbar' placeholder="Search..."></input>
                <button className='warehouses__button'> <h3>+ Add New Warehouse</h3></button>
            </div>
            {/* add in the single warehouse componets here  */}
        </div>
    )
}


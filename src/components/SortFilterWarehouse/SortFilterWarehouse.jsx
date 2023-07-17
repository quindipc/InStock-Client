import './SortFilterWarehouse.scss';
import scroll from '../../assets/Icons/sort-24px.svg';

export default function SortFilterWarehouse(){
    return(
        <div className='filter'>
            <div className='filter__inventory'>
                <h4>INVENTORY ITEM</h4>
                <img src={scroll} alt="" />
            </div>
            <div className='filter__category'>
                <h4>CATEGORY</h4>
                <img src={scroll} alt="" />
            </div>
            <div className='filter__status'>
                <h4>STATUS</h4>
                <img src={scroll} alt="" />
            </div>
            <div className='filter__quantity'>
                <h4>QUANTITY</h4>
                <img src={scroll} alt="" />
            </div>
            <div className='filter__action'>
                <h4>ACTIONS</h4>
                <img src={scroll} alt="" />
            </div>

        </div>
    )
}
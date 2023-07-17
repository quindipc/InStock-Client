import './SortFilter.scss';
import scroll from '../../assets/Icons/sort-24px.svg';

export default function SortFilter(){
    return(
        <div className='filter'>
            <div className='filter__warehouse'>
                <h6>WAREHOUSE</h6>
                <img src={scroll} alt="" />
            </div>
            <div className='filter__address'>
                <h6>ADDRESS</h6>
                <img src={scroll} alt="" />
            </div>
            <div className='filter__name'>
                <h6>CONTACT NAME</h6>
                <img src={scroll} alt="" />
            </div>
            <div className='filter__info'>
                <h6>CONTACT INFORMATION</h6>
                <img src={scroll} alt="" />
            </div>
            <div className='filter__action'>
                <h6>ACTIONS</h6>
                <img src={scroll} alt="" />
            </div>

        </div>
    )
}
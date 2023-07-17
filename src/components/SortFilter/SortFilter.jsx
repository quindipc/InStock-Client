import './SortFilter.scss';
import scroll from '../../assets/Icons/sort-24px.svg';

export default function SortFilter(){
    return(
        <div className='filter'>
            <div className='filter__warehouse'>
                <h4>WAREHOUSE</h4>
                <img src={scroll} alt="" />
            </div>
            <div className='filter__address'>
                <h4>ADDRESS</h4>
                <img src={scroll} alt="" />
            </div>
            <div className='filter__name'>
                <h4>CONTACT NAME</h4>
                <img src={scroll} alt="" />
            </div>
            <div className='filter__info'>
                <h4>CONTACT INFORMATION</h4>
                <img src={scroll} alt="" />
            </div>
            <div className='filter__action'>
                <h4>ACTIONS</h4>
                <img src={scroll} alt="" />
            </div>

        </div>
    )
}
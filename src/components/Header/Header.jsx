import './Header.scss'

// Dependnancies
import { Link } from 'react-router-dom';

// Assets
import logo from '../../assets/Logo/InStock-Logo.svg'

// Pages
import WarehousePage from '../../pages/WarehousePage/WarehousePage';
import InventoryPage from '../../pages/InventoryPage/InventoryPage';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__logo-container'>

        <Link to="/" element={<WarehousePage/>}>
        <img src={logo} alt="logo"/>
        </Link>
      </div>
      <div className='header__links'>
        <div className='header__link-container header__link-container--clicked'>
          <Link to="/warehouses" element={<WarehousePage />}  className='header__link header__link--clicked'>
          Warehouses
        </Link>
  
        </div>
        <div className='header__link-container'>
        <Link to="/inventory" element={<InventoryPage />} className='header__link header__link--clicked'>
          Inventory
        </Link>
        </div>
      </div>
    </header>
  );
}

import './Header.scss'
import logo from '../../assets/Logo/InStock-Logo.svg'

export default function Header() {
  return (
    <header className='header'>
      <div>
        <img src={logo}/>
      </div>
      <div className='header__links'>
        <div>
          <a>Warehouses</a>
        </div>
        <div>
          <a>Inventory</a>
        </div>
      </div>
    </header>
  );
}

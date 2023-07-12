import './Header.scss'
import logo from '../../assets/Logo/InStock-Logo.svg'

export default function Header() {
  return (
    <header className='header'>
      <div className='header__logo-container'>
        <img src={logo}/>
      </div>
      <div className='header__links'>
        <div className='header__link-container header__link-container--clicked'>
          <a className='header__link header__link--clicked'>Warehouses</a>
        </div>
        <div className='header__link-container'>
          <a className='header__link'>Inventory</a>
        </div>
      </div>
    </header>
  );
}

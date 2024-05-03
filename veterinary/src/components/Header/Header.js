import './Header.css';

import logo from '../../images/logo.png';
import map from '../../icons/map.png';
import {ReactComponent as Arrow} from '../../icons/arrow.svg'

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__top'>
                <Link to="/">
                    <img src={logo} className='header__logo' alt="Логотип"/>
                </Link>
                <div className='header__contacts'>
                    <div className='header__contacts addresses'>
                        <img src={map} className='addresses__icon' alt="Адрес" />
                        <div className='addresses__info'>
                            <p className='address'>
                                Москва, Остоженка ул. дом 79
                            </p>
                            <p className='address'>
                                Москва, Полевая ул. дом 24
                            </p>
                        </div>
                    </div>
                    <div className='header__contacts phones'>
                        <p className='phone'>
                            +7 (999) 929-28-79
                        </p>
                        <p className='phone'>
                            +7 (925) 378-68-78
                        </p>
                    </div>
                </div>
            </div>
            <div className='header__top--after'></div>
            <div className='header__bottom'>
                <ul className='header__nav'>
                    <li className='nav__item'>
                        <a className="nav__link" href="#">Главная</a>
                    </li>
                    <li className='nav__item menu-link services'>
                        <a className="nav__link" href="#">
                            Услуги
                            <Arrow className='nav__arrow'/>
                            </a>
                        
                    </li>
                    <li className='nav__item'>
                        <a className="nav__link menu-link specialists" href="#">
                            Специалисты
                            <Arrow className='nav__arrow'/>
                            </a>
                    </li>
                    <li className='nav__item'>
                        <a className="nav__link" href="#">Товары</a>
                    </li>
                    <li className='nav__item'>
                        <a className="nav__link" href="#">Приют</a>
                    </li>
                    <li className='nav__item'>
                        <a className="nav__link" href="#">Участки</a>
                    </li>
                </ul>
                <div className='header__buttons'>
                    <Link to="/login" className='header__button button-reverse'>
                        Вход / Регистрация
                    </Link>
                    <a href="#" className='header__button button'>
                        Записаться на приём
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;
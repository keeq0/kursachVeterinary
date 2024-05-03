import './Footer.css';

import logo from '../../images/logo.png';
import map from '../../icons/map.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <a href="#">
                    <img src={logo} className='header__logo' alt="Логотип" />
                </a>
                
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
            <div className='footer__bottom'>
            © Ветеринарная клиника | Все права защищены
            </div>
        </footer>
    )
}

export default Footer;
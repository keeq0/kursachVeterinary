
import './About.css';

import paws from '../../images/paws.png'

const About = () => {
    return (
        <section className="about">
            <h2 className='about__title'>О нашей <span className='color-blue'>клинике</span></h2>
            <p className='about__text'>
                Мы — команда профессионалов, готовых обеспечить вашего любимца заботой и вниманием, которые он заслуживает. Наша цель — не просто лечить, но и создавать дружественную и уютную атмосферу, где ваш питомец будет чувствовать себя как дома.
                Доверьте своего друга нашим заботливым рукам, и мы сделаем все возможное, чтобы ваше маленькое существо чувствовалось счастливым и здоровым.
            </p>
            <div className='about__buttons'>
                <a href="#" className='about__button button'>
                    Оформить запись
                </a>
                <a href="#" className='about__button button-reverse'>
                    Найти питомца
                </a>
            </div>
            <img src={paws} className='about__paws' alt="Лапы" />
        </section>
    )
}

export default About;
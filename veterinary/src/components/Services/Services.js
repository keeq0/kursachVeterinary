import './Services.css';

import plus from '../../icons/plus.png';

const Services = () => {
    return (
        <section className='services'>
            <h2 className='services__title'>Наши <span className='color-blue'>услуги</span></h2>
            <ul className='services__list'>
                <li className='services__item'>
                    <p className='services__name'>
                        Общий осмотр и консультация
                    </p>
                    <img src={plus} className='services__plus' alt="Плюс" />
                </li>
                <li className='services__item'>
                    <p className='services__name'>
                    Кастрация и стерилизация животных
                    </p>
                    <img src={plus} className='services__plus' alt="Плюс" />
                </li>
                <li className='services__item'>
                    <p className='services__name'>
                        Лабораторные анализы
                    </p>
                    <img src={plus} className='services__plus' alt="Плюс" />
                </li>
                <li className='services__item'>
                    <p className='services__name'>
                        Профилактические прививки для животных
                    </p>
                    <img src={plus} className='services__plus' alt="Плюс" />
                </li>
                <li className='services__item'>
                    <p className='services__name'>
                        Лечение заболеваний органов дыхания
                    </p>
                    <img src={plus} className='services__plus' alt="Плюс" />
                </li>
                <li className='services__item'>
                    <p className='services__name'>
                        Уход за зубами и кожей
                    </p>
                    <img src={plus} className='services__plus' alt="Плюс" />
                </li>
                <li className='services__item'>
                    <p className='services__name'>
                        Лечение и диагностика заболеваний
                    </p>
                    <img src={plus} className='services__plus' alt="Плюс" />
                </li>
                <li className='services__item'>
                    <p className='services__name'>
                        Рентгенологическое исследование
                    </p>
                    <img src={plus} className='services__plus' alt="Плюс" />
                </li>
                <li className='services__item'>
                    <p className='services__name'>
                        Хирургическое удаление опухолей
                    </p>
                    <img src={plus} className='services__plus' alt="Плюс" />
                </li>
            </ul>
            <div className='services__buttons'>
                <a href="#" className='services__button button-reverse'>
                    Записаться на приём
                </a>
                <a href="#" className='services__button button'>
                    Каталог услуг
                </a>
            </div>
        </section>
    )
}

export default Services;
import './Specialists.css';

import photo1 from '../../images/specialists/photo1.png';
import photo2 from '../../images/specialists/photo2.png';
import photo3 from '../../images/specialists/photo3.png';

import paw from '../../icons/paws.png';

const Specialists = () => {
    return (
        <section className='specialists'>
            <h2 className='specialists__title'>Наши <span className='color-blue'>специалисты</span></h2>
            <ul className='specialists__list'>
                <li className='specialists__item'>
                    <img src={photo1} className='specialists__photo' alt="Фото" />
                    <div className='specialists__info'>
                        <h4 className='specialists__name'>Артемий Шевченко</h4>
                        <p className='specialists__text'>
                            <span className='font-bold'>Специализация: </span>
                            главный врач, ветеринарный врач-терапевт, гастроэнтеролог, нефролог/уролог
                        </p>
                        <p className='specialists__text'>
                            <span className='font-bold'>Опыт работы: </span>
                            10 лет
                        </p>
                    </div>
                </li>
                <li className='specialists__item'>
                    <img src={photo2} className='specialists__photo' alt="Фото" />
                    <div className='specialists__info'>
                        <h4 className='specialists__name'>Вадим Соколов</h4>
                        <p className='specialists__text'>
                            <span className='font-bold'>Специализация: </span>
                            заведующий терапевтическим отделением, ветеринарный врач-терапевт
                        </p>
                        <p className='specialists__text'>
                            <span className='font-bold'>Опыт работы: </span>
                            8 лет
                        </p>
                    </div>
                </li>
                <li className='specialists__item'>
                    <img src={photo3} className='specialists__photo' alt="Фото" />
                    <div className='specialists__info'>
                        <h4 className='specialists__name'>Антон Ковалев</h4>
                        <p className='specialists__text'>
                            <span className='font-bold'>Специализация: </span>
                            ветеринарный врач-орнитолог
                        </p>
                        <p className='specialists__text'>
                            <span className='font-bold'>Опыт работы: </span>
                            3 года
                        </p>
                    </div>
                </li>
            </ul>
            <img src={paw} className='specialists__paw' alt="Лапа" />
            <a href="#" className='specialists__button button'>Все специалисты</a>
        </section>
    )
}

export default Specialists;
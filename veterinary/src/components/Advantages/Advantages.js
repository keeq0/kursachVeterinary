import './Advantages.css';

import paw from '../../icons/paws.png';

const Advantages = () => {
    return (
        <section className='advantages'>
            <h2 className='advantages__title'>Наши <span className='color-blue'>преимущества</span></h2>
            <ul className='advantages__list'>
                <li className='advantages__item'>
                    <h3 className='advantages__advantage'>ОПЫТНЫЕ ВЕТЕРИНАРЫ</h3>
                    <p className='advantages__text'>
                    Наши ветеринары - опытные специалисты, готовые обеспечить качественное лечение вашего питомца.
                    </p>
                </li>
                <li className='advantages__item'>
                    <h3 className='advantages__advantage'>УЖЕ 15 ЛЕТ С ВАМИ</h3>
                    <p className='advantages__text'>
                    Мы гарантируем надежное и качественное обслуживание вашего питомца, подкрепленное нашими знаниями и профессионализмом.
                    </p>
                </li>
                <li className='advantages__item'>
                    <h3 className='advantages__advantage'>СОВРЕМЕННАЯ ПОМОЩЬ</h3>
                    <p className='advantages__text'>
                    Наша клиника оснащена передовым оборудованием, что позволяет нам оказывать высококачественные медицинские услуги.
                    </p>
                </li>
                <li className='advantages__item'>
                    <h3 className='advantages__advantage'>ИНДИВИДУАЛЬНЫЙ ПОДХОД</h3>
                    <p className='advantages__text'>
                    Мы учитываем особенности каждого питомца, обеспечивая персонализированное лечение и заботу.
                    </p>
                </li>
                <li className='advantages__item last-advantage'>
                    <h3 className='advantages__advantage'>ВСЕ ВИДЫ УСЛУГ В ОДНОМ МЕСТЕ</h3>
                    <p className='advantages__text'>
                    Это ваш шанс получить всестороннюю заботу о вашем питомце без необходимости хождения по разным клиникам. Наша ветеринарная клиника предоставляет полный спектр услуг, включая профилактическое обслуживание, экстренную помощь, хирургические вмешательства, стоматологию, вакцинацию, лабораторные исследования и многое другое.
                    </p>
                </li>
            </ul>
            <img src={paw} className='advantages__paw' alt="Лапа" />
        </section>
    )
}

export default Advantages;
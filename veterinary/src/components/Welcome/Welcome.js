import './Welcome.css';

import {useState, useEffect, useRef} from 'react';

import arrow from '../../icons/right_arrow.png';
import paw from '../../icons/paws.png';

import photo1 from '../../images/welcome/photo1.png';
import photo2 from '../../images/welcome/photo2.png';
import photo3 from '../../images/welcome/photo3.png';

const Welcome = () => {

    const photos = [photo1, photo2, photo3];
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photos.length);
        }, 5000);
        return () => clearInterval(intervalRef.current);
    }, [currentPhotoIndex]);

    const handlePhotoChange = (index) => {
        setCurrentPhotoIndex(index);
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photos.length);
        }, 5000);
    };

    return (   
        <section className='welcome'>
            <div className='welcome__info'>
                <h1 className='welcome__title'>Профессиональная ветеринарная помощь</h1>
                <p className='welcome__text'>Мы — ваш надежный партнер в заботе о здоровье и благополучии вашего питомца.</p>
                <a href="#" className='welcome__button'>
                    Записаться на приём
                    <img src={arrow} className='welcome__arrow' alt="Стрелка" />
                </a>
                <img src={paw} className='welcome__paw' alt="Лапа" />
                <ul className='welcome__advantages'>
                    <li className='welcome__item'>
                        <h3 className='welcome__item--title'>7000+</h3>
                        <p className='welcome__item--text'>
                            Вылеченных животных
                        </p>
                    </li>
                    <li className='welcome__item'>
                        <h3 className='welcome__item--title'>{'>1500'}</h3>
                        <p className='welcome__item--text'>
                            Успешных операций
                        </p>
                    </li>
                    <li className='welcome__item'>
                        <h3 className='welcome__item--title'>15+</h3>
                        <p className='welcome__item--text'>
                            Лет опыта
                        </p>
                    </li>

                </ul>
            </div>
            <div className='welcome__gallery'>
                <div className='gallery__photos'>
                    {photos.map((photo, index) => (
                        <img 
                            key={index} 
                            src={photo} 
                            className={`gallery__photo ${currentPhotoIndex === index ? 'active' : ''}`} 
                            alt="Фото" 
                        />
                    ))}
                </div>
                <div className='gallery__balls'>
                    {photos.map((photo, index) => (
                        <div 
                            key={index} 
                            className={`ball ${currentPhotoIndex === index ? 'ball-active' : ''}`} 
                            onClick={() => handlePhotoChange(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Welcome;
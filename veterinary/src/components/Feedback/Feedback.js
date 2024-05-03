import {useState} from 'react';

import './Feedback.css';

import paw from '../../icons/paws.png';

const Feedback = () => {

    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
        const inputMessage = event.target.value;
        setMessage(inputMessage);
    };

    return (
        <section className='feedback'>
            <h2 className='feedback__title'><span className='color-blue'>Свяжитесь </span>с нами</h2>
            <p className='feedback__text'>
                При необходимости, заполните форму обратной связи: опишите свою проблему, напишите пожелания или оставьте свой отзыв. 
            </p>
            <form className='feedback__form'>
                <div className='feedback__contacts'>
                    <input required className='feedback__input' placeholder="Имя*"/>
                    <input required className='feedback__input' autocomplete="new-password" placeholder="E-mail*"/>
                    <button className='feedback__button button'>Отправить</button>
                </div>
                <textarea required
                className='feedback__textarea'
                maxLength="250"
                placeholder='Сообщение*'
                value={message}
                onChange={handleMessageChange}
                />
                <span className='feedback__symbols'>Символы: {message.length} / 250</span>
            </form>
            <img src={paw} className='feedback__paw' alt="Лапа" />

        </section>
    )
}

export default Feedback;
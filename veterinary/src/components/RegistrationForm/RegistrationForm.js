import React from 'react';
import './RegistrationForm.css';

const RegistrationForm = ({ handleLoginClick }) => {
    const handleLogin = () => {
        handleLoginClick();
    };

    return (
        <div className='registration'>
            <h2 className='registration__title'>Создать аккаунт</h2>
            <p className='registration__text'>
            Зарегистрируйтесь на нашем сайте, чтобы получить доступ к удобной онлайн записи на прием к нашим опытным ветеринарам и персонализированным рекомендациям по уходу за вашим питомцем.
            </p>
            <form className='registration__form'>
                <input className='registration__input' placeholder='Имя' required/>
                <input className='registration__input' placeholder='Фамилия' required/>
                <input className='registration__input' placeholder='E-mail' autoComplete='new-password' required/>
                <input className='registration__input' placeholder='Номер телефона' required/>
                <input className='registration__input' placeholder='Пароль' autoComplete='new-password' required type="password"/>
                <input className='registration__input' placeholder='Повторите пароль' required type="password" />
                <div className='registration__button-container'>
                    <button className='registration__button button'>Зарегистрироваться</button>
                    <p className='registered'>Уже есть аккаунт? <span className='color-blue to-login' onClick={handleLogin}>Войти</span></p>
                </div>
                <div className='registration__checkbox'>
                    <input type="checkbox" className='checkbox' required/>
                        Даю согласие на <span className='color-blue'>обработку персональных данных</span>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm;
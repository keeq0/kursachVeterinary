import React from 'react';
import './LoginForm.css';

const LoginForm = ({ onLoginClick, onRegisterClick }) => {
    const handleLoginClick = () => {
        onLoginClick();
    };

    const handleRegisterClick = () => {
        onRegisterClick();
    };

    return (
        <div className='login__container'>
            <h2 className='login__title'>Войти в аккаунт</h2>
            <p className='login__text'>
                Добро пожаловать обратно! Пожалуйста, введите свою почту и пароль для входа в систему.
            </p>
            <form className='login__form'>
                <input className='login__input' placeholder='E-mail' required />
                <input className='login__input' placeholder='Пароль' required />
                <p className='login__recovery'>Забыли пароль?</p>
                <div className='login__checkbox'>
                    <input type="checkbox" className='checkbox' required />
                    Запомнить меня
                </div>
                <div className='login__button--container'>
                    <button className='login__button button' >Авторизоваться</button>
                    <p className='noregistered'>Нет аккаунта? <span className='color-blue to-registration' onClick={handleRegisterClick}>Зарегистрироваться</span></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
import React, { useState } from 'react';
import './LoginContainer.css';
import photo from '../../images/photo.jpg';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

const LoginContainer = () => {
    const [shiftPhoto, setShiftPhoto] = useState(true);

    const handleLoginClick = () => {
        setShiftPhoto(true);
    };

    const handleRegisterClick = () => {
        setShiftPhoto(false);
    };

    return (
        <section className='login'>
            <div className={`login__photo--background ${shiftPhoto ? 'shifted' : ''}`}>
                <img src={photo} className={`login__photo ${shiftPhoto ? 'shifted' : ''}`} alt="Фото" />
            </div>
            <RegistrationForm handleLoginClick={handleLoginClick} />
            <LoginForm onRegisterClick={handleRegisterClick} />
        </section>
    )
}

export default LoginContainer;
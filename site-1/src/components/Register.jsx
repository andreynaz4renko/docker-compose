import './Login.css';
import useInput from '../hooks/useInput';
import { useState } from 'react';

const Register = () => {
    const [email, onEmailChange] = useInput();
    const [name, onNameChange] = useInput();
    const [phone, onPhoneChange] = useInput();
    const [birthdate, onBirthdateChange] = useInput();
    const [password, onPasswordChange] = useInput();

    const signUp = () => {
        const signUpRequest = {
            name,
            phone,
            birthdate,
            email,
            password
        };
        fetch(
            "http://192.168.88.21:8080/sign/up",
            {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify(signUpRequest)
            }
        ).then(response => response.json())
            .then(console.log)
            .catch(console.log)
    }

    return (
        <div className="login-form">
            <h1>Register</h1>
            <div className="login-card">
                <div className="login-input-block">
                    <span>Email</span>
                    <input className="login-input" type="email"
                        value={email} onChange={onEmailChange} />
                </div>
                <div className="login-input-block">
                    <span>Name</span>
                    <input className="login-input" type="text"
                        value={name} onChange={onNameChange} />
                </div>
                <div className="login-input-block">
                    <span>Phone</span>
                    <input className="login-input" type="tel"
                        value={phone} onChange={onPhoneChange} />
                </div>
                <div className="login-input-block">
                    <span>Birthdate</span>
                    <input className="login-input" type="date"
                        value={birthdate} onChange={onBirthdateChange} />
                </div>
                <div className="login-input-block">
                    <span>Password</span>
                    <input className="login-input" type="password"
                        value={password} onChange={onPasswordChange} />
                </div>
                <div className="login-button"
                    onClick={signUp}
                >
                    Register
                </div>
                <div className="login-footer">
                    <span>Already have an account? <a href="#">Sign in</a></span>
                </div>
            </div>
        </div>
    );
};

export default Register;
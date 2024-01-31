import './Login.css';
import useInput from '../hooks/useInput';
import { useState } from 'react';

const Login = () => {
    const [email, onEmailChange] = useInput();
    const [password, onPasswordChange] = useInput();

    const signIn = () => {
        const signInRequest = {
            email,
            password
        };
        fetch(
            "http://192.168.88.21:8080/sign/in",
            {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify(signInRequest)
            }
        ).then(response => response.json())
            .then(console.log)
            .catch(console.log)
    }

    return (
        <div className="login-form">
            <h1>Login</h1>
            <div className="login-card">
                <div className="login-input-block">
                    <span>Email</span>
                    <input className="login-input" type="email"
                        value={email} onChange={onEmailChange} />
                </div>
                <div className="login-input-block">
                    <div className="login-password-title">
                        <span>Password</span>
                        <a href="#">Forgot password?</a>
                    </div>
                    <input className="login-input" type="password"
                        value={password} onChange={onPasswordChange} />
                </div>
                <div className="login-button"
                    onClick={signIn}>
                    Login
                </div>
                <div className="login-footer">
                    <span>Don't have account? <a href="#">Create new account</a></span>
                </div>
            </div>
        </div>
    );
};

export default Login;
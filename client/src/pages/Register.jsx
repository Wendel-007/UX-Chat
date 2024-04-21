import React from 'react';
import style from './Register.module.css';
import { Logo } from '../components/logo';
import { EmailBox } from '../components/email-input';
import { PasswordBox } from '../components/password-input';
import { RegisterButton } from '../components/register-button';
import {ErrorBox} from '../components/error-box'
import { NameBox } from '../components/name-input';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';




export function Register() {

    const { registerInfo, updateRegisterInfo, registerUser, registerError } = useContext(AuthContext);

    return (
        <div className={style.container}>
            <div className={style.registerBar}>
                <Logo/>
                <h1>Register</h1>
                <NameBox onChange={(e) => updateRegisterInfo({ ...registerInfo, name: e.target.value })} />
                <EmailBox onChange={(e) => updateRegisterInfo({ ...registerInfo, email: e.target.value })} />
                <PasswordBox onChange={(e) => updateRegisterInfo({ ...registerInfo, password: e.target.value })} />
                {(registerError) ? <ErrorBox error={registerError}/> : null}
                <RegisterButton onClick={registerUser} />
            </div>
        </div>
    );
}

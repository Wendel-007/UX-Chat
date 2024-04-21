import React from 'react';
import style from './Login.module.css';
import {Logo} from '../components/logo'
import {EmailBox} from '../components/email-input'
import {PasswordBox} from '../components/password-input'
import {SubmitButton} from '../components/submit-button';
import {ErrorBox} from '../components/error-box'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


export function Login() {

  const { loginInfo, loginUser, updateLoginInfo, loginError } = useContext(AuthContext);

  return (
    <div className={style.container}>
      <div className={style.loginBar}>
        <Logo/>
        <h1>Login</h1>
        <EmailBox onChange={(e) => updateLoginInfo({ ...loginInfo, email: e.target.value })}/>
        <PasswordBox onChange={(e) => updateLoginInfo({ ...loginInfo, password: e.target.value })}/>
        {(loginError) ? <ErrorBox error={loginError}/> : null}
        <SubmitButton onClick={()=>loginUser(loginInfo)}/>
      </div>
    </div>
  );
}

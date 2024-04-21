import style from './Password.module.css'

export function PasswordBox({onChange}) {
  return (
    <div className={style.passwordBox}>
        <label class="form-label">Digite sua Senha</label>
        <input className={style.inputPassword} type="password" name="username" placeholder="Senha" onChange={onChange}/>
    </div>
  );
}

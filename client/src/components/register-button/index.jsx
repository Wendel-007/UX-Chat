import style from './Register.module.css'

export function RegisterButton({onClick}) {
  return (
    <div className={style.registerButton} onClick={onClick}>
        <button type="s" class="register" >Registrar</button>
    </div>
  );
}

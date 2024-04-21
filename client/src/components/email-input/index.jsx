import style from './Email.module.css'

export function EmailBox({onChange}) {
  return (
    <div className={style.emailBox}>
        <label>Digite seu Email</label>
        <input className={style.inputEmail} type="text" name="username" placeholder="Email" onChange={onChange}/>
    </div>
  );
}


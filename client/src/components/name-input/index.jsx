import style from './Name.module.css'

export function NameBox({onChange}) {
  return (
    <div className={style.nameBox}>
        <label class="form-label">Digite seu Nome</label>
        <input className={style.inputName} type="text" name="username" placeholder="Nome" onChange={onChange}/>
    </div>
  );
}


import style from './ErrorBox.module.css'

export function ErrorBox({error}) {
  return (
    <div className={style.errorBox}>
        <h5 className={style.errorText}>Erro: {error}</h5>
    </div>
  );
}

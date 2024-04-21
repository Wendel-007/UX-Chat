import style from './Submit.module.css'

export function SubmitButton({onClick}) {
  return (
    <div className={style.submitButton}>
          <button type="button" class="submit" onClick={onClick}>Entrar</button>
    </div>
  );
}

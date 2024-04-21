import style from './RedirectBar.module.css'

export function RedirectBar() {
  return (
    <div className={style.loginBar}>
        <h1>Conecte-se<br></br> com o seu<br></br> redor!</h1>
        <div className={style.containerButtons}>
          <form action="http://localhost:5173/login">
            <button>Login</button>
          </form>
          <form action="http://localhost:5173/register">
            <button>Cadastre-se</button>
          </form>
        </div>
    </div>
  )
}

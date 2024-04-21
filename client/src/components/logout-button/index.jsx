import style from './LogoutButton.module.css'
import icon from '../../assets/logout_icon.svg'

export function Logout ({onClick}) {
  return (
    <div className={style.logout} onClick={onClick}>
        <img src={icon} alt="" /> Logout
    </div>
  )
}

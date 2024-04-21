import style from './Logo.module.css'
import logoUX from '../../assets/chats_logo_svg.svg'

export function Logo() {
  return (
    <div className={style.logo}>
      <img src={logoUX} alt="" />
      <h1>UX chat</h1>
    </div>
  );
}
import style from './Footer.module.css'
import logoUxSoftware from '../../assets/logouxsoftware.svg'

export function Footer () {
  return (
    <footer className={style.footer}>
      <a href="https://www.uxsoftware.com.br" target="_blank"
        ><img src={logoUxSoftware} alt="ux software"
      /></a>
    </footer>
  )
}

import style from './BackLandingPage.module.css'
import {Logo} from '../../components/logo'

export function BackLandingPage(){
    return(
        <div className={style.background}>
            <Logo/>
            <div className={style.message1}>
                Hello, friend!
                <p>Today-10:30</p>
            </div>
            <div className={style.message2}>
                Hi, brother!
                <p>Sended</p>
            </div>
        </div>
    )
}
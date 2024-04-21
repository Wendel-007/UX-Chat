
import { useContext } from 'react'
import style from './PotentialChats.module.css'
import { ChatContext } from '../../context/ChatContext'
import { AuthContext } from '../../context/AuthContext'

export default function PotentialChats() {
    const {user} = useContext(AuthContext)
    const {potentialChats, createChat, onlineUsers} = useContext(ChatContext)

    return (
        <div className={style.allUsers}>
            {potentialChats && potentialChats.map((u, index) => {
                return(
                    <div className={style.user} key={index} onClick={()=>createChat(user._id, u._id)}>
                        <ul className={onlineUsers?.some((user) => user?.userId === u?._id) ? style.online : style.offline}><li></li></ul>
                        {u.name}
                    </div>
                )
            })}
        </div>
    )
}
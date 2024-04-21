import { useContext } from "react"
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient"
import style from './UserChat.module.css'
import { ChatContext } from "../../context/ChatContext"

export function UserChat ({chat ,user}){

    const {recipientUser} = useFetchRecipientUser(chat, user)
    const {onlineUsers} = useContext(ChatContext)
    

    return(
        <>
            <div className={style.leftContainer}>
                <div className={style.sender}>
                    <ul className={onlineUsers?.some((user) => user?.userId === recipientUser?._id) ? style.online : style.offline}><li></li></ul>
                    {recipientUser?.name}
                </div>
                <div className={style.textMessage}>
                    Text Message
                </div>
            </div>
            <div className={style.rigthContainer}>
                <div className={style.date}>
                    12/01/2025
                </div>
            </div>
        </>
    )
}
import { useContext, useEffect, useRef } from 'react'
import style from './ChatMsgs.module.css'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'
import { useFetchRecipientUser } from '../../hooks/useFetchRecipient'
import moment from 'moment'

export default function ChatMsgs() {

    const {user} = useContext(AuthContext)
    const {currentChat, messages} = useContext(ChatContext)
    const {recipientUser} = useFetchRecipientUser(currentChat, user)
    const scroll = useRef()

    useEffect(()=>{
      scroll.current?.scrollIntoView({behavior: "smooth"})
    }, [messages])

    if(!recipientUser){

      return(
            <p style={{textAlign: "center", width: "100%", alignSelf:"flex-start", fontSize:"12pt"}}>
                No conversation selected yet...
            </p>
      )
    }


  return (
    <div className={style.container}>
      <div className={style.headerChat}>
        Chat with {recipientUser?.name}
      </div>
      <div className={style.chatBox}>
      <div className={style.messages}>
        {messages && messages.map((message, index) => (<div key={index} ref={scroll} className={`${message?.senderId === user?._id ? style.myMessage : style.otherMessage}`}>
          <span>{message.text}</span>
          <span className={style.date}>{moment(message.createAt).calendar()}</span>
        </div>))}
      </div>
      </div>
    </div>
  )
}

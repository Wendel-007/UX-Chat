import style from './InputChat.module.css'
import logoSend from '../../assets/send.svg'
import ChatMsgs from '../chat-menssages'
import InputEmoji from 'react-input-emoji'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'

export function InputChat () {

  const [textMessage, setTextMessage] = useState("")
  const {user} = useContext(AuthContext)
  const {currentChat, sendTextMessage} = useContext(ChatContext)



  return (
    <div className={style.chat}>
        <div className={style.messageContainerBox}>
          <ChatMsgs/>
        </div>
        <div className={style.messageInputContainer}>
          <div className={style.messageInputemoji}>
              <InputEmoji placeholder='Digite a mensagem...' borderColor='transparent' value={textMessage} onChange={setTextMessage}/>
          </div>
          <div className={style.buttonSubmit}>
              <button onClick={()=>sendTextMessage(textMessage, user, currentChat._id, setTextMessage)}><img src={logoSend} alt="" srcset="" /></button>
          </div>
        </div>
    </div> 
  )
}

import style from './Sidebar.module.css'
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext'
import { useContext } from 'react';
import { UserChat } from '../user-chat';
import { Logo } from '../logo';

export function Sidebar({onload}) {

  const { UserChats, updateCurrentChat } = useContext(ChatContext);
  const { user } = useContext(AuthContext);

  return (
    <div className={style.sidebar}>
        <div className={style.logo}>
          <Logo/>
        </div>
        <div className={style.loginInfo}>
          <ul>
            <li></li>
          </ul>
          <div>Logado como {onload.name}</div>
        </div>
        <nav className={style.navChats}>
          <h3>Chats</h3>
          {UserChats?.length < 1 ? null : (
            <div className={style.chatsList}>
                {UserChats?.map((chat, index) => {
                    return (
                        <div key={index} onClick={() => updateCurrentChat(chat)}>
                            <UserChat chat={chat} user={user}/>
                        </div>
                    );
                })}
            </div>
          )}
        </nav>
    </div>
  );
}

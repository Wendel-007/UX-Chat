import React from 'react'
import style from './Chat.module.css'
import {Sidebar} from '../components/sidebar'
import {InputChat} from '../components/input-chat'
import {Logout} from "../components/logout-button"
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext'
import PotentialChats from '../components/potential-chats'

function lerDoLocalStorage(chave) {
  try {
      const valor =JSON.parse(localStorage.getItem(chave));
      return valor;
  } catch (error) {
      console.log("Erro ao ler do localStorage:", error);
      return null;
  }
}

export function Chat () {

  const {  logoutUser } = useContext(AuthContext);

  return (
    <div className={style.container}>
      <Logout onClick={logoutUser}/>
      <PotentialChats/>
      <div className = {style.main}>
        <Sidebar onload={lerDoLocalStorage("User")}/>
        <InputChat/>
      </div>
    </div>
  )
}

import { createContext, useCallback, useEffect, useState } from "react";
import { getRequest, baseUrl, postRequest} from "../utils/service";
import {io} from 'socket.io-client'

export const ChatContext = createContext()

export const ChatContextProvider = ({children, user}) => {
    const [UserChats, setUserChats] = useState(null)
    const [UserChatsError, setUserChatsError] = useState(null)
    const [potentialChats, setPotentialChats] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState(null)
    const [messagesError, setMessagesEroor] = useState(null)
    const [sendTextMessageError, setSendTextMessageError] = useState(null)
    const [newMessage, setNewMessage] = useState(null)
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState(null)

    //inicialização do socket
    useEffect(()=>{
        const newSocket = io("http://localhost:3000")
        setSocket(newSocket)

        return () => {
            newSocket.disconnect()
        }
    }, [user])

    //atualização do estado do usuário (online/offline)
    useEffect(() => {
        if (socket === null) return;

        socket.emit("addNewUser", user?._id);
        socket.on("getOnlineUsers", (res) => {
            setOnlineUsers(res)
        })

        return() => {
            socket.off("getOnlineUsers")
        }
      }, [socket]);

    //envio de mensagens
    useEffect(() => {
        if (socket === null) return;

        const recipientId = currentChat?.members.find((id) => id !== user?._id)

        socket.emit("sendMessage", {...newMessage, recipientId})
    }, [newMessage]);

    //recebimento de menssaagens
    useEffect(() => {
        if (socket === null) return;

        socket.on("getMessage", res =>{
            if(currentChat?._id !== res.chatId) return;

            setMessages((prev) => [...prev, res])
        })

        return () => [
            socket.off("getMessage")
        ]
      }, [socket, currentChat]);
      

    useEffect(()=>{
        const getUser = async() =>{
            const response = await getRequest(`${baseUrl}/users`)

            if(response.error){
                return console.log("Erro ao buscar usuários...", response)
            }

            const pChats = response.filter((u) =>{

                let isChatCreated = false

                if(user?._id === u._id){ 
                    return false
                }

                if(UserChats){
                    isChatCreated = UserChats?.some((chat) => {
                        return chat?.members[0] === u._id || chat?.members[1] === u._id
                    })
                }

                return !isChatCreated
            })
            setPotentialChats(pChats)
        }
        getUser()
    }, [UserChats])

    useEffect(()=>{
        const getUserChats = async() =>{
            if(user?._id){

                setUserChatsError(null)

                const response = await getRequest(`${baseUrl}/chats/${user?._id}`)

                if(response.error){
                    return setUserChatsError(response)
                }
                setUserChats(response)
            }
        }
        getUserChats()
    }, [user])

    useEffect(()=>{
        const getMessages = async() =>{
            if(user?._id){

                setMessagesEroor(null)

                const response = await getRequest(`${baseUrl}/messages/${currentChat?._id}`)

                if(response.error){
                    return setMessagesEroor(response)
                }
                setMessages(response)
            }
        }
        getMessages()
    }, [currentChat])

    const sendTextMessage = useCallback( async (textMessage, sender, currentChatId, setTextMessage) =>{

        if(!textMessage){
            return console.log("Mensagem Vazia...")
        }

        const response = await postRequest(`${baseUrl}/messages`, JSON.stringify({
            chatId: currentChatId,
            senderId: sender._id,
            text: textMessage
        }))

        if(response.error){
            return setSendTextMessageError(response)
        }

        setNewMessage(response)
        setMessages((prev)=>[...prev, response])
        setTextMessage("")
    }, [])

    const updateCurrentChat = useCallback((chat) =>{

        setCurrentChat(chat)

    },[])

    const createChat = useCallback(async(firstId, secondId) =>{

        const response = await postRequest(`${baseUrl}/chats`, JSON.stringify({firstId, secondId}))

        if(response.erro){
            return console.log("Erro ao criar Chat", response)
        }

        setUserChats((prev) => [...prev, response])
    }, [])

    return <ChatContext.Provider value={{
        UserChats,
        UserChatsError,
        potentialChats,
        createChat,
        updateCurrentChat,
        currentChat,
        messages,
        messagesError,
        sendTextMessage,
        onlineUsers
    }}>{children}</ChatContext.Provider>
}
# UX-Chat

UX-Chat é uma aplicação de chat online desenvolvida com Web Socket, Node.js e React.js e MongoDB.

## Descrição

Este projeto é uma plataforma de chat em tempo real que permite aos usuários se comunicarem entre si de forma rápida e eficiente. Utilizando tecnologias como Web Socket, Node.js e React.js, o UX-Chat oferece uma experiência de usuário fluida e interativa.

## Páginas

### Página inicial
![Captura de tela 2024-04-20 225549](https://github.com/Wendel-007/UX-Chat/assets/107087269/a92280fa-fa71-474d-a244-87833355fd5d)

### Página de Login
![Captura de tela 2024-04-20 225718](https://github.com/Wendel-007/UX-Chat/assets/107087269/2c639d46-e9ed-46a6-8c6e-2b670ae8864c)

### Página de Registro
![Captura de tela 2024-04-20 225740](https://github.com/Wendel-007/UX-Chat/assets/107087269/fbcc69dc-7630-4e76-83e6-ce1174dfe2bf)

### Página Chat
![Captura de tela 2024-04-20 225834](https://github.com/Wendel-007/UX-Chat/assets/107087269/48ab2776-23f8-43aa-abd5-929e34a8e608)

## Principais Dependências

### Dependências do Cliente

- **axios**: Cliente HTTP para realizar requisições assíncronas.
- **moment**: Biblioteca para manipulação de datas e horas.
- **node-fetch**: Módulo para realizar requisições HTTP a partir do servidor Node.js.
- **react**: Biblioteca JavaScript para construção de interfaces de usuário.
- **react-dom**: Pacote React para manipulação do DOM.
- **react-input-emoji**: Componente React para entrada de emojis.
- **react-router-dom**: Pacote React para roteamento de URLs no lado do cliente.
- **socket.io-client**: Cliente para conexão com servidores socket.io.

### Dependências do Servidor

- **bcrypt**: Biblioteca para hashing de senhas.
- **cors**: Middleware para habilitar o CORS em aplicativos Node.js.
- **dotenv**: Carrega variáveis de ambiente de um arquivo `.env` para process.env.
- **express**: Framework web para Node.js.
- **jsonwebtoken**: Implementação de JSON Web Tokens (JWT).
- **mongodb**: Driver oficial do MongoDB para Node.js.
- **mongoose**: ODM (Object Data Modeling) para MongoDB.
- **validator**: Biblioteca para validação de dados.

### Dependências do Socket

- **socket.io**: Biblioteca para comunicação em tempo real baseada em Web Sockets.

## Como Executar

Siga estas instruções para executar o UX-Chat em sua máquina local:

### No Terminal (Cliente)
1. Navegue até o diretório do cliente:
   ```bash
   cd client
   npm install
   npm run dev

### No Terminal (Server)
1. Navegue até o diretório do cliente:
   ```bash
   cd server
   npm install
   node index.js

### No Terminal (Socket)
1. Navegue até o diretório do cliente:
   ```bash
   cd socket
   npm install
   node index.js

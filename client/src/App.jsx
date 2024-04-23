import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from './context/AuthContext.jsx';
import { ChatContextProvider } from './context/ChatContext.jsx';

export function App() {
  const { user } = useContext(AuthContext);

  return (
    <ChatContextProvider user={user}>
      <Outlet />
    </ChatContextProvider>
  );
}

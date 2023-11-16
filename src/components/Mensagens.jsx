import React from 'react'
import Sidebar from './SideBar'
import SidebarChat from './Sidebar chat'
import Chat from './Chat'

const Mensagens = () => {
  // const usuario = JSON.parse(sessionStorage.getItem("usuario"));
  console.log("usuario: " + sessionStorage.getItem("usuario").googleEmail)
  if (JSON.parse(sessionStorage.getItem("usuario")).googleEmail == null) {
    return (
      <p>
        Você precisa se conectar a uma conta Google!
      </p>
    );
  }
  
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <SidebarChat />
        <Chat/>
      </div>
    </div>
  )
}

export default Mensagens
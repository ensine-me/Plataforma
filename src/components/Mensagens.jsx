import React from 'react'
import Sidebar from './SideBar'
import SidebarChat from './Sidebar chat'
import Chat from './Chat'

const Mensagens = () => {
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
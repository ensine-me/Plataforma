import React from 'react'
import "../assets/styles/chat.css"
import { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import Logo from './logo';


const Navbar = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <Logo />
      <div className="user">
        <img src={currentUser.photoURL} alt="Foto de perfil do usuário" />
        <span>{currentUser.displayName}</span>
      </div>
    </div>
  )
}

export default Navbar
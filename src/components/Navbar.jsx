import React from 'react'
import "../assets/styles/chat.css"
import { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';


const Navbar = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">Ensine.me</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
      </div>
    </div>
  )
}

export default Navbar
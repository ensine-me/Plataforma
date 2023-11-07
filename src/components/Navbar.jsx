import React from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { useSession } from '@supabase/auth-helpers-react';
import "../assets/styles/chat.css"
import { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';


const Navbar = () => {

  const session = useSession();

  const { currentUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">Ensine.me</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
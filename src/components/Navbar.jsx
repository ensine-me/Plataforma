import React, { useContext, useState } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { SessionCheckerContext } from './SessionChecker'
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';


const Navbar = () => {

  const session = useSession();

  const currentUser = {
    "displayName": session.user.user_metadata.full_name,
    "uid": session.user.id,
    "photoURL": session.user.user_metadata.avatar_url,
  }  

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
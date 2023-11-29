import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import "../assets/styles/chat.css";
import { AuthContext } from "context/AuthContext";
import { useContext } from "react";
import { useLocation } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext)

  const location = useLocation();
  var validacao = true
  
  useEffect(() => {
    if (location.state != null && validacao === true) {
      setUsername(location.state.nomeProfessor);
      validacao = false;
    }
  }, [location.state, validacao]);

  useEffect(() => {
    const fetchData = async () => {
      if (username) {
        try {
          const q = query(
            collection(db, "users"),
            where("displayName", "==", username)
          );

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            setUser(doc.data());
            if (user) {
              handleSelect(doc.data());
            }
          });
        } catch (err) {
          setErr(true);
        }
      }
    };

    fetchData();
  }, [username]);

  console.log('%c%s', 'color: #ff0000', "USER CURENT " + currentUser);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {

    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),

        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
      console.log('%c⧭', 'color: #00bf00', user.photoURL);
    } catch (err) { }

    setUser(null);
    setUsername("")
  };
  return (
    <div className="search">
      <div className="searchForm">
        <SearchIcon color='info' />
        <input
          type="text"
          placeholder="Busca de usuário"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        {console.log('%c⧭', 'color: #e50000', username)}
      </div>
      {err && <span>Usuário não encontrado!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

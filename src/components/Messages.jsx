import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ChatProvider } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";
import "../style/chat.css"

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const data = ChatProvider() ;
  console.log("DATTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT "+data.chatId)
  
  //  console.log('%c⧭', 'color: #ff0000', );
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      console.log("DOOOOOOOOOOOOOOOOOOOOOOC "+doc.get)
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages)

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
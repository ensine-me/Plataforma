import React from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import "../assets/styles/chat.css"
import { useContext } from "react";


const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Conversando com {data.user?.displayName}</span>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;

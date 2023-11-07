import React from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"
import "../assets/styles/chat.css"
import { ChatContextProvider } from "context/ChatContext";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;

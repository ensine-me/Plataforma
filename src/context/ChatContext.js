import {
  createContext,
  useContext,
  useReducer,
} from "react";
import { useSession } from "../../node_modules/@supabase/auth-helpers-react/dist/index";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  
  const { currentUser } = useContext(AuthContext)
  
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };
  
  const chatReducer = (state, action) => {
    console.log('%c⧭', 'color: #ff0000', "PASSEI AQ de novo "+INITIAL_STATE.chatId);
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
          currentUser.uid > action.payload.uid
          ? currentUser.uid + action.payload.uid
          : action.payload.uid + currentUser.uid,
        };
        
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data:state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

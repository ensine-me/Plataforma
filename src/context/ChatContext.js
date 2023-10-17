import { useReducer } from "react";
import { useSession } from "@supabase/auth-helpers-react";


export function ChatProvider(arg) {
  const session = useSession();

  const currentUser = {
    "displayName": session.user.user_metadata.full_name,
    "uid": session.user.id,
    "photoURL": session.user.user_metadata.avatar_url,
  }
  console.log("USSSSSSSSSSER"+currentUser)
  const INITIAL_STATE = {
    chatId: "0",
    user: {},
  };

  const chatReducer = (state, action) => {
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
  if(arg == null){
    return(
      state
    )
  }

  else {
    return (
      dispatch
    );
  }
};

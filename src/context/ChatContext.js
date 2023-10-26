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
    chatId: "NULL",
    user: {},
  };

  const chatReducer = (state, action) => {
  console.log('%c⧭', 'color: #ffffff', "PASSEI AQ de novo ");

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
    console.log('%c⧭', 'color: #2f00ff', "PASSEI AQ no return");
    return (
      dispatch
    );
  }
};

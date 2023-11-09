import { useNavigate } from "react-router-dom";
import { isVariableInSessionStorage } from "../functions/isVariableInSessionStorage";
import { useEffect, useState } from "react";

const LoginChecker = ({ children }) => {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function checkLogin() {
      if(isVariableInSessionStorage("usuario")) {
        setIsReady(true);
      } else {
        navigate("/login");
      }
    }

    checkLogin();
  })

  return isReady ? children : null
}

export default LoginChecker
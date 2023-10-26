import { useSessionContext } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isVariableInSessionStorage } from "../functions/isVariableInSessionStorage";
import { login } from "../functions/login";

const SessionChecker = ({ children }) => {
  const { isLoading, session } = useSessionContext();
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function checkLogin() {
      if (!isLoading && !session) {
        navigate("/google-login"); // redirect to login page if not
      }
      if (!isLoading && session) {
        const email = session.user.email;
        const urlExiste = `http://44.217.177.131:8080/usuarios/existe-por-email?emailUsuario=${email}`;
        const responseExiste = await fetch(urlExiste);
        const responseExisteJson = await responseExiste.json();
        if (responseExisteJson) { // checks if user is registered
          if (!isVariableInSessionStorage("usuario")) { // checks if not logged in
            await login(email, email); // login
          }
          setIsReady(true);
        } else { // if not registered, navigate to registration page
          navigate("/escolher-papel");
        }
        // Set the state to indicate that the check is complete
      }
    }

    checkLogin();
  }, [isLoading, session, navigate]);

  // Render children only when the check is complete
  return isReady ? children : null;
}

export default SessionChecker;

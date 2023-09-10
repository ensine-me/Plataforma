import { useSessionContext } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SessionChecker = ({children}) => {
    const { isLoading, session } = useSessionContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !session) {
          navigate("/google-login"); // redirect to login page if not
        }
      }, [isLoading, session, navigate]);

    return children
}

export default SessionChecker
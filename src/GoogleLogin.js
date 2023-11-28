import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import { useEffect, useCallback } from 'react';
// import { loginFirebase } from './functions/login';
import { useNavigate } from "react-router-dom";
import { isVariableInSessionStorage } from 'functions/isVariableInSessionStorage';
import store from '../src/store';


// FAVOR NÃO MEXER NESTE ARQUIVO DA SILVA
// Ele é o arquivo do Login
// Tem de colocar ele junto do login no institucional

function GoogleLogin() {
  const session = useSession(); // user, quando a sessão existir temos um usuario.
  const supabase = useSupabaseClient(); // talk to supabase;
  const { isLoading } = useSessionContext();

  const navigate = useNavigate();

  const googleSignIn = useCallback(async () => {

    const urlRedirect = `${store.getState().frontEndUrl}check-google-login`

    //fazendo o login com o Google
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events',
        redirectTo: urlRedirect
      }
    });
    if (error) {
      alert("Error logging into the Google provider with Supabase");
      console.log(error);
    }
  }, [supabase]);

  useEffect(() => {
    if (!isLoading) {
      if (session && isVariableInSessionStorage("usuario")) {
        navigate('/sign-out')
      } else {
        googleSignIn();
      }
    }
  }, [isLoading, session, googleSignIn, navigate]);


  return null;
}

export default GoogleLogin;

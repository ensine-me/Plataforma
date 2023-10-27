import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import { useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";

// FAVOR NÃO MEXER NESTE ARQUIVO DA SILVA
// Ele é o arquivo do Login
// Tem de colocar ele junto do login no institucional

function GoogleLogin() {
  const session = useSession(); // user, quando a sessão existir temos um usuario.
  const supabase = useSupabaseClient(); // talk to supabase;
  const { isLoading } = useSessionContext();

  const navigate = useNavigate();

  const googleSignIn = useCallback(async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events',
        redirectTo: 'http://localhost:3000/inicial-aluno'
      }
    });
    if (error) {
      alert("Error logging into the Google provider with Supabase");
      console.log(error);
    }
  }, [supabase]);

  const signOut = useCallback(async () => {
    try {
      await fetch('http://44.217.177.131:8080/usuarios/logoff/'+ session.user.email, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
        },
      });

      // Sign out do Supabase
      await supabase.auth.signOut();

      // Redirecionando para o institucional
      // window.location.href = "http://localhost:3001";
    } catch (error) {
      console.error(error);
    }
  }, [session, supabase]);

  useEffect(() => {
    if (!isLoading) {
      if (session) {
        // signOut();
        navigate('/sign-out')
      } else {
        googleSignIn();
      }
    }
  }, [isLoading, session, googleSignIn, navigate]);

  return null;
}

export default GoogleLogin;

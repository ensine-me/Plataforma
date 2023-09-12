import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import { useNavigate } from "react-router-dom";

// FAVOR NÃO MEXER NESTE ARQUIVO DA SILVA
// Ele é o arquivo do Login
// Tem de colocar ele junto do login no institucional
function GoogleLogin() {
  const session = useSession(); // user, quando a sessão existir temos um usuario.
  const supabase = useSupabaseClient(); // talk to supabase;
  const { isLoading } = useSessionContext();
  const navigate = useNavigate();

  if (isLoading) {
    return <></>
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events'
      }
    });
    if (error) {
      alert("Error loggin into google provider with supabase");
      console.log(error);
    } else {
      //navigate("/escolher-materias");
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    window.location.href = "https://www.google.com"
  }

  // console.log(session);
  // session ? signOut() : si
  return (
    <>
      {session ? signOut() : googleSignIn()}
    </>
  );
}

export default GoogleLogin;

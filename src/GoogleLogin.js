import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';

// FAVOR NÃO MEXER NESTE ARQUIVO DA SILVA
// Ele é o arquivo do Login
// Tem de colocar ele junto do login no institucional
function GoogleLogin() {
  const session = useSession(); // user, quando a sessão existir temos um usuario.
  const supabase = useSupabaseClient(); // talk to supabase;
  const { isLoading } = useSessionContext();

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
    fetch('http://localhost:8080/usuarios/logoff/' + session.user.email, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .catch(error => {
        console.error(error);
      });
    await supabase.auth.signOut();
    window.location.href = "http://localhost:3001"
  }

  return (
    <>
      {session ? signOut() : googleSignIn()}
    </>
  );
}

export default GoogleLogin;

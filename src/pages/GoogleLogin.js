import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';

// FAVOR NÃO MEXER NESTE ARQUIVO DA SILVA
// Ele é o arquivo do Login
// Tem de colocar ele junto do login no institucional
  function GoogleLogin(){
  const session = useSession(); // user, quando a sessão existir temos um usuario.
  const supabase = useSupabaseClient(); // talk to supabase;
  const { isLoading } = useSessionContext();

  if(isLoading){
    return <></>
  }

  async function googleSignIn(){
    const {error} = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events'
      }
    });
    if(error){
      alert("Error loggin into google provider with supabase");
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  // console.log(session);

  return (
    <div className="GoogleLogin">
     <div style={{width:"400px", margin: "30px auto"}}>
      {session ?
      <>
      <button onClick={() => signOut()}>Deslogar</button>
      </>
      :
      <>
        <button onClick={() => googleSignIn()}>Logar-se com google</button>
      </>
       }
     </div>
    </div>
  );
}

export default GoogleLogin;

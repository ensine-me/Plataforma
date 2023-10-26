import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

const LogOut = () => {

    const session = useSession(); // user, quando a sessão existir temos um usuario.
    const supabase = useSupabaseClient(); // talk to supabase;

    async function signOut() {

        console.log("Meu deus: " + session.user.email);
        //console.log("token: " + session.token)
        console.log(JSON.parse(sessionStorage.getItem("usuario")).token);
        //console.log("Cheguei aq "+ session.access_token);
        try {
            await fetch('http://44.217.177.131:8080/usuarios/logoff/' + session.user.email, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + JSON.parse(sessionStorage.getItem("usuario")).token
                },
            });

            // Sign out do Supabase
            await supabase.auth.signOut();

            // Redirecionando para o institucional
            window.location.href = "/";
        } catch (error) {
            console.error(error);
        }
    }

    signOut();

    return (
        <div>
            <p>Saindo...</p>
        </div>
    );
}

export default LogOut
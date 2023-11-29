import MiniDrawer from "../components/SideBar"
import sPerfil from "../assets/styles/perfil.module.css"
import store from '../../src/store';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const PerfilAluno = () => {
    const supabase = useSupabaseClient();

    async function conectarComGoogle() {
        const urlRedirect = `${store.getState().frontEndUrl}conectar-com-google`

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
    };

    return (
        <>
            <MiniDrawer />
            <div className={sPerfil.box}>
                <div className={sPerfil.quadrados}>
                    <div className={sPerfil.quadrado}>
                        <div className={sPerfil.fotoNivel}
                            style={{ backgroundImage: JSON.parse(sessionStorage.getItem("usuario")).foto !== undefined ? `url(${JSON.parse(sessionStorage.getItem("usuario")).foto})` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCorUM2rzb77_a8FOOOBD-7UW6BdQR2Mhw40LOuc&s" }}
                        >
                        </div>
                        <div className={sPerfil.estrelas}>
                            <p>{JSON.parse(sessionStorage.getItem("usuario")).nome}</p>
                        </div>
                    </div>
                </div>
                <div className={sPerfil.quadrados}>
                    <div className={sPerfil.quadrado}>
                        <div className={sPerfil.buttons}>
                            <button className={sPerfil.button}>Conquistas</button>
                            <button className={sPerfil.button}>Ranking</button>
                            {
                                JSON.parse(sessionStorage.getItem("usuario")).googleEmail ?
                                    <button className={sPerfil.button}>Desconectar conta Google</button>
                                    :
                                    <button className={sPerfil.button} onClick={conectarComGoogle}>Conectar conta Google</button>
                            }
                            <button className={sPerfil.button}>Sair</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PerfilAluno;
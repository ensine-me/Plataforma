import MiniDrawer from "../components/SideBar"
import sPerfil from "../assets/styles/perfil.module.css"
import { useSession } from "@supabase/auth-helpers-react"

const PerfilAluno = () => {
    console.log(sessionStorage.getItem("usuario").nome);
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
                    <div className={sPerfil.retangulo}>
                        retangulo
                    </div>
                </div>
                <div className={sPerfil.quadrados}>
                    <div className={sPerfil.quadrado}>
                        <div className={sPerfil.buttons}>
                            <button className={sPerfil.button}>Conquistas</button>
                            <button className={sPerfil.button}>Ranking</button>
                            <button className={sPerfil.button}>Alterar cadastro</button>
                            <button className={sPerfil.button}>Sair</button>
                        </div>
                    </div>
                    <div className={sPerfil.retangulo}>
                        retangulo
                    </div>
                </div>
            </div>
        </>
    )
}

export default PerfilAluno;
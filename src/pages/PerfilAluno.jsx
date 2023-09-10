import sPerfil from "../styles/Perfil.module.css"

const PerfilAluno = () => {
    return (
        <>
            <div className={sPerfil.box}>
                <div className={sPerfil.quadrados}>
                    <div className={sPerfil.quadrado}>
                        <div className={sPerfil.fotoNivel}>
                            fotonivel
                        </div>
                        <div className={sPerfil.estrelas}>
                            <p>Rodrigo Silva</p>
                            estrelas
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
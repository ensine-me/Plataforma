import MiniDrawer from "../components/SideBar"
import sPerfil from "../style/perfilProfessor.module.css"
import FormacaoCard from "../components/FormacaoCard"
import MateriaProfessor from "../components/materiaProfessor"
import MarcarAula from "../components/marcarAula"

const chamaMarcarAula = () => {
    document.getElementById("marcarAulaContainer").style.visibility = "visible";
}

const PerfilProfessor = () => {
    return (
        <>
            <MarcarAula />
            <MiniDrawer />
            <div className={sPerfil.box}>
                <div className={sPerfil.pesquisa}>Barra de pesquisa</div>
                <div className={sPerfil.quadrados}>
                    <div className={sPerfil.infosBotoes}>
                        <div className={sPerfil.quadrado}>
                            <div className={sPerfil.fotoNivel}>
                                fotonivel
                            </div>
                            <div className={sPerfil.estrelas}>
                                <p>Roberto Astolfo</p>
                                estrelas
                            </div>
                        </div>
                        <div className={sPerfil.quadrado}>
                            <div className={sPerfil.buttons}>
                                <button onClick={chamaMarcarAula} className={sPerfil.button}>Solicitar aula</button>
                                <button className={sPerfil.button}>Entrar em contato</button>
                            </div>
                            <div className={sPerfil.horaAula}>
                                Hora aula: R$15,00
                            </div>
                        </div>
                    </div>
                    <div className={sPerfil.retangulo}>
                        <div className={sPerfil.descricao}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
                        </div>
                        <div className={sPerfil.materias}>
                            <MateriaProfessor materia={"Geografia"} />
                            <MateriaProfessor materia={"Matemática"} />
                            <MateriaProfessor materia={"História"} />
                            <MateriaProfessor materia={"Artes"} />
                            <MateriaProfessor materia={"Biologia"} />
                        </div>
                    </div>
                    <div className={sPerfil.divisor}></div>
                    <div className={sPerfil.retangulo}>
                        Formações
                        <div className={sPerfil.formacoes}>
                            <FormacaoCard
                                instituicao={"Universidade Presbiteriana Mackenzie"}
                                tipo={"Bacharelado em matemática"}
                                periodo={"2010 - 2014"}
                            />
                            <FormacaoCard
                                instituicao={"Faculdade de tecnologia bandeirantes"}
                                tipo={"Bacharelado em Ciência da computação"}
                                periodo={"2015 - 2019"}
                            />
                            <FormacaoCard
                                instituicao={"Instituto de matemática e estatística da Universidade de São Paulo"}
                                tipo={"Licenciatura em matemática"}
                                periodo={"2018 - 2022"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PerfilProfessor;
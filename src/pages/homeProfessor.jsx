import sHomeProfessor from "../assets/styles/homeProfessor.module.css"
import { useEffect, useState } from "react"
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MuiReactTable from '../components/MuiReactTable';
import { loginFirebase } from "functions/login";
import { useSession } from "../../node_modules/@supabase/auth-helpers-react/dist/index";
import store from "../store";

const HomeProfessor = () => {

    const session = useSession();
    if (session) {
        loginFirebase(session.user.email, session.user.email)
    }

    // Pega o valor do parâmetro 'id' da URL
    const idProfessor = JSON.parse(sessionStorage.getItem("usuario")).userId;

    const [qtdAulas, setQtdAulas] = useState();
    const [qtdAulasConcluidas, setQtdAulasConcluidas] = useState();
    const [qtdAulasAgendadas, setQtdAulasAgendadas] = useState();
    const [experiencia, setExperiencia] = useState();

    const [titulosState, setTitulosState] = useState([]);
    const [dateTsState, setDateTsState] = useState([]);
    const [valoresState, setValoresState] = useState([]);
    const [materiasState, setMateriasState] = useState([]);
    const [professoresState, setProfessoresState] = useState([]);

    useEffect(() => {
        fetch(`${store.getState().backEndUrl}aulas/conta-aulas-professor-id?id=` + idProfessor, {
            method: 'GET',
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
            .then(data => {
                setQtdAulas(data);
            })
            .catch(error => {
                console.error(error);
            });
        
            fetch(`${store.getState().backEndUrl}usuarios/professor/experiencia?idProfessor=` + idProfessor, {
                method: 'GET',
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
                .then(data => {
                    setExperiencia(data);
                })
                .catch(error => {
                    console.error(error);
                });
            
        fetch(`${store.getState().backEndUrl}aulas/conta-aulas-professorid-concluida?id=` + idProfessor, {
            method: 'GET',
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
            .then(data => {
                setQtdAulasConcluidas(data);
            })
            .catch(error => {
                console.error(error);
            });

        fetch(`${store.getState().backEndUrl}aulas/conta-aulas-professorid-agendada?id=` + idProfessor, {
            method: 'GET',
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
            .then(data => {
                setQtdAulasAgendadas(data);
            })
            .catch(error => {
                // Lide com erros
                console.error(error);
            });
        fetch(`${store.getState().backEndUrl}aulas/busca-professor-id-solicitado?id=` + idProfessor, {
            method: 'GET',
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
            .then(data => {
                // Faça algo com os dados da resposta

                const titulos = [];
                const dateTs = [];
                const valores = [];
                const materias = [];

                for (let i = 0; i < data.length; i++) {
                    titulos.push(data[i].titulo);
                    dateTs.push(data[i].dataHora);
                    valores.push(data[i].professor.precoHoraAula);
                    materias.push(data[i].materia.nome);
                }

                setTitulosState(titulos);
                setDateTsState(dateTs);
                setValoresState(valores);
                setMateriasState(materias);
            })
            .catch(error => {
                // Lide com erros
                console.error(error);
            });


        fetch(`${store.getState().backEndUrl}usuarios/professor/experiencia/top`, {
            method: 'GET',
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
            .then(data => {
                const professores = [];
                for (let i = 0; i < data.length; i++) {
                    professores.push({
                        nome: data[i].nome,
                        experiencia: data[i].experiencia,
                    });
                }

                setProfessoresState(professores);
            })
            .catch(error => {
                // Lide com erros
                console.error(error);
            });
    }, [idProfessor]);

    return (
        <>
            <div id="homeProfessorContainer" className={sHomeProfessor.box}>
                <div id="colunaEsquerda" className={sHomeProfessor.colunaEsquerda}>
                    <div id="objetosAcima" className={sHomeProfessor.objetosEsquerdaAcima}>
                        <div id="quadradoAcimaEsquerda" className={sHomeProfessor.quadradoAcimaEsquerda}>
                            <div id="tituloEstatisticas" className={sHomeProfessor.tituloEstatisticas}>
                                <h3>Estatisticas:</h3>
                            </div>
                            <div id="estatisticasQuadrados" className={sHomeProfessor.estatisticasQuadrados}>
                                <div id="primeiroQuadrado" className={sHomeProfessor.quadrado}>
                                    <div id="quadradoEsquerda" className={sHomeProfessor.quadradoDentroEsquerda}>
                                        <LaptopMacIcon sx={{ fontSize: 80 }} className={sHomeProfessor.iconLaptop} />
                                    </div>
                                    <div id="quadradoDireita" className={sHomeProfessor.quadradoDentroDireita}>
                                        <p>Total de aulas</p>
                                        <h3>{qtdAulas}</h3>
                                    </div>
                                </div>
                                <div id="segundoQuadrado" className={sHomeProfessor.quadrado}>
                                    <div id="quadradoEsquerda" className={sHomeProfessor.quadradoDentroEsquerda}>
                                        <CalendarMonthIcon sx={{ fontSize: 80 }} className={sHomeProfessor.iconLaptop} />
                                    </div>
                                    <div id="quadradoDireita" className={sHomeProfessor.quadradoDentroDireita}>
                                        <p>Aulas Feitas</p>
                                        <h3>{qtdAulasConcluidas}</h3>
                                    </div>
                                </div>
                                <div id="terceiroQuadrado" className={sHomeProfessor.quadrado}>
                                    <div id="quadradoEsquerda" className={sHomeProfessor.quadradoDentroEsquerda}>
                                        <ScheduleIcon sx={{ fontSize: 80 }} className={sHomeProfessor.iconLaptop} />
                                    </div>
                                    <div id="quadradoDireita" className={sHomeProfessor.quadradoDentroDireita}>
                                        <p>Aulas Marcadas</p>
                                        <h3>{qtdAulasAgendadas}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="objetosAbaixo" className={sHomeProfessor.objetosEsquerdaAbaixo}>
                        <div id="quadradoAbaixoEsquerda" className={sHomeProfessor.quadradoAbaixoEsquerda}>
                            <div id="tituloProxAula" className={sHomeProfessor.tituloProxAula}>
                                <h3>Próximas aulas solicitadas</h3>
                            </div>
                            <div id="tabela" className={sHomeProfessor.tabela}>
                                <div id="tabelaMenor" className={sHomeProfessor.tabelaMenor}>
                                    <MuiReactTable array1child={titulosState} array2child={dateTsState} array3child={valoresState} array4child={materiasState} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="colunaDireita" className={sHomeProfessor.colunaDireita}>
                    <div id="quadradoDireita" className={sHomeProfessor.quadradoDireita}>
                        <div id="tituloRankingSemanal" className={sHomeProfessor.tituloRankingSemanal}>
                            <h2>Ranking Semanal</h2>
                        </div>
                        <div id="seuRanking" className={sHomeProfessor.seuRanking}>
                            <div id="posicaoAtual" className={sHomeProfessor.posicaoAtual}>Sua pontuação: {experiencia}</div>
                        </div>
                        <div id="pequenoEspaco" className={sHomeProfessor.pequenoEspaco}></div>
                        <div id="posicionamento" className={sHomeProfessor.posicionamento}>
                                {
                                    professoresState.map((professor, index) => {
                                        return (
                                            <div className={sHomeProfessor.primeiraPosicao} key={index}>
                                                <p>
                                                    {index + 1}º - {professor.nome}
                                                </p>
                                                <p>
                                                    Pontuação: {professor.experiencia}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeProfessor;
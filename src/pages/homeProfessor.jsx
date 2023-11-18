import cssPoggers from "../assets/styles/homeProfessor.module.css"
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
    if(session) {
        loginFirebase(session.user.email, session.user.email)
    }

    // Pega o valor do parâmetro 'id' da URL
    const idProfessor = JSON.parse(sessionStorage.getItem("usuario")).userId;
    const [qtdAulas, setQtdAulas] = useState();
    const [qtdAulasConcluidas, setQtdAulasConcluidas] = useState();
    const [qtdAulasAgendadas, setQtdAulasAgendadas] = useState();

    const [titulosState, setTitulosState] = useState([]);
    const [dateTsState, setDateTsState] = useState([]);
    const [valoresState, setValoresState] = useState([]);
    const [materiasState, setMateriasState] = useState([]);

    // console.log('idProfessor:' + idProfessor);
    // console.log('session storage:' + JSON.stringify(sessionStorage));
    // console.log('Titulo: ' + titulo);
    // console.log('dateT: ' + dateT);
    // console.log('Valor: ' + valor);
    // console.log('Materia: ' + materia);

    useEffect(() => {
        // fetch('http://44.217.177.131:8080/aulas/conta-aulas-professor-id?id=' + idProfessor, {  // trocar para este após conseguir logar como professor
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
                // Faça algo com os dados da resposta
                setQtdAulas(data);
            })
            .catch(error => {
                // Lide com erros
                console.error(error);
            });

        // 'http://44.217.177.131:8080/aulas/conta-aulas-professorid-concluida?id=' + idProfessor
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
                // Faça algo com os dados da resposta
                setQtdAulasConcluidas(data);
            })
            .catch(error => {
                // Lide com erros
                console.error(error);
            });

        // 'http://44.217.177.131:8080/aulas/conta-aulas-professorid-agendada?id=1' + idProfessor
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
                // Faça algo com os dados da resposta
                setQtdAulasAgendadas(data);
            })
            .catch(error => {
                // Lide com erros
                console.error(error);
            });
        // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        // 'http://44.217.177.131:8080/aulas/busca-professor-id-solicitado?id=' + idProfessor
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
    }, [idProfessor]);

    return (
        <>
            <div id="homeProfessorContainer" className={cssPoggers.box}>
                <div id="colunaEsquerda" className={cssPoggers.colunaEsquerda}>
                    <div id="objetosAcima" className={cssPoggers.objetosEsquerdaAcima}>
                        <div id="quadradoAcimaEsquerda" className={cssPoggers.quadradoAcimaEsquerda}>
                            <div id="tituloEstatisticas" className={cssPoggers.tituloEstatisticas}>
                                <h3>Estatisticas:</h3>
                            </div>
                            <div id="estatisticasQuadrados" className={cssPoggers.estatisticasQuadrados}>
                                <div id="primeiroQuadrado" className={cssPoggers.quadrado}>
                                    <div id="quadradoEsquerda" className={cssPoggers.quadradoDentroEsquerda}>
                                        <LaptopMacIcon sx={{ fontSize: 80 }} className={cssPoggers.iconLaptop} />
                                    </div>
                                    <div id="quadradoDireita" className={cssPoggers.quadradoDentroDireita}>
                                        <p>Total de aulas</p>
                                        <h3>{qtdAulas}</h3>
                                    </div>
                                </div>
                                <div id="segundoQuadrado" className={cssPoggers.quadrado}>
                                    <div id="quadradoEsquerda" className={cssPoggers.quadradoDentroEsquerda}>
                                        <CalendarMonthIcon sx={{ fontSize: 80 }} className={cssPoggers.iconLaptop} />
                                    </div>
                                    <div id="quadradoDireita" className={cssPoggers.quadradoDentroDireita}>
                                        <p>Aulas Feitas</p>
                                        <h3>{qtdAulasConcluidas}</h3>
                                    </div>
                                </div>
                                <div id="terceiroQuadrado" className={cssPoggers.quadrado}>
                                    <div id="quadradoEsquerda" className={cssPoggers.quadradoDentroEsquerda}>
                                        <ScheduleIcon sx={{ fontSize: 80 }} className={cssPoggers.iconLaptop} />
                                    </div>
                                    <div id="quadradoDireita" className={cssPoggers.quadradoDentroDireita}>
                                        <p>Aulas Marcadas</p>
                                        <h3>{qtdAulasAgendadas}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="objetosAbaixo" className={cssPoggers.objetosEsquerdaAbaixo}>
                        <div id="quadradoAbaixoEsquerda" className={cssPoggers.quadradoAbaixoEsquerda}>
                            <div id="tituloProxAula" className={cssPoggers.tituloProxAula}>
                                <h3>Próximas aulas solicitadas</h3>
                            </div>
                            <div id="tabela" className={cssPoggers.tabela}>
                                <div id="tabelaMenor" className={cssPoggers.tabelaMenor}>
                                    <MuiReactTable array1child={titulosState} array2child={dateTsState} array3child={valoresState} array4child={materiasState} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="colunaDireita" className={cssPoggers.colunaDireita}>
                    <div id="quadradoDireita" className={cssPoggers.quadradoDireita}>
                        <div id="tituloRankingSemanal" className={cssPoggers.tituloRankingSemanal}>
                            <h2>Ranking Semanal</h2>
                        </div>
                        <div id="seuRanking" className={cssPoggers.seuRanking}>
                            <div id="posicaoAtual" className={cssPoggers.posicaoAtual}>Posição Atual - 10º</div>
                        </div>
                        <div id="pequenoEspaco" className={cssPoggers.pequenoEspaco}></div>
                        <div id="posicionamento" className={cssPoggers.posicionamento}>
                            <div id="primeiraPosicao" className={cssPoggers.primeiraPosicao}>
                                <p>1º - Filipe Filipus Guiraldini</p>
                                <p>Pontuação: 2500</p>
                            </div>
                            <div id="primeiraPosicao" className={cssPoggers.primeiraPosicao}>
                                <p>2º - João Vitor Sales Santos Santana</p>
                                <p>Pontuação: 2500</p>
                            </div>
                            <div id="primeiraPosicao" className={cssPoggers.primeiraPosicao}>
                                <p>3º - Josias</p>
                                <p>Pontuação: 2500</p>
                            </div>
                            <div id="primeiraPosicao" className={cssPoggers.primeiraPosicao}>
                                <p>4º - Josias</p>
                                <p>Pontuação: 2500</p>
                            </div>
                            <div id="primeiraPosicao" className={cssPoggers.primeiraPosicao}>
                                <p>5º - Josias</p>
                                <p>Pontuação: 2500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeProfessor;
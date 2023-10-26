import cssPoggers from "../style/homeProfessor.module.css"
import Swal from "sweetalert2"
import { useEffect, useState } from "react"
import { useSession } from "@supabase/auth-helpers-react"
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MuiReactTable from '../components/MuiReactTable';

const HomeProfessor = () => {

    // Pega o valor do parâmetro 'id' da URL
    const idProfessor = JSON.parse(sessionStorage.getItem("usuario")).userId;
    const [qtdAulas, setQtdAulas] = useState();
    const [qtdAulasConcluidas, setQtdAulasConcluidas] = useState();
    const [qtdAulasAgendadas, setQtdAulasAgendadas] = useState();
    // json aula
    const [titulo, setTitulo] = useState();
    const [dateT, setDateT] = useState();
    const [valor, setValor] = useState();
    const [materia, setMateria] = useState();

    console.log('idProfessor:' + idProfessor);
    console.log('session storage:' + JSON.stringify(sessionStorage));
    console.log('Titulo: ' + titulo);
    console.log('dateT: ' + dateT);
    console.log('Valor: ' + valor);
    console.log('Materia: ' + materia);


    useEffect(() => {
        // fetch('http://localhost:8080/aulas/conta-aulas-professor-id?id=' + idProfessor, {  // trocar para este após conseguir logar como professor
        fetch('http://localhost:8080/aulas/conta-aulas-professor-id?id=1', {
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

        // 'http://localhost:8080/aulas/conta-aulas-professorid-concluida?id=' + idProfessor
        fetch('http://localhost:8080/aulas/conta-aulas-professorid-concluida?id=1', {
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

        // 'http://localhost:8080/aulas/conta-aulas-professorid-agendada?id=1' + idProfessor
        fetch('http://localhost:8080/aulas/conta-aulas-professorid-agendada?id=1', {
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
        // 'http://localhost:8080/aulas/busca-professor-id-solicitado?id=' + idProfessor
        fetch('http://localhost:8080/aulas/busca-professor-id-solicitado?id=1', {
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

                console.log('Titulos: ', titulos);
                console.log('DateTs: ', dateTs);
                console.log('Valores: ', valores);
                console.log('Materias: ', materias);

                setTitulo(data[0].titulo);
                setDateT(data[0].dataHora);
                setValor(data[0].professor.precoHoraAula);
                setMateria(data[0].materia.nome);
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
                                    <MuiReactTable />
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
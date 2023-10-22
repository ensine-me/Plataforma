import cssPoggers from "../style/homeProfessor.module.css"
import Swal from "sweetalert2"
import { useEffect, useState } from "react"
import { useSession } from "@supabase/auth-helpers-react"
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MuiReactTable from '../components/MuiReactTable';

const chamaSwal = () => {

    Swal.fire({
        icon: 'success',
        title: 'Aula solicitada',
        text: 'Verifique seu Google Agenda',
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: 'Ver minhas aulas',
        confirmButtonColor: '#28a745',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'info',
                title: 'Redirecionando...',
                timer: 500,
                showConfirmButton: false,
            }).then((result) => {
                window.location.href = "/minhas-aulas";
            });
        }
    });
}



const fechaModal = () => {
    document.getElementById("marcarAulaContainer").style.visibility = "hidden";
}

const homeProfessor = () => {


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
                                        <h3>30</h3>
                                    </div>
                                </div>
                                <div id="segundoQuadrado" className={cssPoggers.quadrado}>
                                    <div id="quadradoEsquerda" className={cssPoggers.quadradoDentroEsquerda}>
                                        <CalendarMonthIcon sx={{ fontSize: 80 }} className={cssPoggers.iconLaptop} />
                                    </div>
                                    <div id="quadradoDireita" className={cssPoggers.quadradoDentroDireita}>
                                        <p>Aulas Feitas</p>
                                        <h3>10</h3>
                                    </div>
                                </div>
                                <div id="terceiroQuadrado" className={cssPoggers.quadrado}>
                                    <div id="quadradoEsquerda" className={cssPoggers.quadradoDentroEsquerda}>
                                        <ScheduleIcon sx={{ fontSize: 80 }} className={cssPoggers.iconLaptop} />
                                    </div>
                                    <div id="quadradoDireita" className={cssPoggers.quadradoDentroDireita}>
                                        <p>Aulas Marcadas</p>
                                        <h3>5</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="objetosAbaixo" className={cssPoggers.objetosEsquerdaAbaixo}>
                        <div id="quadradoAbaixoEsquerda" className={cssPoggers.quadradoAbaixoEsquerda}>
                            <div id="tituloProxAula" className={cssPoggers.tituloProxAula}>
                                <h3>Próximas Aulas</h3>
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
export default homeProfessor;
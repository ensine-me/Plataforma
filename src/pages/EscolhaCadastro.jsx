import { React } from 'react';
import { Link } from 'react-router-dom';

import Logo from 'components/logo';

import { Player } from '@lottiefiles/react-lottie-player';

import sCadastro from "../assets/styles/cadastro.module.css";
import SimpleText from 'components/atoms/simpleText';

const paginaCadastro = () => {
    return (
        <>
            <div className={sCadastro.page}>
                <div className={sCadastro.card}>
                    <div className={sCadastro.logoContainer}>
                        <Logo />
                    </div>
                    <div className={sCadastro.options}>
                        <Link to="/cadastro/professorcad">
                            <div className={sCadastro.option}>
                                <p>
                                    <SimpleText text='Quero ser professor' size={'xlarge'} />
                                </p>
                                <Player
                                    hover
                                    loop
                                    src="https://assets10.lottiefiles.com/packages/lf20_wbkikrmh.json"
                                    style={{ height: '300px', width: '300px' }}
                                >
                                </Player>
                            </div>
                        </Link>
                        <Link to="/cadastro/alunocad">
                            <div className={sCadastro.option}>
                                <p>
                                    <SimpleText text='Quero ser aluno' size={'xlarge'} />
                                </p>
                                <Player
                                    hover
                                    loop
                                    src="https://assets2.lottiefiles.com/private_files/lf30_afru6l2d.json"
                                    style={{ height: '300px', width: '300px' }}
                                >
                                </Player>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default paginaCadastro;
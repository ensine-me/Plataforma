import sComoFuncionaSection from '../../assets/styles/sectionsPaginaInicial/comoFuncionaSection.module.css'

import Title from 'components/atoms/title';
import ReactPlayer from '../organisms/FluxoOperacaoPlayer';

const ComoFuncionaSection = () => {
    return (
        <section id='como-funciona' className={sComoFuncionaSection.comoFunciona}>
            <Title text='Como funciona'/>
            <div className={sComoFuncionaSection.video}>
                <ReactPlayer />
            </div>
        </section>
    )
}

export default ComoFuncionaSection;
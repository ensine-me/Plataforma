import sOferecemosSection from '../../assets/styles/sectionsPaginaInicial/oQueOferecemosSection.module.css'

import Title from 'components/atoms/title';
import SimpleText from 'components/atoms/simpleText';

const OferecemosSection = () => {
    return (
        <section id='o-que-oferecemos' className={sOferecemosSection.section}>
            <div className={sOferecemosSection.oQueOferecemosContainer}>
                <Title text='O que oferecemos' />
                <div className={sOferecemosSection.oQueOferecemosTextosContainer}>
                    <div className={sOferecemosSection.QueOferecemosTexto}>
                        <SimpleText text={<b>Para o aluno</b>} size={'xlarge'} />
                        <ul>
                            <li>Preparação gratuita para vestibulares</li>
                            <li>Aulas direcionadas de temas escolhidos pelos alunos</li>
                            <li>Variedade de professores e disciplinas</li>
                        </ul>
                    </div>
                    <div className={sOferecemosSection.oQueOferecemosTexto}>
                        <SimpleText text={<b>Para o professor</b>} size={'xlarge'} />
                        <ul>
                            <li>Chance de impactar a vida de quem mais precisa</li>
                            <li>Ambiente para aperfeiçoamento de sua didática</li>
                            <li>Certificado de aulas complementares</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OferecemosSection;
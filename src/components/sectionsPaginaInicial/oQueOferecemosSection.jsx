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
                        <SimpleText text={<b>Benefícios para o Aluno</b>} size={'xlarge'} />
                        <ul>
                            <li>Acesso de baixo custo preparação completa para vestibulares, promovendo igualdade nas oportunidades educacionais.</li>
                            <li>Aulas personalizadas baseadas nas preferências dos alunos, garantindo um aprendizado direcionado e eficaz.</li>
                            <li>Uma ampla seleção de professores especializados e disciplinas, proporcionando uma educação diversificada e abrangente.</li>
                        </ul>
                    </div>
                    <div className={sOferecemosSection.oQueOferecemosTexto}>
                        <SimpleText text={<b>Benefícios para o Professor</b>} size={'xlarge'} />
                        <ul>
                            <li>Oportunidade de causar um impacto significativo na trajetória educacional de estudantes motivados.</li>
                            <li>Uma plataforma para refinar e desenvolver técnicas didáticas, colaborando com uma comunidade de educadores engajados.</li>
                            <li>Reconhecimento profissional através de certificação por contribuições de ensino, enriquecendo seu portfólio acadêmico.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OferecemosSection;
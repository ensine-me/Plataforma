import sQuemSomosSection from '../../assets/styles/sectionsPaginaInicial/quemSomosSection.module.css'

import Title from 'components/atoms/title';
import SimpleText from 'components/atoms/simpleText';

const QuemSomosSection = () => {
    return (
        <section id='quem-somos' className={sQuemSomosSection.quemSomos}>
            <div className={sQuemSomosSection.quemSomosContainer}>
                <Title text={'Quem somos'} />
                <p className={sQuemSomosSection.p}>
                    <SimpleText size={'xlarge'} text='A Ensine.me é uma organização sem fins lucrativos que leva aulas particulares ou em grupo para alunos do ensino médio de baixa renda' />
                </p>
                <p className={sQuemSomosSection.p}>
                    <SimpleText size={'xlarge'} text='Nós conectamos professores que querem fazer a diferença com alunos que querem
                    aprender, levando educação de forma gratuita e preparando jovens de quaisquer condições econômicas para o
                    vestibular'/>
                </p>
            </div>
        </section>
    )
}

export default QuemSomosSection;
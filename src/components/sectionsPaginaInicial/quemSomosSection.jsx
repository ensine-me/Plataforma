import sQuemSomosSection from '../../assets/styles/sectionsPaginaInicial/quemSomosSection.module.css'

import Title from 'components/atoms/title';
import SimpleText from 'components/atoms/simpleText';

const QuemSomosSection = () => {
    return (
        <section id='quem-somos' className={sQuemSomosSection.quemSomos}>
            <div className={sQuemSomosSection.quemSomosContainer}>
                <Title text={'Quem somos'} />
                <p className={sQuemSomosSection.p}>
                    <SimpleText size={'xlarge'} text='A Ensine.me é uma organização que leva aulas particulares ou em grupo para alunos do ensino médio.' />
                </p>
                <p className={sQuemSomosSection.p}>
                    <SimpleText size={'xlarge'} text='Na Ensine.me, estabelecemos pontes entre educadores apaixonados e estudantes dedicados, democratizando o acesso à educação de alta qualidade. Nosso compromisso é oferecer recursos educacionais de custo baixo, garantindo que jovens de todas as condições econômicas estejam equipados e prontos para triunfar no vestibular e além."
'/>
                </p>
            </div>
        </section>
    )
}

export default QuemSomosSection;
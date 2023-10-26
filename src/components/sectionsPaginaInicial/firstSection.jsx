import sFirstSection from '../../assets/styles/sectionsPaginaInicial/firstSection.module.css'

import Title from 'components/atoms/title';

const FirstSection = ({ text }) => {
    return (
        <section className={sFirstSection.section}>
            <Title text={text} />
        </section>
    )
}

export default FirstSection;
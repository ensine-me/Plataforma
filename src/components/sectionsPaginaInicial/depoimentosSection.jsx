import sDepoimentosSection from '../../assets/styles/sectionsPaginaInicial/depoimentosSection.module.css'

import Title from 'components/atoms/title';
import DepoimentoCard from 'components/molecules/depoimentoCard';

import depoimento1 from "assets/img/stock/depoimentos/v3_0591770.jpg"
import depoimento2 from "assets/img/stock/depoimentos/v3_0866164.jpg"
import depoimento3 from "assets/img/stock/depoimentos/v3_0946854.jpg"
import depoimento4 from "assets/img/stock/depoimentos/v3_0752929.jpg"

import Carrossel from 'components/organisms/carrossel';


const DepoimentosSection = () => {
    const cards = [
        <DepoimentoCard
            txtDepoimento='"Esta plataforma é incrível. Tive a oportunidade de mudar vidas das pessoas que mais precisavam. Meu trabalho nunca foi tão gratificante antes."'
            txtNome="Najila Vitoria"
            imgSrc={depoimento1}
            txtTipoUsuario="Professora"
        />,
        <DepoimentoCard
            txtDepoimento='"Eu não me sentia preparado para o vestibular e não tinha dinheiro para um cursinho. A ensine.me foi a única que me deu preparo para estar onde estou hoje"'
            txtNome="Guilherme Henrique"
            imgSrc={depoimento2}
            txtTipoUsuario="Aluno"
        />,
        <DepoimentoCard
            txtDepoimento='"Encontrei alunos incríveis e pude fazer a diferença com um impacto real em suas vidas"'
            txtNome="Maria Antonieta"
            imgSrc={depoimento3}
            txtTipoUsuario="Professora"
        />,
        <DepoimentoCard
            txtDepoimento='"Nunca achei que entraria em Medicina em uma Federal saindo de uma escola pública. Foi essa a porta que a ensine.me abriu para mim"'
            txtNome="Arthur Oliveira"
            imgSrc={depoimento4}
            txtTipoUsuario="Aluno"
        />
    ]
    return (
        <section id='depoimentos' className={sDepoimentosSection.depoimentosSection}>
            <div className={sDepoimentosSection.depoimentosContainer}>
                <Title text='Depoimentos' />
                <Carrossel cards={cards} />
            </div>
        </section>
    )
}

export default DepoimentosSection;
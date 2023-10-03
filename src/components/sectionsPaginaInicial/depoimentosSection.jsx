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
            txtDepoimento='"Eu sempre fui uma aluna mediana, mas com a ensine.me, consegui melhorar meu desempenho nos estudos e passar no vestibular para a faculdade que eu queria. Os professores são excelentes e as aulas são bem organizadas. Eles explicam os conceitos de forma clara e objetiva, e os exercícios são desafiadores, mas ajudam a fixar o conteúdo. Recomendo para todos que estão se preparando para o vestibular."'
            txtNome="Najila Vitoria - aluna"
            imgSrc={depoimento1}
        />,
        <DepoimentoCard
            txtDepoimento='"Eu não me sentia preparado para o vestibular e não tinha dinheiro para um cursinho. A ensine.me foi a única que me deu preparo para estar onde estou hoje"'
            txtNome="Guilherme Henrique - aluno"
            imgSrc={depoimento2}
        />,
        <DepoimentoCard
            txtDepoimento='"Sou professora de matemática há 10 anos, e sempre fui apaixonado pela minha profissão. Quando soube da ensine.me, fiquei animado com a possibilidade de ensinar alunos de todo o Brasil.
            Comecei a dar aulas na plataforma há 6 meses, e tenho me sentido muito bem com isso. Os alunos são motivados e interessados em aprender, e isso me motiva a dar o meu melhor.            
            A plataforma é muito completa e oferece todos os recursos que preciso para ensinar de forma eficiente. Os vídeos são de alta qualidade e os exercícios são bem elaborados.
            Também gosto muito do fato de poder acompanhar o progresso dos alunos. Isso me permite ajudá-los a superar suas dificuldades e alcançar seus objetivos.
            Recomendo a ensine.me para todos os professores que querem ensinar alunos de todo o Brasil. É uma plataforma que oferece todos os recursos necessários para dar aulas de qualidade."'
            txtNome="Maria Antonieta - professora"
            imgSrc={depoimento3}
        />,
        <DepoimentoCard
            txtDepoimento='"Eu sempre estudei sozinho, mas com a ensine.me, consegui ter um acompanhamento mais personalizado. Os professores estão sempre disponíveis para tirar dúvidas e ajudar os alunos a se desenvolverem. Eles me ajudaram a melhorar minha estratégia de estudos e a me preparar para as provas."'
            txtNome="Arthur Oliveira - aluno"
            imgSrc={depoimento4}
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
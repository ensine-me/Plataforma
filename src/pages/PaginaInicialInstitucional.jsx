import React from 'react';

import '../assets/styles/index.module.css'

import Menu from 'components/organisms/menu';
import FirstSection from 'components/sectionsPaginaInicial/firstSection';
import QuemSomosSection from 'components/sectionsPaginaInicial/quemSomosSection'
import ComoFuncionaSection from 'components/sectionsPaginaInicial/comoFuncionaSection';
import OferecemosSection from 'components/sectionsPaginaInicial/oQueOferecemosSection';
import DepoimentosSection from 'components/sectionsPaginaInicial/depoimentosSection';
import Footer from 'components/organisms/footer';

const PaginaInicial = () => {
    return (
        <>
            <Menu />
            <FirstSection text={'Aprendizado que Inspira. Educação que Transforma.'} />
            <QuemSomosSection />
            <ComoFuncionaSection />
            <OferecemosSection />
            <DepoimentosSection />
            <Footer />
        </>
    )
}

export default PaginaInicial;
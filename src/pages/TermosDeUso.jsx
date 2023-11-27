import React from 'react';

import styles from '../assets/styles/PoliticaDePrivacidade.module.css'

import Menu from '../components/organisms/menu.jsx'
import Footer from 'components/organisms/footer';

const TermosDeUso = () => {
    return (
        <>
            <Menu isPageTermos={true} />
            <div className={styles.page}>
                <div className={styles.container}>
                    <h1 className={styles.header}>Termos de Uso da Ensine.me<br></br>(novembro 2023)</h1>
                    <p className={styles.text}>Bem-vindo à Ensine.me, uma plataforma dedicada à conexão entre estudantes e educadores para uma experiência de aprendizado interativa e enriquecedora. Ao acessar e utilizar os serviços da Ensine.me, você, como usuário, concorda em aderir e ser legalmente vinculado aos Termos de Uso descritos a seguir. Estes termos formam um contrato legal entre você e a Ensine.me, abordando aspectos essenciais como o uso apropriado de nossos serviços, direitos de propriedade intelectual, limitações de responsabilidade, além de diretrizes sobre a conduta aceitável e responsabilidade dos usuários na plataforma.</p>
                    <p className={styles.text}>Nossa missão é fornecer um ambiente seguro, respeitoso e produtivo para o ensino e aprendizado online. Portanto, é imperativo que você leia, compreenda e considere cuidadosamente estes termos antes de utilizar a plataforma. Ao utilizar a Ensine.me, você reconhece que leu e entendeu estes termos e concorda em cumprir todas as leis e regulamentos aplicáveis ao usar nossos serviços. Se você não concorda com algum dos termos apresentados, pedimos gentilmente que se abstenha de usar a plataforma.</p>
                    <p className={styles.text}>Estes Termos de Uso são atualizados periodicamente para refletir quaisquer mudanças nas práticas operacionais ou nas exigências legais e regulamentares. Sugerimos que os usuários revisitem esta seção regularmente para se manterem informados sobre quaisquer atualizações. A continuação do uso dos serviços da Ensine.me após tais modificações constituirá seu consentimento e aceitação aos termos revisados.</p>

                    <h2 className={styles.sectionTitle}>1. Aceitação dos Termos</h2>
                    <p className={styles.text}>Ao acessar, registrar-se ou utilizar de qualquer forma os serviços oferecidos pela Ensine.me, você, como usuário, confirma sua aceitação incondicional e concordância em estar vinculado aos seguintes Termos de Uso. Esta aceitação se estende a todas as políticas e diretrizes associadas, que são integradas por referência a estes termos, formando um acordo legalmente vinculativo entre você e a Ensine.me.</p>
                    <p className={styles.text}>Estes termos aplicam-se a todas as interações dentro da plataforma, incluindo, mas não se limitando a, navegação no site, participação em cursos, interações com outros usuários e utilização de recursos disponibilizados pela Ensine.me. Ao utilizar nossos serviços, você se compromete a cumprir todas as leis, normas e regulamentos locais, nacionais e internacionais aplicáveis.</p>
                    <p className={styles.text}>Se você estiver agindo em nome de uma organização ou entidade, ao aceitar estes termos, você declara e garante que possui a autoridade necessária para vincular tal entidade a estes Termos de Uso. Caso você não concorde com algum dos termos aqui descritos, deve cessar imediatamente o uso de todos os serviços e recursos da plataforma Ensine.me.</p>
                    <p className={styles.text}>A continuidade de uso da plataforma após quaisquer atualizações ou mudanças nos Termos de Uso também implica sua aceitação dessas alterações. É responsabilidade do usuário revisar regularmente esta seção para se manter atualizado com respeito a quaisquer mudanças.</p>

                    <h2 className={styles.sectionTitle}>2. Uso da Plataforma</h2>
                    <p className={styles.text}>Como usuário da plataforma Ensine.me, você se compromete a utilizá-la exclusivamente para propósitos autorizados e de maneira que respeite os direitos legais e interesses de terceiros. Isso implica em não envolver-se em atividades que sejam ilegais, infringentes, abusivas, difamatórias, discriminatórias ou de qualquer forma prejudiciais ou inapropriadas.</p>
                    <p className={styles.text}>O uso da plataforma inclui, mas não se limita a, acessar conteúdos, participar de cursos ou sessões de aprendizado, interagir com outros usuários e utilizar quaisquer recursos ou ferramentas oferecidos pela Ensine.me. Em todas essas atividades, você deve agir com integridade e respeito, aderindo aos mínimos padrões de conduta ética e profissional.</p>
                    <p className={styles.text}>Você também concorda em não utilizar a plataforma para fins comerciais não autorizados, incluindo publicidade ou oferta de produtos e serviços não relacionados ao escopo educacional da Ensine.me, sem o consentimento prévio expresso da nossa equipe.</p>
                    <p className={styles.text}>Qualquer tentativa de interferir no funcionamento normal da plataforma, como a disseminação de vírus, sobrecarga de servidores, ou outras ações que possam comprometer a segurança e operação da Ensine.me, será rigorosamente proibida e sujeita a ações legais.</p>
                    <p className={styles.text}>A violação destes termos de uso da plataforma pode resultar em suspensão ou término do seu acesso à Ensine.me, sem prejuízo de outras medidas legais cabíveis.</p>

                    <h2 className={styles.sectionTitle}>3. Propriedade Intelectual</h2>
                    <p className={styles.text}>Todo o conteúdo disponível na plataforma Ensine.me, incluindo, mas não se limitando a textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é de propriedade exclusiva da Ensine.me ou de seus licenciadores. Este conteúdo é protegido pelas leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.</p>
                    <p className={styles.text}>O uso não autorizado de qualquer material encontrado na Ensine.me, incluindo reprodução, modificação, distribuição, transmissão, republicação, exibição ou execução, é estritamente proibido. Violações podem resultar em ações legais. Além disso, a Ensine.me detém os direitos autorais sobre a seleção, coordenação, arranjo e aprimoramento desses conteúdos.</p>
                    <p className={styles.text}>Todos os direitos não expressamente concedidos aqui são reservados à Ensine.me. O respeito aos direitos de propriedade intelectual é fundamental para manter um ambiente de aprendizado justo e legalmente responsável.</p>

                    <h2 className={styles.sectionTitle}>4. Limitação de Responsabilidade</h2>
                    <p className={styles.text}>A Ensine.me e seus afiliados, diretores, funcionários, agentes, fornecedores ou licenciadores não serão responsáveis, em nenhuma circunstância, por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos. Isso inclui, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis.</p>
                    <p className={styles.text}>As limitações de responsabilidade aplicam-se a: (i) seu acesso ou uso, ou incapacidade de acessar ou usar a plataforma; (ii) qualquer conduta ou conteúdo de terceiros na plataforma, incluindo comportamento difamatório, ofensivo ou ilegal de outros usuários ou terceiros; (iii) qualquer conteúdo obtido da plataforma.</p>
                    <p className={styles.text}> Além disso, a responsabilidade é limitada em casos de acesso não autorizado, uso ou alteração de suas transmissões ou conteúdos. Estas limitações aplicam-se independentemente de a responsabilidade ser baseada em garantia, contrato, delito (incluindo negligência) ou qualquer outra teoria legal, e mesmo que a Ensine.me tenha sido avisada da possibilidade de tais danos.</p>
                    <p className={styles.text}>Estas limitações também permanecem em vigor mesmo que um recurso estabelecido aqui seja constatado como tendo falhado em seu propósito essencial.</p>

                    <h2 className={styles.sectionTitle}>5. Alterações nos Termos</h2>
                    <p className={styles.text}>A Ensine.me reserva-se o direito de modificar ou revisar os Termos de Uso a qualquer momento, a fim de refletir mudanças nas práticas operacionais, novos serviços, alterações legislativas ou por outros motivos relevantes. Essas alterações são efetivas imediatamente após serem publicadas na plataforma.</p>
                    <p className={styles.text}>É responsabilidade do usuário revisar periodicamente os termos para estar ciente de quaisquer atualizações. O uso contínuo da plataforma após a publicação de quaisquer alterações constitui aceitação dos novos termos. Se o usuário não concordar com os termos revisados, deve interromper imediatamente o uso dos serviços da Ensine.me.</p>
                    <p className={styles.text}>Sempre que possível, procuraremos notificar os usuários sobre mudanças significativas nos termos, mas a revisão periódica destes é a melhor forma de se manter atualizado. A compreensão e aceitação contínua destes termos são essenciais para a manutenção de uma relação harmoniosa e produtiva entre a Ensine.me e seus usuários.</p>

                    <h2 className={styles.sectionTitle}>6. Contato</h2>
                    <p className={styles.text}>Caso tenha dúvidas, comentários ou preocupações relacionadas a estes Termos de Uso, a equipe da Ensine.me está disponível para assisti-lo. Encorajamos você a entrar em contato conosco para esclarecer qualquer ponto ou para obter mais informações.</p>
                    <p className={styles.text}>Você pode nos contatar diretamente através de nosso site, onde encontrará opções para enviar suas questões, no footer e no menu superior dessa página ou em qualquer uma que estes elementos estejam presentes, você encontrará o botão de contato.</p>
                    <p className={styles.text}>Valorizamos o feedback de nossos usuários e estamos comprometidos em fornecer suporte de qualidade para garantir a melhor experiência possível em nossa plataforma. Nossa equipe se esforçará para responder a todas as consultas de forma rápida e eficiente.</p>
                    <p className={styles.text}>Obrigado por ler até aqui. Agradecemos por escolher a Ensine.me como sua plataforma de ensino e aprendizado online. Esperamos que você tenha uma experiência agradável e produtiva em nossa plataforma.</p>
                    <h4>Última atualização: 19 de novembro de 2023</h4>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermosDeUso;

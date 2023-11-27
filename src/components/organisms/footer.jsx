import sFooter from '../../assets/styles/organisms/footer.module.css';

import SimpleText from 'components/atoms/simpleText';
import Logo from 'components/logo';
import GitLogoWhite from 'assets/img/icons/githubLogoDark.png';
import LinkedinLogoBlue from 'assets/img/icons/linkedinLogoBlue.png'

const Footer = () => {
    return (
        <footer className={sFooter.footer}>
            <div className={sFooter.footerLogo}>
                <Logo />
            </div>
            <div className={sFooter.footerLinks}>
                <div className={sFooter.companyLink}>
                    <a href="https://github.com/orgs/ensine-me/repositories">
                        <img src={GitLogoWhite} alt='Logo do GitHub'></img>
                        <SimpleText text='Github' color={'white'} />
                    </a>
                </div>
                <div className={sFooter.companyLink}>
                    <a href="https://www.linkedin.com">
                        <img src={LinkedinLogoBlue} alt='Logo do LinkedIn'></img>
                        <SimpleText text='LinkedIn' color={'white'} />
                    </a>
                </div>
            </div>
            <div className={sFooter.privacidadeTermosContato}>
                <a href="/politica-de-privacidade">Política de privacidade</a><br />
                <a href="mailto:contato@ensineme.org">Contato</a>
                <a href="/termos-de-uso">Termos de uso</a>
            </div>
            <div className={sFooter.footerCopyright}>
                <SimpleText color={'white'} text='Ensine.me ©️ 2023 - Todos os direitos reservados' />
            </div>
        </footer>
    )
}

export default Footer;
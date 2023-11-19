import UlElementList from "components/molecules/ulElementList.jsx";
import Logo from '../logo.jsx'

import sMenu from '../../assets/styles/organisms/menu.module.css';

import styles from '../../assets/styles/login.module.css'

import { Link } from "react-router-dom";
import BotaoDarkMode from "components/BotaoDarkMode.jsx";

const Menu = ({ isPageTermos }) => {
    return (
        <div className={sMenu.menu}>
            <Logo />
            {isPageTermos === true ? <UlElementList items={[
                { text: 'Política de privacidade', link: '/politica-de-privacidade', size: 'large' },
                { text: 'Termos de uso', link: '/termos-de-uso', size: 'large' },
                { text: 'Contato', link: 'mailto:contato@ensineme.org', size: 'large' },
            ]} /> : <UlElementList items={[
                { text: 'Sobre', link: '#quem-somos', size: 'large' },
                { text: 'Proposta', link: '#como-funciona', size: 'large' },
                { text: 'Funcionamento', link: '#o-que-oferecemos', size: 'large' },
                { text: 'Depoimentos', link: '#depoimentos', size: 'large' }]}
            />}

            <div className={sMenu.buttons}>
                <div className={`${styles.googleButtonContainer} ${styles.button}`} style={{ marginLeft: '15px' }}>
                    <Link to="/login">
                        <div className={styles.googleButton}>
                            Acessar plataforma
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Menu;
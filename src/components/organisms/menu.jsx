import UlElementList from "components/molecules/ulElementList.jsx";
import Logo from '../logo.jsx'

import sMenu from '../../assets/styles/organisms/menu.module.css';

import styles from '../../assets/styles/login.module.css'
import googleLogo from 'assets/img/icons/googleLogo.png'

import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className={sMenu.menu}>
            <Logo />
            <UlElementList items={[
                { text: 'Sobre', link: '#quem-somos', size: 'large' },
                { text: 'Proposta', link: '#como-funciona', size: 'large' },
                { text: 'Funcionamento', link: '#o-que-oferecemos', size: 'large' },
                { text: 'Depoimentos', link: '#depoimentos', size: 'large' }]}
            />
            <div className={sMenu.buttons}>
                <div className={styles.googleButtonContainer}>
                    <Link to="/google-login">
                        <div className={styles.googleButton}>
                            <img src={googleLogo} alt="Login da Google" />
                            Acessar plataforma
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Menu;
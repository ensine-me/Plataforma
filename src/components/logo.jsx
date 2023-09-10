import { Link } from 'react-router-dom';

import sLogo from '../styles/Logo.module.css'

import LogoSvg from '../assets/images/svg/icon-modified.svg'

const Logo = () => {
    return <div className={sLogo.logoContainer}>
        <div className={sLogo.linkHome}>
            <Link to="">
                <img className={sLogo.img} src={LogoSvg} alt='Logotipo ensine.me' />
                <h3>Ensine.me</h3>
            </Link>
        </div>
    </div>
};

export default Logo
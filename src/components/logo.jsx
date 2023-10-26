import { Link } from 'react-router-dom';

import sLogo from '../assets/styles/logo.module.css'

import LogoSvg from '../assets/img/logo/svg/icon-modified.svg'

const Logo = () => {
    return <div className={sLogo.logoContainer}>
        <div className={sLogo.linkHome}>
            <Link to="/institucional">
                <img className={sLogo.img} src={LogoSvg} alt='Logotipo ensine.me' />
                <h2>Ensine.me</h2>
            </Link>
        </div>
    </div>
};

export default Logo
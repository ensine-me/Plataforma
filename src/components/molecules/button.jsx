import sButton from '../../assets/styles/molecules/button.module.css';
import LinkHref from 'components/atoms/linkHref';

const Button = ({ path, text }) => {
    return (
        <div className={sButton.buttonContainer}>
            <LinkHref link={path} text={text}/>
        </div>
    )
}

export default Button;
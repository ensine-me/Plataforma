import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SimpleText from './simpleText';

const LinkDom = ({ path, text }) => {
    return (
            <Link to={path}><SimpleText text={text}/></Link>
    )
}

LinkDom.propTypes = {
    path: PropTypes.string.isRequired
}

export default LinkDom;
import React from 'react';
import PropTypes from 'prop-types';

import sTitle from '../../assets/styles/atoms/title.module.css'

const Title = ({ text, color }) => {
    const textStyle = {
        color: color
    };

    return <h2 style={textStyle} className={sTitle.h2}>{text}</h2>;
}

Title.propTypes = {
    text: PropTypes.string.isRequired
}

export default Title;
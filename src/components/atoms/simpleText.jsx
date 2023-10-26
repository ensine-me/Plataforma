import React from 'react';
import PropTypes from 'prop-types';

import sSimpleText from '../../assets/styles/atoms/simpleText.module.css'

const SimpleText = ({ text, size, color }) => {
    const textSize = getSizeValue(size); // Função para obter o valor do tamanho com base na prop "size"

    const textStyle = {
        fontSize: textSize,
        color: color
    };

    return <span style={textStyle} className={sSimpleText.span}>{text}</span>
};

function getSizeValue(size) {
    switch (size) {
        case 'small':
            return '12px'; // Tamanho pequeno
        case 'large':
            return '20px'; // Tamanho grande
        case 'xlarge':
            return '24px'; // Tamanho extra-grande
        case 'xxlarge':
            return '32px';
        default:
            return '16px'; // Tamanho padrão ou desconhecido
    }
}

SimpleText.propTypes= {
    text: PropTypes.string.isRequired,
}

export default SimpleText; 

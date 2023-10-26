import React from 'react';
import PropTypes from 'prop-types';

import sCarrossel from '../../assets/styles/organisms/carrossel.module.css'
import Carousel from '../../../node_modules/react-material-ui-carousel/dist/index';
const Carrossel = ({ cards }) => {
    return (
        <div className={sCarrossel.carrosselContainer}>
            <Carousel>
                {cards.map((card, index) => (
                    <div style={{width: '100%'}} key={index}>
                        {card}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

Carrossel.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Carrossel;

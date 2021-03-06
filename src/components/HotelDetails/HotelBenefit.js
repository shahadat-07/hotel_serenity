import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HotelBenefit = (props) => {
    const { icon, title, description } = props?.benefit;

    return (
        <div className="d-flex">
            <div style={{marginRight: '7px'}}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div>
                <h5>{title}</h5>
                <p className="paragraph-text-color">{description}</p>
            </div>
        </div>
    );
};

export default HotelBenefit;
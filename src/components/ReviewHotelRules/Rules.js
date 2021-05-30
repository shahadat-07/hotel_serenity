import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rules = (props) => {
    const {icon, title} = props.rule;
    return (
        <div className="d-flex align-items-center ">
            <p className="border p-2"><FontAwesomeIcon icon={icon} /></p>
            <p className="paragraph-text-color" style={{marginLeft: '10px'}}>{title}</p>
        </div>
    );
};

export default Rules;
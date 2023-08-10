import React, { useState } from 'react';
import "./style.css";

const Alert = ({ alert, alertBody }) => {
    const [isVisible, setIsVisible] = useState(true);
    const handleClose = () => {
        setIsVisible(false);
    };

    return isVisible ? (
        <div className='wrong__alert'>
            <p className='alert__name'>{alert}</p>
            <p className='alert__body'>{alertBody}</p>
            <span className='alert__close' onClick={handleClose}>X</span>
        </div>
    ) : null;
};

export default Alert;

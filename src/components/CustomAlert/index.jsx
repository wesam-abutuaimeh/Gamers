import React from 'react';
import './style.css';

const CustomAlert = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="custom-alert-container">
            <div className="custom-alert">
                <p className="custom-alert-message">{message}</p>
                <div className="custom-alert-buttons">
                    <button className="custom-alert-button" onClick={onConfirm}>Yes</button>
                    <button className="custom-alert-button" onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    );
};

export default CustomAlert;

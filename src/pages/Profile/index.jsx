import React, { useEffect } from 'react';
import { ROLES } from '../../constant/roles';
import { useNavigate } from 'react-router-dom';
import "./style.css"

const Profile = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const role = localStorage.getItem('role');
        if (!role || role === ROLES.GUEST) {
            navigate('/login');
            setTimeout(() => {
                alert('Hey Guest, sign in before!');
            }, 1000);
        }
    });

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className='profile'>
            <p className='note'>
                Under Development ...
                here well be  games related with this user and featuers depend on api updates Godwilling
            </p>
            <div className='back'>
                <button onClick={handleGoHome}>Back to Home</button>
            </div>
        </div>
    );
};
export default Profile;

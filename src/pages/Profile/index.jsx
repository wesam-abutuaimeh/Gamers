import React, { useEffect } from 'react';
import { ROLES } from '../../constants/roles';
import { useNavigate } from 'react-router-dom';
import "./style.css"

const Profile = () => {
    const navigate = useNavigate();

    const role = localStorage.getItem('role');
    const checkRoleAndNavigate = () => {
        if (!role || role === ROLES.GUEST) {
            navigate('/login');
            setTimeout(() => {
                alert('Hey Guest, sign in before!');
            }, 1000);
        }
    }

    useEffect(() => {
        checkRoleAndNavigate()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [role]);

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

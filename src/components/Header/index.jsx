import React from 'react'
import { PATHS } from '../../router/PATHS'
import { Link } from 'react-router-dom'
import "./style.css"

const Header = () => {
    return (
        <header className='header'>
            <Link to={PATHS.PROFILE}>
                <div className="user__info">
                    <p>Welcome back,</p>
                    <span>Jenny!</span>
                </div>
            </Link>
            <img src="/assets/avatar02.png" alt="avatar" className="avatar" />
        </header>
    )
}

export default Header


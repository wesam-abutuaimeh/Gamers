import React from 'react'
import "./style.css"

const Header = () => {
    return (
        <header className='header'>
            <div className='user__info'>
                <p>Welcome back,</p>
                <span>Jenny!</span>
            </div>
            <img src="/assets/avatar02.png" alt="avatar" className="avatar" />
        </header>
    )
}

export default Header


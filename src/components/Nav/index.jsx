import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { useThemeContext } from "../../contexts/ThemeContext";
import "./style.css"

const Nav = () => {
  const { toggleMode } = useThemeContext();
  const { logout } = useAuth();
  return (
    <aside>
      <nav>
        <div className='homepage__logo'>
          <Link to="/home"><img src="/assets/Game_two_logo.png" alt="Logo" className="homepage__logo" /></Link>
        </div>
        <div className='page__icons'>
          <Link to=""><img src="/assets/Like.png" alt="favorite" className="favorite" /></Link>
          <Link to=""><img src="/assets/Setting.png" alt="Setting" className="Setting" /></Link>
          <Link to=""><img src="/assets/Puzzle.png" alt="Puzzle" className="Puzzle" /></Link>
          <span className="logout__btn" onClick={logout}>
            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LogoutIcon"><path d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path></svg>
          </span>
        </div>
        <div className='mode__setting' >
          <div><img src="/assets/Moon.png" alt="Moon" className="Moon" onClick={toggleMode} /></div>
          <div><img src="/assets/Sun.png" alt="Sun" className="Sun" onClick={toggleMode} /></div>
        </div>
      </nav>
    </aside>)
}

export default Nav

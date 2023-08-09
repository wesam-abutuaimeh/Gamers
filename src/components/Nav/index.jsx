import React from 'react'
import { Link } from 'react-router-dom'
import { ROLES } from "../../constant/roles"
import { PATHS } from "../../router/PATHS"
import "./style.css"

const Nav = () => {
  return (
    <aside>
      <nav>
        <div className='homepage__logo'>
          <Link to="/home"><img src="/assets/Game_two_logo.png" alt="Logo" className="homepage__logo" /></Link>
        </div>
        <div className='page__icons'>
          {ROLES.USER ?
            <Link to={PATHS.SIGNUP}>
              <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LogoutIcon"><path d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path></svg>
            </Link>
            :
            <>
              <Link to=""><img src="/assets/Like.png" alt="favorite" className="favorite" /></Link>
              <Link to=""><img src="/assets/Setting.png" alt="Setting" className="Setting" /></Link>
              <Link to=""><img src="/assets/Puzzle.png" alt="Puzzle" className="Puzzle" /></Link>
            </>
          }
        </div>
        <div className='mode__setting' >
          <div><img src="/assets/Moon.png" alt="Moon" className="Moon" /></div>
          <div><img src="/assets/Sun.png" alt="Sun" className="Sun" /></div>
        </div>
      </nav>
    </aside>)
}

export default Nav

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PATHS } from '../../router/PATHS'
import { API_URL } from "../../config/api"
import { END_POINTS } from '../../constants/auth'
import useAPI from "../../hooks/useAPI"
import "./style.css"

const Header = () => {
    const { get, data } = useAPI(API_URL + END_POINTS.PROFILE);
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }

    useEffect(() => {
        get(config);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config.headers.Authorization])

    return (
        <header className="header">
            <div className="user__info">
                <p>Welcome back,</p>
                {data.name && <span>{data.name} !</span>}
            </div>
            <Link to={PATHS.PROFILE}>
                <img src="/assets/avatar02.png" alt="avatar" className="avatar" />
            </Link>
        </header>
    )
}

export default Header

import React from 'react'
import SectionHead from '../SectionHead'
import { LAST_PLAYED } from '../../mock/lastPlayedInfo'
import "./style.css"

const LastPlayed = ({ color }) => {
    return (
        <div>
            <SectionHead>Last Played</SectionHead>
            <div className='last__played__container'>
                {LAST_PLAYED.map((item) => {
                    return <div className='last__played' key={item.id}>
                        <img src={item.avatar} alt={item.content} />
                        <span>{item.content}</span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default LastPlayed

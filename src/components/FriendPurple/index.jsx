import React from 'react'
import SectionHead from '../SectionHead'
import "./style.css"

const PurpleFriendChat = ({ color }) => {
    return (
        <div>
            <SectionHead>friends</SectionHead>
            <img src='/assets/FRIENDS.png' alt='FRIENDS.png' className='friends_purple_chat' />
        </div >
    )
}

export default PurpleFriendChat

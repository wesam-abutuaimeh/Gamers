import React from 'react'
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import LastPlayed from '../../components/LastPlayed';
import RecentTrophy from '../../components/RecentTrophy';
import PurpleFriendChat from '../../components/FriendPurple';
import Slider from '../../components/Silder';
import "./style.css"

const HomePage = () => {
    document.title = 'Home'
    return (
        <div className='homepage'>
            <Nav />
            <main>
                <Header />
                <Slider color='#d8d8d8' />
                <div className='statistics__container'>
                    <LastPlayed color='#d8d8d8' />
                    <RecentTrophy color='#d8d8d8' />
                    <PurpleFriendChat color='#d8d8d8' />
                </div>
            </main>
        </div >
    )
}

export default HomePage

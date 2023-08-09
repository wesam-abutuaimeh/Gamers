import React from 'react'
import SectionHead from '../SectionHead';
import "./style.css";

const RecentTrophy = ({ color }) => {
    return (
        <div>
            <SectionHead>most recent trophy</SectionHead>
            <div className='trophy'>
                <img src="/assets/Rectangle 11.png" alt="img" />
                <div className='info'>
                    <span>assassin's creed odyssey</span>
                    <span>last played: 34 hours ago</span>
                </div>
                <div className='absolute__imgs'>
                    <img src="/assets/Ellipse_1.png" alt="Ellipse_1.png" />
                    <img src="/assets/png-clipart-disgaea-3-playstation-3-playstation-4-xbox-360-trophy-golden-cup-game-medal 1.png" alt="Ellipse_2.png" />
                </div>
            </div>
        </div>
    )
}

export default RecentTrophy;

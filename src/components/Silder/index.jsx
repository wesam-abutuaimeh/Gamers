import React from 'react'
import SectionHead from '../SectionHead'
import SlideCard from '../SlideCard'
import { GAME_CARDS_DATA } from "../../mock/GameCard";
import "./style.css"

const Slider = ({ color }) => {
    return (
        <section>
            <SectionHead>NEW GAMES</SectionHead>
            <div className='cards__container'>
                {GAME_CARDS_DATA.map((item) => {
                    return <SlideCard key={item.id} background={item.background} description={item.description} hoverdImg={item.hoverdImg} />
                })}
            </div >
        </section>
    )
}
export default Slider

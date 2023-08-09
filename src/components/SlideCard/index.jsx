import React from 'react';
import "./style.css";

const SlideCard = ({ background, description, hoverdImg }) => {
    return <div className='card'   >
        <img src={background} alt={description} className='card__bg' />
        <p className='card__description'>{description}</p>
        <img src={hoverdImg} alt={description} className='hoverd__img' />
    </div>
}

export default SlideCard

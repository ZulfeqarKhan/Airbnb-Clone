import React from 'react';
import './Card.css';

function Card({ src, title }) {
    return (
        <div className='card'>
            <img src={src} alt='' />
            <h2>{title}</h2>
       </div>
    );
}

export default Card;

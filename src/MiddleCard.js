import React from 'react';
import './MiddleCard.css';

function MiddleCard({ src, title }) {
    return (
      <div className='middleCard'> 
          <img src={src} alt='' />
          <h2>{title}</h2>                
        </div>
    );
}

export default MiddleCard;

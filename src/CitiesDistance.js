import React from 'react';
import './CitiesDistance.css';

function CitiesDistance({ src, title, dis }) {
    return (
        <div className='citiesDistance'>
            <img src={src} alt='' />
          <div className="citiesDistance__info">
              <div className="citiesDistance__infoTop">
                 <h4>{title}</h4> 
              </div>
              <div className="citiesDistance__infoBottom">
                 <p>{dis}</p>
              </div> 
          </div>      
     </div>
    );
}

export default CitiesDistance;

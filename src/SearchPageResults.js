import React from 'react';
import './SearchPageResults.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function SearchPageResults({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
 }) {
 return (
   <div className='searchPageResults'>
       <img src={img} alt='' />
         <FavoriteBorderIcon className='searchPageResults__heart' />
        <div className="searchPageResults__info">
          <div className="searchPageResults__infoTop">
             <p>{location}</p>
             <h3>{title}</h3> 
             <p>________</p>
             <p>{description}</p>
           </div> 
           <div className="searchPageResults__infoBottom">
             <div className="searchPageResults__stars">
                 <StarIcon className='searchPageResults__star' />
                 <p>
                    <strong>{star}</strong>  
                 </p>
             </div>
             <div className="searchPageResults__price">
                 <h2>{price}</h2>
                  <p>{total}</p>
             </div>
          </div>
       </div>
    </div>
   );
}

export default SearchPageResults;

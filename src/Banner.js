import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import Search from './Search';
import { useHistory } from 'react-router-dom';

function Banner() {
   const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
  return (
    <div className='banner'>
           <div className='banner__search'>
             {showSearch && <Search />}   
             <Button  onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' >
                {showSearch ? 'Hide' : 'Search Dates'}
             </Button>
           </div>
           <div className='banner__info'>
              <h1>Go</h1>
              <h1>Near</h1>
              <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby Stays</Button>
           </div>  
    </div>
  );
}

export default Banner;
 
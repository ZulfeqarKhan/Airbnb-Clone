import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";

 
function Header() {

    return (
       <div className='header'>
           <Link to='/'>
             <img
               className='header__icon'  
               src="https://www.ana.co.jp/japan-travel-planner/authentic-oita/images/footer_img_3.jpg" alt="" 
              />
           </Link>
          
           <div className='header__center'>
             <input type='text' placeholder='Start your Search' />
             <SearchIcon className='header__centerSearch' />  
           </div> 
         
            <div className='header__right'>
               <p>Become a host</p>
               <LanguageIcon />
               <ExpandMoreIcon />
               <Avatar className='header__rightUser' />
             </div> 
       </div>
    );
}

export default Header;


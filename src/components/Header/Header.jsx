import React from 'react'

import './Header.css'; 


import Cloud from '../../../src/assets/img/PngItem_750829.png';
import Button from '../Buton/Button';


function Header() {
    return (
        <div className='welcome'>
        
        <h1 className="heading-1">
        <span className="heading-1main">I love you Valentina</span>
        </h1>
        <img className='cloud' src={Cloud} alt="cloud"/>
        <Button />
        </div>
    )
}

export default Header;

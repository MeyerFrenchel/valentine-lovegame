import React from 'react';
import {Link} from 'react-router-dom';
import './Button3.css';

const Button = () => {
    return (
        <div>        
            
        <Link to='/final-game'>
        <button className="btn btn-3">Final Challenge!</button>
        </Link>
        
        </div>
    )
}

export default Button;

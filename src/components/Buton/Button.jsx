import React from 'react';
import {Link} from 'react-router-dom';
import './Button.css';

const Button = () => {
    return (
        <div>        
            
        <Link to='/quiz-game'>
        <button className="btn btn-1">Lets's play!</button>
        </Link>
        
        </div>
    )
}

export default Button;

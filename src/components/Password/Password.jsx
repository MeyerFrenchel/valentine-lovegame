import React from 'react';
import './Password.css';

function Password(props){
    return (
    <div className='password-phase'>
        <p className='password-text el'>Ce inseamna aceasta parola?</p>
        <a className='password-link el' href="https://convert.town/ascii-to-text">Click aici!</a>
        <form onSubmit={props.onSubmit}>
        <input className='pass el' type='password' value={props.password} onChange={props.onChange}/>
        <input className='submit el' type='submit' value='submit'/>
        </form>
    </div>);
    }

    export default Password;
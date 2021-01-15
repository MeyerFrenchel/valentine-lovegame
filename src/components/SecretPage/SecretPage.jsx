import React from 'react';


import FinalQuiz from '../../components/FinalQuiz/FinalQuiz';
import finalQuizData from '../../finalQuizData';
import "./SecretPage.css";
function SecretPage(props){

    return(
        <div className='secret-page'>
            <p className='congrats'>Felicitari Alina! Ai trecut la nivelul urmator!<span className='sign'>&#10084;</span> Te iubesc! <span className='sign'>&#10084;</span> </p>
            <FinalQuiz data={finalQuizData}/>
            

            
        </div>
    );
    }

    export default SecretPage;
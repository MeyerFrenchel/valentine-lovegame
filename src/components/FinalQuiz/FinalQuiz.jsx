import React, { useState } from 'react';

import Congrats from '../../assets/img/Congratulations .png';
import ToggleQuiz from '../../components/ToggleQuiz/toggleQuiz';
import Button2 from '../../components/Buton/Button2';
import './FinalQuiz.css'
import Fjord from '../../assets/img/fjord.jpg';
import Meyer from '../../assets/img/meyer.jpg';
import Alina from '../../assets/img/alina.jpg';



export default function FinalQuiz(props) {
	
  
	const [data] =  useState(props.data) ;
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < data.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='final-app'>
			{score > 3 && showScore ? (
				<div className='score-section2'>
                    <p>You scored {score} out of {data.length}</p> 
					<img className='felicitari2' src={Congrats} alt="felicitari"/>
					<p>Nu ai inteles ultima intrebare?</p>
					<p>Ea reprezinta locul in care vreau sa-ti jur iubire eterna! <br/> <span className='fjord'>Fjordurile</span> <span className='sweden'>suedeze</span></p>
					<div className='final-pics'>
					<img className='tu' src= {Alina} alt="tu"/>
					
					<img className='fjord-pic' src= {Fjord} alt=""/>
					
					<img className='eu' src={Meyer} alt="eu"/>
					</div>
					
					
				</div>
			) : (
				<>
					<div className='question-section2'>
						<div className='question-count2'>
							<span>Question {currentQuestion + 1}</span>/{data.length}
						</div>
						<div className='question-text2'>{data[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section2'>
						{data[currentQuestion].answerOptions.map((answerOption) => (
							<button className='variante' style={{
								backgroundImage:`url(${answerOption.pic})`
								
                            }} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>					
                            <p className='variante-text'>{answerOption.answerText}</p>
							</button>
							
						))}
					</div>
				</>
			)}
		</div>
	);
	
}


import React, { useState } from 'react';

import Congrats from '../../assets/img/Congratulations .png';
import ToggleQuiz from '../../components/ToggleQuiz/toggleQuiz';
import Button2 from '../../components/Buton/Button2';
import './QuizGame.css'
import { SliderData } from '../../components/ImageSlider/SliderData';




export default function QuizGame(props) {
	
  
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
		<div className='app'>
			{score > 3 && showScore ? (
				<div className='score-section'>
                    <p>You scored {score} out of {data.length}</p> 
					<img className='felicitari' src={Congrats} alt="felicitari"/>
					
					<ToggleQuiz data={SliderData} />
					<Button2 />
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{data.length}
						</div>
						<div className='question-text'>{data[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{data[currentQuestion].answerOptions.map((answerOption) => (
							<button style={{
								backgroundImage:`url(${answerOption.pic})`
								
							}} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>					{answerOption.answerText}
							
							</button>
							
						))}
					</div>
				</>
			)}
		</div>
	);
	
}


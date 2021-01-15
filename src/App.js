import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import QuizGame from './pages/QuizGame/QuizGame';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Buton/Button';

import './App.css';
import FinalChallenge from './pages/FinalChallenge/FinalChallenge';
import QuizData from './quizData';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Route exact path="/" component={Header} />
          <Route path="/quiz-game" component={() => <QuizGame data={QuizData} />} />
          <Route path="/final-game" component={FinalChallenge}/>
          
        
      </div>
    </Router>
    
  );
}

export default App;

import React, {useState} from 'react';
import CardDisplay from './components/CardDisplay';
import AppCSS from './styles/App.css';
import Output from './components/Output';
import Score from './components/Score';
import DancingBird from './images/dancingbird.gif';

const App = () => {
    const [score, setScore] = useState(0);
    const increaseScore = () => {
        setScore(score + 1);
        checkWin();
    }
    const resetScore = () => {
        setScore(0);
    }

    const checkWin = () => {
        if(score === 12) {
            message('win');
        }
    }

    const [output, setOutput] = useState('Click bird to begin!');
    const message = type => {
        if(type === 'restart') {
            setOutput('You lose :( Click bird to try again!');
        } else if(type === 'success') {
            setOutput('🐦 Wow 😲 you got a birdie! 🐦')
        } else if(type === 'win') {
            setOutput('you win!! you really know your birds!');
        }
    }
    const epicBird = <img className='epicbird' src={DancingBird}></img>
    return (
        <div className='main'>
            <div className='header'>{epicBird}BIRD QUIZ{epicBird}</div>
            <h3>remember the birds!</h3>
            <Score score={score}/>
            <Output output={output} />
            <CardDisplay increaseScore={increaseScore} 
            resetScore={resetScore}
            message={message}/>
        </div>
    )
}

export default App;

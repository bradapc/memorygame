import React from 'react';
import Egg from '../images/egg.png';

const Score = (props) => {
    const renderEggs = (score) => {
        const eggsArray = [];
        for(let i = 0; i < score; i++) {
            eggsArray.push(<img key={i} alt='egg' className='egg' src={Egg}></img>);
        }
        if(score === 0) {
            return (<div className='empty'></div>);
        } else {
            return (<div>{eggsArray.map(item => item)}</div>);
        }
    }

    return (
        <div>
            <h3>Score</h3>
            {renderEggs(props.score)}
        </div>
    );
}

export default Score;
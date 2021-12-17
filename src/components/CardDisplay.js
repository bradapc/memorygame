import React, {useState} from 'react';
import MemoryCard from './MemoryCard';

const CardDisplay = (props) => {
    const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const [selectedCards, setSelectedCards] = useState([]);
    const components = [];
    const handleClick = (id) => {
        if(!selectedCards.length){
            props.increaseScore();
            props.message('success');
        }
        if(selectedCards.some(element => element === id)) {
            handleLoss();
        } else {
            props.increaseScore();
            setSelectedCards(selectedCards => [...selectedCards, id]);
        }
    }
    const generateCard = () => {
        const usedNums = [];
        for(let i = 0; i < cards.length; i++) {
            let randomNum;
            do {
            randomNum = Math.floor(Math.random() * (cards.length));
            } while(usedNums.some(element => element === randomNum))
            components.push(<MemoryCard id={cards[randomNum]} handleClick={handleClick}/>);
            usedNums.push(randomNum);
        }
        return(
            <div className='card-holder'>
                {components.map((comp, i) => <div key={i}>{comp}</div>)}
            </div>
        );
    }
    const handleLoss = () => {
        props.message('restart');
        setSelectedCards([]);
        props.resetScore();
    }
    return (
        <div>
            {generateCard()}
        </div>
    )
}

export default CardDisplay;
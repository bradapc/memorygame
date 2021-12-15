import React, {useState} from 'react';
import MemoryCard from './MemoryCard';

const CardDisplay = (props) => {
    const cards = [0, 1, 2, 3, 4, 5];
    const [selectedCards, setSelectedCards] = useState([]);
    const components = [];
    const handleClick = (id) => {
        for(let i = 0; i <  selectedCards.length; i++) {
            if(selectedCards[i] === id) {
                alert('lose');
            }
        }
        setSelectedCards(selectedCards => [...selectedCards, id]);
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
    return (
        <div className>
            {generateCard()}
        </div>
    )
}

export default CardDisplay;
import React, {useState} from 'react';
import MemoryCard from './MemoryCard';

const CardDisplay = (props) => {
    const cards = [0, 1, 2, 3, 4, 5];
    const [selectedCards, setSelectedCards] = useState([]);
    const handleClick = (id) => {
        for(let i = 0; i <  selectedCards.length; i++) {
            if(selectedCards[i] === id) {
                alert('lose');
            }
        }
        setSelectedCards(selectedCards => [...selectedCards, id]);
    }
    return (
        <div className='card-holder'>
            <MemoryCard id={cards[0]} handleClick={handleClick}/>
            <MemoryCard id={cards[1]} handleClick={handleClick}/>
            <MemoryCard id={cards[2]} handleClick={handleClick}/>
        </div>
    )
}

export default CardDisplay;
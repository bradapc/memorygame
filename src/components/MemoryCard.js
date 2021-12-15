import React from 'react';

const MemoryCard = props => {
    return (
        <div onClick={() => (props.handleClick(props.id))}>
            <div className='picture-frame'>

                <h1>{props.id}</h1>
            </div>
        </div>
    );
}

export default MemoryCard;
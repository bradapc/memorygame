import React from 'react';
import bluebird from '../images/bluebird.jpg';
import cardinal from '../images/cardinal.jpg';
import dove from '../images/dove.jpg';
import geese from '../images/geese.jpg';
import goldfinch from '../images/goldfinch.jpg';
import heron from '../images/heron.jpg';
import hummingbird from '../images/hummingbird.jpg';
import pigeon from '../images/pigeon.jpg';
import robin from '../images/robin.jpg';
import sparrow from '../images/sparrow.jpg';
import warbler from '../images/warbler.jpg';
import woodpecker from '../images/woodpecker.jpg';

const MemoryCard = props => {
    const images = [{name: 'Bluebird', src: bluebird},
    {name: 'Cardinal', src: cardinal},
    {name: 'Dove', src: dove},
    {name: 'Goose', src: geese},
    {name: 'Goldfinch', src: goldfinch},
    {name: 'Heron', src: heron},
    {name: 'Hummingbird', src: hummingbird},
    {name: 'Pigeon', src: pigeon},
    {name: 'Robin', src: robin},
    {name: 'Sparrow', src: sparrow},
    {name: 'Warbler', src: warbler},
    {name: 'Woodpecker', src: woodpecker}]
    return (
        <div onClick={() => (props.handleClick(props.id))}>
            <div className='picture-frame'>
                <img className='picture' src={images[props.id].src}></img>
                <h1>{images[props.id].name}</h1>
            </div>
        </div>
    );
}

export default MemoryCard;
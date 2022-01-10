import React from 'react';
import './Opus.scss';


const Opus = ({opusName, opusTracks}) => {
    return(
        <ul className='opus'>
            <p>{opusName}</p>
            {opusTracks.map((el, i) => <li key={i}>{el}</li>)}
        </ul>
    )
}


export default Opus;
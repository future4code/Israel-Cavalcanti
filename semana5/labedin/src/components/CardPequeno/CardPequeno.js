import React from 'react';
import './CardPequeno.css'

function CardPequeno(props){
    return (
        <div className = "smallcard-container">
            <img src={ props.icon } />
            <div>
                <h4>{ props.title }</h4>
                <p>{ props.email }</p>
                <p>{ props.addres }</p>
            </div>
        </div>
    )
}

export default CardPequeno;
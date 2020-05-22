import React from 'react';
import './CardGrande.css'

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div className="infos"> 
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
                <p>{ props.ano }</p>
            </div>
        </div>
    )
}

export default CardGrande;
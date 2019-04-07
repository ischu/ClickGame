import React from 'react';
import './style.css'

function ImgCard(props) {
        return (
            <div id={props.id} className={props.gameOver?"card fluid bg-success m-1 p-1": (props.correct?"card fluid bg-info m-1 p-1":"card fluid bg-danger m-1 p-1")} onClick={props.shuffle}>
                <img id={props.id} className="card-img" src={props.url} alt={props.name}/>
            </div>
        )
    }

export default ImgCard
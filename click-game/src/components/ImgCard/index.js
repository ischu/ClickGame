import React from 'react';
import './style.css'

function ImgCard(props) {
        return (
            // onClick={()=>props.shuffleCards()}
            <div id={props.id} className="card bg-danger m-3" onClick={props.shuffle}>
                <img id={props.id} className="card-img-top" src={props.url} alt={props.name}/>
            </div>
        )
    }

export default ImgCard
import React from 'react';
import './style.css'

function ImgCard(props) {
        return (
            // onClick={()=>props.shuffleCards()}
            <div id={props.id} className="card bg-danger">
                <img className="card-img-top" src={props.url} alt={props.name}/>
            </div>
        )
    }

export default ImgCard
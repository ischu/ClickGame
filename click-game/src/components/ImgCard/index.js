import React from 'react';
import './style.css'

function ImgCard(props) {
        return (
            <div id={props.id} className="card bg-danger my-3 p-0" onClick={props.shuffle}>
                <img id={props.id} className="card-img-top img-fluid" src={props.url} alt={props.name}/>
            </div>
        )
    }

export default ImgCard
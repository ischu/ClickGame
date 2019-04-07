import React from 'react';
import "./style.css"

function Container(props) {
        return (
            <div className="imgbox container d-flex bg-primary">
                {props.children}
            </div>
        )
} 

export default Container
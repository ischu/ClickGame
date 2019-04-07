import React from 'react';
import "./style.css"

function Container(props) {
        return (
            <div className="imgbox container-fluid d-flex">
                {props.children}
            </div>
        )
} 

export default Container
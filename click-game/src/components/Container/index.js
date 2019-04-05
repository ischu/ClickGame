import React from 'react';

function Container(props) {
        return (
            <div className=" container d-flex bg-primary">
                {props.children}
            </div>
        )
} 

export default Container
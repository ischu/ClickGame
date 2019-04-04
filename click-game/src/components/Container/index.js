import React from 'react';

function Container(props) {
        return (
            <div>
            <p>Hello</p>
            <div className="bg-primary">
                {props.children}
            </div>
            </div>
        )
} 

export default Container
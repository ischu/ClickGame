import React from 'react';
import './style.css'

function Scoreboard(props) {
    // state- correct/incorrect, score, & high score
        return (
        <div>
            <div>
                Incorrect/Correct ternery
            </div>
            <div>
                Score: {props.score}
            </div>
            <div>
                High: {props.highScore}
            </div>
        </div>
        )
}

export default Scoreboard
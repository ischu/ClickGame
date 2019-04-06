import React from 'react';
import './style.css'

function Scoreboard(props) {
    // state- correct/incorrect, score, & high score
    return (
        <div className="d-flex">
            <span id="correctness">
                Incorrect/Correct ternery
            </span>
            <span id="scoreCounters">
                Score: {props.score} High Score: {props.highScore}
            </span>
        </div>
    )
}

export default Scoreboard
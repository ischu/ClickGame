import React from 'react';
import './style.css'

function Scoreboard(props) {
    // state- correct/incorrect, score, & high score
    return (
        <div id="scoreboard" className="d-flex m-0 bg-info">
            <span id="banner">
                {props.begin || (props.gameOver || (props.correct?"Correct":"Incorrect-You Lose"))}
            </span>
            <hr/>
            <span id="scoreCounters">
                Score: {props.score} High Score: {props.highScore}
            </span>
        </div>
    )
}

export default Scoreboard
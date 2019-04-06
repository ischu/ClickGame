import React from 'react';
import './style.css'

function Scoreboard(props) {
    // state- correct/incorrect, score, & high score
    return (
        <div className="d-flex mx-3">
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
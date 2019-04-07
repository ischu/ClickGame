import React from 'react';
import './style.css'

function Scoreboard(props) {
    // state- correct/incorrect, score, & high score
    return (
        <div id="scoreboard" className={props.gameOver ? "bg-success" : (props.correct ? "bg-info" : "bg-danger")}>
            <div id="scoreboard" className="d-flex m-0">
                <p id="banner">
                    {props.begin || (props.gameOver ? "You Win!" : (props.correct ? "Correct" : "Incorrect-You Lose"))}
                </p>
                <hr />
                <p id="scoreCounters" className="text-dark d-flex">
                    <span>Score: {props.score}</span> <span>High Score: {props.highScore}</span>
                </p>
            </div>
        </div>
    )
}

export default Scoreboard
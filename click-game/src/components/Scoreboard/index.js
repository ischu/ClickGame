import React, { Component } from 'react';
import './style.css'

class Scoreboard extends Component {
    // state- correct/incorrect, score, & high score
    render() {
        return (
        <div>
            <div>
                Incorrect/Correct ternery
            </div>
            <div>
                Score count
            </div>
            <div>
                High Score count
            </div>
        </div>
        )
    }
}

export default Scoreboard
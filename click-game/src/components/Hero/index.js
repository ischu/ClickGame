import React, { Component } from 'react';
import './style.css'

class Hero extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid m-0">
                <div id="spacer">Don't Look at Me</div>
                <div class="container">
                    <h1 class="display-3">Bird-Brain Memory Game</h1>
                    <p class="display-4">Click Each Image Once to Win!</p>
                </div>
            </div>
        )
    }
}

export default Hero